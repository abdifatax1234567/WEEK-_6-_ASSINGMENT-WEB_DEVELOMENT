
"use strict";

let expenses = [];
let monthlyBudget = 0;

const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseCategory = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const message = document.getElementById("message");
const clearButton = document.getElementById("clear-expenses");

function formatMoney(amount) {
    return "Ksh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function calculateTotal() {
    let total = 0;

    for (const expense of expenses) {
        total += expense.amount;
    }

    return total;
}

function updateDashboard() {
    const total = calculateTotal();
    const balance = monthlyBudget - total;

    document.getElementById("budget-total").textContent =
        formatMoney(monthlyBudget);

    document.getElementById("expense-total").textContent =
        formatMoney(total);

    document.getElementById("balance-total").textContent =
        formatMoney(balance);

    expenseList.replaceChildren();

    for (const expense of expenses) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expense.name;

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expense.category;

        const amountCell = document.createElement("td");
        amountCell.textContent = formatMoney(expense.amount);

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function () {
            expenses = expenses.filter(function (item) {
                return item.id !== expense.id;
            });

            message.textContent = "Expense deleted successfully.";
            updateDashboard();
        });

        actionCell.appendChild(deleteButton);

        row.append(
            nameCell,
            categoryCell,
            amountCell,
            actionCell
        );

        expenseList.appendChild(row);
    }

    document.getElementById("expense-count").textContent =
        expenses.length + (expenses.length === 1
            ? " expense recorded"
            : " expenses recorded");

    const status = document.getElementById("budget-status");

    if (monthlyBudget <= 0) {
        status.textContent = "Set a budget to get started.";
    } else if (total > monthlyBudget) {
        status.textContent =
            "Warning: You have exceeded your monthly budget!";
    } else if (total === monthlyBudget) {
        status.textContent = "You have used your entire budget.";
    } else if (total >= monthlyBudget * 0.8) {
        status.textContent =
            "Careful! You have used at least 80% of your budget.";
    } else {
        status.textContent =
            "Good job! Your spending is within your budget.";
    }

    let percentage = 0;

    if (monthlyBudget > 0) {
        percentage = (total / monthlyBudget) * 100;
    }

    document.getElementById("budget-percentage").textContent =
        percentage.toFixed(1) + "% of budget used";

    document.getElementById("budget-progress").style.width =
        Math.min(percentage, 100) + "%";
}

budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = Number(budgetInput.value);

    if (!Number.isFinite(value) || value <= 0) {
        message.textContent = "Please enter a budget greater than zero.";
        return;
    }

    monthlyBudget = value;

    message.textContent = "Monthly budget updated successfully.";
    updateDashboard();
});

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    if (name === "") {
        message.textContent = "Please enter an expense name.";
        return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
        message.textContent = "Please enter an amount greater than zero.";
        return;
    }

    
    expenses.push({
        id: Date.now() + Math.random(),
        name: name,
        amount: amount,
        category: category
    });

    message.textContent = "Expense added successfully.";

    expenseForm.reset();
    updateDashboard();
});

clearButton.addEventListener("click", function () {
    if (expenses.length === 0) {
        message.textContent = "There are no expenses to clear.";
        return;
    }

    const confirmed = window.confirm(
        "Are you sure you want to clear all expenses?"
    );

    if (confirmed) {
        expenses = [];
        message.textContent = "All expenses have been cleared.";
        updateDashboard();
    }
});
updateDashboard();
