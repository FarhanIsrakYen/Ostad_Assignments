const express=require('express');
const fs=require('fs');
const app = express();
const PORT = 5500;

app.listen(PORT, function () {
    console.log("Server is running on port 5500");
});


app.get('/', function (req, res) {
    res.end("This is the Home Page")    
})

app.get('/about', function (req,res) {
    res.end("This is the About Page")    
})

app.get('/contact', function (req, res) {
    res.end("This is the Contact Page")
})


app.post('/file-write', function (req, res) {
    try {
        writeFile()
        res.end("File created successfully")
    } catch (error) {
        res.end("File creation failed for the error ", error)
    }
})

function writeFile() {
    const data = fs.writeFileSync('demo.txt', 'hello world');
}