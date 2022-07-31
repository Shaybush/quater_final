let obj_scores = [];
const init = () => {
    updateUi();
}
const updateUi = () => {
    obj_scores = JSON.parse(localStorage["scoreList"])
    document.querySelector("#id_tbody").innerHTML = "";
    obj_scores.forEach(element => {
      let tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${element.name}</td>
        <td>${element.score}</td>
      `
      document.querySelector("#id_tbody").append(tr);
    });

}



init();