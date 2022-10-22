const lightBox_init = function () {
  createLightBoxHtml();
  declareEvents();
}


const createLightBoxHtml = function () {
  document.body.innerHTML += `
  <div id="light_box" class="light_box">
  <div class="inside_box">
    <img src="images/paypal.png" >
    <p>bal bal bal on the picture....</p>
    <button>close</button>
  </div>
  </div>
  `
}



const declareEvents = function () {
  let close_light_btn = document.querySelector("#light_box button");
  close_light_btn.addEventListener("click", function () {
    document.querySelector("#light_box").style.display = "none"
  })


  let imgList = document.querySelectorAll("img[data-img]");

  //console.log(imgList);
  imgList.forEach(function (itemElem) {
    itemElem.style.cursor = "pointer";
    itemElem.addEventListener("click", function () {
      let light_box = document.querySelector("#light_box");
      light_box.style.display = "flex"
      light_box.querySelector("img").src = itemElem.src;
      light_box.querySelector("p").innerHTML = itemElem.alt;
      // alert(itemElem.alt); 
    })
  })
}

lightBox_init();