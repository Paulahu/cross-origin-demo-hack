function jsonp() {
    return new Promise((resolve, reject) => {
        const random = 'paulaJSONPCallbackName' + Math.random()
        window[random] = () => {
            resolve(data) //如果成功执行resolve'
        }

        const script = document.createElement('script')
        script.src = `http://qq.com:8888/friends.js?callback=${random}`

        //如果不使用函数就不用onload
        // script.onload = () => {
        //     console.log(window.xxx)
        // }

        //删除执行完的script标签
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject() //如果失败执行reject
        }
        document.body.appendChild(script)
    })
}

jsonp('http://qq.com:8888/friends.js')
    .then((data) => {
        console.log(data)
    })