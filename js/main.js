// Step 1: select the element the user will click on to make this menu show/hide. In this case it's the toggle-icon and since we are grabbing it by it's classname we need to include the period 
let clickButton = document.querySelector('.toggle-btn');


// Step 2: add a click event to that icon
clickButton.addEventListener('click', () => {
    // when that icon is clicked we are going to grab the nav element (or whatever is showing/hiding) and add or remove that special class we created in the CSS
    document.querySelector('nav').classList.toggle('show-nav');
});

// Instructor notes: 
// When grabbing an element with document.querySelector simply grab that element by its tag (nav, ul, li), but if you are grabbing an elment by a classname you need to specify that with a period before it.

// However, when using the classList method it will be expecting a classname and we don't clarify that with a period

// You can also demonstrate .classList.add('show-nav') and .classList.remove('show-nav') before bring in .classList.toggle('show-nav')

// Open the inspector tool and find the nav element. Click on the toggle icon and watch the .show-nav class get added or removed from the DOM. This method does not add inline styling to the markup