const shortid = require('shortid');
const ObjectClass = require('./object');
const Constants = require('../shared/constants');

class Asteroid extends ObjectClass {
  constructor(x, y) {
    super(shortid(), x, y, Math.random() * 2 * Math.PI, Constants.ASTEROID_SPEED);
  }

  // Returns a newly created bullet, or null.
  update(dt) {
    super.update(dt);

    // Make sure the asteroid stays in bounds
    this.x = Math.max(0, Math.min(Constants.MAP_SIZE, this.x));
    this.y = Math.max(0, Math.min(Constants.MAP_SIZE, this.y));

    return null;
  }

  serializeForUpdate() {
    return {
      ...(super.serializeForUpdate()),
      direction: this.direction,
      hp: this.hp,
    };
  }
}

module.exports = Asteroid;
