
const utils = require('../utils')
// 金额千位符处理
// 用法:handleNumFormat(245435342)
// 解释:金额达到4位字段增加','
const handleNumFormat = (params) => {
    let res = params.toString().replace(/\d+/, (n) => {
        // 先提取整数部分
        return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
            return $1 + ",";
        });
    })
    return res;
}

// 数据精度问题
// 用法：handlePrecision(0.1,0.2,'add/sub/mul/div')
// 解释:处理精度问题
const handlePrecision = (arg1, agr2, type = 'add') => {
    // 开始循环校验
    switch (type) {
        case 'add': //加法
            return utils.dispatchPrecisionAdd(arg1, agr2)
        case 'sub': //减法
            return utils.dispatchPrecisionSub(arg1, agr2)
        case 'mul': //乘法
            return utils.dispatchPrecisionMul(arg1, agr2)
        case 'div': //除法
            return utils.dispatchPrecisionDiv(arg1, agr2)
    }
}

// 滚动条的滚动距离
// 用法：handGetScrollOffset()
// 解释：触发滚动事件是调用该函数
const handGetScrollOffset = () => {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}

// 获取视口的尺寸
// 用法：handGetViewportOffset()
// 窗口初始化后调用，获取视口的w和h
const handGetViewportOffset = () => {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}

module.exports = {
    handleNumFormat,//金额千位符处理
    handlePrecision,//处理计算精度问题
    handGetScrollOffset,//获得滚动条的滚动距离
    handGetViewportOffset,//获取视口的尺寸
}