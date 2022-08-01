let highScores = [];
const init =()=>{
    checkLocal()
    declareEvents();
}
/** check if local storage have exist array */
const checkLocal = () => {
    if (localStorage["scoreList"]) {
        console.log(localStorage["scoreList"]);
        highScores = JSON.parse(localStorage["scoreList"]);
    }
}
/** mange all the events */
const declareEvents = () => {
    let id_form = document.querySelector("#id_form");
    // if there is form
    if (id_form) {
        // wait until submit
        id_form.addEventListener("submit", function(e){
            // disable the default settings (when click on button reloading the page)
            e.preventDefault();
            clearField();
            // setting variables
            let name = document.querySelector("#id_name").value;
            let lastName =document.querySelector("#id_Lname").value;
            // tiny check
            if(name.length <1){
                document.querySelector("#name_err").innerHTML = "Please insert valid name"
                return;
            }
            if(lastName.length <1){
                document.querySelector("#lname_err").innerHTML = "Please insert valid Last name"
                return;
            }
            // get from the local storage the last player's points
            let current_score = localStorage.getItem("points")
            // set up an object for our global array
            let obj = {
                "name": `${name} ${lastName}`,
                "score": current_score
            }
            highScores.unshift(obj);
            localStorage.setItem("scoreList", JSON.stringify(highScores));
            window.open('trivia.html')
        })
    }
}

/** clear the html err */
const clearField = () =>{
    document.querySelector("#name_err").innerHTML = ""
    document.querySelector("#lname_err").innerHTML = ""
}
init();