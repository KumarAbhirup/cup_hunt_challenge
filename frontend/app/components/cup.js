/* eslint-disable no-unused-vars */

/* 
  global
  Koji
  dispatch
  GameObject
  push
  pop
  text
  textAlign
  CENTER
  textSize
  fill
  noStroke
  random
  Smooth
  isMobile
  createVector
  height
  objSize
  width
  constrain
*/

class Cup extends GameObject {
  ball = null

  goalVelocity = createVector(0, 0)

  velocity = createVector(0, 0)

  moveSpeed = isMobile ? 8 : 10

  moveTimer = 2

  showAndUpdateBall() {
    if (this.ball) {
      this.ball.show()

      this.ball.body.position.x = this.body.position.x
      this.ball.body.position.y = this.body.position.y + objSize * 2
    }
  }

  update() {
    this.moveTimer -= 1 / 60

    if (this.moveTimer <= 0) {
      this.goalVelocity.x = random(-this.moveSpeed, this.moveSpeed)
      this.goalVelocity.y = random(-this.moveSpeed, this.moveSpeed)

      this.moveTimer = 1
    }

    this.velocity.x = Smooth(this.velocity.x, this.goalVelocity.x, 8)
    this.velocity.y = Smooth(this.velocity.y, this.goalVelocity.y, 8)

    this.body.position.add(this.velocity)

    // Don't let the cup run out
    this.body.position.x = constrain(
      this.body.position.x,
      objSize * 4,
      width - objSize * 4
    )

    this.body.position.y = constrain(
      this.body.position.y,
      objSize * 4,
      height - objSize * 4
    )
  }
}
