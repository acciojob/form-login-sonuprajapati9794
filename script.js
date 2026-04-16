function getFormvalue(event) {
      // Prevent page reload
      event.preventDefault();

      // Access form using document.forms
      let form = document.forms["form1"];

      // Get values and trim spaces
      let firstName = form["fname"].value.trim();
      let lastName = form["lname"].value.trim();

      // Handle empty fields
      if (firstName === "" || lastName === "") {
        alert("Please enter both First Name and Last Name");
        return;
      }

      // Create full name
      let fullName = firstName + " " + lastName;

      // Show alert
      alert(fullName);
    }

    // Attach event listener (best practice)
    document.getElementById("form1").addEventListener("submit", getFormvalue);
 