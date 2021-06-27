class OnMouseTrackerListener {
    constructor(observer, shape){
        this.observer = observer;
        this.originalObserver = (e) => {
            this.update(e.pageX, e.pageY);
            this.observer(e.pageX, e.pageY, shape(e.pageX, e.pageY));
        };
    }

    dispose() {
        document.removeEventListener("mousemove", this.originalObserver);
    }

    listen() {
        document.addEventListener("mousemove", this.originalObserver);
    }

    update(x, y) {
        this.x = x;
        this.y = y;
    }

    exec(shape) {
        if(this.x != undefined && this.y != undefined) {
            this.observer(
                this.x, this.y, shape(this.x, this.y)
            );
        }
    }

}

class OnMouseClickListener {
    constructor(observer, shape) {
        this.observer = observer;
        this.originalObserver = (e) => {
            this.update(e.pageX, e.pageY);
            this.observer(e.pageX, e.pageY, shape(e.pageX, e.pageY));
        };
    }

    listen() {
        document.addEventListener("click", this.originalObserver);
    }

    dispose() {
        document.removeEventListener("click", this.originalObserver);
    }

    update(x, y) {
        this.x = x;
        this.y = y;
    }
}

export {
    OnMouseTrackerListener,
    OnMouseClickListener
}