document.addEventListener("DOMContentLoaded", function() {
    var rows = document.getElementsByTagName("tr");
    var additionalContentContainer = document.getElementById("additionalContentContainer");

    for (var i = 0; i < rows.length; i++) {
      rows[i].addEventListener("click", function() {
        // Get the additional info from data attribute of the clicked row
        var additionalInfo = this.dataset.additionalInfo;

        // Update the additional content container with the new additional info
        additionalContentContainer.innerHTML = "Additional Information: " + additionalInfo;
        additionalContentContainer.classList.add("active");
      });
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Function to add hover effect
    function addHoverEffect() {
      var rows = document.getElementsByTagName("tr");
      for (var i = 0; i < rows.length; i++) {
        rows[i].addEventListener("mouseover", function() {
          this.style.backgroundColor = "lightgray";
        });
        rows[i].addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
      }
    }

    // Function to add click effect
    function addClickEffect() {
      var rows = document.getElementsByTagName("tr");
      for (var i = 0; i < rows.length; i++) {
        rows[i].addEventListener("click", function() {
          this.style.backgroundColor = "darkgray";
        });
      }
    }

    // Call functions to add effects
    addHoverEffect();
    addClickEffect();
  });