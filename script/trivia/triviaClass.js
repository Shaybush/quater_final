class TriviaClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.question = _item.question;
        this.answers = shuffle(_item.answers);
        // dont need it
        // this.correctAns = _item.correctAnswer;
    }
    render() {
        document.querySelector("#id_counterQ").innerHTML = `
        <h2>Question :  ${counter+1}/${trivia_list.length}</h2> 
        `
        document.querySelector("#id_question").innerHTML = `
        <h2 class="display-4">${this.question}</h2>
        `
        console.log(this.answers);
        let flag = false;
        this.answers.forEach((element) => {
            let btn_box = document.createElement("div");
            btn_box.className = "col-md-6 p-3";
            document.querySelector(this.parent).append(btn_box);
            let btn = document.createElement("button");
            btn.className = "btn w-100 btn-lg";
            btn.innerHTML = element.answer;
            btn_box.append(btn);
            btn.addEventListener("click", () => {
                //if click once on button cannot click again
                if (!flag) {
                    flag = true;
                    // click on correct answer
                    if (element.check == true) {
                        // for the high score update
                        points++;
                        console.log(`click ${element.answer}`);
                        btn.style.background = "green";
                    }
                    // click wrong answer
                    else {
                        console.log(`click ${element.answer}`);
                        btn.style.background = "red"
                    }
                    setTimeout(() => {
                        build_trivia()
                    }, 2000);
                }
            })
        });
    }
}

/** shuffle array places */
const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}