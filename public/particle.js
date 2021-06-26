import { AnimationDraw, AnimationExecuter } from "./animation.js";
import DropEffect from "./circle-animation.js";
import Circle from "./circle.js";
import { OnMouseTrackerListener } from "./animation-listner.js";

const canvas = () => {
    let canv = document.getElementById('canvas');    
    return canv.getContext('2d');
}

const registerEvent = (eventName, listener) => {
    let canv = document.getElementById('canvas');    

    canv.addEventListener(eventName, listener);
}

const circle = new Circle(2, 150, 150);
const dropEffect = new DropEffect(9.8, 0, 20);
const animation = new AnimationDraw(canvas());
// circle의 dropeffect 적용
const animationExecuter = new AnimationExecuter(100, animation, circle, dropEffect);
animationExecuter.run();

const makeCircleExample = (x, y) => {
    const circle = new Circle(2, x, y);
    circle.attachEffect(new DropEffect(9.8, 0, 10));
    animationExecuter.add(circle);    
}

const tracker = new OnMouseTrackerListener((x, y) => {
    makeCircleExample(x, y)
})

document.onmousemove = (e) => {
    makeCircleExample(e.pageX, e.pageY);
    tracker.update(e.pageX, e.pageY);
}
