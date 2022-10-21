const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const inputFld = document.getElementById("inpt")
const genBtn = document.getElementById("gen")
const pswrda = document.getElementById("b1")
const pswrdb = document.getElementById("b2")
const pswrdc = document.getElementById("b3")
let val =[]
let valuea = ""
let valueb = ""
let valuec = ""

function random () {
    
    if(inputFld.value < 14 && inputFld.value > 7){
    for(let i = 0 ; i < inputFld.value  ; i++){
      
        valuea += characters[Math.floor(Math.random()*90)]
        valueb += characters[Math.floor(Math.random()*90)]
        valuec += characters[Math.floor(Math.random()*90)]
    }
    } else {
        alert("Please input a number between 8 and 13")
        valuea ="Password"
        valueb ="Password"
        valuec ="Password"
    }
}



genBtn.addEventListener('click', function () {
    
     random()
     pswrda.textContent = valuea
    
     pswrdb.textContent = valueb
     
     pswrdc.textContent = valuec

     valuea = ""
     valueb = ""
     valuec = ""
}
)

function copyText(val) {
      
    navigator.clipboard.writeText
        (val)
}

