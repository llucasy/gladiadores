const app = new PIXI.Application({transparent: false, antialias: true})
document.body.appendChild(app.view)

const loader = new PIXI.Loader()
loader.add('images/CharactersSpriteSheet.png').load(setup)

function setup() {       
    
    let texture = PIXI.utils.TextureCache["images/CharactersSpriteSheet.png"]

    let player1 = new players(0, 0, 62, 62, texture, 1)
    let player2 = new players(64*4, 0, 128, 62, texture, 2)

    function gameLoop() {

        //Call this `gameLoop` function on the next screen refresh
        //(which happens 60 times per second)
        requestAnimationFrame(gameLoop);

        // {
        //   x: bunny.position.x+Math.cos(bunny.rotation)*distance+offset.x,
        //   y: bunny.position.y+Math.sin(bunny.rotation)*distance+offset.y
        // }

        
        function playerRotation(player) {
            player.rotation += player.vx
            player.x += Math.cos(player.rotation + 1.5)*player.anda
            player.y += Math.sin(player.rotation + 1.5)*player.anda
        }

        playerRotation(player1)
        playerRotation(player2)

      }
      
      gameLoop();

}



