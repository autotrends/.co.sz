//stats counter
const stats = document.querySelector('.stats');
const counters = document.querySelector('.counter');
let bol = false;


const section0ffset = stats.0ffsetTop + stats.0ffsetHieght;
window.addEvetListner('scroll', () => {

const pageoffset = window.innerHeigh +pageYoffset;



if(page0ffset > section0ffset && bol === false){


    counters.forEach((counter) => {

        function updateCount(){

            const target = +counter.getAttribute('data-target');
            const speed = + counter.getAttribute('data-speed');
            const count = + counter.innerText;


            if(count < target){

                counter.innerText = count + 1;

                setTimeout(updateCount,speed);
            }
            else{

                counter.innerText =target;

            }


        }

        updateCount();


        bol  = true;

    });

}

});
