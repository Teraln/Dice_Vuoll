new Vue({
    el: '.app',
    data: {
        turn: 0,
        currDice: 0,
        scores: [0, 0],
        current: [0, 0],
        imgKey: 0,
        message: false,
        displayControls: true
    },
    methods: {
        randomNumber() {
            this.currDice = Math.floor(Math.random() * Math.floor(6)) + 1

            return undefined
        },
        turnSwitch() {
            this.scores[this.turn] = 0
            this.currDice = 0
            if (this.turn) {
                this.turn--
            } else {
                this.turn++
            }

            return undefined
        },
        roll() {
            if (this.currDice !== 1) {
                this.scores[this.turn] = this.scores[this.turn] + this.currDice
            } else {
                this.turnSwitch()
            }
            return undefined
        },
        initRoll() {
            this.randomNumber()
            this.roll()
            this.imgKey++
        },
        //Hold
        hold() {
            this.current[this.turn] = this.current[this.turn] + this.scores[this.turn]
            if (this.current[this.turn] >= 100) {
                this.message = true;
                this.displayControls = false;
            } else {
                this.turnSwitch()
            }
        },
        newGame() {
            this.turn = 0
            this.currDice = 0
            this.scores = [0, 0]
            this.current = [0, 0]
            this.message = false
            this.displayControls = true
        }
    }
})