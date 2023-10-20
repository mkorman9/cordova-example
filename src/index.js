import Phaser from 'phaser';
import { Example } from './scenes/example';

const config = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  orientation: Phaser.Scale.LANDSCAPE,
  autoRound: true,
  autoFocus: true,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.RESIZE,
  },
  scene: Example,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  }
};

let game;

document.addEventListener(
  'deviceready',
  () => {
    game = new Phaser.Game(config);
  },
  false
);

window.addEventListener('load', () => {
  game.scale.once('resize', function (gameSize, baseSize, displaySize) {
    game.scene.scenes[0].physics.world.setBounds(0, 0, displaySize.width, displaySize.height);
  });
  game.scale.refresh();
});
