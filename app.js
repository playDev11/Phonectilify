let speech = new SpeechSynthesisUtterance();

let voices =[]
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    (voiceSelect.options[i]= new Option(voice.name, i))
}


const button=document.querySelector("button")

button.addEventListener("click", ()=>{
    speech.text= document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})