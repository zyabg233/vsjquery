//导入http模块
const http = require('http')
//创建web服务器实例
const fs = require('fs')
const path = require('path')
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url
    const newUrl = decodeURI(url)
    // 把请求路径转换为具体文件存放路径
    const fpath = path.join(__dirname, newUrl)
    console.log(fpath)
    let content = '<h1>404</h1>'
    if(url === '/' || url ==='/index.html'){
        content = '<h1>首页</h1>'
    }else if(url === '/about.html'){
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    fs.readFile(fpath, 'utf8', (err, dataStr) => { 
        if (err) return res.end('404')
        res.end(dataStr)
    })
    res.end(content)
})

server.listen(88, () => {
    console.log('running at http://127.0.0.1:88')
})