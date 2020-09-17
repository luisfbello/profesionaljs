
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>
    container:HTMLElement;

    constructor(config: { el: any; plugins: any; }) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlayer()
        this.initPlugins()

    }
    initPlayer() {
        this.container=document.createElement('div')
        this.container.style.position='relative'
        this.media.parentNode.insertBefore(this.container,this.media)
        this.container.appendChild(this.media)

    }
    private initPlugins() {
       
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }
    play() {
        this.media.paused?this.media.play():this.media.pause()
    }

    pause() {
        this.media.pause()
    }
    
    mute() {

        if (this.media.muted) {
            this.media.muted = false
        } else {
            this.media.muted = true
        }
    }
}





// MediaPlayer.prototype.unmute= function(){
//     this.media.muted =false;
// }


export default MediaPlayer