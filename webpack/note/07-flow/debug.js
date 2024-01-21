const webpack = require('./my-webpack');
const fs = require("fs");
const config = require('./webpack.config');
const complier = webpack(config);

// 4.执行对象的run方法开始执行编译
complier.run((err, state) => {
  console.log('====================================');
  console.log(err);
  console.log('====================================');
  let stateString = JSON.stringify(
    state.toJson({
      modules: true, // 每个文件都是一个模块
      chunks: true, // 打印所有的代码块，模块的集合会成的一个代码块
      assets: true // 输出的文件列表
    }));
  fs.writeFileSync('./state.json', stateString);
});