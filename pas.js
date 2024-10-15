const input = document.querySelector('.input')
const check = document.querySelector('#check')
const result = document.querySelector('.result')


input.addEventListener('input', () => {

    if (input.value.length > 0) {
        result.style.display = "block";
    } else {
        result.style.display = "none";
        // result.style.color = "red";
        // input.style.borderColor = "red";
    }

    if (input.value.length < 4) {
        result.innerHTML = "Password is weak";
        result.style.color = "red";
        input.style.borderColor = "red";
    }
   else if (input.value.length >= 4 && input.value.length < 7) {
        result.innerHTML = "Password is medium";
        result.style.color = "yellow";
        input.style.borderColor = "yellow";
    }
   else if (input.value.length >8) {
        result.innerHTML = "Password is Strong";
        result.style.color = "green";
        input.style.borderColor = "green";
    }

})


// if (input.value.length > 0) {
//     result.style.display = "block";
// } else {
//     result.style.display = "none";
//     result.style.backgroundColor = "red";
//     input.style.borderColor = "red";
// }

// if (input.value.length < 4) {
//     result.innerHTML = "Password is weak";
// }
