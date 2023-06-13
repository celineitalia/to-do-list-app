function newItem() {
  //add new item to list of items
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  //cross out item from list of items
  function crossOut() {
    li.toggleClass("strike");
  }
  li.on("dblclick", crossOut);

  //add delete button "x"
  let crossOutButton = $("<crossOutButton>X</crossOutButton>");
  li.append(crossOutButton);
  crossOutButton.on("click", deleteListItem);

  //add class delete (display: none) from css
  function deleteListItem() {
    li.addClass("delete");
  }

  //reordering items
  $("#list").sortable();
}
