# Javascript Particle!
Look at the particles with physics applied!
it tracks your mouse

# Supported Effects
- Water drop effect
- Parabola Effect
- Rainbow color

# Create Particle Provider
```javascript
import { ParticleProvider } from "./animation/animation.js";

// You need to pass the html cavans id to use to the provider.
let provider = new ParticleProvider('canvas');
provider.init();
```

# Create Shape Example
```javascript
import { Parabola, createParabolaEffect } from "./parabola.js";
import Circle from "./shapes/circle.js";

// Define a function that creates a particle. It takes x and y as arguments.
let circle = (x, y) => {
    let attribute = new ShapeAttribute(); // If you do not put a color in the constructor, it is automatically assigned as a rainbow color. You can enter the color as a string.
    let shape = new Circle(2, x ,y , attribute);
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
    let attribute = new ShapeAttribute(); // If you do not put a color in the constructor, it is automatically assigned as a rainbow color. You can enter the color as a string.
    let shape = new Circle(2, x ,y , attribute);
    shape.attachEffect(createParabolaEffect());

    return shape;
}

let mouseTrackingListener = new OnMouseTrackerListener(
    provider.defaultObserver, circle
);

let mouseClickListener = new OnMouseClickListener(
    provider.defaultObserver, circle
);

// listning
mouseTrackingListener.listen();
mouseClickListener.listen();

// dispose listener
mouseTrackingListener.dispose();
mouseClickListener.dispose();
```

## Water drop effect
![ezgif com-gif-maker](https://user-images.githubusercontent.com/23313008/123525346-da79eb00-d70a-11eb-99aa-3f3f4e646e40.gif)

## Parabola
![ezgif com-gif-maker](https://user-images.githubusercontent.com/23313008/123536293-6a984e80-d764-11eb-975a-2271aaa8dcbb.gif)