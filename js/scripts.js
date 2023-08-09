window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
      event.preventDefault();
      const userAge = parseInt(document.querySelector("input#age").value);
      const userHeight = parseInt(document.querySelector("input#height").value);
      
      if (!userAge || !userHeight) {
          document.getElementById("error-message").removeAttribute("class");
      } else {
        if (userAge <= 25 || userHeight >= 72) {
            document.getElementById("chewy").removeAttribute("class");
        }
        else if (userAge > 25 && userAge < 50 || userHeight < 72 && userHeight > 80) { 
        document.getElementById("yoda").removeAttribute("class");
        }
        else {
        document.getElementById("r2").removeAttribute("class");
        }
      }
  }
}

