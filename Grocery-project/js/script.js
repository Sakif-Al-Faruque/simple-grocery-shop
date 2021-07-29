/* select items */
const alt = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const sbumitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');


//edit option
let editElement;
let editFlag = false;
let editID = "";

//event listeners
form.addEventListener('submit', addItem);

//functions
function addItem(e){
    e.preventDefault();
    val = grocery.value;
    const id = new Date().getTime().toString();
    console.log(val);

    if(val && !editFlag){
        displayAlert('Add items to the list', 'danger');
    }else if(val && editFlag){
        console.log('editing');
    }else{
        displayAlert('Please enter value', 'danger');
    }
}

//showing alert box
function displayAlert(text, action){
    //console.log(alt);
    alt.textContent = text;
    alt.classList.add(`alert-${action}`);

    //remove alert box after 3 seconds
    setTimeout(function(){
        alt.textContent = "";
        alt.classList.remove(`alert-${action}`);
    }, 3000);
}

//removing alert box

//local storage

//setup items