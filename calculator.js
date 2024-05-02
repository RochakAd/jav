const show= document.getElementById("screen");
let keep="";
function display(input){
    window.input = input;
    show.value +=input;
}
function waitForClick() {
    return new Promise((resolve) => {
      document.addEventListener("click", resolve, { once: true });
    });
    
  }

  
// Async function to simulate code execution pause
async function getUserInput() {
    await waitForClick(); // Pause until the document is clicked
    console.log("Waiting for click...");
    await waitForClick();
    //await waitForClick();
    show.value = input;
    console.log(`keep=${show.value}`);
  }

function cleardisplay(){
    show.value ="";
}
function calculate(){
    try{
        show.value= eval(show.value);
        console.log(show.value);
       getUserInput();
         
    }
    catch(error){
        show.value="Error"
        getUserInput();

    }
    
    
}
function removedigit(){
    let a= show.value;
    let b=a.length;
    
    show.value=a.slice(0,b-1);
}

  
  