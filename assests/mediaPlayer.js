
function MediaPlayer(config){
    this.media = config.el
    this.plugins= config.plugins || []

    this._initPlugins()

}

MediaPlayer.prototype._initPlugins=function(){
    const player={
        play: ()=> this.play(),
        pause: ()=> this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted
        },

        set muted(val){
            this.media.muted=val
        }
    }
    
    this.plugins.forEach(plugin => {
        plugin.run(player)
    });
}

MediaPlayer.prototype.play = function() {

    if (this.media.paused) {
        this.media.play();
    }else{
        this.media.pause();
    }



}

MediaPlayer.prototype.pause = function() {
        this.media.pause();
}

MediaPlayer.prototype.mute= function(){
    
    if (this.media.muted) {
        this.media.muted =false;
    }else{
        this.media.muted =true;
    }
}

// MediaPlayer.prototype.unmute= function(){
//     this.media.muted =false;
// }


export default MediaPlayer