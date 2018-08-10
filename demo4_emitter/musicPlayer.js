var util = require('util')

var events = require('events')

// var device = {
//   play: function(music) {
//     console.log(music + 'is playing')
//   },
//   stop: function(music) {
//     console.log(music + ' is stopped')
//   }
// }

var Page = {
  refresh: function() {
    console.log('musicPlayer is working, i will refresh index.html')
  }
}
function MusicPlayer(name) {
  this.playing = false;
  this.name = name;
  // 借助EventEmitter
  events.EventEmitter.call(this)
}

MusicPlayer.prototype = {
  play: function () {
    console.log(this.name + ' is playing')
  },
  stop: function () {
    console.log(this.name + ' is stopped')
  }
}
// 继承Emitter
util.inherits(MusicPlayer, events.EventEmitter);

var musicPlayer = new MusicPlayer('on the moon');
// var musicPlayer2 = new MusicPlayer('on the moon2');

// 监听事件 .  类内部的方法变为事件驱动
// 可以有多个监听器

// 监听新的事件
musicPlayer.on('newListener', function(name, listener) {
  // listener 指的是回调函数
  console.log('Event name added: ', name)
})
// 只监听一次
musicPlayer.once('play', function () {
  console.log('每日打卡')
})

musicPlayer.on('play', function () {
  Page.refresh();
})

musicPlayer.on('play', function () {
  this.playing = true;
  this.play(this.name);
})


musicPlayer.on('stop', stop)

musicPlayer.emit('play')
musicPlayer.emit('play')
// 移除监听器.  第二次个参数必须是Function .
musicPlayer.removeListener('stop', stop);
setTimeout(() => {
  musicPlayer.emit('stop')
}, 1000)

function stop() {
  this.playing = false;
  this.stop(this.name)
}
// musicPlayer2.emit('play')