document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown toggle element
    var dropdownToggle = document.querySelector('.dropdown-toggle');
  
    // Add click event listener to the dropdown toggle
    dropdownToggle.addEventListener('click', function (event) {
        // Prevent default anchor behavior
        event.preventDefault();
        
        // Toggle the dropdown menu
        var dropdownMenu = this.nextElementSibling; // Get the next sibling (the dropdown menu)
        dropdownMenu.classList.toggle('show'); // Toggle the 'show' class
  
        // Close the dropdown if clicked outside
        document.addEventListener('click', function (e) {
            if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('show');
            }
        });
    });
  });  