// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  // Eat It!/Try Again
  $(".eat-burger").on("click", function (event) {
    let id = $(this).data("id"); // burger id
    let status = $(this).data("status"); // devoured status

    let newStatus = { // setting new status
      devoured: !!!status // equal to opposite of current status
    }

    // setting new status in DB
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newStatus
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    )
  });

  // Add Burger
  $(".brgr-btn").on("click", function (event) {
    event.preventDefault();

    // newBurger object with name defined
    var newBurger = {
      name: $("#burgerId").val().trim(), // getting value and triming of extra spaces
    };

    // posting to db
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Delete Burger
  $(".delete-burger").on("click", function (event) {

    // Getting id of burger clicked
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});