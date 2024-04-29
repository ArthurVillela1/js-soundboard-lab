
const buttonWorkIt = document.querySelector('#workit')
const buttonMakeIt = document.querySelector('#makeit')
const buttonDoIt = document.querySelector('#doit')
const buttonMakesUs = document.querySelector('#makesus')
const buttonHarder = document.querySelector('#harder')
const buttonBetter = document.querySelector('#better')
const buttonFaster = document.querySelector('#faster')
const buttonStronger = document.querySelector('#stronger')
const buttonMoreThan = document.querySelector('#morethan')
const buttonHour = document.querySelector('#hour')
const buttonOur = document.querySelector('#our')
const buttonNever = document.querySelector('#never')
const buttonEver = document.querySelector('#ever')
const buttonAfter = document.querySelector('#after')
const buttonWorkIs = document.querySelector('#workis')
const buttonOver = document.querySelector('#over')

const audioPlayer = document.querySelector('audio')

function playWorkIt() {
    audioPlayer.src = './sounds/work_it.wav'
    audioPlayer.play() 
}

function playMakeIt() {
    audioPlayer.src = './sounds/make_it.wav'
    audioPlayer.play() 
}

function playDoIt() {
    audioPlayer.src = './sounds/do_it.wav'
    audioPlayer.play() 
}

function playMakesUs() {
    audioPlayer.src = './sounds/makes_us.wav'
    audioPlayer.play() 
}

function playHarder() {
    audioPlayer.src = './sounds/harder.wav'
    audioPlayer.play() 
}

function playBetter() {
    audioPlayer.src = './sounds/better.wav'
    audioPlayer.play() 
}

function playFaster() {
    audioPlayer.src = './sounds/faster.wav'
    audioPlayer.play() 
}

function playStronger() {
    audioPlayer.src = './sounds/stronger.wav'
    audioPlayer.play() 
}

function playMoreThan() {
    audioPlayer.src = './sounds/more_than.wav'
    audioPlayer.play() 
}

function playHour() {
    audioPlayer.src = './sounds/hour.wav'
    audioPlayer.play() 
}

function playOur() {
    audioPlayer.src = './sounds/our.wav'
    audioPlayer.play() 
}

function playNever() {
    audioPlayer.src = './sounds/never.wav'
    audioPlayer.play() 
}

function playEver() {
    audioPlayer.src = './sounds/ever.wav'
    audioPlayer.play() 
}

function playAfter() {
    audioPlayer.src = './sounds/after.wav'
    audioPlayer.play() 
}

function playWorkIs() {
    audioPlayer.src = './sounds/work_is.wav'
    audioPlayer.play() 
}

function playOver() {
    audioPlayer.src = './sounds/over.wav'
    audioPlayer.play() 
}

buttonWorkIt.addEventListener('click', playWorkIt)
buttonMakeIt.addEventListener('click', playMakeIt)
buttonDoIt.addEventListener('click', playDoIt)
buttonMakesUs.addEventListener('click', playMakesUs)
buttonHarder.addEventListener('click', playHarder)
buttonBetter.addEventListener('click', playBetter)
buttonFaster.addEventListener('click', playFaster)
buttonStronger.addEventListener('click', playStronger)
buttonMoreThan.addEventListener('click', playMoreThan)
buttonHour.addEventListener('click', playHour)
buttonOur.addEventListener('click', playOur)
buttonNever.addEventListener('click', playNever)
buttonEver.addEventListener('click', playEver)
buttonAfter.addEventListener('click', playAfter)
buttonWorkIs.addEventListener('click', playWorkIs)
buttonOver.addEventListener('click', playOver)

const buttons = [workit, makeit, doit, makesus, harder, better, faster, stronger, morethan, hour, our, never, ever, after, workis, over]

function randomize(){
    const sound = buttons[Math.floor(Math.random()*buttons.length)];

    if(sound === workit){
        audioPlayer.src = './sounds/work_it.wav'
        audioPlayer.play() 
    } else if(sound === makeit){
        audioPlayer.src = './sounds/make_it.wav'
        audioPlayer.play() 
    } else if(sound === doit){
        audioPlayer.src = './sounds/do_it.wav'
        audioPlayer.play() 
    } else if(sound === makesus){
        audioPlayer.src = './sounds/makes_us.wav'
        audioPlayer.play() 
    } else if(sound === harder){
        audioPlayer.src = './sounds/harder.wav'
        audioPlayer.play() 
    } else if(sound === better){
        audioPlayer.src = './sounds/better.wav'
        audioPlayer.play()  
    } else if(sound === faster){
        audioPlayer.src = './sounds/faster.wav'
        audioPlayer.play()  
    } else if(sound === stronger){
        audioPlayer.src = './sounds/stronger.wav'
        audioPlayer.play() 
    } else if(sound === morethan){
        audioPlayer.src = './sounds/more_than.wav'
        audioPlayer.play() 
    } else if(sound === hour){
        audioPlayer.src = './sounds/hour.wav'
        audioPlayer.play() 
    } else if(sound === our){
        audioPlayer.src = './sounds/our.wav'
        audioPlayer.play() 
    } else if(sound === never){
        audioPlayer.src = './sounds/never.wav'
        audioPlayer.play() 
    } else if(sound === ever){
        audioPlayer.src = './sounds/ever.wav'
        audioPlayer.play() 
    } else if(sound === after){
        audioPlayer.src = './sounds/after.wav'
        audioPlayer.play() 
    } else if(sound === workis){
        audioPlayer.src = './sounds/work_is.wav'
        audioPlayer.play() 
    } else if(sound === over){
        audioPlayer.src = './sounds/over.wav'
        audioPlayer.play() 
    }
}

const buttonRandomize = document.querySelector('#randomize')
buttonRandomize.addEventListener('click', randomize)

//-----------------------------------------------------------------------------------------------------//

function audio(){
    var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    var audio3 = document.getElementById('audio3');
    var audio4 = document.getElementById('audio4');
    var audio5 = document.getElementById('audio5');
    var audio6 = document.getElementById('audio6');
    var audio6 = document.getElementById('audio7');
    var audio8 = document.getElementById('audio8');
    var audio9 = document.getElementById('audio9');
    var audio10 = document.getElementById('audio10');
    var audio11 = document.getElementById('audio11');
    var audio12 = document.getElementById('audio12');
    var audio13 = document.getElementById('audio13');
    var audio14 = document.getElementById('audio14');
    var audio15 = document.getElementById('audio15');
    var audio16 = document.getElementById('audio16');
 
    buttonWorkIt.style.backgroundColor = 'black';
    buttonWorkIt.style.color = 'white';
    
    setTimeout(() => {
        audio2.play();
        buttonWorkIt.style.backgroundColor = 'white';
        buttonWorkIt.style.color = '#873600';

        buttonHarder.style.backgroundColor = 'black';
        buttonHarder.style.color = 'white';
    },500);

    setTimeout(() => {
        audio3.play();
        buttonHarder.style.backgroundColor = 'white';
        buttonHarder.style.color = '#873600';

        buttonMakeIt.style.backgroundColor = 'black';
        buttonMakeIt.style.color = 'white';
    },1000);

    setTimeout(() => {
        audio4.play();
        buttonMakeIt.style.backgroundColor = 'white';
        buttonMakeIt.style.color = '#873600';

        buttonBetter.style.backgroundColor = 'black';
        buttonBetter.style.color = 'white';
    },1500);

    setTimeout(() => {
        audio5.play();
        buttonBetter.style.backgroundColor = 'white';
        buttonBetter.style.color = '#873600';

        buttonDoIt.style.backgroundColor = 'black';
        buttonDoIt.style.color = 'white';
    },2000);

    setTimeout(() => {
        audio6.play();
        buttonDoIt.style.backgroundColor = 'white';
        buttonDoIt.style.color = '#873600';

        buttonFaster.style.backgroundColor = 'black';
        buttonFaster.style.color = 'white';
    },2500);

    setTimeout(() => {
        audio7.play();
        buttonFaster.style.backgroundColor = 'white';
        buttonFaster.style.color = '#873600';

        buttonMakesUs.style.backgroundColor = 'black';
        buttonMakesUs.style.color = 'white';
    },3000);

    setTimeout(() => {
        audio8.play();
        buttonMakesUs.style.backgroundColor = 'white';
        buttonMakesUs.style.color = '#873600';

        buttonStronger.style.backgroundColor = 'black';
        buttonStronger.style.color = 'white';
    },3500);

    setTimeout(() => {
        audio9.play();
        buttonStronger.style.backgroundColor = 'white';
        buttonStronger.style.color = '#873600';

        buttonMoreThan.style.backgroundColor = 'black';
        buttonMoreThan.style.color = 'white';
    },4000);

    setTimeout(() => {
        audio10.play();
        buttonMoreThan.style.backgroundColor = 'white';
        buttonMoreThan.style.color = '#873600';

        buttonEver.style.backgroundColor = 'black';
        buttonEver.style.color = 'white';
    },4500);

    setTimeout(() => {
        audio11.play();
        buttonEver.style.backgroundColor = 'white';
        buttonEver.style.color = '#873600';

        buttonHour.style.backgroundColor = 'black';
        buttonHour.style.color = 'white';
    },5000);

    setTimeout(() => {
        audio12.play();
        buttonHour.style.backgroundColor = 'white';
        buttonHour.style.color = '#873600';

        buttonAfter.style.backgroundColor = 'black';
        buttonAfter.style.color = 'white';
    },5500);

    setTimeout(() => {
        audio13.play();
        buttonAfter.style.backgroundColor = 'white';
        buttonAfter.style.color = '#873600';

        buttonOur.style.backgroundColor = 'black';
        buttonOur.style.color = 'white';
    },6000);

    setTimeout(() => {
        audio14.play();
        buttonOur.style.backgroundColor = 'white';
        buttonOur.style.color = '#873600';

        buttonWorkIs.style.backgroundColor = 'black';
        buttonWorkIs.style.color = 'white';
    },6500);

    setTimeout(() => {
        audio15.play();
        buttonWorkIs.style.backgroundColor = 'white';
        buttonWorkIs.style.color = '#873600';

        buttonNever.style.backgroundColor = 'black';
        buttonNever.style.color = 'white';
    },7000);

    setTimeout(() => {
        audio16.play();
        buttonNever.style.backgroundColor = 'white';
        buttonNever.style.color = '#873600';

        buttonOver.style.backgroundColor = 'black';
        buttonOver.style.color = 'white';
    },7500);

    setTimeout(() => {
    buttonOver.style.backgroundColor = 'white';
    buttonOver.style.color = '#873600';
    },8000);
    
}


document.getElementById('soundon').addEventListener('click', audio)


buttonWorkIt.addEventListener('mouseover', () => {
    buttonWorkIt.style.backgroundColor = 'black';
    buttonWorkIt.style.color = 'white';
  });
  
buttonWorkIt.addEventListener('mouseout', () => {
    buttonWorkIt.style.backgroundColor = 'white';
    buttonWorkIt.style.color = '#873600';
  });

  
buttonHarder.addEventListener('mouseover', () => {
    buttonHarder.style.backgroundColor = 'black';
    buttonHarder.style.color = 'white';
  });
  
buttonHarder.addEventListener('mouseout', () => {
    buttonHarder.style.backgroundColor = 'white';
    buttonHarder.style.color = '#873600';
  });

buttonMakeIt.addEventListener('mouseover', () => {
    buttonMakeIt.style.backgroundColor = 'black';
    buttonMakeIt.style.color = 'white';
  });
  
buttonMakeIt.addEventListener('mouseout', () => {
    buttonMakeIt.style.backgroundColor = 'white';
    buttonMakeIt.style.color = '#873600';
  });

buttonBetter.addEventListener('mouseover', () => {
    buttonBetter.style.backgroundColor = 'black';
    buttonBetter.style.color = 'white';
  });
  
buttonBetter.addEventListener('mouseout', () => {
    buttonBetter.style.backgroundColor = 'white';
    buttonBetter.style.color = '#873600';
  });

buttonDoIt.addEventListener('mouseover', () => {
    buttonDoIt.style.backgroundColor = 'black';
    buttonDoIt.style.color = 'white';
  });
  
buttonDoIt.addEventListener('mouseout', () => {
    buttonDoIt.style.backgroundColor = 'white';
    buttonDoIt.style.color = '#873600';
  });

buttonFaster.addEventListener('mouseover', () => {
    buttonFaster.style.backgroundColor = 'black';
    buttonFaster.style.color = 'white';
  });
  
buttonFaster.addEventListener('mouseout', () => {
    buttonFaster.style.backgroundColor = 'white';
    buttonFaster.style.color = '#873600';
  });

buttonMakesUs.addEventListener('mouseover', () => {
    buttonMakesUs.style.backgroundColor = 'black';
    buttonMakesUs.style.color = 'white';
  });
  
buttonMakesUs.addEventListener('mouseout', () => {
    buttonMakesUs.style.backgroundColor = 'white';
    buttonMakesUs.style.color = '#873600';
  });

buttonStronger.addEventListener('mouseover', () => {
    buttonStronger.style.backgroundColor = 'black';
    buttonStronger.style.color = 'white';
  });
  
buttonStronger.addEventListener('mouseout', () => {
    buttonStronger.style.backgroundColor = 'white';
    buttonStronger.style.color = '#873600';
  });

buttonMoreThan.addEventListener('mouseover', () => {
    buttonMoreThan.style.backgroundColor = 'black';
    buttonMoreThan.style.color = 'white';
  });
  
buttonMoreThan.addEventListener('mouseout', () => {
    buttonMoreThan.style.backgroundColor = 'white';
    buttonMoreThan.style.color = '#873600';
  });

buttonEver.addEventListener('mouseover', () => {
    buttonEver.style.backgroundColor = 'black';
    buttonEver.style.color = 'white';
  });
  
buttonEver.addEventListener('mouseout', () => {
    buttonEver.style.backgroundColor = 'white';
    buttonEver.style.color = '#873600';
  });

buttonHour.addEventListener('mouseover', () => {
    buttonHour.style.backgroundColor = 'black';
    buttonHour.style.color = 'white';
  });
  
buttonHour.addEventListener('mouseout', () => {
    buttonHour.style.backgroundColor = 'white';
    buttonHour.style.color = '#873600';
  });

buttonAfter.addEventListener('mouseover', () => {
    buttonAfter.style.backgroundColor = 'black';
    buttonAfter.style.color = 'white';
  });
  
 buttonAfter.addEventListener('mouseout', () => {
    buttonAfter.style.backgroundColor = 'white';
    buttonAfter.style.color = '#873600';
  });

buttonOur.addEventListener('mouseover', () => {
    buttonOur.style.backgroundColor = 'black';
    buttonOur.style.color = 'white';
  });
  
 buttonOur.addEventListener('mouseout', () => {
    buttonOur.style.backgroundColor = 'white';
    buttonOur.style.color = '#873600';
  });

buttonWorkIs.addEventListener('mouseover', () => {
    buttonWorkIs.style.backgroundColor = 'black';
    buttonWorkIs.style.color = 'white';
  });
  
buttonWorkIs.addEventListener('mouseout', () => {
    buttonWorkIs.style.backgroundColor = 'white';
    buttonWorkIs.style.color = '#873600';
  });

buttonNever.addEventListener('mouseover', () => {
    buttonNever.style.backgroundColor = 'black';
    buttonNever.style.color = 'white';
  });
  
buttonNever.addEventListener('mouseout', () => {
    buttonNever.style.backgroundColor = 'white';
    buttonNever.style.color = '#873600';
  });

buttonOver.addEventListener('mouseover', () => {
    buttonOver.style.backgroundColor = 'black';
    buttonOver.style.color = 'white';
  });
  
buttonOver.addEventListener('mouseout', () => {
    buttonOver.style.backgroundColor = 'white';
    buttonOver.style.color = '#873600';
  });