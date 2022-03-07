
const select = document.querySelector('select[name="country"]');

const iteam = document.querySelectorAll('.iteam');

const khali = document.querySelector('.khali');

const kaka = document.querySelector('#dhaka');
const Noyakhaili = document.querySelector('#Noyakhaili');




select.addEventListener('click', function(){

  if(select.value=="Dhaka"){

    khali.innerHTML= `<p>Bujber paro nah ami tomare valobasi</p>`

  }else if(select.value=="Noyakhaili"){

    
    khali.innerHTML= `<p>ai tore onek valobasi</p>`
   
     }else if(select.value=="Sylet"){

        khali.innerHTML= `<p>Ami tomake valobasi</p>`
    
      }else if(select.value=="Chottogaram"){

        khali.innerHTML= `<p>-এক্কানা গরি ভালোবাসা দিত ন পাইত্তো লাইগগোদে না</p>`
    
      };


 });









