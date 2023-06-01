let array1 = [];

function add () {
    let value = document.getElementById('input').value;
    array1.push (value);
    document.getElementById('output').innerHTML= array1;

}

function wipe(){
    let clear = document.getElementById("output")
    clear.innerHTML = '';
    console.log(array1);
    array1 = [];
}


