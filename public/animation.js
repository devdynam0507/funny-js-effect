class AnimationExecuter {

    constructor(animationCount, updater, shape, effect) {
        this.animationCount = animationCount;
        this.animationExecutedCount = 0;
        this.updater = updater;
        this.shape = shape;
        this.effect = effect;
        this.x = 0;
        this.y = 0;
        this.shapes = [];
    }

    add(shape) {
        console.log(this.latest + " " + new Date().getTime())
        let millis = new Date().getTime() - this.latest;
        if(millis < 100) {
            return;
        }

        this.shapes.push(shape);
        this.latest = new Date().getTime();
    }

    remove(shape) {
        let idx = this.shapes.indexOf(shape);

        if(idx > -1) {
            this.shapes.splice(idx, 1);
        }
    }

    handle() {
        for(let i = 0; i < this.shapes.length; i++) {
            if(this.shapes[i].effect.accel > 7.0) {
                if(this.shapes[i] != undefined) {
                    this.remove(this.shapes[i]);
                }
            }
            else {
                this.shapes[i].update(this.context);
            }
        }
    }

    run() {
        this.handle();
        this.updater.update(1000, 1000, this.shapes, 300);

        this.id = window.requestAnimationFrame(() => this.run());
    }
}

class AnimationDraw {
    
    constructor(context) {
        this.context = context;
        this.context.globalCompositeOperation = 'destination-over';
    }

    update(windowSizeX, windowSizeY, shapes, updateSpeed) {
        this.context.clearRect(0, 0, windowSizeX, windowSizeY);

        for(let i = 0; i < shapes.length; i++) {
            shapes[i].draw(this.context);
        }
    
        this.context.beginPath();
    }

}

export {
    AnimationDraw,
    AnimationExecuter
};