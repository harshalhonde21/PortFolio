function hello() {
    let input = document.querySelector("input");
    let num = document.querySelector(".num");

    input.addEventListener("click", () => {
        num.textContent = input.value;
    });
}

function functiontogenratepass() {
    let input = document.querySelector("input");
    let num = document.querySelector(".num");
    let special_char = document.getElementById("special-char");
    let inp_name = document.querySelector("#inp-name").value;

    input.addEventListener("click", () => {
        num.textContent = input.value;
    });

    let number = input.value > 8;
    let num1 = input.value;
    if (number) {
        alert(`The Password length you entered is : ${num1}`);
    } else {
        alert(
            "Insert the value !! Your PassWord should be atleast above 8 character"
        );
    }

    let lenString = num1;
    let randomString = "";
    let input_number = inp_name.length;
    if (special_char.checked == true) {
        for (let i = 0; i < lenString; i++) {
            let rnum = Math.floor(Math.random() * input_number);
            randomString += inp_name.substring(rnum, rnum + 1);
        }
        let concatstr = `179${randomString}@#%`;
        document.querySelector(".container-display").innerHTML = concatstr;
    } else {
        for (let i = 0; i < lenString; i++) {
            let rnum = Math.floor(Math.random() * input_number);
            randomString += inp_name.substring(rnum, rnum + 1);
        }
        document.querySelector(".container-display").innerHTML = randomString;
    }
}