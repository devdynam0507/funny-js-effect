class OnMouseTrackerListener {
    constructor(e, observer, tracking, shape){
        this.observer = observer;

        document.addEventListener(e, (e) => {
            this.update(e.pageX, e.pageY);
            this.observer(e.pageX, e.pageY, shape(e.pageX, e.pageY));
        });

        if(tracking) {
            setInterval(() => this.exec(shape), 180); //200ms
        }
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

export {
    OnMouseTrackerListener
}