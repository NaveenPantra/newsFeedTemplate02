function eventListeners() {
  // Event listeners
    // return nodelist
  var button = document.querySelectorAll('.btn');
    // setting eventlistener on each individual element
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', updateData);
  }
}


function updateData(event) {

  // Getting count form the sibling element
  var count = parseInt(event.target.nextElementSibling.textContent);

  // Getting It's class
  var siblingClass = String(event.target.nextElementSibling.className);
  count++;

  // updting the content the respective clicked elemens in the table and button beside
  var updatingClass = document.querySelectorAll('.' + siblingClass);
  for (var i = 0; i < updatingClass.length; i++) {
    updatingClass[i].textContent = count;
  }
}

eventListeners();
