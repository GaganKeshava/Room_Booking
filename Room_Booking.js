let room = document.getElementById("room");
room.value = 1;
let adult = document.getElementById("adult");
adult.value = 1;
let children = document.getElementById("children");
children.value = 0;

let plus_room = document.getElementById("increment_room");
let plus_adult = document.getElementById("increment_adult");
let plus_children = document.getElementById("increment_children");

let minus_room = document.getElementById("decrement_room");
let minus_adult = document.getElementById("decrement_adult");
let minus_children = document.getElementById("decrement_children");

minus_room.disabled = true;
minus_adult.disabled = true;
minus_children.disabled = true;
minus_room.style.color = 'black';
minus_adult.style.color = 'black';
minus_children.style.color = 'black';

function increment_room() {
    minus_room.disabled = false;
    minus_room.style.color = 'blue';
    minus_adult.disabled = false;
    minus_adult.style.color = 'blue';
    let room_count = parseInt(room.value);
    room_count++;
    if(room_count<6) {
        if(room.value == adult.value) {
            adult.value = parseInt(adult.value) + 1;
        }
        room.value = parseInt(room.value) + 1;
        if(room_count == 5) {
            plus_room.disabled = true;
            plus_room.style.color = 'black';
        }
    }
}

function increment_adult() {
    minus_adult.disabled = false;
    minus_adult.style.color = 'blue';
    let adult_count = parseInt(adult.value);
    let children_count = parseInt(children.value);
    let return_type_1 = total_members(+1,adult_count+1,children_count);
    if(return_type_1 == 1) {
        adult.value = parseInt(adult.value) + 1;
    }
    else if(return_type_1 == 0) {
        room.value = parseInt(room.value) + 1;
        adult.value = parseInt(adult.value) + 1;
        if(room.value == 5) {
            plus_room.disabled = true;
            plus_room.style.color = 'black';
        }
    }
    else if(return_type_1 == 2) {
        adult.value = parseInt(adult.value) + 1;
        plus_adult.disabled = true;
        plus_adult.style.color = 'black';
        plus_children.disabled = true;
        plus_children.style.color = 'black';
    }
}

function increment_children() {
    minus_children.disabled = false;
    minus_children.style.color = 'blue';
    children_count = parseInt(children.value);
    adult_count = parseInt(adult.value);
    
    let return_type_2 = total_members(+1,adult_count,children_count+1);
    if(return_type_2==1) {
        children.value = parseInt(children.value) + 1;
    }
    else if(return_type_2==0) {
        if(room.value == adult.value) { // if in a single room only 1 adult & 3 chiildren are present
            adult.value = parseInt(adult.value) + 1;
            minus_adult.disabled = false;
            minus_adult.style.color = 'blue';  // increementing child will increement 1 adult count as each room should contain atleast 1 adult
        }
        room.value = parseInt(room.value) + 1;
        children.value = parseInt(children.value) + 1;
        if(room.value == 5) {
            plus_room.disabled = true;
            plus_room.style.color = 'black';
        }
    }
    else if(return_type_2==2) {
        children.value = parseInt(children.value) + 1;
        plus_children.disabled = true;
        plus_children.style.color = 'black';
        plus_adult.disabled = true;
        plus_adult.style.color = 'black';
    }
}

function decrement_room() {
    plus_room.disabled = false;
    plus_room.style.color = 'red';
    plus_adult.disabled = false;
    plus_adult.style.color = 'red';
    plus_children.disabled = false;
    plus_children.style.color = 'red';
    room.value = parseInt(room.value) - 1;
    adult_count = parseInt(adult.value);
    children_count = parseInt(children.value);
    let members = total_members(0,adult_count,children_count);
    if(parseInt(members) > 4*room_count) {
        let difference = parseInt(members) - 4*room_count;
        if (children_count > difference) {
            children.value = parseInt(children.value) - difference;
        }
        if (children_count == difference) {
            children.value = parseInt(children.value) - difference;
            minus_children.disabled = true;
            minus_children.style.color = 'black';
        }
        else {
            adult.value = parseInt(adult.value) - (difference - parseInt(children.value));
            children.value = 0;
            minus_children.disabled = true;
            minus_children.style.color = 'black';
        }
    }
    if(room.value == 1) {
        minus_room.disabled = true;
        minus_room.style.color = 'black';
    }

}

function decrement_adult() {
    plus_adult.disabled = false;
    plus_adult.style.color = 'red';
    plus_children.disabled = false;
    plus_children.style.color = 'red';
    adult_count = parseInt(adult.value);
    room_count = parseInt(room.value);
    children_count = parseInt(children.value);
    let return_type_3 = total_members(-1,adult_count-1,children_count);
    if(return_type_3 == 1) {
        if(adult_count > room_count) {
            adult.value = parseInt(adult.value) - 1;
        }
        else {
            members = total_members(0,adult_count,children_count);
            --room_count;
            room.value = parseInt(room.value) - 1;
            plus_room.disabled = false;
            plus_room.style.color = 'red';
            if(room.value == 1) {
                minus_room.disabled = true;
                minus_room.style.color = 'black';
            }
            if(parseInt(members) > 4*room_count) {
                let difference = parseInt(members) - 4*room_count;
                if (children_count >= difference) {
                    children.value = parseInt(children.value) - difference + 1;
                    adult.value = parseInt(adult.value) - 1;
                }
                else {
                    adult.value = parseInt(adult.value) - (difference - parseInt(children.value)) - 1;
                    children.value = 0;
                }
            }
            else {
                adult.value = parseInt(adult.value) - 1;
            }
        }  
    }
    if(return_type_3 == 0) {
        room.value = parseInt(room.value) - 1;
        adult.value = parseInt(adult.value) - 1;
        plus_room.disabled = false;
        plus_room.style.color = 'red';
        if(room.value == 1) {
            minus_room.disabled = true;
            minus_room.style.color = 'black';
        }
    }
    if(adult_count-1 == 1) {
        minus_adult.disabled = true;
        minus_adult.style.color = 'black';
    }
}

function decrement_children() {
    plus_children.disabled = false;
    plus_children.style.color = 'red';
    plus_adult.disabled = false;
    plus_adult.style.color = 'red';
    adult_count = parseInt(adult.value);
    children_count = parseInt(children.value);
    let return_type_4 = total_members(-1,adult_count,children_count-1);
    if(return_type_4 == 1) {
        children.value = parseInt(children.value) - 1;
    }
    if(return_type_4 == 0) {
        room.value = parseInt(room.value) - 1;
        children.value = parseInt(children.value) - 1;
        plus_room.disabled = false;
        plus_room.style.color = 'red';
        if(room.value == 1) {
            minus_room.disabled = true;
            minus_room.style.color = 'black';
        }
    }
    if(children_count-1 == 0) {
        minus_children.disabled = true;
        minus_children.style.color = 'black';
    }
}

function total_members(type,adult_number,children_number) {
    room_count = parseInt(room.value);
    let total = adult_number + children_number;
    if(type == +1) {
        if(total <= 4*room_count && total!=20) {
            return 1;
        }
        else if(total == 20) {
            return 2;
        }
        else if(total > 4*room_count) {
            minus_room.disabled = false;
            minus_room.style.color = 'blue';
            return 0;
        }
    }
    if(type == -1) { 
        if (total % 4 == 0) {
            return 0;
        }
        else if (total % 4 != 0) {
            return 1;
        }
    }
    if(type == 0) {
        return total;
    }
}
