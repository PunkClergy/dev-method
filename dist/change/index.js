// 数字金额转换
// 用法:handleSmallToBig(value)
// 解释:将数字金额转换为大写金额
const handleSmallToBig = (money)=>{
     // 初始化的时候会出现undefined
     if (!money) return
     //  将数字金额转换为大写金额
     let cnNums = new Array('零', '壹','贰', '叁', '肆','伍', '陆','柒','捌','玖'); //汉字的数字
     let cnIntRadice = new Array('', '拾', '佰', '仟'); //基本单位
     let cnIntUnits = new Array('', '万', '亿', '兆'); //对应整数部分扩展单位
     let cnDecUnits = new Array('角', '分', '毫', '厘'); //对应小数部分单位
     let cnInteger = '整'; //整数金额时后面跟的字符
     let cnIntLast = '元'; //整数完以后的单位
     let maxNum = 999999999999999.9999; //最大处理的数字
     let integerNum; //金额整数部分
     let decimalNum; //金额小数部分
     let chineseStr = ''; //输出的中文金额字符串
     if (money == '') {
         return '';
     }
     money = parseFloat(money);
     if (money >= maxNum) {
         return '超出最大处理数字';
     }
     if (money == 0) {
         chineseStr = cnNums[0] + cnIntLast + cnInteger;
         return chineseStr;
     }
     //四舍五入保留两位小数,转换为字符串
     money = Math.round(money * 100).toString();
     integerNum = money.substr(0, money.length - 2);
     decimalNum = money.substr(money.length - 2);
     //获取整型部分转换
     if (parseInt(integerNum, 10) > 0) {
         let zeroCount = 0;
         let IntLen = integerNum.length;
         for (let i = 0; i < IntLen; i++) {
             let n = integerNum.substr(i, 1);
             let p = IntLen - i - 1;
             let q = p / 4;
             let m = p % 4;
             if (n == '0') {
                 zeroCount++;
             } else {
                 if (zeroCount > 0) {
                     chineseStr += cnNums[0];
                 }
                 //归零
                 zeroCount = 0;
                 chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
             }
             if (m == 0 && zeroCount < 4) {
                 chineseStr += cnIntUnits[q];
             }
         }
         chineseStr += cnIntLast;
     }
     //小数部分
     if (decimalNum != '') {
         let decLen = decimalNum.length;
         for (let i = 0; i < decLen; i++) {
             let n = decimalNum.substr(i, 1);
             if (n != '0') {
                 chineseStr += cnNums[Number(n)] + cnDecUnits[i];
             }
         }
     }
     if (chineseStr == '') {
         chineseStr += cnNums[0] + cnIntLast + cnInteger;
     } else if (decimalNum == '' || /^0*$/.test(decimalNum)) {
         chineseStr += cnInteger;
     }
     return chineseStr;
}

// URL转换对象
// 用法:handleStrFormat(url)
// 解释:将url参数转换为对象
const handleStrFormat = (url) => {
    if (typeof url === "string") url = url.split("?")[1] || "";
    if (typeof url === "string") url = url.split(/[&=]/);
    let r = {};
    for (let i = 0; i < url.length; i = i + 2) {
      if (url[i]) {
        r[url[i]] = url[i + 1];
      }
    }
    return r;
};

// 本地存储localStorage(设置/获取/清空)
// 用法:handleStore.set(name,value,day)/get(name)/clear(name)
// 解释: set-设置，get-获取，clear-清空 （name:名词、value:值、day:时间）
const handleLocalStorage = { 
    // 设置
    set: (name, value, day) => { 
        let d = new Date()
        let time = 0
        // 时间默认为1天
        day = (typeof(day) === 'undefined' || !day) ? 1 : day
        // 毫秒
        time = d.setHours(d.getHours() + (24 * day))
        localStorage.setItem(name, JSON.stringify({
            data: value,
            time: time
        }))
    },
    // 获取
    get: (name) => {
        let data = localStorage.getItem(name)
        if (!data) {
            return null
        }
        let obj = JSON.parse(data)
        // 过期
        if (new Date().getTime() > obj.time) {
            localStorage.removeItem(name)
            return null
        } else {
            return obj.data
        }
    },
    // 清空
    clear: (name) => { 
        // 清空name
        if (name) {
            localStorage.removeItem(name)
        }
        // 清空全部 
        else { 
            localStorage.clear()
        }
    }
  }

module.exports  = {
    handleStrFormat, //将url参数转换为对象
    handleSmallToBig,//将数字金额转换为大写金额
    handleLocalStorage,//（设置/获取/清空）本地存储localStorage
}