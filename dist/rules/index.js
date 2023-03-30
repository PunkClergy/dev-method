
// 手机号验证
// 用法:handleMPhone(value)
// 解释:输入手机号验证是否合法
const handleMPhone = (value) => {
    const reg = new RegExp(/^(1[3-9])\d{9}$/);
    if (reg.test(value)) {
      return true;
    } else {
      return false;
    }
};  

// 常用正则验证
// handleCheckRegular(value,type) type:phone/tel 注意大小写
// 解释:return 查找式验证
const handleCheckRegular = (value,type) => {
    switch (type) {
      case 'phone': // 手机号码
        return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(value)
      case 'tel': // 座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(value)
      case 'card': // 身份证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
      case 'pwd': // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{5,17}$/.test(value)
      case 'postal': // 邮政编码
        return /[1-9]\d{5}(?!\d)/.test(value)
      case 'QQ': // QQ号
        return /^[1-9][0-9]{4,9}$/.test(value)
      case 'email': // 邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)
      case 'money': // 金额(小数点2位)
        return /^\d*(?:\.\d{0,2})?$/.test(value)
      case 'URL': // 网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value)
      case 'IP': // IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(value)
      case 'date': // 日期时间
        return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(value) ||
          /^(\d{4})\-(\d{2})\-(\d{2})$/.test(value)
      case 'number': // 数字
        return /^[0-9]$/.test(value)
      case 'english': // 英文
        return /^[a-zA-Z]+$/.test(value)
      case 'chinese': // 中文
        return /^[\u4E00-\u9FA5]+$/.test(value)
      case 'lower': // 小写
        return /^[a-z]+$/.test(value)
      case 'upper': // 大写
        return /^[A-Z]+$/.test(value)
      case 'HTML': // HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(value)
      default:
        return true
    }
}
module.exports  = {
    handleMPhone, //手机号正则验证
    handleCheckRegular,//常用正则验证
}