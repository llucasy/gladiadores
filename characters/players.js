function players (x, y, xStart, yStart, texture, chooseChar) {

    image = new PIXI.Texture(texture, new PIXI.Rectangle(x, y, 64, 64))

    let person = new PIXI.Sprite(image)

    person.x = xStart
    person.y = yStart
    person.vx = 0
    person.anda = 0
    person.rotation = 0
    person.anchor.set(0.5)
    app.stage.addChild(person)

    let up = keyboard("ArrowUp"),
        right = keyboard("ArrowRight"),
        left = keyboard("ArrowLeft"),
        down = keyboard("ArrowDown")

   
    if(chooseChar === 2) {
        up = keyboard('w'),
        right = keyboard('d'),
        left = keyboard('a'),
        down = keyboard('s')
    }


    left.press = () => {
        person.vx = -0.05
        //person.vy = 0
    }

    left.release = () => {
        if (!right.isDown) {
            person.vx = 0
        }
    }

    right.press = () => {
        person.vx = 0.05
    }

    right.release = () => {
        if (!left.isDown) {
            person.vx = 0
        }
    }

    up.press = () => {
        person.anda = 4
    }

    up.release = () => {
        if (!down.isDown)  {
            person.anda = 0
        }
    }

    down.press = () => {
        person.anda = -2
    }

    down.release = () => {
        if (!up.isDown) {
            person.anda = 0
        }
    }

    return person
}