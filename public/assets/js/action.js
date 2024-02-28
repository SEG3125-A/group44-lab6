// jQuery that will "listen" to the html survey.html

/**
 * By using this jQuery code, you enhance the form submission process:
 * 
 * The form is submitted asynchronously, preventing a full page reload.
 * The appearance and behavior of the submit button change upon successful submission, providing visual feedback to the user.
 * The user interface is updated dynamically without requiring a page refresh.
 */


// $(document).ready(function(){ ... });: This ensures that the code inside the function runs only after the DOM has fully loaded
$(document).ready(function () {
  processSurvey();
});


/**
 * This function is used to process the survey submission
 */
function processSurvey() {
  // Add an event listener for the <form> element's "submit" event.
  $('form').on('submit', function () {

    // var item = $('form input');
    // console.log(item.serializeArray());

    // Make an asynchronous POST request to the server using Ajax.
    $.ajax({
      type: 'POST',
      url: '/survey', // Indicate the POST request will be sent to the server's '/survey' route.
      data: $(this).serializeArray(), // Serializes the form data into a format that can be sent in the POST request. This is a common way to send form data asynchronously.

      // When the request is successful
      success: function (data) {
        // do something with the data via front-end framework
        // Make the submit button red, disabled and saying Thank you (with the ID 'submitButton')
        $("#submitButton").css("background-color", "green");
        $("#submitButton").css("color", "black"); // font color
        $("#submitButton").prop("disabled", "true");
        $("#submitButton").text("Thank you!");
      }
    });

    /**
     * The return false; statement prevents the form from being submitted in the traditional way, 
     * ensuring that the asynchronous Ajax submission is the only action taken. 
     */
    return false;
  });
}