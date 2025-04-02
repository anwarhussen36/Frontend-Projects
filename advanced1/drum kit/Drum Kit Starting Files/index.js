
var noOfDrum=document.querySelectorAll('.drum').length;

for(var i=0; i<noOfDrum; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        play(this.innerHTML);
        animateBtn(this.innerHTML);
    });
}



    document.addEventListener('keypress',function(event){
        play(event.key);
        animateBtn(event.key);
    });


    function play(letter){
        
        switch(letter){
            case 'w':
                var crash=new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case 'a':
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case 's':
                var snare=new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case 'd':
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case 'j':
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 'k':
                 var tom3=new Audio('sounds/tom-3.mp3');
                 tom3.play();
                break;
            case 'l':
                 var tom4=new Audio('sounds/tom-4.mp3');
                 tom4.play();
                break;
            default: console.log(letter);
        }
    }
    function animateBtn(currentkey){
        var activeBtn=document.querySelector('.'+currentkey);
        activeBtn.classList.toggle('pressed');

        setTimeout(function(){
            activeBtn.classList.remove('pressed');
        }, 1000);
    }




     //this.style.color='white';

        //var audi=new Audio('sounds/crash.mp3');
        //audi.play();