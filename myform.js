const http = require("http");
 
//Sử dụng thư viện querysting để phân tích body 
const qs = require('querystring');
 
//Hằng số chứa form HTML hiển thị ra trong trường hợp method là GET
const formHTML = `
    <form method="POST" action="/">
        <input type="text" name="fullName" placeholder="Full Name"> 
        <input type="number" name="age" placeholder="Age"> 
        <button type="submit">Send</button>
    </form>
`
//Sử dụng phương thức createServer
http.createServer(function(req, res) {
    //Thêm header
    res.writeHead(200, {'Content-Type': 'text/html'});
 
    //Kiểm tra URL và method
    if (req.url === '/' && req.method === 'GET') {
        //Trả về một form
        res.write(formHTML)
 
        //Kết thúc phản hồi
        res.end();
    }
 
    //Kiểm tra URL và method
    if (req.url === '/' && req.method === 'POST') {
       //Biến để chứa body
       let body = ''
 
       //Bắt sự kiện data trong streams
       req.on('data', function(data) {
           body += data
       })
 
       //Bắt sự kiện end trong streams
       req.on('end', function() {
           //phân tích Body
            let postData = qs.parse(body);
 
            //In ra trong terminal
            console.log(postData)
 
            //Phản hồi lại clients
            res.write(`Full Name: ${postData.fullName} <br>
            Age: ${postData.age}`)
 
            //Kết thúc phản hồi
            res.end();
       })
       
    }
}).listen(3000); //Sử dụng port 3000 để lắng nghe