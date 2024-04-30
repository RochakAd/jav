let RandomNumber;
let Hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
let RanHex=[0,1,2,3,4,5];

function Get_RandomHex(){ //gives random hex values
    for(let i=0;i<6;i++){   
   RandomNumber=Math.floor((Math.random())*16); 
   RanHex[i]=Hex[RandomNumber];
    }
    let rng=RanHex.join('');
    rng= ['#']+rng; //adds a '#' to the hex values
    console.log(rng);
    return (rng);
   }
   
let FirstColor=Get_RandomHex();
let SecondColor=Get_RandomHex();
let Thirdcolor=Get_RandomHex();
let Fourthcolor=Get_RandomHex();
let FifthColor=Get_RandomHex();
let SixthColor=Get_RandomHex();


console.log(FirstColor);
console.log(SecondColor);
console.log(Thirdcolor);
console.log(Fourthcolor);
console.log(FifthColor);
console.log(SixthColor);

document.querySelector("#FirstButton").innerHTML=FirstColor;    //sets the values of the buttons
document.querySelector("#SecondButton").innerHTML=SecondColor;
document.querySelector("#ThirdButton").innerHTML=Thirdcolor;  
document.querySelector("#FourthButton").innerHTML=Fourthcolor;
document.querySelector("#FifthButton").innerHTML=FifthColor;
document.querySelector("#SixthButton").innerHTML=SixthColor;

document.getElementById("FirstButton").style.backgroundColor = FirstColor; //sets the background of the buttons
document.getElementById("SecondButton").style.backgroundColor = SecondColor;
document.getElementById("ThirdButton").style.backgroundColor = Thirdcolor;
document.getElementById("FourthButton").style.backgroundColor = Fourthcolor;
document.getElementById("FifthButton").style.backgroundColor = FifthColor;
document.getElementById("SixthButton").style.backgroundColor = SixthColor;


document.getElementById("FirstButton").onclick =function(){ //sets the color of the background
    document.getElementById("my body").style.backgroundColor = FirstColor;
   
}
document.getElementById("SecondButton").onclick =function(){
    document.getElementById("my body").style.backgroundColor = SecondColor;
    
}
document.getElementById("ThirdButton").onclick =function(){
    document.getElementById("my body").style.backgroundColor = Thirdcolor;
    
}
document.getElementById("FourthButton").onclick =function(){
    document.getElementById("my body").style.backgroundColor = Fourthcolor;
    
}
document.getElementById("FifthButton").onclick =function(){
    document.getElementById("my body").style.backgroundColor = FifthColor;
    
}
document.getElementById("SixthButton").onclick = function(){
    document.getElementById("my body").style.backgroundColor = SixthColor;
    
}
document.getElementById("RandomButton").onclick = function()
{                                                                     // randomizes values again
    FirstColor=Get_RandomHex();
    SecondColor=Get_RandomHex();
    Thirdcolor=Get_RandomHex();
    Fourthcolor=Get_RandomHex();
    FifthColor=Get_RandomHex();
    SixthColor=Get_RandomHex();
    
    
    
    document.querySelector("#FirstButton").innerHTML=FirstColor;    //sets the values of the buttons
    document.querySelector("#SecondButton").innerHTML=SecondColor;
    document.querySelector("#ThirdButton").innerHTML=Thirdcolor;  
    document.querySelector("#FourthButton").innerHTML=Fourthcolor;
    document.querySelector("#FifthButton").innerHTML=FifthColor;
    document.querySelector("#SixthButton").innerHTML=SixthColor;
    
    document.getElementById("FirstButton").style.backgroundColor = FirstColor; //sets the background of the buttons
    document.getElementById("SecondButton").style.backgroundColor = SecondColor;
    document.getElementById("ThirdButton").style.backgroundColor = Thirdcolor;
    document.getElementById("FourthButton").style.backgroundColor = Fourthcolor;
    document.getElementById("FifthButton").style.backgroundColor = FifthColor;
    document.getElementById("SixthButton").style.backgroundColor = SixthColor;
    
    
    document.getElementById("FirstButton").onclick =function(){ //sets the color of the background
        document.getElementById("my body").style.backgroundColor = FirstColor;
       
    }
    document.getElementById("SecondButton").onclick =function(){
        document.getElementById("my body").style.backgroundColor = SecondColor;
        
    }
    document.getElementById("ThirdButton").onclick =function(){
        document.getElementById("my body").style.backgroundColor = Thirdcolor;
        
    }
    document.getElementById("FourthButton").onclick =function(){
        document.getElementById("my body").style.backgroundColor = Fourthcolor;
        
    }
    document.getElementById("FifthButton").onclick =function(){
        document.getElementById("my body").style.backgroundColor = FifthColor;
        
    }
    document.getElementById("SixthButton").onclick =function(){
        document.getElementById("my body").style.backgroundColor = SixthColor;
        
    }
}



