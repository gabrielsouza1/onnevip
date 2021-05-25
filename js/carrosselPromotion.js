export default function carrosselPromotion(buttonLeft, buttonRight, carrossel, liCarrossel){
  const btnRight = document.querySelector(buttonRight);
  const btnLeft = document.querySelector(buttonLeft);
  const ulCarrossel = document.querySelector(carrossel);
  const licarrossel = document.querySelectorAll(liCarrossel);
  let position = 0;
  console.log(btnRight)

  btnRight.addEventListener('click', () => {
    position--;
    if(position < -(licarrossel.length - 1)){
      position = 0;
      ulCarrossel.style.transform = `translateX(0px)`
    }else{
      ulCarrossel.style.transform = `translateX(${position * 280 }px)`
    }
  })

  btnLeft.addEventListener('click', () => {
    position++;
    if(position > 0){
      position = -(licarrossel.length - 1);
      ulCarrossel.style.transform = `translateX(-${280 * (licarrossel.length - 1)}px)`
    }else{
      ulCarrossel.style.transform = `translateX(${position * 280 }px)`
    }
  })
}