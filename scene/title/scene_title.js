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
        self.game.registerAction('a', function () {
            self.w.move(-2)
         })
        self.game.registerAction('d', function () {
            self.w.move(2)
         })
    }

}
