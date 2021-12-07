
 
let btn = document.getElementById("time");
btn.addEventListener("click",Bold);


function Bold(){

        var bol =document.getElementById('new').style.fontWeight
        ;
        if(bol=='normal'){
            document.getElementById('new').style.fontWeight='bold';
        }
        else{
            document.getElementById('new').style.fontWeight='normal';
        }
    }

let btnA = document.getElementById("look");
btnA.addEventListener("click",italic);


function italic(){
    var bol=document.getElementById('new').style.fontStyle
    ;
    if(bol=='normal'){
        document.getElementById('new').style.fontStyle='Italic';
    }
    else{
        document.getElementById('new').style.fontStyle='normal';
    }
}


let btnB = document.getElementById("content");
btnB.addEventListener("click",underline);


function underline(){
    var bol=document.getElementById('new').style.textDecoration;
    ;
    if(bol!=='underline'){
        document.getElementById('new').style.textDecoration='underline';
    }
    else{
        document.getElementById('new').style.textDecoration='none';
    }
}

let btnC = document.getElementById("context");
btnC.addEventListener("click",reset);


function reset(){
    document.getElementById('new').style.fontStyle='Normal';
    document.getElementById('new').style.textDecoration='none';
    document.getElementById('new').style.fontWeight='normal';
}


let btnD = document.getElementById("clean");
btnD.addEventListener("click",remove);


function remove(){
    document.getElementById('new').value="";
 
}

let btnG =document.getElementById("new");
btnG.addEventListener("keyup", newline);

function newline(event){
   if(event.keyCode === 13){
       event.preventDefault();
       document.getElementById("new").click();

   }
    
}
   
