class Circle {

    constructor(radius, x, y) {
        this.radius = radius;
        this.x = x;
        this.y = y;
    }

    attachEffect(effect) {
        this.effect = effect;
    }

    update(ctx) {
        this.effect.update();
        this.moveTo(0, this.effect.accel);
    }

    draw(ctx) {
        ctx.moveTo(this.x, this.y);
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'orange';
        ctx.fill();
    }

    moveTo(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    getCoordinate() {
        return [this.x, this.y];
    }

}

export default Circle;