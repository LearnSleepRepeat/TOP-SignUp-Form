const pwNoMatchField = document.querySelector(".pw_no_match");
const pw1Field = document.querySelector("#password1");
const pw2Field = document.querySelector("#password2");
const submitBtn = document.querySelector("#submitButton");

function match_pw(a,b) {
    if (password1.value === "" || password2.value === "") {
        return
    }
    else if (password1.value == password2.value) {
        pwNoMatchField.classList.add("hidden");
        submitBtn.disabled = false;
        submitBtn.style.color = "white";
        return true
    }
    else {
        pwNoMatchField.classList.remove("hidden");
        submitBtn.disabled = true;
        submitBtn.style.color = "grey";
        return false
    }
}

pw1Field.addEventListener('blur', match_pw);
pw2Field.addEventListener('blur', match_pw);