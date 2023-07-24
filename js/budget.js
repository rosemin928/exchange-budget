const budgetForm = document.querySelector("#budget");
const budgetDate = document.getElementById("date");
const dateList = document.getElementById("date-list");
const budgetDetails = document.getElementById("details");
const detailList = document.getElementById("detail-list");
const budgetAmount = document.getElementById("amount");
const ukAmountList = document.getElementById("uk-amount-list");
const krAmountList = document.getElementById("kr-amount-list");

let budgets = [];

function saveBudgets() {
    localStorage.setItem("budgets", JSON.stringify(budgets));
}

function deleteBudgets(event) {
    const li = event.target.parentElement;
    li.remove();
    budgets = budgets.filter(budget => budget.id !== parseInt(li.id));
    saveBudgets();
}

function paintBudget(newBudget) {
    const liDate = document.createElement("li");
    liDate.id = newBudget.id;
    const spanDate = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteBudgets)
    liDate.appendChild(button);
    liDate.appendChild(spanDate);
    spanDate.innerText = newBudget.date;
    dateList.appendChild(liDate);

    const liDetail = document.createElement("li");
    liDetail.id = newBudget.id;
    const spanDetail = document.createElement("span");
    liDetail.appendChild(spanDetail);
    spanDetail.innerText = newBudget.detail;
    detailList.appendChild(liDetail);

    const liUk = document.createElement("li");
    liUk.id = newBudget.id;
    const spanUk = document.createElement("span");
    liUk.appendChild(spanUk);
    spanUk.innerText = newBudget.amount + "£";
    ukAmountList.appendChild(liUk);

    const liKr = document.createElement("li");
    liKr.id = newBudget.id;
    const spanKr = document.createElement("span");
    liKr.appendChild(spanKr);
    spanKr.innerText = Math.floor(parseFloat(newBudget.amount)*1648.9) + "원";
    krAmountList.appendChild(liKr);
}

function handleBudgetSubmit(event) {
    event.preventDefault();
    const newDate = budgetDate.value;
    const newDetail = budgetDetails.value;
    const newAmount = budgetAmount.value;
    newDate.value = "";
    newDetail.value = "";
    newAmount.value = "";
    const newBudgetObj = {
        date: newDate,
        detail: newDetail,
        amount: newAmount,
        id: Date.now(),
    };
    budgets.push(newBudgetObj);
    paintBudget(newBudgetObj)
    saveBudgets();
}

budgetForm.addEventListener("submit", handleBudgetSubmit);

const savedBudgets = localStorage.getItem("budgets");

if(savedBudgets != null) {
    const parsedBudgets = JSON.parse(savedBudgets);
    budgets = parsedBudgets;
    parsedBudgets.forEach(paintBudget);
}