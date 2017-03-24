class Character {
    constructor (attackPower, healthPower) {
        this.attackPower = attackPower;
        this.healthPower = healthPower;
    }

    attack (opposingPlayer) {
        if(Math.random() < 0.5) {
            opposingPlayer.healthPower -= this.attackPower;
        }
    }
}

let winnerArr = ['red', 'red', 'blue', 'blue', 'red'];

winnerArr.map((item, index) => ({winner: item}))
