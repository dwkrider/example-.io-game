const shortid = require('shortid');
const ObjectClass = require('./object');
const Constants = require('../shared/constants');

class Bullet extends ObjectClass {
  constructor(parentID, x, y, dir) {
    super(shortid(), x, y, dir, Constants.BULLET_SPEED);
    this.parentID = parentID;
  }

  // Returns true if the asteroid should be destroyed
  update(dt) {
    super.update(dt);
    return false;
  }
}

module.exports = Bullet;
