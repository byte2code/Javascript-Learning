function one(call_two){
    console.log('Mixing function two() in function one');
    call_two();
}

function two(){
    console.log('Process Two');
}

one(two);