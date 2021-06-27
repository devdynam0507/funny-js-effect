import { ParticleProvider } from "./animation/animation.js";
import { Parabola, createParabolaEffect } from "./effects/parabola.js";
import Circle from "./shapes/circle.js";
import { OnMouseTrackerListener, OnMouseClickListener } from "./animation/animation-listner.js";
import ShapeAttribute from './shapes/shape-attribute.js'

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