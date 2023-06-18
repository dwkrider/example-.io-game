module.exports = Object.freeze({
  PLAYER_RADIUS: 30,
  PLAYER_MAX_HP: 100,
  PLAYER_SPEED: 100,
  PLAYER_FIRE_COOLDOWN: 0.1,

  BULLET_RADIUS: 5,
  BULLET_SPEED: 800,
  BULLET_DAMAGE: 10,

  SCORE_BULLET_HIT: 20,
  SCORE_PER_SECOND: 1,

  MAP_SIZE: 3000,
  MSG_TYPES: {
    JOIN_GAME: 'join_game',
    GAME_UPDATE: 'update',
    INPUT: 'input',
    BACKWARD: 'backward',
    FORWARD: 'forward',
    STATIONARY: 'stationary',
    GAME_OVER: 'dead',
  },
});
