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

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    
    // ⚠️ Hint 1: Check for duplicates
    // Use 'goalList' to get all existing goals and check if 'goalInput' matches any of them.
    
    // ⚠️ Hint 2: Prevent duplicates
    // If a duplicate is found, display an alert to the user and don't add the goal to the list.
    // If it's not a duplicate, proceed with adding it as a new goal.
    
    // ⚠️ Hint 3: Code structure
    // You might want to wrap the duplicate-checking logic in an 'if' statement.
    
    // ⚠️ Hint 4: Event listener
    // The event listener that removes goals when clicked is not related to this issue.
    // Focus on preventing duplicates for now.
    
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
