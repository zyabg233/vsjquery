//导入http模块
const http = require('http')
//创建web服务器实例
const server = http.createServer()
//绑定监听事件，监听客户端请求
const qs = require('querystringify')

server.on('request',function(req,res){
    const url = req.url
    const method = req.method
    const str = `url is ${url}, method is ${method}`
    //解决中文乱码
    res.setHeader('Content-Type', 'text/html;charset=UTF-8')
    // res.writeHead(200, { 'Content-Type': 'text/plain' })
    //将内容响应给客户端
    // const o = qs.parse(str)
    res.end(str)
})
//启动服务器
server.listen(80,function(){
    console.log('web http://localhost')
})
