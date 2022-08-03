// המבורגר
// const bar = document.getElementById("burger");
const bar = document.querySelector("#burger");

// התפריט הרגיל
let nav = document.querySelector("#navbar");
// סגירה של דיב צדדי פרסומת
let close_btn = document.querySelector("#close_btn");
// פתיחה של מידע נוסף
let more_Information = document.querySelector("#id_details_show");
// אם המבורגר הופיע
if (bar != null) {
  // תחכה עד שיהיה קליק עליו
  bar.addEventListener("click", () => {
    console.log("click");
    // אחרי שלחצת עליו תוסיף לנאב בר אקטיב
    // יופיע באנימציה מאיקס לברס
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      setTimeout(() => {
        bar.className = "fa fa-bars";
      }, 100)
      bar.style.color = "black"
      bar.className = "fa fa-minus";
      return;
    }
      nav.classList.add("active");
      setTimeout(() => {
        bar.className = "fa fa-times";
        bar.style.color = "red"
      }, 100)
      bar.className = "fa fa-minus";
  });
}
if (close_btn != null) {
  close_btn.addEventListener("click", () => {
    let aside = document.querySelector("aside");
    aside.classList = "d-none";
  })
}
if (more_Information != null) {
  more_Information.addEventListener("click", () => {
    let details = document.querySelector("#id_more");
    if (details.classList.contains("d-none")) {
      details.classList.remove("d-none");
      more_Information.innerHTML = "show less"
      more_Information.style.color = "red"
    }
    else {
      details.classList.add("d-none");
      more_Information.innerHTML = "...see more"
      more_Information.style.color = "black"
    }
  })

}
// function readMore() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }

