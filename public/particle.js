import { AnimationDraw, AnimationExecuter } from "./animation.js";
import DropEffect from "./drop-effect.js";
import Parabola from "./parabola.js";
import Circle from "./circle.js";
import { OnMouseTrackerListener } from "./animation-listner.js";
import ShapeAttribute from './shape-attribute.js'

const canvas = () => {
    let canv = document.getElementById('canvas');    
    return canv.getContext('2d');
}

const animation = new AnimationDraw(canvas());
const animationExecuter = new AnimationExecuter(100, animation);
animationExecuter.run();

const makeCircleBuilder = (x, y) => {
    const attribute = new ShapeAttribute(); //rainbow
    const effect = new Parabola(0.06, 'random'); // gravity 0.06, 방향은 랜덤
    const circle = new Circle(2, x, y, attribute);
    circle.attachEffect(effect);

    return circle;
}

const tracker = new OnMouseTrackerListener('click', (x, y, shape) => {
    animationExecuter.add(shape);
    
}, false, makeCircleBuilder);
