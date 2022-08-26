let room = document.getElementById("number1");
room.value = 1; // Inititally assigning room number as 1
let adult = document.getElementById("number2");
adult.value = 1; // Initially assigning adult number as 1

// Function to increement the count of the room number
function increement_room() {
    document.getElementById("btn2").style.color = 'blue';
    document.getElementById("btn2").disabled = false;
    room = document.getElementById("number1").value;  // getting the present value of the room number
    adult = document.getElementById("number2").value; // getting the present value of the adult number
    ++room;
    ++adult; 
    if(room>5) {                                   // if room count becomes greater than 5 
        document.getElementById("btn1").disabled = true;    // increement button of the room section will be disabled
        document.getElementById("btn1").style.color = 'black';  // correspondingly it is indicated by changing the button color to black
    }
    else if (room==adult) {                                 // if room count is equal to adult count
        document.getElementById("number1").value = room;    // increement room count
        document.getElementById("number2").value = adult;   // increement adult count
    }
    else {                                                  
        document.getElementById("number1").value = room;    // normally increement the count
    }
    
}

// Function to decreement the count of the room number
function decreement_room() {
    document.getElementById("btn1").style.color = 'red';
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn4").style.color = 'blue';
    room = document.getElementById("number1").value;
    adult = document.getElementById("number2").value;
    children = document.getElementById("number3").value;
    room--;                                                 // decreement the room count
    people(room,adult,children);                            // calling people function

}

// Function to increement the count of the adult number
function increement_adult() {
    adult = document.getElementById("number2").value;
    let re = summ();                                        // initialising the variable re and assigning the value returned from the function summ
    if(re!=0) {                                             // if re is not equal to 0
        document.getElementById("number2").value = ++adult;  // increement the count of the adult 
        document.getElementById("btn4").disabled = false;
        document.getElementById("btn4").style.color = 'blue';
    }
    else {                                                  // if re == 0
        document.getElementById("btn3").disabled = true;    // disabling the increement button of the adult 
        document.getElementById("btn3").style.color = 'black';  // indicating the same
    }

}

// Function to decreement the count of the adult number
function decreement_adult() {
    document.getElementById("btn4").disabled = false;
    adult = document.getElementById("number2").value;
    room = document.getElementById("number1").value;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    --adult;                                            // decreement the count of the adult 
    if (adult<room) {                                   // if count of adult goes below the count of room 
        document.getElementById("btn4").disabled = true;   // the decreement button of the adult is disabled as the condition states that each room should contain atleast one adult
        document.getElementById("btn4").style.color = 'black'; // indicating the same
    }
    else {                                                  // if count of adult is greater than the room count
        document.getElementById("number2").value = adult;   // decreement the adult count
        document.getElementById("btn3").disabled = false;   // enable the increement button of the adult
        document.getElementById("btn3").style.color = 'red';
    }

}

let children = document.getElementById("number3");
children.value = 0;       // assigning the value of the children to 0

// Function to increement the count of the children 
function increement_children() {
    children = document.getElementById("number3").value;
    let re = summ();                                // initialising the variable re and assigning the value returned from the function summ
    if(re!=0) {                                     // if re is not equal to 0
        document.getElementById("number3").value = ++children;  // increement the count of the children
        document.getElementById("btn6").disabled = false;
        document.getElementById("btn6").style.color = 'blue';
    }
    else {                                                  // if re == 0
        document.getElementById("btn5").disabled = true;    // disabling the increement button of the children
        document.getElementById("btn5").style.color = 'black';
    }
}

// Function to decreement the count of the children 
function decreement_children() {
    children = document.getElementById("number3").value;
    if(children>0) {                                    // if count of the children is greater than 0
        document.getElementById("number3").value = --children;  // decreement the count 
        document.getElementById("btn5").disabled = false;
        document.getElementById("btn5").style.color = 'red';
    }
    else {                                              // if count goes below 0
        document.getElementById("btn6").disabled = true;    // disable the decreement button of the children
        document.getElementById("btn6").style.color = 'black';
    }
}

// Function to find number of people in a room
function summ() {
    room = document.getElementById("number1").value;
    adult = document.getElementById("number2").value;
    children = document.getElementById("number3").value;
    let res = parseInt(adult) + parseInt(children);     // add count of both adult and children 

    if(res < (parseInt(room)*4)) {              // if sum is less than 4*room count (condition where each room can occupy upto 4 members)
        return res;                             // return the sum
    }
    else return 0;                              // if sum is greater then return 0
}

// Function to decreement the count of adult and children while decreementing the room count 
function people(rn,an,cn) {
    rn = parseInt(rn);
    an = parseInt(an);
    cn = parseInt(cn);
    if((an+cn)<=(4*rn)) {       // if sum of both adult and children is lesser than 4*room count
        document.getElementById("number1").value = rn;     // display the value as it is
    }
    else if ((an+cn)>(4*rn) && rn != 0) {       // if sum is greater than the 4*room count
        document.getElementById("number1").value = rn;
        document.getElementById("number2").value = Math.floor(an/2);    // decreement the adult count by half
        document.getElementById("number3").value = Math.floor(cn/2);    // decreement the children count by half to satisfy the condition
    }
    else if (rn == 0) {                                 // if room count goes below 0
        document.getElementById("btn2").disabled = true;    // disable the room decreement button 
        document.getElementById("btn2").style.color = 'black';
    }
}

