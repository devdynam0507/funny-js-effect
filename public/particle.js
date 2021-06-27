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

const registerEvent = (eventName, listener) => {
    let canv = document.getElementById('canvas');    

    canv.addEventListener(eventName, listener);
}

const attribute = new ShapeAttribute('blue');
const animation = new AnimationDraw(canvas());
// circle의 dropeffect 적용
const animationExecuter = new AnimationExecuter(100, animation);
animationExecuter.run();

const d = new DropEffect(9.8, 0, 10);

const makeCircleExample = (x, y) => {
    const circle = new Circle(2, x, y, new ShapeAttribute());
    circle.attachEffect(new Parabola(0.06, 'random'));
    animationExecuter.add(circle);    
}

const tracker = new OnMouseTrackerListener((x, y) => {
    makeCircleExample(x, y)
})

document.onmousemove = (e) => {
    makeCircleExample(e.pageX, e.pageY);
    tracker.update(e.pageX, e.pageY);
}
