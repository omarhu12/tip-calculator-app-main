const billInput = document.getElementById("bill");

const tipInput = document.getElementById("custom");

const perPersonTotalDiv = document.getElementById("numPpl");

const Amount = document.getElementById("tipAmount");

const reset = document.querySelector(".second button");

let tipFive = document.getElementById("five");

let tipTen = document.getElementById("ten");

let tipFiften = document.getElementById("fiften");

let tipTwentyFive = document.getElementById("twentyFive");

let tipFifty = document.getElementById("fifty");

reset.addEventListener("click", function () {
  Amount.textContent = "$0.00";

  total.textContent = "$0.00";
  reset.classList.remove("active");
  tipFive.classList.remove("active");
  tipTen.classList.remove("active");
  tipFiften.classList.remove("active");
  tipTwentyFive.classList.remove("active");
  tipFifty.classList.remove("active");
  perPersonTotalDiv.value = "";
  billInput.value = "";
  tipInput.value = "";
});

const total = document.getElementById("total");

const calculateBill = () => {
  const bill = Number(billInput.value);
  let tipPercent = Number(tipInput.value) / 100;

  const numberOfPeople = Number(perPersonTotalDiv.value);
  let tipAmount = bill * tipPercent;
  //   console.log(tipAmount);

  tipFive.addEventListener("click", function () {
    tipFive.classList.add("active");
    tipTen.classList.remove("active");
    tipFiften.classList.remove("active");
    tipTwentyFive.classList.remove("active");
    tipFifty.classList.remove("active");
    tipAmount = bill * (5 / 100);
    const tipTotal = bill + tipAmount;
    let tipAmountPerPerson = tipAmount / numberOfPeople;
    //   console.log(tipTotal);
    const perPersonTotal = tipTotal / numberOfPeople;

    if (numberOfPeople >= 1) {
      Amount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;

      total.textContent = `$${perPersonTotal.toFixed(2)}`;

      reset.classList.add("active");
    } else {
      Amount.textContent = "$0.00";

      total.textContent = "$0.00";
      reset.classList.remove("active");
    }
  });

  tipTen.addEventListener("click", function () {
    tipFive.classList.remove("active");
    tipTen.classList.add("active");
    tipFiften.classList.remove("active");
    tipTwentyFive.classList.remove("active");
    tipFifty.classList.remove("active");
    tipAmount = bill * (10 / 100);
    const tipTotal = bill + tipAmount;
    let tipAmountPerPerson = tipAmount / numberOfPeople;
    //   console.log(tipTotal);
    const perPersonTotal = tipTotal / numberOfPeople;

    if (numberOfPeople >= 1) {
      Amount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;

      total.textContent = `$${perPersonTotal.toFixed(2)}`;

      reset.classList.add("active");
    } else {
      Amount.textContent = "$0.00";

      total.textContent = "$0.00";
      reset.classList.remove("active");
    }
  });

  tipFiften.addEventListener("click", function () {
    tipFive.classList.remove("active");
    tipTen.classList.remove("active");
    tipFiften.classList.add("active");
    tipTwentyFive.classList.remove("active");
    tipFifty.classList.remove("active");
    tipAmount = bill * (15 / 100);
    const tipTotal = bill + tipAmount;
    let tipAmountPerPerson = tipAmount / numberOfPeople;
    //   console.log(tipTotal);
    const perPersonTotal = tipTotal / numberOfPeople;

    if (numberOfPeople >= 1) {
      Amount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;

      total.textContent = `$${perPersonTotal.toFixed(2)}`;

      reset.classList.add("active");
    } else {
      Amount.textContent = "$0.00";

      total.textContent = "$0.00";
      reset.classList.remove("active");
    }
  });

  tipTwentyFive.addEventListener("click", function () {
    tipFive.classList.remove("active");
    tipTen.classList.remove("active");
    tipFiften.classList.remove("active");
    tipTwentyFive.classList.add("active");
    tipFifty.classList.remove("active");
    tipAmount = bill * (25 / 100);
    const tipTotal = bill + tipAmount;
    let tipAmountPerPerson = tipAmount / numberOfPeople;
    //   console.log(tipTotal);
    const perPersonTotal = tipTotal / numberOfPeople;

    if (numberOfPeople >= 1) {
      Amount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;

      total.textContent = `$${perPersonTotal.toFixed(2)}`;

      reset.classList.add("active");
    } else {
      Amount.textContent = "$0.00";

      total.textContent = "$0.00";
      reset.classList.remove("active");
    }
  });

  tipFifty.addEventListener("click", function () {
    tipFive.classList.remove("active");
    tipTen.classList.remove("active");
    tipFiften.classList.remove("active");
    tipTwentyFive.classList.remove("active");
    tipFifty.classList.add("active");
    tipAmount = bill * (50 / 100);
    const tipTotal = bill + tipAmount;
    let tipAmountPerPerson = tipAmount / numberOfPeople;
    //   console.log(tipTotal);
    const perPersonTotal = tipTotal / numberOfPeople;

    if (numberOfPeople >= 1) {
      Amount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;

      total.textContent = `$${perPersonTotal.toFixed(2)}`;

      reset.classList.add("active");
    } else {
      Amount.textContent = "$0.00";

      total.textContent = "$0.00";
      reset.classList.remove("active");
    }
  });

  if (tipInput.value >= 1) {
    tipFive.classList.remove("active");
    tipTen.classList.remove("active");
    tipFiften.classList.remove("active");
    tipTwentyFive.classList.remove("active");
    tipFifty.classList.remove("active");
  }

  const tipTotal = bill + tipAmount;
  let tipAmountPerPerson = tipAmount / numberOfPeople;
  //   console.log(tipTotal);
  const perPersonTotal = tipTotal / numberOfPeople;

  if (numberOfPeople >= 1) {
    Amount.textContent = `$${tipAmountPerPerson.toFixed(2)}`;

    total.textContent = `$${perPersonTotal.toFixed(2)}`;

    reset.classList.add("active");
  } else {
    Amount.textContent = "$0.00";

    total.textContent = "$0.00";
    reset.classList.remove("active");
  }
  //   const total = tipAmount + bill;
  //   console.log(total.value);
};

const calcPpl = () => {
  calculateBill();
};
