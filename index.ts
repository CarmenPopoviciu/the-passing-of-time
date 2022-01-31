// Import stylesheets
import './style.css';

let reminder: number;

const timeInputEl: HTMLElement = document.querySelector('.time-input-screen');
const timelapseEl: HTMLElement = document.querySelector('.time-lapse-screen');

const input: HTMLInputElement = document.querySelector('.input-container input');
const beginBtn: HTMLButtonElement = document.querySelector('.begin-btn');

const ensoCircle: SVGElement = document.querySelector('svg circle');
const counterEl: HTMLElement = document.querySelector('.counter');

input.addEventListener('keyup', timeInputHandler);
beginBtn.addEventListener('click', beginMeditation);


function timeInputHandler(ev: KeyboardEvent) {
  const input = ev.currentTarget as HTMLInputElement;
  reminder = parseFloat(input.value);
}

function beginMeditation() {
  if(!reminder) return;

  transitionFromTimeInputToTimeLapseScreen();
  startTimeCounter();
  playGong(reminder * 60000);
}

/**
 * will eventually play a gong sound as well, but for now just handles the time counter 
 * animation :shrug:
 */
function playGong(delayMs: number) {
  ensoCircle.style['animation'] = `${delayMs}ms circletimer linear forwards`;
}

function startTimeCounter() {
  let seconds = 0;
  let minutes = 0;

  setInterval(() => {
    if(seconds < 59) seconds++;
    else {
      seconds = 0;
      minutes++;
    }

    counterEl.innerHTML = `${((minutes < 10) ? `0${minutes}` : minutes)}:${((seconds < 10) ? `0${seconds}` : seconds)}`;
  }, 1000);
}

/**
 * triggers the transition between the time-input screen to the time-lapse screen
 */
function transitionFromTimeInputToTimeLapseScreen() {
  timeInputEl.style.display = 'none';
  timelapseEl.style.display = 'block';
}