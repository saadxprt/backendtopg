const http = require("http");

const myVariable = "4d0d9d9d4b7cab8986aa90db0c7ed07964a8acf5405bbf746aebd7f1c80e87b6";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(myVariable);
    res.end();
});

server.listen(8080, () => {
    console.log("Server running on http://localhost:8080/");
});