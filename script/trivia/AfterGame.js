let highScores = [];
const init =()=>{
    checkLocal()
    declareEvents();
}
/** mange all the events */
const declareEvents = () => {
    let id_form = document.querySelector("#id_form");
    console.log(id_form);
    if (id_form) {
        console.log("im into form");
        id_form.addEventListener("submit", function(e){
            e.preventDefault();
            clearField();
            let name = document.querySelector("#id_name").value
            let lastName =document.querySelector("#id_Lname").value
            if(name.length <1){
                document.querySelector("#name_err").innerHTML = "Please insert valid name"
                return;
            }
            if(lastName.length <1){
                document.querySelector("#lname_err").innerHTML = "Please insert valid Last name"
                return;
            }
            let current_score = localStorage.getItem("points")
            let obj = {
                "name": `${name} ${lastName}`,
                "score": current_score
            }
            // why cannot push here ask Yarin
            highScores.push(obj);
            localStorage.setItem("scoreList", JSON.stringify(highScores));
            window.open('trivia.html')
        })
    }
}
/** check if local storage have exist array */
const checkLocal = () => {
    if (localStorage["scoreList"]) {
        console.log(localStorage["scoreList"]);
        highScores = JSON.parse(localStorage["scoreList"]);
    }
}

const clearField = () =>{
    document.querySelector("#name_err").innerHTML = ""
    document.querySelector("#lname_err").innerHTML = ""
}
init();