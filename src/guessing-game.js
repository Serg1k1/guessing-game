class GuessingGame {
    constructor() {
    this.number = [];
    this.left = 0;
    this.right;
    this.center;
    }
    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.number.push(i);
        }
        this.right = this.number[this.number.length - 1];
        return this.number;
    }

    guess() {
        this.center = Math.round((this.left + this.right) / 2);
        return this.center;
    }

    lower() {
        this.right = this.center;
        this.center = Math.round((this.left + this.right) / 2);
        return this.center
    }

    greater() {
        this.left = this.center;  
        this.center = Math.round((this.left + this.right) / 2);  
        return this.center;
    }
}

module.exports = GuessingGame;
