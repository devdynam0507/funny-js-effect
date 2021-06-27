# Javascript Particle!
물리가 적용된 귀여운 파티클들을 보세요!  
당신의 마우스를 따라다녀요!

# Supported Effects
- Water drop effect
- Parabola Effect
- Rainbow color

# Create Particle Provider
```javascript
import { ParticleProvider } from "./animation/animation.js";

// provider에게 현재 사용할 html cavans id를 넘겨주어야 합니다.
let provider = new ParticleProvider('canvas');
provider.init();
```

# Create Shape Example
```javascript
import { Parabola, createParabolaEffect } from "./parabola.js";
import Circle from "./shapes/circle.js";

// particle을 생성하는 함수를 정의합니다. 인자로 무조건 x, y를 받습니다.
let circle = (x, y) => {
    let attribute = new ShapeAttribute(); // 생성자에 색깔을 넣지 않으면 자동 rainbow색깔로 할당됩니다. 색깔은 string으로 넣어주시면 됩니다.
    let shape = new Circle(2, x ,y , );
    // direction은 랜덤으로 주고 실험해봤을 떄 최적의 gravity인 0.09로
    shape.attachEffect(createParabolaEffect());

    return shape;
}
```

# Enable Event listener
```javascript
import { OnMouseTracingListener, OnMouseClickListener } from "./listener/animation-listner.js";
import { Parabola, createParabolaEffect } from "./parabola.js";

let provider = new ParticleProvider('canvas');
provider.init();

let circle = (x, y) => {
    let attribute = new ShapeAttribute(); // 생성자에 색깔을 넣지 않으면 자동 rainbow색깔로 할당됩니다. 색깔은 string으로 넣어주시면 됩니다.
    let shape = new Circle(2, x ,y , );
    shape.attachEffect(createParabolaEffect());

    return shape;
}

let mouseTrackingListener = new OnMouseTrackerListener(
    provider.defaultObserver, circle
);

let mouseClickListener = new OnMouseClickListener(
    provider.defaultObserver, circle
);

// 이벤트 리스너 활성화
mouseTrackingListener.listen();
mouseClickListener.listen();

// 이벤트 리스너 해제
mouseTrackingListener.dispose();
mouseClickListener.dispose();
```

## Water drop effect
![ezgif com-gif-maker](https://user-images.githubusercontent.com/23313008/123525346-da79eb00-d70a-11eb-99aa-3f3f4e646e40.gif)

## Parabola
![ezgif com-gif-maker](https://user-images.githubusercontent.com/23313008/123536293-6a984e80-d764-11eb-975a-2271aaa8dcbb.gif)

# 🖌 Update logs
## 2021/06/28
- ParticleProvider를 추가하여 모듈화
- Animation Listener 모듈화
- 기존 html위에서 동작할 수 있도록 canvas를 위에 덮어씌워줌