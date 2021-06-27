# Javascript Particle!
물리가 적용된 귀여운 파티클들을 보세요!  
당신의 마우스를 따라다녀요!

# Supported Effects
- Water drop effect
- Parabola Effect
- Rainbow color

# Create Animation Context
```javascript
import { AnimationDraw, AnimationExecuter } from "./animation/animation.js";

const animation = new AnimationDraw(canvas());
const animationExecuter = new AnimationExecuter(100, animation);

animationExecuter.run(); // 애니메이션 실행
```

# Create Shape Example
```javascript
import DropEffect from "./effects/drop-effect.js";
import Parabola from "./effects/parabola.js";
import Circle from "./shapes/circle.js";

const makeCircleBuilder = (x, y) => {
    const attribute = new ShapeAttribute(); //rainbow
    const effect = new Parabola(0.06, 'random'); // gravity 0.06, 방향은 랜덤
    const circle = new Circle(x, y, attribute);

    circle.attachEffect(effect);

    return circle;
}
```

# Register event listener
```javascript
import { OnMouseTrackerListener } from "./listener/animation-listner.js";

/*
    OnMouseTrackerListener Parameter
    @param e -> do tracking event name
    @param observer -> event observer
    @param tracking -> mouse location tracking (interval)
    @param shape -> shape builder function
*/
const mouseClick = new OnMouseTrackerListener('click', (x, y, shape) => {
    animationExecuter.add(shape); //애니메이션 updater에 모양 등록
}, false, makeCircleBuilder);

const infinityMouseTracking = new OnMouseTrackerListener('mousemove', (x, y, shape) => {
    animationExecuter.add(shape);
    
}, true, makeCircleBuilder);
```

## Water drop effect
![ezgif com-gif-maker](https://user-images.githubusercontent.com/23313008/123525346-da79eb00-d70a-11eb-99aa-3f3f4e646e40.gif)

## Parabola
![ezgif com-gif-maker](https://user-images.githubusercontent.com/23313008/123536293-6a984e80-d764-11eb-975a-2271aaa8dcbb.gif)