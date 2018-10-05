# algorithm

## 规范

### 文件命名规范
当您打算添加一道新的算法题目的时候，应该将其添加在 data 目录之下，文件夹命名为 *题目英文* 的格式，在这个文件夹底下，您还需要添加一个用来书写 *题目描述，输入示例，输出示例* 的 README.md 的文件，以及您的代码（可选，要求命名为：*题目_您的github 昵称*)。

#### 示例

.
├── LICENSE
├── README.md
└── data
    └── n-queens
        ├── n-queens-wu.js
        └── README.md

### git 规范

- 请不要上传和代码/算法无关的东西
- 请尽量不要使用 `git add .` ，以避免将一些隐藏文件添加进去，建议在使用 `git add` 操作之前使用 `git status` 检查是否有奇怪的东西被包含在内
- 请使用 `git commit -a`
- 提交信息请使用 `<type>:<description>` 的形式（具体说明见下文）

#### 关于提交信息

`<type>:<description>` 中 type 有如下三种类型  
- feat: 添加新的题目或添加新的解决方法
- fix: 发现之前的提交存在bug，修改并提交的时候
- ref: 重构代码的时候
- doc: 仅仅在涉及文档的时候使用

关于 description ，是这一次提交的简短描述
- 请不要超过 50 个字
- 以动词原型开头
- 第一个字母小写
- 结尾不加标点符号

参考 [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html);  
