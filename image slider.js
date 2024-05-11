console.log("test")
const slides=document.querySelectorAll(".slides img")
let  SlideIndex=0;
let IntervalId=null;
console.log(slides.length)

document.addEventListener("DOMContentLoaded",IntilizeSlider);
function IntilizeSlider(){
  if(slides.length>0){ //checks if an image can be loaded
    slides[SlideIndex].classList.add("display"); // adds the class of display to the img
  }
}
function ShowSlide(index){
    //to set the index to 0 to loop the slides
    if(index>=slides.length){
        SlideIndex=0;

    }
    //to go to last image when index is at 0 
    else if(index<0){
        SlideIndex=slides.length-1;
    }

    slides.forEach(slide =>{
        slide.classList.remove("display"); //removes the class display
    });
    slides[SlideIndex].classList.add("display");

}
function PrevSlide(){
    SlideIndex--
    ShowSlide(SlideIndex);
}
function NextSlide(){
    SlideIndex++
    ShowSlide(SlideIndex);
}