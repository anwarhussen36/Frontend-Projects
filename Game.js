
var found=0;
var live=20;

document.querySelector('.live').innerHTML=live;
document.querySelector('.found').innerHTML=found;


const carList=[
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
    "images/10.png",
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    "images/9.png",
    "images/10.png",
];
 // var double_car=carList.concat(carList);
 function double_sort(){

    if(Math.floor(Math.random()*10)>5)
        return 1;
    else
        return -1;
}

const container=()=>{
    const random_car=carList.sort(double_sort);

    carList.forEach((item,index) => {

    const back=document.createElement('img');
    back.classList.add('back');
    back.src='images/0.png';
    back.setAttribute('name', item);

    document.querySelector('.cars').appendChild(back);

    back.addEventListener('click', (e)=>{
        if(!back.classList.contains('front')){
            back.src=item;
           back.classList.add('front');
            checkcar(e,item);
        }
    });
    
 });
};


const checkcar = (e, item) => {
    const clickedcar = e.target;
    const frontcar = document.querySelectorAll('.front');
 if (frontcar.length === 1) {
   setTimeout(() => {
                    frontcar.classList.remove('front');
                },1000);
 }
    if (frontcar.length === 2) {
        if (frontcar[0].getAttribute('name') === frontcar[1].getAttribute('name')) {
            found++;
            document.querySelector('.found').innerHTML=found;
            if (found === 10) {
                document.querySelector('.result').innerHTML='Congratulation you have matched all. resetting...';
                document.querySelector('.result').style.color='green';
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }

            frontcar.forEach((car) => car.classList.remove('front'));
        } 
        else {

            live--;
            document.querySelector('.live').innerHTML=live;
            if (live === 0) {
               document.querySelector('.title').innerHTML='Game Over!';
                document.querySelector('.result').innerHTML='Try Again!. Resetting Back...';
                document.querySelector('.result').style.color='red';
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }

            setTimeout(() => {
                frontcar.forEach((car) => {
                    car.classList.remove('front');
                    car.src = 'images/0.png';
                });
            }, 1000);

        }
    }
};

container();