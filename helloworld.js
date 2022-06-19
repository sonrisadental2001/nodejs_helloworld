const http = require("http");
 
//Sử dụng phương thức createServer
http.createServer(function(req, res) {
    //Thêm header vào trong response
    res.writeHead(200, {'Content-Type': 'text/html'});
     
    //Phản hồi của server
    res.write("Hello World !");
 
    //Kết thúc phản hồi
    res.end();
}).listen(3000); //Sử dụng port 3000 để lắng nghe