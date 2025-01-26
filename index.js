// Lesson 1: Introduction to the DOM
// Function to display a welcome message with the current date
const welcomeMessage = () => {
    const today = new Date().toDateString(); // Get the current date as a readable string
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`; // Update the welcome message in the DOM
};
welcomeMessage(); // Call the function to display the message

// Lesson 2: Selecting and Manipulating Elements
// Function to add a workout to the workout list and prevent duplicates
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value; // Get the value from the workout input field
    const workoutList = document.querySelector('#workoutList'); // Get the workout list element

    // Check if the workout already exists in the list
    let values = workoutList.children; // Get all existing workout list items
    for (let workout = 0; workout < values.length; workout++) {
        if (values[workout].textContent === workoutInput) { // Check for duplicate workouts
            alert('Workout Already Exists ⚠️'); // Alert the user about the duplicate
            return; // Stop the function
        }
    }

    const newWorkout = document.createElement('li'); // Create a new list item
    newWorkout.textContent = workoutInput; // Set the text content to the input value
    workoutList.appendChild(newWorkout); // Append the new workout to the list
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine); // Add event listener to the workout submit button

// Lesson 3: Creating and Removing Elements
// Function to add a new goal to the goal list and prevent duplicates
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value; // Get the value from the goal input field
    const goalList = document.querySelector('#goalList'); // Get the goal list element

    let values = goalList.children; // Get all existing goal list items
    for (let goal = 0; goal < values.length; goal++) {
        if (values[goal].textContent === goalInput) { // Check for duplicate goals
            alert('Goal Already Exists ⚠️'); // Alert the user about the duplicate
            return; // Stop the function
        }
    }

    const newGoal = document.createElement('li'); // Create a new list item
    newGoal.textContent = goalInput; // Set the text content to the input value
    goalList.appendChild(newGoal); // Append the new goal to the list
};

document.querySelector('#submitGoal').addEventListener('click', addNewGoal); // Add event listener to the goal submit button

// Lesson 4: Event Handling
// Variables and functions to track and update water intake
let waterIntake = 0; // Initialize water intake to 0
const updateWaterIntake = (change) => {
    waterIntake += change; // Update water intake based on the change value (+1 or -1)
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`; // Update the display
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1)); // Increase water intake by 1
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1)); // Decrease water intake by 1

// Lesson 5: Advanced DOM Manipulation
// Function to update progress charts (mock data for now)
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress..."; // Update workout progress
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress..."; // Update calorie intake progress
};
updateProgressCharts(); // Call the function to initialize progress charts

// Lesson 6: CSS Manipulation via JavaScript
// Function to toggle the website theme between light and dark
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme'); // Toggle the 'dark-theme' class on the body element
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme); // Add event listener to the theme toggle button

// Lesson 7: Handling Forms and User Input
// Function to handle meal plan form submission
const submitMealPlan = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Meal plan submitted successfully! 🍴'); // Alert the user about successful submission
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan); // Add event listener to the meal plan form
