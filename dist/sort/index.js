
// sort排序
// 用法:handleMultipleMusterSort(...arr)
// 解释:多个数组的合并&升序排列
const handleMultipleMusterSort =  (...arguments)=> {
    let array = []
    let newArray = array.concat(...arguments)
    return newArray.sort((a,b)=>{return a-b})
};

// 删除排序数组中的重复项(5种排序)
// 用法:handleRemoveRepeat([...])
// 解释:给定⼀个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现⼀次
const handleRemoveRepeat =  (params)=> {
    // 1、利用了Set结构不能接收重复数据的特点
        let newArray = [...new Set(params)]; 
    // 2、利用 filter() + indexOf()去重
        // let newArray = params.filter((item,index)=>{
        //     return params.indexOf(item) === index;  // indexOf 只能查找到第一个  
        // })
    // 3、利用for 循环 搭配 indexOf 去重
		// let newArray=[]; 
		// for(let i=0;i<params.length;i++) {
		//   if(newArray.indexOf(params[i]) === -1) { 
        //     newArray.push(params[i]);
		//   }
    	// }
    // 4、借助新数组 通过 indexOf 方法判断当前元素在数组中的索引，如果与循环的下标相等则添加到新数组中
        // let newArray = [];
        // for (let i = 0; i < params.length; i++) {
        //     if (params.indexOf(params[i]) == i) {
        //         newArray.push(params[i]);
        //     }
        // }
    // 5、利用includes实现数组去重
        // let newArray = [];
        // for(i=0; i<params.length; i++){
        //     if(!newArray.includes(params[i])){
        //         newArray.push(params[i])
        //     }
        // }
    return newArray
};

// 浅拷贝
// 用法:handleShallowClone(object)
// 解释:重新在堆中创建内存，拷贝前后对象的"基本数据"类型互不影响，但拷贝前后对象的"引用类型"因共享同一块内存，会相互影响。
const handleShallowClone = (source) =>{
    let target = {};
    for(let i in source) {
        if (source.hasOwnProperty(i)) {
            target[i] = source[i];
        }
    }
    return target;
}

// 深拷贝
// 原理:遍历对象、数组直到里边都是基本数据类型，然后再去复制，就是深度拷贝
// 用法:handleDeepClone(object)-
// 解释:从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。
const handleDeepClone = (obj) => {
    if (obj === null) return obj; 
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    let cloneObj = new obj.constructor();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 实现一个递归拷贝
        cloneObj[key] = deepClone(obj[key]);
      }
    }
    return cloneObj;
}

// 防抖函数
// 原理:利用定时器，函数第一次执行时设定一个定时器，之后调用时发现已经设定过定时器就清空之前的定时器，并重新设定一个新的定时器，如果存在没有被清空的定时器，当定时器计时结束后触发函数执行。
// 用法:handleDebounce(fn,wait) fn需要执行的函数 wait时间间隔
// 场景:例 input输入改变调用接口检测是否重名
// 解释:防抖函数指某个函数在某段时间内，无论触发了多少次回调，都只执行最后一次
const handleDebounce = (fn, wait = 50) => {
    let timer = null
    return function(...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}

// 节流函数
// 原理:用时间戳来判断是否已到执行时间，记录上次执行的时间戳，然后每次触发事件执行回调，回调中判断当前时间戳距离上次执行时间戳的间隔是否已经达到时间差（Xms） ，如果是则执行，并更新上次执行的时间戳，如此循环。
// 用法:handleThrottle(fn,wait) fn需要执行的函数 wait时间间隔
// 场景:例 mousemove 事件
// 解释:指的是某个函数在一定时间间隔内（例如 3 秒）只执行一次，在这 3 秒内 无视后来产生的函数调用请求，也不会延长时间间隔
const handleThrottle = (fn, wait = 50) => {
    let previous = 0
    return function(...args) {
      let now = +new Date()
      if (now - previous > wait) {
        previous = now
        fn.apply(this, args)
      }
    }
}

// 加强版节流函数
// 场景:如果用户的操作非常频繁，不等设置的延迟时间结束就进行下次操作，会频繁的清除计时器并重新生成，所以函数 fn 一直都没办法执行，导致用户操作迟迟得不到响应。
// 用法:handleEnhancedThrottle(fn,wait) fn需要执行的函数 wait时间间隔
// 解释:wait 时间内，可以重新生成定时器，但只要 wait 的时间到了，必须给用户一个响应

const handleEnhancedThrottle = (fn,wait) =>{
    let previous = 0, 
        timer = null
    return function (...args) {
        let now = +new Date()
        if (now - previous < wait) {
            if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                previous = now
        	    fn.apply(this, args)
                }, wait)
        } else {
            previous = now
            fn.apply(this, args)
        }
    }
} 

module.exports  = {
    handleMultipleMusterSort,//sort排序&数组升序排列
    handleRemoveRepeat,//删除排序数组中的重复项
    handleShallowClone,//浅拷贝
    handleDeepClone,//深拷贝
    handleDebounce,//防抖函数
    handleThrottle,//节流函数
    handleEnhancedThrottle,//加强版防抖
}