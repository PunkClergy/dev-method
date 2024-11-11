
//  NetworkInformation 对象
// 用法:handleNetworkInformation()
// 解释:返回一个 NetworkInformation 对象，该对象包含了有关用户设备网络连接的信息
const handleNetworkInformation = () => {
    if (navigator.connection) {
        // 使用对象解构赋值从 navigator.connection 中提取属性
        const connection = navigator.connection
        return {
            downlink: connection.downlink,  // 当前网络连接的下载速度，单位通常是 Mbps
            effectiveType: connection.effectiveType,  // 下载速度和带宽延迟等因素返回的网络类型，如 "4g"、"3g"、"2g" 等
            rtt: connection.rtt,  // 往返时延
            saveData: connection.saveData,  // 是否启用了数据节省模式
            type: connection.type || null,  // 网络连接的类型，如 "wifi"、"cellular" 等; 注：某些浏览器中可能不被支持或返回的值有所不同
        };
    } else {
        return 'error';  // 如果 navigator.connection 不存在，返回 'error'
    }
};

// navigator对象
// 用法:handleNavigatorTopLevelInfo()
// 解释:Navigator 接口代表了用户代理的状态和身份，它允许脚本对其进行查询并注册自身以便执行某些活动。可以通过 window.navigator 只读属性获取 Navigator 对象
const handleNavigatorTopLevelInfo = () => {
    if (navigator) {
        return {
            navigator: navigator,//navigator包含的所有值；更多文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator
            // 包含有关用户代理（即浏览器）信息的字符串。
            // 例:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36     
            // 这个字符串表明：
            // 浏览器是 Chrome，版本号为 91.0.4472.124。
            // 操作系统是 Windows 10，64 位版本。
            // 渲染引擎是 WebKit（这里实际上是 Blink，但 Blink 标识自己为兼容 WebKit）。
            // Safari/ 537.36 可能是指这个浏览器与 Safari 浏览器在渲染引擎层面有共同之处（因为 Chrome 基于 WebKit / Blink，而 WebKit 最初是由 Safari 开发的）。
            userAgent: navigator.userAgent,
            cookieEnabled: navigator.cookieEnabled,//判断当前浏览器是否支持并启用了 cookie
            deviceMemory: navigator.deviceMemory,//用户设备内存大小的信息;值通常是2、4、8或16，表示设备有2GB、4GB、8GB或16GB的RAM
        }
    }
    else {
        return 'error';  // 如果 navigator.connection 不存在，返回 'error'
    }
}

module.exports = {
    handleNetworkInformation, //NetworkInformation对象
    handleNavigatorTopLevelInfo,//Navigator外层信息
}