const app = new PIXI.Application({transparent: false, antialias: true})
document.body.appendChild(app.view)

const loader = new PIXI.Loader()
loader.add('images/CharactersSpriteSheet.png').load(setup)

function setup() {
    let texture = PIXI.utils.TextureCache["images/CharactersSpriteSheet.png"]
    let rectangle = new PIXI.Rectangle(0, 0, 64, 64)

    texture.frame = rectangle

    let person = new PIXI.Sprite(texture)

    person.x = 62
    person.y = 62
    person.vx = 0
    person.anda = 0
    person.rotation = 0
    person.anchor.set(0.5)
    app.stage.addChild(person)

    let up = keyboard("ArrowUp"),
        right = keyboard("ArrowRight"),
        left = keyboard("ArrowLeft"),
        down = keyboard("ArrowDown")


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


    function gameLoop() {

        //Call this `gameLoop` function on the next screen refresh
        //(which happens 60 times per second)
        requestAnimationFrame(gameLoop);

        // {
        //   x: bunny.position.x+Math.cos(bunny.rotation)*distance+offset.x,
        //   y: bunny.position.y+Math.sin(bunny.rotation)*distance+offset.y
        // }

        person.rotation += person.vx
        person.x += Math.cos(person.rotation + 1.5)*person.anda
        person.y += Math.sin(person.rotation + 1.5)*person.anda

      }
      
      gameLoop();

}



