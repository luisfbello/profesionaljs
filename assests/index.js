import MediaPlayer from "./mediaPlayer.js"
import AutoPlay from "./plugins/autoPlay.js"
import AutoPause from "./plugins/autoPause.js"

const video = document.querySelector("video")
const button= document.querySelector("button")
const unMuteButton= document.getElementById("UnMuteButton")
const MuteButton= document.getElementById("MuteButton")

const player = new MediaPlayer({ el: video,plugins: 
    [
    new AutoPlay(),
    new AutoPause(),
] })
button.onclick = () =>{
    const playerVideoPromise=player.play()
    if (playerVideoPromise !== undefined ) {
        playerVideoPromise.then(_=>{
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
MuteButton.onclick = () => player.mute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message)
    })
}


// unMuteButton.onclick = () => player.unmute()
