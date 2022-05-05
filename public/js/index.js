//select HTML elements
const billAmountInput = document.querySelector('#bill');
const tipButtons = document.querySelectorAll("button.tip-btn");
const numberOfPeopleInput = document.querySelector("#num-of-ppl");
const tipAmountPerPerson = document.querySelector("#tip-pp");
const totalPerPerson = document.querySelector("#total-pp");
const customTipInput = document.querySelector("#custom-tip");
const resetButton = document.querySelector("#reset_calc");
const tipSelectors = document.querySelector("#tip-selectors");
const peopleAlert = document.querySelector("#people-alert");
const billAlert = document.querySelector("#bill-alert");

//LISTENERS
resetButton.addEventListener('click', () => {
    resetForm();
});

for(let i=0; i<tipButtons.length; i++) {
    tipButtons[i].addEventListener('click', () => {
        calculateTotalPerPerson(billAmountInput.value, numberOfPeopleInput.value, tipButtons[i].value);        
        //only one button can have clicked classe at time
        removeClassOnSiblings();
        tipButtons[i].classList.add('clicked');
    });
}

customTipInput.addEventListener('change', () => {
    calculateTotalPerPerson(billAmountInput.value, numberOfPeopleInput.value, customTipInput.value);   
    removeClassOnSiblings();
    customTipInput.classList.add('clicked');
});

billAmountInput.addEventListener('change', () => {
    let billAmountValue = billAmountInput.value;

    if(billAmountValue == 0) {
        billAlert.innerText = "Can't be zero";
        billAmountInput.classList.add('input-alert')

    } else if (billAmountValue.match(/^-/)) {
        billAlert.innerText = "Can't be lower than zero";
        billAmountInput.classList.add('input-alert')
    }  else {
        billAlert.innerText = "";
        billAmountInput.classList.remove('input-alert')
    }
    
});

numberOfPeopleInput.addEventListener('change', () => {
    let numberOfPeopleValue = numberOfPeopleInput.value;

    if(numberOfPeopleValue == 0) {
        peopleAlert.innerText = "Can't be zero";
        numberOfPeopleInput.classList.add('input-alert')

    } else if (numberOfPeopleValue.match(/^-/)) {
        peopleAlert.innerText = "Can't be lower than zero";
        numberOfPeopleInput.classList.add('input-alert')
    }  else {
        peopleAlert.innerText = "";
        numberOfPeopleInput.classList.remove('input-alert')
    }
    
});




// FUNCTIONS
//calculate Amounts
const calculateTotalPerPerson = (billAmount, numberOfPeople, tipAmount) => {
    let tipPerPerson = (billAmount/numberOfPeople)*(tipAmount/100);
    let totalPerPersonWithTip = (billAmount/numberOfPeople)+tipPerPerson;

    tipAmountPerPerson.innerText = `$${tipPerPerson.toFixed(2)}`;
    totalPerPerson.innerText = `$${totalPerPersonWithTip.toFixed(2)}`;
}

//flush all the inputs
const resetForm = () => {
    billAmountInput.value = "";
    numberOfPeopleInput.value = "";
    tipAmountPerPerson.innerText = "$0.00";
    totalPerPerson.innerText = "$0.00";
}

//remove clicked class on siblings buttons
const removeClassOnSiblings = () => {
    for (sib of tipSelectors.children) {
        sib.classList.remove('clicked');
    }
}

