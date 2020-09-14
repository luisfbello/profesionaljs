import MediaPlayer from '../mediaPlayer.js'

class autoPause{
    private threshold:number
    player: MediaPlayer
    constructor(){
        this.threshold=0.25,
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisivilityCahnge = this.handlerVisivilityCahnge.bind(this)
    }

    run(player){

        this.player=player

        const observer = new IntersectionObserver(this.handlerIntersection,{
            threshold: this.threshold,
        })

        observer.observe(this.player.media)

        document.addEventListener("visibilitychange",this.handlerVisivilityCahnge)
    }

  private handlerIntersection(entries: IntersectionObserverEntry[]) {

    const entry= entries[0]
  
        const visible= entry.intersectionRatio >= this.threshold
    
        if (visible) {
            this.player.play()
        }else {
            this.player.pause()
        }  
    
       
   }
   
 private  handlerVisivilityCahnge(){

    const visible = document.visibilityState ==="visible"
    if (visible) {
        this.player.play()
    }else {
        this.player.pause()
    }  

   } 
}



export default autoPause