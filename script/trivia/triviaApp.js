let trivia_list = [];
let counter = -1, points = 0;
let highScores = [];
const init = () => {
    getApiRequest();
}

/** getting the data from secure api */
const getApiRequest = () => {
    // setting the url 
    let url = "https://api.jsonbin.io/v3/b/62e240f88ebcdb7588453b4e"
    // axios get with master key (private JSON)
    axios.get(url, {
        headers: {
            "X-Master-Key": "$2b$10$qX5KcsGIkrTwK8ydTZQsp.GbFVAdhGMJgBRDjR7IBw6TCWSZbWI12",
        }
    })
        //resp have whole api request we needed just the data 
        .then(function (resp) {
            // record holding our data the *global* variable trivia list - holding our data
            trivia_list = resp.data.record;
            build_trivia();
        })
}
/** build the trivia game with data from api request  */
const build_trivia = () => {
    // if the api request succeeded
    if (trivia_list) {
        // Reset all variables
        document.querySelector("#id_question").innerHTML = "";
        document.querySelector("#id_answers").innerHTML = "";
        // for getting the next place
        counter++;
        if (counter < trivia_list.length) {
            // sheffle the answers
            shuffle(trivia_list[counter].answers)
            let box_trivia = new TriviaClass("#id_answers", trivia_list[counter]);
            // render it direcly in the class
        }
        else {
            // update the local storage with the current points
            localStorage.setItem("points",`${points} of ${trivia_list.length}`)
            // not working with iphone
            // window.open('afterGame.html');
            window.location.assign('afterGame.html')
        }
    }
}


init();