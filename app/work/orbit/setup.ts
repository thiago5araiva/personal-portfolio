import p5 from 'p5'

export const setup = (p: p5) => {
  let bgColor = { r: 0, g: 0, b: 0 }
  p.setup = () => {
    p.createCanvas(
      p.windowWidth < 768 ? p.windowWidth * 0.9 : p.windowWidth * 0.6,
      p.windowHeight - 420,
      p.WEBGL
    )
    p.angleMode(p.DEGREES)
    p.strokeWeight(5)
    p.noFill()
    p.stroke(250, 180, 200)
    p.colorMode('HSB', 360, 255, 255)
  }

  p.mouseClicked = () => {
    bgColor = { r: p.random(255), g: p.random(255), b: p.random(255) }
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth * 0.777, p.windowHeight - 4200)
  }

  p.draw = () => {
    p.background(bgColor.r, bgColor.g, bgColor.b)

    p.orbitControl()
    for (let zAngle = 0; zAngle < 360; zAngle += 30) {
      for (let xAngle = 0; xAngle < 360; xAngle += 30) {
        p.push()
        p.rotateZ(zAngle)
        p.rotateX(xAngle)
        p.translate(0, 400, 0)
        p.box()
        p.pop()
      }
    }
  }
}
