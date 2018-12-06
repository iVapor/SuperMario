class GuaAnimation {
    constructor(game){
        this.game = game
        //为了省事，在这里硬编码一套动画
        this.animations = {
            card: [],
            cloth: [],
        }
        for (let i = 1; i < 5; i++) {
            let name = `card${i}`
            let t = game.textureByName(name)
            this.animations['card'].push(t)
        }
        for (let i = 1; i < 7; i++) {
            let name = `cloth${i}`
            let t = game.textureByName(name)
            this.animations['cloth'].push(t)
        }
        this.animationName = 'card'
        log('this.frames', this.frames())
        this.texture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 20
        this.flipX = false
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    update() {
        this.frameCount--
        if (this.frameCount === 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        if (this.flipX) {

        }
        this.game.drawImage(this)
    }
    move(x, keyStatus){
        this.x += x
        log('event', keyStatus)
        var animationNames = {
            down: 'cloth',
            up: 'card',
        }
        var name = animationNames[keyStatus]
        this.changeAnimation(name)

    }
    changeAnimation(name) {
        this.animationName = name
    }
}