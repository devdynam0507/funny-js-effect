class AnimationExecuter {

    constructor(updater) {
        this.updater = updater;
        this.shapes = [];
        this.isExecuted = false;
    }

    add(shape) {
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
            if(this.shapes[i].effect.t >= this.shapes[i].effect.targetCount()) {
                if(this.shapes[i] != undefined) {
                    this.remove(this.shapes[i]);
                }
            }
            else {
                this.shapes[i].update();
                window.requestAnimationFrame(() => this.updater.update(this.shapes));
            }
        }
    }

    run() {
        this.handle();
        
        if(this.shapes.length > 0) {
            this.isExecuted = true;
            window.requestAnimationFrame(() => this.run());
        }
        else {
            this.updater.clearScreen();
            this.isExecuted = false;
        }
    }
}

class AnimationDraw {
    
    constructor(context) {
        this.context = context;
        this.context.globalCompositeOperation = 'destination-over';
    }

    clearScreen() {
        this.context.clearRect(0, 0, window.outerWidth, window.outerHeight);
    }

    update(shapes) {
        this.clearScreen();

        for(let i = 0; i < shapes.length; i++) {
            shapes[i].draw(this.context);
            this.context.beginPath();
        }    
    }

}

/*
    canvas, animation, animation-draw를 제공합니다.
*/
class ParticleProvider {

    constructor(canvasId) {
        this.canvasId = canvasId;
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d'); 
        this.draw = new AnimationDraw(this.ctx);
        this.animation = new AnimationExecuter(this.draw);
        this.defaultObserver = (x, y, shape) => {
            this.addParticleToRenderQueue(shape);

            if(!this.animation.isExecuted) {
                this.animation.run();
            }
        }
    }

    init() {
        this._initCanvasStyle();
        this.animation.run();
    }

    _initCanvasStyle() {
        this.canvas.style.position = "absolute";
        this.canvas.style.zIndex = 2;
        this.canvas.style.pointerEvents = "none";
        this.canvas.width = window.outerWidth;
        this.canvas.height = window.outerHeight;
    }

    addParticleToRenderQueue(shape) {
        this.animation.add(shape);
    }

}

export {
    AnimationDraw,
    AnimationExecuter,
    ParticleProvider
};