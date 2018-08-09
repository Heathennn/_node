// 输出文字染色模块ansi
var ansi = require('ansi');

var args = process.argv.slice(2);

var cursor = ansi(process.stdout)


// process.argv 的值为输入命令的值,  第一是配置的环境变量value, 第二个是运行的当前文件绝对路径, 以后是传入的值
// [ '/usr/local/bin/node',
//   '/Users/zhangzhangkang/Desktop/node/_node/demo3_process/args',
//   '--ss',
//   '--s' ]
// console.log(process.argv)
// console.log(args);

if (args & args.length > 0) {
  args.forEach( (arg) => {
    switch(arg) {
      case '-h':
      case '--help':
        consleHelp();
        break;
      default: 
        normal()
    } 
  })
} else {
  normal();
}

function consleHelp() {
  console.log('       - Do you need help?')
  console.log('       - There is nothing I can help')
  console.log('       - go home, please')
}

function normal() {
  var requireAge = 18;

  cursor.fg.green().write('enter you age: ').fg.reset().write('\n')

  process.stdin.setEncoding('utf-8');

  process.stdin.on('data', function(data) {
    var age = parseInt(data, 10);
    if (age < requireAge) {
      cursor.fg.red().write(`you must be at least ${requireAge} to enter`).fg.reset().write('\n')
      // console.log('you must be at least %d to enter', requireAge)
    } else {
      // console.log('welcome to gayhub')
      cursor.fg.green().write('welcome to gayhub').fg.reset().write('\n')
    }

    process.stdin.pause();
  })

  process.stdin.resume();

}