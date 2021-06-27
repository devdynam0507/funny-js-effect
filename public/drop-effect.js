class DropEffect {
    
    constructor(gravity, accel, weight) {
        this.gravity = gravity;
        this.accel = accel;
        this.weight = weight;
        this.time = 0;
    }

    updateTime(time) {
        this.time = time;
    }

    update() {
        let accelBasedGravity = this.weight * (this.gravity/1000);
        this.accel += accelBasedGravity;
    }

    accel() {
        return this.accel;
    }

}

export default DropEffect;