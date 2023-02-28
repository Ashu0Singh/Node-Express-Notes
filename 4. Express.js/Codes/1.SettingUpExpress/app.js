const http = require('http');
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded());

app.get('/add-product',(req,res,next) => {
	res.send(`
        <html>
            <head>
                <title>Add Product</title>
            </head>
            <body>
                <form action='/product' method='POST'>
                    <input type='text' name='title'>
                    <button type='submit'> Add Product </button>
                </form>
            </body>
        </html>
	`);
})

app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next) => {
	console.log("This always runs!");
    res.send("<h1>Welcome for Express JS</h1>");
})

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);