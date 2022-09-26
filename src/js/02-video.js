import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let savedTime = 0;

function OnPlay(timeValue) {
  localStorage.setItem('videoplayer-current-time', timeValue.seconds);
}

player.on('timeupdate', throttle(OnPlay, 1000));

savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime);
