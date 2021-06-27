class ShapeAttribute {

    rainbowColors = [
        "red", "orange", "yellow", "green", "blue", "navy", "purple"
    ]

    constructor(color) {
        this.color = color === undefined ? this.rainbowColors[parseInt(Math.random() * this.rainbowColors.length)] : color;
    }

}

export default ShapeAttribute;