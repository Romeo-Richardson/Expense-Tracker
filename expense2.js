
let spent = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
};

let userInputs = {
  mon: document.getElementById('monday'),
  tues: document.getElementById('tuesday'),
  wed: document.getElementById('wednesday'),
  thur: document.getElementById('thursday'),
  fri: document.getElementById('friday'),
  sat: document.getElementById('saturday'),
  sun: document.getElementById('sunday'),
};

function closeFirstModal(){
  let firstModal = document.getElementById('popup');
  firstModal.style.transform = 'scale(0)';
  let secondModal = document.getElementById('second-popup');
  secondModal.style.transform = 'scale(1)';
};

function closeSecondModal(){
  let modal = document.getElementById('modal');
  modal.style.transform = 'scale(0)';
  let weekly = document.getElementById('weeklybudget');
  let weeklyDisplay = document.getElementById('balance-amount');
  weeklyDisplay.innerHTML = `$${weekly.value}`;
  dailyBudget = Math.round(weekly.value / 7);
  let budgetAmount = document.getElementById("budget-amount");
  budgetAmount.innerHTML = `$${dailyBudget}`;
  let inputArray = []; 
  for(let [key, value] of Object.entries(userInputs)){
    inputArray.push(Number(value.value));
  };
  let indexCounter = 0;
  for(value in spent){
    spent[value] = inputArray[indexCounter];
    indexCounter++;
  };
  let newArray = inputArray.reduce((counter, value)=>{
    return counter + value;
  }, 0);
  let displayAmount = document.getElementById('this-amount');
  displayAmount.innerHTML = `$${newArray}`;
  let empty = [];
  for(property in spent){
    let incAmount =  spent[property] / (dailyBudget * .01); 
    let transAmount = incAmount * .8;
    empty.push(transAmount);
  };
  let transCounter = 0;
  for(let [key, value] of Object.entries(graphs)){
    value.style.transform = `scaleY(${empty[transCounter]})`;
    if(empty[transCounter] > 40){
      value.style.backgroundColor = 'red';
    } else value.style.backgroundColor = 'green';
    transCounter++;
  };
  
};

let graphs = {
    monday: document.getElementById("graph1"),
    tuesday: document.getElementById("graph2"),
    wednesday: document.getElementById("graph3"),
    thursday: document.getElementById("graph4"),
    friday: document.getElementById("graph5"),
    saturday: document.getElementById("graph6"),
    sunday: document.getElementById("graph7")
};



