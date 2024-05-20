'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP


// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements)
{
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i)
  {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = 
  `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>`;
  containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

const user = "Roman Kralicek";
function createUserNames(accs)
{
  accs.forEach(function(acc)
  {
    acc.username = acc.owner.toLowerCase().split(' ')
    .map(name => name[0])
    .join('');
  });
};

createUserNames(accounts);
console.log(accounts);


function calcDisplaySummary(acc)
{
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((accul, mov) => accul + mov);
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((accul, mov) => accul + mov);
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate)/100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc,int) => acc + int, 0);
  labelSumIn.textContent = `${incomes}€`
  labelSumOut.textContent = `${outcomes}€`
  labelSumInterest.textContent = `${interest.toFixed(2)}€`
};

//transfer money from one account to another
btnTransfer.addEventListener("click", function(event){
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciever = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferTo.value;
  console.log("amount and reciever: ");
  console.log(amount, reciever);
  //if(amount > 0 && )

});


function calculatePrintBalance(acc){
  acc.balance = acc.movements.reduce(function(accul, mov)
  {
    return accul += mov;
  });
  labelBalance.textContent = `${acc.balance} EUR`;
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(mov)
{
  return mov > 0; 
});

const withdrawals = movements.filter(function(mov)
{
  return mov < 0; 
});

const balance = movements.reduce(function(accul, cur, i, arr)
{
  return accul += cur;
}, 0);

let currentAccount;

function updateUI(acc)
{
  displayMovements(acc.movements);
  calcDisplaySummary(acc)
  calculatePrintBalance(acc);
}

btnLogin.addEventListener('click', function(e)
{
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  if(currentAccount?.pin === Number(inputLoginPin.value))
  {
    labelWelcome.textContent = `Welcome back,  ${currentAccount.owner.split(' ')[0]}`;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    containerApp.style.opacity = 100;
    updateUI(currentAccount);
  }
  
});

btnTransfer.addEventListener("click", event => {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const reciever = accounts.find(acc => inputTransferTo.value === acc.username); 
  
  if(amount > 0 && currentAccount.balance >= amount && reciever !== currentAccount && reciever)
  {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});


btnClose.addEventListener("click", function(e){
  e.preventDefault();
  const user = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if(user === currentAccount.username && pin === currentAccount.pin)
  {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(`its index: ${index}`)
    containerApp.style.opacity = 0;
    accounts.splice(index, 1);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

console.log(movements);
console.log(movements.includes(-130));


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);



///////////////////////

const x = Array.from({length: 10}, (val, i) => i + 1);
console.log("test");
console.log(`this is x: ${x}`);
console.log("hello");