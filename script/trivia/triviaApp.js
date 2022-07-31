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
        //   resp have whole api request we needed just the data 
        .then(function (resp) {
            // console.log(resp);
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
        // for getting the next 
        counter++;
        if (counter < trivia_list.length) {
            shuffle(trivia_list[counter].answers)
            let box_trivia = new TriviaClass("#id_answers", trivia_list[counter]);
            box_trivia.render();
        }
        else {
            // alert(`your points ${points} from ${trivia_list.length}`);
            localStorage.setItem("points",`${points} of ${trivia_list.length}`)
            window.open('afterGame.html');
        }
    }
}


init();