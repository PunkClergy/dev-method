**注：版本1.x.x为测试版本 版本2.x.x为正式版本**

**地址：**

<https://github.com/PunkClergy/dev-method>

**使用方法：**

```bash
npm i dev-method
```

```javascript
const myPlugin = require('dev-method')
const {amounts,sort} = myPlugin,
// 例:千位符处理
amounts.handleNumFormat(87467463)
```

**当前包含方法：**

```javascript
amounts:{
    	handleNumFormat(87467463),//金额千位符处理
	handlePrecision(0.1,0.2,'add/sub/mul/div'),//处理计算精度问题
	handGetScrollOffset(),//获得滚动条的滚动距离
    	handGetViewportOffset(),//获取视口的尺寸
}
sort:{
	handleMultipleMusterSort([...],[...],...),//sort数组排序
	handleRemoveRepeat([...]),//删除排序数组中的重复项
	handleShallowClone(object),//浅拷贝
	handleDeepClone(object),//深拷贝
	handleDebounce(fn,wait),//防抖函数
	handleThrottle(fn,wait),//节流函数
	handleEnhancedThrottle(fn,wait),//加强版防抖
}
change:{
	handleSmallToBig(2123.987),//将数字金额转换为大写金额
	handleStrFormat(url), //将url参数转换为对象
	handleLocalStorage.set(name,value,day),//本地存储localStorage(设置set(name,value,day)/获取get(name)/清空clear(name))
	handleStamp.getTime(date),//日期(yyyy-MM-dd)和时间戳(10位-秒)转换(日期转时间戳getTime(date)；时间戳转日期timeToStr(time,fmt))
	handleCookie.set(name,value,day),//Cookie 操作(设置set(name,value,day)/获取get(name)/删除del(name))
}
rules:{
	handleMPhone(13123213234), //电话号码验证
	handleCheckRegular(value,type),//常用正则验证
}
browser:{
	//https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator
	handleNetworkInformation(), //浏览器NetworkInformation对象
	handleNavigatorTopLevelInfo(),//浏览器Navigator所有信息
}
sorts:{
    	handleBubbleSort(),//冒泡排序
    	handleQuickSort(),//快速排序
    	handleShellSort(),//希尔排序
    	handleSelectionSort(),//选择排序
    	handleMergeSort(),//归并排序
    	handleInsertionSort(),//插入排序
}
```

