window.onload = () => {
    declareEvents();
}

const declareEvents = () => {
    let send_form = document.querySelector("#id_send");
    send_form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearForm();
        let name_val = document.querySelector("#id_name").value;
        let email_val = document.querySelector("#id_email").value;
        let phone_val = document.querySelector("#id_phone").value;
        let text_val = document.querySelector("#id_text").value;
        if (name_val.length < 2) {
            document.querySelector("#id_checkName").innerHTML = "*You are required to have at least 2 letters*"
            return;
        }
        else if (checkNumbers(name_val)) {
            document.querySelector("#id_checkName").innerHTML = "*Name cannot contain numbers*"
            return;
        }
        else if (email_val.indexOf("@") == -1 || email_val.indexOf(".") == -1 || email_val.length <= 7) {
            document.querySelector("#id_checkEmail").innerHTML = "*Please insert valid Email*";
            return;
        }
        else if (phone_val.length != 10 || !checkString(phone_val)) {
            document.querySelector("#id_checkPhone").innerHTML = "*Please insert valid Phone Number*"
            return;
        }
        else if (text_val.length < 2) {
            document.querySelector("#id_checkText").innerHTML = "*You are required to have at least 2 letters*";
            return;
        }
        formSubmission();
    })
}
/** clear alerts of input */
function clearForm() {
    document.querySelector("#id_checkName").innerHTML = "";
    document.querySelector("#id_checkEmail").innerHTML = "";
    document.querySelector("#id_checkPhone").innerHTML = "";
    document.querySelector("#id_checkText").innerHTML = "";
}
/** clear input after confirm form */
function clearFormInput() {
    document.querySelector("#id_name").value = '';
    document.querySelector("#id_email").value = '';
    document.querySelector("#id_phone").value = '';
    document.querySelector("#id_text").value = '';
}
/** send form after click send message */
function formSubmission() {
    let name = document.querySelector("#id_name").value;
    clearFormInput();
    alert(`Dear ${name},\nthanks for reaching out!We’re thrilled to hear from you.\nOur inbox can’t wait to get your messages,so talk to us any time you like.\nCheers!`);
}
/** return true if have numbers in the string 
 * false if not */
function checkNumbers(str) {
    return /\d/.test(str);
}
function checkString(number) {
    return /^[0-9]+$/.test(number);
}