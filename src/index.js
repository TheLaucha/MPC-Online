window.addEventListener("keydown",function(e){
    let code = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    const boton = document.querySelector(`.boton[data-key="${code}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    boton.classList.add("playing");

    setTimeout(function(){
        boton.classList.remove("playing");
    },100)
})