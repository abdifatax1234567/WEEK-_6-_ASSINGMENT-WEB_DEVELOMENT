
# SpendWise - Interactive Budget Dashboard

## Project Description

SpendWise is a personal budgeting application built with HTML, CSS, and JavaScript. It helps users set a monthly budget, record expenses, calculate total spending, and monitor their remaining balance.

## Improvements Made This Week

This week, I made SpendWise interactive using JavaScript.

The application now allows users to:
- Set a monthly budget.
- Add multiple expenses with names, amounts, and categories.
- View total expenses and remaining balance.
- Delete individual expenses.
- Clear all expenses after confirmation.
- View budget status messages and a spending progress bar.
- See dashboard information update automatically.

## How Conditionals Are Used

I used `if`, `else if`, and `else` statements to check the user's budget.

The application displays different messages when the budget is not set, spending exceeds the budget, the full budget is used, at least 80% of the budget is used, or spending remains within the budget.

I also use conditionals to validate user input.

## How Arrays Are Used

I created an array called `expenses` to store multiple expense records.

Each record contains an ID, name, amount, and category.

The `push()` method adds a new expense, while `filter()` removes an expense selected by the user.

## How Loops Are Used

I used a `for...of` loop to calculate the total amount spent and display every expense in the table.

This allows the application to process multiple records without writing separate code for each expense.

## How the DOM Is Updated

I used `document.getElementById()` to select HTML elements.

I update dashboard values with `textContent`, create table rows with `document.createElement()`, and display the expense records dynamically.

The `updateDashboard()` function refreshes the totals, table, budget message, expense count, and progress bar.

## How User Interactions Are Handled

I used `addEventListener()` to respond to form submissions and button clicks.

Users can set a budget, add expenses, delete an expense, or clear all expenses.

The `preventDefault()` method prevents forms from reloading the webpage when submitted.

## Challenges and Solutions

One challenge was calculating the total of multiple expenses. I solved this by storing expenses in an array and using a loop.

Another challenge was keeping the dashboard updated. I created an `updateDashboard()` function that refreshes the displayed information after changes.

I also added input validation to prevent invalid budgets and expense amounts.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How to Run

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a web browser.
4. Set a budget and add expenses to test the application.

