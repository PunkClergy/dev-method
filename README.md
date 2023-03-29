**注：版本1.x.x为测试版本 版本2.x.x为正式版本**

**使用方法：**

```bash
npm i markov-method
```

```javascript
const myPlugin = require('markov-method')
const {amounts,sort} = myPlugin",
// 例:千位符处理
amounts.handleNumFormat(87467463)
```

**当前包含方法：**

```javascript
amounts:{
	handleNumFormat(87467463),//金额千位符处理
	handlePrecision(0.1,0.2,'add/sub/mul/div'),//处理计算精度问题
}
sort:{
	handleMultipleMusterSort([...],[...],...),//sort数组排序
	handleRemoveRepeat([...]),//删除排序数组中的重复项
}
change:{
	handleSmallToBig(2123.987),//将数字金额转换为大写金额
}
```
