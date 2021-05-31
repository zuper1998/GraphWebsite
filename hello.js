const http = require("http");
const algo = require("./DeptG.js");
const host = 'localhost';
const port = 8000;


var result = "";

algo.onRuntimeInitialized = () => {
	result = algo.cwrap("GenerateG","string",[])()
	console.log(result)
}


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(result);
};






const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});




