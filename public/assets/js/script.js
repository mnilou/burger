// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(() => {
  $('.change-devoured').on('click', function () {
    const id = $(this).data('id');
    const newDevoured = $(this).data('newdevoured');

    const newDevouredState = {value: newDevoured};

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {
      type: 'PUT',
      // Convert object to JSON
      data: JSON.stringify(newDevouredState),
      // Tell the server that this request contains JSON
      contentType: 'application/json; charset=UTF-8',
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.create-form').on('submit', (event) => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger").val().trim(),
         };  

    // Send the POST request.
    $.ajax(`/api/burgers/${id}`, {
      type: 'POST',
      data: newBurger,
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });
  // Send the DELETE request.
//   $.ajax(`/api/burgers/${id}`, {
//     type: 'DELETE',
//   }).then(() => {
//     console.log('deleted burger', id);
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });

// $(".delete-burger").on("click", () => {
//   const id = $(this).data("id");

//   // Send the DELETE request.
//   $.ajax(`/api/burgers/${id}`, {
//     type: "DELETE",
//     // data: 
//   }).then(() => {
//     // Reload the page to get the updated list
//     location.reload();
//   });
// });
});