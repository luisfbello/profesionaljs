import MediaPlayer from "./mediaPlayer"
import AutoPlay from "./plugins/autoPlay"
import AutoPause from "./plugins/autoPause"
import Ads from "./plugins/Ads"
import { resolve } from "path"


const video = document.querySelector("video")
const button= document.querySelector("button")
const unMuteButton= document.getElementById("UnMuteButton")
const MuteButton= document.getElementById("MuteButton")

const player = new MediaPlayer({ el: video,plugins: 
    [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
] })
button.onclick = () =>{
    const playerVideoPromise=player.play()
    if (playerVideoPromise !== undefined ) {
        try{

        }
        catch(error: any){
            console.log(error)
        }
    }
}
MuteButton.onclick = () => player.mute()

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error=>{
        console.log(error.message)
    })
}


// unMuteButton.onclick = () => player.unmute()
