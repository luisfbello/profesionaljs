import MediaPlayer from "./mediaPlayer.js"
import AutoPlay from "./plugins/autoPlay.js"

const video = document.querySelector("video")
const button= document.querySelector("button")
const unMuteButton= document.getElementById("UnMuteButton")
const MuteButton= document.getElementById("MuteButton")

const player = new MediaPlayer({ el: video,plugins: 
    [
    // new AutoPlay()
] })
button.onclick = () =>player.play()
MuteButton.onclick = () => player.mute()
// unMuteButton.onclick = () => player.unmute()
