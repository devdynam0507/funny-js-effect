const rainbowColors = [
    "red", "orange", "yellow", "green", "blue", "navy", "purple"
]

class ShapeAttribute {

    constructor(color) {
        this.color = color === undefined ? rainbowColors[parseInt(Math.random() * rainbowColors.length)] : color;
    }

}

export default ShapeAttribute;