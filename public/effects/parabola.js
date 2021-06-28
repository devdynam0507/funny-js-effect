class Parabola {

    directions = [
        1, -1
    ];

    constructor(gravity, direction) {
        this.gravity = gravity; // 중력

        if(direction === 'random') {
            this.direction = this.directions[parseInt(Math.random() * this.directions.length)];
        }
        else {
            this.direction = direction;
        }
        this.vx = (Math.random() * 2.0) * this.direction;
        this.t = 0; // 시간 default 0
    }

    updateTime(time) {
        this.t = time;
    }

    count() {
        this.t += 1;
    }

    targetCount() {
        return 100;
    }

    update(shape) {
        // 물체의 속도
        this.count();
        if(this.vy == undefined) {
            this.vy = -2;
        }
        this.vy += this.gravity;
        shape.moveTo(this.vx, this.vy);
    }

}

let createParabolaEffect = () => {
    return new Parabola(0.09, 'random');
}

export {
    Parabola,
    createParabolaEffect
};