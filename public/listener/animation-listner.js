class OnMouseTrackerListener {
    constructor(observer){
        this.observer = observer;
        setInterval(() => this.exec(), 180); //200ms
    }

    update(x, y) {
        this.x = x;
        this.y = y;
    }

    exec() {
        if(this.x != undefined && this.y != undefined) {
            this.observer(
                this.x, this.y
            );
        }
    }

}

export {
    OnMouseTrackerListener
}