/*
   How to use it,
   First link slideStyle.css and slideScript.js then,

   You just have to create div having class images which is our parent div
   make their child div as many as image you want to make(recomended-max-12) and every that child divs' class should be image and
   that every child should contain image with  img tag
   Example

      <div class="images" id="images">    
          <div class="image">
                <img src="source1.jpg"  alt="">
          </div> 
         <div class="image">
              <img src="source.jpg"  alt="">
          </div>
          <div class="image">
                <img src="./images/"source3.jpg"  alt="">
          </div>   
          <div class="image">
              <img src"source4.jpg"  alt="">
          </div> 
          <div class="image">
              <img src="source5.jpg" alt="">
          </div>
    </div> 
*/

let imagesDiv = document.getElementById("images");
let images = document.getElementsByClassName("image");
let index = 0;
let afterImagesHTML = "";

if (imagesDiv != null) {
  for (let i = 1; i <= images.length; i++) {
    afterImagesHTML += ` <div class="dot"></div>`;
  }

  let dots = document.createElement("div");
  dots.classList.add("dots");
  dots.innerHTML = afterImagesHTML;
  imagesDiv.parentElement.append(dots);
  run();

  function run() {
    document.getElementsByClassName("dot")[0].classList.add("dot-active");
    let dots = Array.from(document.getElementsByClassName("dot"));
    function slide() {
      dots.forEach(function (dot) {
        dot.classList.remove("dot-active");
      });
      index++;
      index = index % dots.length;
      dots[index].classList.add("dot-active");
      imagesDiv.scrollTo({
        top: 0,
        left: 600 * index,
        behavior: "smooth",
      });
    }
    setInterval(() => {
      slide();
    }, 3000);

    dots.forEach(function (dot, number) {
      dots[number].addEventListener("click", () => {
        index = number - 1;
        slide();
      });
    });
  }
}


// By Parth Shrimali