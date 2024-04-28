
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
 
    audio1.play();
    
    setTimeout(() => {
        audio2.play();
    },500);

    setTimeout(() => {
        audio3.play();
    },1000);

    setTimeout(() => {
        audio4.play();
    },1500);

    setTimeout(() => {
        audio5.play();
    },2000);

    setTimeout(() => {
        audio6.play();
    },2500);

    setTimeout(() => {
        audio7.play();
    },3000);

    setTimeout(() => {
        audio8.play();
    },3500);

    setTimeout(() => {
        audio9.play();
    },4000);

    setTimeout(() => {
        audio10.play();
    },4500);

    setTimeout(() => {
        audio11.play();
    },5000);

    setTimeout(() => {
        audio12.play();
    },5500);

    setTimeout(() => {
        audio13.play();
    },6000);

    setTimeout(() => {
        audio14.play();
    },6500);

    setTimeout(() => {
        audio15.play();
    },7000);

    setTimeout(() => {
        audio16.play();
    },7500);
}


document.getElementById('soundon').addEventListener('click', audio)