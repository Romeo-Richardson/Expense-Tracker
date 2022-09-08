let dailyBudget = 600;
let budgetAmount = document.getElementById("budget-amount");
budgetAmount.innerHTML = `$${dailyBudget}`;

let spent = {
    monday: 75,
    tuesday: 210,
    wednesday: 400,
    thursday: 150,
    friday: 300,
    saturday: 250,
    sunday: 400,
};

function totalThisMonth(){
  let empty = [];
  for(let [key, value] of Object.entries(spent)){
    empty.push(value);
  };
  let total = empty.reduce((counter, amount)=>{
    return counter += amount;
  }, 0);
  let element = document.getElementById('this-amount');
  element.innerHTML = `$${total}`;
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


function budgetCalc(){
let empty = [];
for(property in spent){
let incAmount =  spent[property] / (dailyBudget * .01); 
let transAmount = incAmount * .8;
empty.push(transAmount);
}
return empty;
};

let transArray = budgetCalc();

function transform (){
  graphs.monday.style.transform = `scaleY(${transArray[0]})`;
  graphs.tuesday.style.transform = `scaleY(${transArray[1]})`;
  graphs.wednesday.style.transform = `scaleY(${transArray[2]})`;
  graphs.thursday.style.transform = `scaleY(${transArray[3]})`;
  graphs.friday.style.transform = `scaleY(${transArray[4]})`;
  graphs.saturday.style.transform = `scaleY(${transArray[5]})`;
  graphs.sunday.style.transform = `scaleY(${transArray[6]})`;
}

transform();
totalThisMonth();