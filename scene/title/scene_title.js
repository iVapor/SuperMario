class SceneTitle extends GuaScene{
    constructor(game) {
        super(game)
        let label = GuaLabel.new(game, 'hello')
        this.addElement(label)

        let w = GuaAnimation.new(game)
        w.x = 20
        w.y = 30
        this.w = w
        this.addElement(w)
        this.setupInputs()
    }
    setupInputs(){
        let self = this
        self.game.registerAction('a', function (keyStatus) {
            self.w.move(-2, keyStatus)
         })
        self.game.registerAction('d', function (keyStatus) {
            self.w.move(2, keyStatus)
         })
    }

}
