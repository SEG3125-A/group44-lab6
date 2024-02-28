// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');
var path = require('path');

// read the data file
function readData(fileName) {
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// read the data file
function writeData(info, fileName) {
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

// update the data files
// use "name" to be equal to age, or comment or rate... to match with the file names
// assume we always just add 1 to a single item
// name => key, value => value  (In HTML form, each input field have a name attribute)
function combineCounts(name, value) {
    // console.log(value);

    info = readData(name);

    // If the item is not in the list (found = 0)
    // If the item is in the list (found = 1)
    var found = 0;

    for (var i = 0; i < info.length; i++) {
        if (info[i][name] === value) {
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }

    if (found === 0) {
        info.push({ [name]: value, count: 1 });
    }
    writeData(info, name);
}

// This is a controler
module.exports = function (app) {

    /**
     * when a user goes to localhost:/3000/analysis
     * serve a template (ejs file) which will include the data from the data files
     */
    app.get('/analysis', function (req, res) {
        var country_or_region = readData("country_or_region");
        var age = readData("age");
        var mode = readData("mode");
        var feature = readData("feature");
        var rate = readData("rate");
        var comment = readData("comment");

        res.render('showResults', { results: [country_or_region, age, mode, feature, rate, comment] });
        console.log([country_or_region, age, mode, feature, rate, comment]);
    });

    /**
     * When a user goes to localhost:3000/survey
     * serve a static html (the survey itself to fill in)
     */
    app.get('/survey', function (req, res) {
        const filePath = path.resolve(__dirname, '..', '..', 'views', 'survey.html')
        res.sendFile(filePath);
    });

    /**
     * When a user click "submit" button in localhost:3000/survey,
     * the action.js code will POST, and what is sent in the POST
     * will be recuperated here, parsed and used to update the data files
     */
    app.post('/survey', urlencodedParser, function (req, res) {
        console.log(req.body);
        var json = req.body

        for (var key in json) {
            console.log(key + ": " + json[key]);

            // in the case of features, the user might check more than one
            if ((key === "feature") && (json[key].length > 2)) {
                for (var item in json[key]) {
                    combineCounts(key, json[key][item]);
                }
            }
            else {
                combineCounts(key, json[key]);
            }
        }

        // This line is responsible for sending the 'niceSurvey.html' file as a response to the client after processing the submitted data from the POST request.
        const filePath = path.resolve(__dirname, '..', '..', 'views', 'survey.html')
        res.sendFile(filePath);
    })
}