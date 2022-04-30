import frozenFem from '../assets/tts/frozen-female.mp3';
import stoppedFem from '../assets/tts/stopped-female.mp3';
import stunnedFem from '../assets/tts/stunned-female.mp3';
import insubFem from '../assets/tts/insub-female.mp3';
import cursedFem from '../assets/tts/cursed-female.mp3';
import fragileFem from '../assets/tts/fragile-female.mp3';
import immuneFem from '../assets/tts/immune-female.mp3';
import outOfGameFem from '../assets/tts/outOfGame-female.mp3';
import frozenMasc from '../assets/tts/frozen-male.mp3';
import stoppedMasc from '../assets/tts/stopped-male.mp3';
import stunnedMasc from '../assets/tts/stunned-male.mp3';
import insubMasc from '../assets/tts/insub-male.mp3';
import suppressedMasc from '../assets/tts/suppressed-male.mp3';
import cursedMasc from '../assets/tts/cursed-male.mp3';
import fragileMasc from '../assets/tts/fragile-male.mp3';
import immuneMasc from '../assets/tts/immune-male.mp3';
import outOfGameMasc from '../assets/tts/outOfGame-male.mp3';
import suppressedFem from '../assets/tts/suppressed-female.mp3';
import noLongerMasc from '../assets/tts/no-longer-male.mp3';
import noLongerFem from '../assets/tts/no-longer-female.mp3';
import aliveMasc from '../assets/tts/alive-male.mp3';
import aliveFem from '../assets/tts/alive-female.mp3';



export default class States {
  constructor() {
    this.frozen = {medium: 30, long: 60, indefinite: ''};
    this.stopped = {medium: 30, long: 60, indefinite: ' '};
    this.stunned = {medium: 30, long: 60};
    this.insub = {medium: 30 , long: 60, indefinite: ' '};
    this.suppressed = {short: 10, medium:30, long:60};
    this.cursed = "cursed";
    this.fragile = "fragile";
    this.immune = "immune";
    this.outOfGame = "out of game";
    this.audio = 
    { 
      masc: {
        frozen: new Audio(frozenMasc),
        stopped: new Audio(stoppedMasc),
        stunned: new Audio(stunnedMasc),
        insub: new Audio(insubMasc),
        suppressed: new Audio(suppressedMasc),
        cursed: new Audio(cursedMasc),
        fragile: new Audio(fragileMasc),
        immune: new Audio(immuneMasc),
        outOfGame: new Audio(outOfGameMasc),
        noLonger: new Audio(noLongerMasc),
        alive: new Audio(aliveMasc)
      },
      fem: {
        frozen: new Audio(frozenFem),
        stopped: new Audio(stoppedFem),
        stunned: new Audio(stunnedFem),
        insub: new Audio(insubFem),
        suppressed: new Audio(suppressedFem),
        cursed: new Audio(cursedFem),
        fragile: new Audio(fragileFem),
        immune: new Audio(immuneFem),
        outOfGame: new Audio(outOfGameFem),
        noLonger: new Audio(noLongerFem),
        alive: new Audio(aliveFem)
      }
    };
  }


  playSound(voiceStyle, state){
    if(voiceStyle === "male") {
      this.audio.masc[state].play();
      this.currentState =  this.audio.masc[state];
    } else if(voiceStyle === "female"){
      this.audio.fem[state].play();
      this.currentState =  this.audio.fem[state];
    }
  }

  announceState(voiceStyle){
    if(this.currentState){
      this.currentState.play();
    } else if(voiceStyle === "female") {
      this.audio.fem.alive.play();
    } else if(voiceStyle === "male"){
      this.audio.masc.alive.play();
    }
  }


  endState(voiceStyle) {
    switch(voiceStyle){
    case 'male':
      this.audio.masc.noLonger.play();
      this.audio.masc.noLonger.onended = () => {
        this.currentState.play();
        this.currentState ="";
      };
      break;
    case 'female':
      this.audio.fem.noLonger.play();
      this.audio.fem.noLonger.onended = () => {
        this.currentState.play();
        this.currentState = "";
      };
      break;
    }
  }
}
