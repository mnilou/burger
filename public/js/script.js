// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".change-devoured").on("click", function () {
      const id = $(this).data("id");
      const newDevoured = $(this).data("newdevoured");
  
      const newDevouredState = { value: newDevoured };
  
      // Send the PUT request.
      $.ajax(`/api/burgers/${id}/devoured`, {
        type: "PUT",
        // Convert object to JSON
        data: JSON.stringify(newDevouredState),
        // Tell the server that this request contains JSON
        contentType: "application/json; charset=UTF-8",
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat,
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    // Add your code to delete a cat when a ".delete-cat" button is clicked.
    // ... CODE HERE ...
    
  });
  