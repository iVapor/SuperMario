class GuaAnimation {
    constructor(game){
        this.game = game
        //为了省事，在这里硬编码一套动画
        this.frames = []
        for (let i = 0; i < 8; i++) {
            let name = `run${i}`
            let t = game.textureByName(name)
            this.frames.push(t)
        }
        this.texture = this.frames[0]
        this.frameIndex = 0
        this.frameCount = 3
    }
    static new(game){
        return new this(game)
    }
    update(){
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }
    draw(){
        this.game.drawImage(this)
    }
    move(x){
        this.x += x
    }
}