let screen= document.querySelector('#screen');
buttons= document.querySelectorAll('button');
let screenValue='';
for(b of buttons){
    b.addEventListener('click',function(){ 
    let buttontext= this.innerText;
    if(buttontext == 'C'){
        screenValue="";
        screen.value="";
    }
    else if(buttontext == '='){
       screen.value=eval(screenValue);
       screenValue= screen.value;
    }
    else{
    screenValue+=buttontext;
    screen.value=screenValue;
    }
})};