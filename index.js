const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// console.log(collisions10);
// console.log(collisions27);


canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions0.length; i += 106){
    collisionsMap.push(collisions0.slice(i, 106+i))
}
// the key was changing the width size of the map from 112 to 106
// for (let i = 0; i < collisions1.length; i += 112){
//     collisionsMap.push(collisions1.slice(i, 112 + i))
// }  
// for (let i = 0; i < collisions2.length; i += 112) {
//     collisionsMap.push(collisions2.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions3.length; i += 112) {
//     collisionsMap.push(collisions3.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions4.length; i += 112) {
//     collisionsMap.push(collisions4.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions5.length; i += 112) {
//     collisionsMap.push(collisions5.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions6.length; i += 112) {
//     collisionsMap.push(collisions6.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions7.length; i += 112) {
//     collisionsMap.push(collisions7.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions8.length; i += 112) {
//     collisionsMap.push(collisions8.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions9.length; i += 112) {
//     collisionsMap.push(collisions9.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions10.length; i += 112) {
//     collisionsMap.push(collisions10.slice(i, 112 + i))

// } for (let i = 0; i < collisions11.length; i += 112) {
//     collisionsMap.push(collisions11.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions12.length; i += 112) {
//     collisionsMap.push(collisions12.slice(i, 112 + i))
// } for (let i = 0; i < collisions13.length; i += 112) {
//     collisionsMap.push(collisions13.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions14.length; i += 112) {
//     collisionsMap.push(collisions14.slice(i, 112 + i))
// } for (let i = 0; i < collisions15.length; i += 112) {
//     collisionsMap.push(collisions15.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions17.length; i += 112) {
//     collisionsMap.push(collisions17.slice(i, 112 + i))
// } for (let i = 0; i < collisions18.length; i += 112) {
//     collisionsMap.push(collisions18.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions19.length; i += 112) {
//     collisionsMap.push(collisions19.slice(i, 112 + i))
// } for (let i = 0; i < collisions20.length; i += 112) {
//     collisionsMap.push(collisions20.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions21.length; i += 112) {
//     collisionsMap.push(collisions21.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions22.length; i += 112) {
//     collisionsMap.push(collisions22.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions23.length; i += 112) {
//     collisionsMap.push(collisions23.slice(i, 112 + i))
// } for (let i = 0; i < collisions24.length; i += 112) {
//     collisionsMap.push(collisions24.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions25.length; i += 112) {
//     collisionsMap.push(collisions25.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions26.length; i += 112) {
//     collisionsMap.push(collisions26.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions27.length; i += 112) {
//     collisionsMap.push(collisions27.slice(i, 112 + i))
// } for (let i = 0; i < collisions28.length; i += 112) {
//     collisionsMap.push(collisions28.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions29.length; i += 112) {
//     collisionsMap.push(collisions29.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions30.length; i += 112) {
//     collisionsMap.push(collisions30.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions31.length; i += 112) {
//     collisionsMap.push(collisions31.slice(i, 112 + i))
// } for (let i = 0; i < collisions32.length; i += 112) {
//     collisionsMap.push(collisions32.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions33.length; i += 112) {
//     collisionsMap.push(collisions33.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions34.length; i += 112) {
//     collisionsMap.push(collisions34.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions35.length; i += 112) {
//     collisionsMap.push(collisions35.slice(i, 112 + i))
// } for (let i = 0; i < collisions36.length; i += 112) {
//     collisionsMap.push(collisions36.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions37.length; i += 112) {
//     collisionsMap.push(collisions37.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions38.length; i += 112) {
//     collisionsMap.push(collisions38.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions39.length; i += 112) {
//     collisionsMap.push(collisions39.slice(i, 112 + i))
// } for (let i = 0; i < collisions40.length; i += 112) {
//     collisionsMap.push(collisions40.slice(i, 112 + i))
// }
// for (let i = 0; i < collisions41.length; i += 112) {
//     collisionsMap.push(collisions41.slice(i, 112 + i))
// }

class Boundary {
    static width = 64
    static height = 64
    constructor({ position }) {
        this.position = position
        this.width = 64
        this.height = 64
    }
    
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const boundaries = []
const offset = {
    x: -3050,
    y: -5700
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 15894)
        boundaries.push(
            new Boundary({
            position: {
                x: j *Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }
        })
        )
    })
})



const image = new Image()
image.src = "./img/university map3.png"

const playerImage = new Image()
playerImage.src = "./img/char1front1.png"

//loading character and image
// image.onload = () => {
//     c.drawImage(image, -3000, -5700)
//     c.drawImage(playerImage,
//         0,
//         0,
//         playerImage.width / 4,
//         playerImage.height,
//         canvas.width / 2 - playerImage.width / 4/2,
//         canvas.height / 2 - playerImage.height / 2,
//         playerImage.width / 4,
//         playerImage.height,
//     )
// }

class Sprite {
    constructor({
        position, velocity, image, frames = {max: 1}}) {
        this.position = position
        this.image = image
        this.frames = frames

        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
            console.log(this.width)
            console.log(this.height)


        }
    }

    draw() {
        c.drawImage(
            this.image,
            0,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height,
        )
    }
}

const player = new Sprite({
    position: {
        x: canvas.width/2 - 340/ 4/2,
        y: canvas.height / 2 - 76 / 2
    },
    image: playerImage,
    frames: {
        max: 4
    }
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

const testBoundary = new Boundary({
    position: {
        x: 400,
        y: 400
    }
})

const movables = [background, testBoundary]
function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    // boundaries.forEach(boundary => {
    //     boundary.draw()
    // })
    testBoundary.draw()
    player.draw()

    if (player.position.x + player.width >= testBoundary.position.x &&
        player.position.x <= testBoundary.position.x + testBoundary.width &&
        player.position.y <= testBoundary.position.y + testBoundary.height &&
        player.position.y + player.height >= testBoundary.position.y) {
        console.log("colliding")
    }
    
    if (keys.w.pressed && lastKey === 'w') {
        movables.forEach(movable => { movable.position.y += 3 })
        // background.position.y = background.position.y += 3
        // testBoundary.position.y +=3
    }
    else if (keys.a.pressed && lastKey === 'a') {
        movables.forEach(movable => { movable.position.x += 3 })
    }
    else if (keys.s.pressed && lastKey === 's') {
        movables.forEach(movable => { movable.position.y -= 3 })
    }
    else if (keys.d.pressed && lastKey === 'd') {
        movables.forEach(movable => { movable.position.x -= 3 })
    }
        

// console.log(keys.a)
}
animate()

//creating movement
let lastKey = ""
window.addEventListener("keydown", (e)=> {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})
