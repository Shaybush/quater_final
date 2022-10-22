const bar = document.querySelector("#burger");

let nav = document.querySelector("#navbar");
let close_btn = document.querySelector("#close_btn");
let more_Information = document.querySelector("#id_details_show");
if (bar != null) {
  bar.addEventListener("click", () => {
    console.log("click");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      setTimeout(() => {
        bar.className = "fa fa-bars";
      }, 250)
      bar.style.color = "black"
      bar.className = "fa fa-minus";
      return;
    }
      nav.classList.add("active");
      setTimeout(() => {
        bar.className = "fa fa-times";
        bar.style.color = "red"
      }, 250)
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

