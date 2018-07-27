### node.js是什么
1.  node.js 是一个开发平台，就像Java、.Net、PHP、Apple等开发平台一样。
开发平台是指，有对应的编程语言，有语言运行时，有能实现特定功能API（SDK：Software Development Kit）
2. 该平台使用的编程语言是JavaScript语言。
3. node.js 平台是基于 Chrome V8 JavaScript 引擎构建。
4. 基于 node.js可以开发控制台程序(命令行程序、CLI程序)、桌面应用程序（GUI 借助node-webkit、electron等实现框架实现）、Web应用程序（网站）

node.js 全栈开发技术栈 MEAN- MongoDB Express Angular Node.js

### node.js 有哪些特点
1. 事件驱动（当事件被触发时，执行传递过去的回调函数）
2. 非阻塞 I/O 模型（当执行I/O操作时，不会阻塞线程）
3. 单线程
4. 拥有世界最大的开源库生态系统 —— npm

### node.js网站
1. [node.js官方网站](https://nodejs.org)
2. [node.js中文网](https://nodejs.cn)
3. [node.js中文社区](https://cnodejs.org)

### node.js安装和配置
1. 下载地址
+ [当前版本](https://nodejs.org/en/download)
+ [历史版本](https://nodejs.org/en/download/releases)

2. 官网术语
+ LTS版本：Long-term-Support版本，长期支持版，即稳定版
+ Current版本：Latest Features版本，最新版本，新特性还会在该版本中最先加入

3.安装

![1.png](https://upload-images.jianshu.io/upload_images/2369419-57a75671516d94ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![2.png](https://upload-images.jianshu.io/upload_images/2369419-6c0ca46f947af1c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![3.png](https://upload-images.jianshu.io/upload_images/2369419-49ac0b1bc77698a4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![4.png](https://upload-images.jianshu.io/upload_images/2369419-0cbd85fd3f207721.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![5.png](https://upload-images.jianshu.io/upload_images/2369419-70a0ecce35a68a31.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![6.png](https://upload-images.jianshu.io/upload_images/2369419-558e4887c61d4394.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![7.png](https://upload-images.jianshu.io/upload_images/2369419-ca0bca12fb3c7c84.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![8.png](https://upload-images.jianshu.io/upload_images/2369419-b8a2f8b15571abd3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

注：这里最好以管理员身份运行命令行窗口

![9.png](https://upload-images.jianshu.io/upload_images/2369419-40ad2008db56716e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![10.png](https://upload-images.jianshu.io/upload_images/2369419-86bd2a3f044b9f89.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此处说明下：新版的Node.js已自带npm，安装Node.js时会一起安装，npm的作用就是对Node.js依赖的包进行管理，也可以理解为用来安装/卸载Node.js需要装的东西

说明：这里的环境配置主要配置的是npm安装的全局模块所在的路径，以及缓存cache的路径，之所以要配置，是因为以后在执行类似：npm install express [-g] （后面的可选参数-g，g代表global全局安装的意思）的安装语句时，会将安装的模块安装到【C:\Users\用户名\AppData\Roaming\npm】路径中，占C盘空间。
例如：我希望将全模块所在路径和缓存路径放在我node.js安装的文件夹中，则在我安装的文件夹【D:\Develop\nodejs】下创建两个文件夹【node_global】及【node_cache】如下图：

![11.png](https://upload-images.jianshu.io/upload_images/2369419-b4d3214db96beacd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

创建完两个空文件夹之后，打开cmd命令窗口，输入
npm config set prefix "D:\Develop\nodejs\node_global"
npm config set cache "D:\Develop\nodejs\node_cache"
如果这种方法无法修改还可以：
在nodejs的安装目录中找到node_modules\npm\.npmrc文件
修改如下即可：
prefix = D:\Develop\nodejs\node_global
cache = D:\Develop\nodejs\node_cache

![12.png](https://upload-images.jianshu.io/upload_images/2369419-fab172bfc9e76f48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![13.png](https://upload-images.jianshu.io/upload_images/2369419-b92d6ea4fda40725.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

配置完后，安装个module测试下，我们就安装最常用的express模块，打开cmd窗口，
输入如下命令进行模块的全局安装：

![14.png](https://upload-images.jianshu.io/upload_images/2369419-ca802a1b29ab770e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

通过npm安装模块时都是去国外的镜像下载的，有的时候由于网络原因会导致安装模块失败，好在阿里有团队维护国内镜像:[http://npm.taobao.org/](https://link.jianshu.com/?t=http://npm.taobao.org/) 一般去配置淘宝国内镜像，在项目中使用cnpm。

4. 可以通过 nvm-windows 管理一台计算机上的多个 node 版本，可以随时切换不同版本的node.js去工作

nvm(Linux、Unix、OS X)
 + https://github.com/creationix/nvm
 + 常用命令：
    - nvm install node 安装最新版本的node
    - nvm use node

nvm-windows(Windows)
  + https://github.com/coreybutler/nvm-windows
  + 常用命令：
    - nvm version
    - nvm install latest
    - nvm install 版本号
    - nvm uninstall 版本号
    - nvm list
    - nvm use 版本号

### 传统web开发流程图

![web1.png](https://upload-images.jianshu.io/upload_images/2369419-36834ebfbdee3217.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### node.js开发web流程图

![web2.png](https://upload-images.jianshu.io/upload_images/2369419-ed58c947c5bab287.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### NPM
- npm(Node Package Manager, node包管理器) Node.js默认的，用javascript编写的管理器。管理和存储了大量第三方的javascript代码库，供开发者使用
- npm是Node.js默认的软件包管理系统，安装Node.js后，会默认安装npm
  + npm -v
  + npm init -y 创建package.json管理文件
  + npm install module_name  安装模块
- [npm官方网站](https://www.npmjs.com)
- [npm官方文档](https://docs.npmjs.com)

### Modules 与 Packages
1. A module is any file or directory that can be loaded by  Node.js ' require()
+ 模块可以是任何一个文件或目录 （目录下面可以有多个文件），只要能被node.js通过require（）引用即可。
2. A package is a file or direcotory than is described by a package.json. This can hanppen in a bunch of different ways
+ 包是一个文件或目录（目录下可以有多个文件）必须 有一个package.json文件来描述，就是一个包，通常也是一个小项目。

### require加载过程的坑
![require1.png](https://upload-images.jianshu.io/upload_images/2369419-753aded0ab3c417c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### require加载注意
![require2.PNG](https://upload-images.jianshu.io/upload_images/2369419-77e9a91bd42597aa.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### Node.js 与 CommonJS
![CommonJS.PNG](https://upload-images.jianshu.io/upload_images/2369419-0025941dbdd5b8b7.PNG?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 模块化思想exports 与 module.exports
+ 在同一个.js文件或同一个模块下面,exports 和 module.exports 指向的是同一个对象
+ 最终 require() 函数返回的是module.exports中的数据
+ exports 在同一.js文件或同一模块下面通常是一个 快捷指向方式的一个角色，一般在实际应用开发中使用module.exports 为标准。

### express
+ 基于Node.js平台开发的web开发框架 ，就是一个node.js模块
+ express它提供一系列强大的特性，帮你创建各种web和移动设备应用
  - 它实现了路由功能
  - 中间件（函数）功能
  - 对req和res对象的扩展
  - 可以集成其他模板引擎
+ http://expressjs.com
+ http://expressjs.com.cn

### express res.end 与 res.send
+ 参数类型
  - res.send()参数可以是 Buffer object、a String、an Object、an Array
  - res.end() 参数只能是 Buffer object、a String
+ res.send() 响应时res自动添加Content-Type: text/html; charset utf-8 报文头，防止乱码

### express use() 
  + 在进行路由匹配的时候不限定方法
  + 请求路径第一部分匹配只要与指定的相等即可，不要求pathname完全匹配
  + 用use() 挂静态资源express.static() 如果第一个参数 写多次 不同路径 指向同一资源文件夹，则都可以访问
    - app.use('/index', express.static(path.join('__dirname', 'public')));
    - app.use('/index1', express.static(path.join('__dirname', 'public'))); 
    - /index和/.index1都可以访问
  + 如果use 第一个路径参数一样，第二个资源指向不一样，则访问时 取并集查询加载
### express all()
  - 在进行路由匹配的时候不限定方法
  - 请求路径要与pathname完全匹配

