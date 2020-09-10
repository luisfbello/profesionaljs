class autoPause{
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

   handlerIntersection(entries) {

    const entry= entries[0]
  
        const visible= entry.intersectionRatio >= this.threshold
    
        if (visible) {
            this.player.play()
        }else {
            this.player.pause()
        }  
    
       
   }
   handlerVisivilityCahnge(){

    const visible = document.visibilityState ==="visible"
    if (visible) {
        this.player.play()
    }else {
        this.player.pause()
    }  

   } 
}



export default autoPause