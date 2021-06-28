import { ParticleProvider } from "./animation.js";
import { Parabola, createParabolaEffect } from "./parabola.js";
import Circle from "./circle.js";
import { OnMouseTrackerListener, OnMouseClickListener } from "./animation-listner.js";
import ShapeAttribute from './shape-attribute.js'

// particle provider 설정 초기화
let provider = new ParticleProvider('canvas');
provider.init();

let circle = (x, y) => {
    let shape = new Circle(2, x ,y , new ShapeAttribute());
    shape.attachEffect(createParabolaEffect());

    return shape;
}

let mouseTrackingListener = new OnMouseTrackerListener(
    provider.defaultObserver, circle
);

let mouseClickListener = new OnMouseClickListener(
    provider.defaultObserver, circle
);

mouseTrackingListener.listen();
mouseClickListener.listen();