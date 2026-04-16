function getFormvalue() {
  // Get values from inputs
  let firstName = document.querySelector('input[name="fname"]').value.trim();
  let lastName = document.querySelector('input[name="lname"]').value.trim();

  // Combine full name
  let fullName = firstName + " " + lastName;

  // Show alert
  alert(fullName);

  // Prevent form reload (important for Cypress)
  return false;
}