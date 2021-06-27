class DropEffect {
    
    constructor(gravity, accel, weight) {
        this.gravity = gravity;
        this.accel = accel;
        this.weight = weight;
        this.t = 0;
    }

    updateTime(time) {
        this.t = time;
    }

    count() {
        this.t += 1;
    }

    targetCount() {
        return 10;
    }

    update() {
        this.count();

        let accelBasedGravity = this.weight * (this.gravity/1000);
        this.accel += accelBasedGravity;

        this.moveTo(0, this.accel);
    }

    weights() {
        return [
            0, this.accel
        ];
    }

}

const createDropEffect = () => {
    return new DropEffect(9.8, 0, 1);
}

export {
    DropEffect,
    createDropEffect
}