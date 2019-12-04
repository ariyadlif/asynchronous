/*var http = require('http')

function hitung(angka1,angka2) {
	var hasil = angka1 * angka2
	var result = `${angka1} * ${angka2} = ${hasil}`
	return result;
}

console.log("satu")

function coba2(callback) {
    setTimeout(function () {
        console.log("dua")
        callback()
    });
}

function coba3() {
	console.log("tiga")
}

var server = http.createServer(function(req, res) {
	var nama = "aku"
	res.end(coba2)
})

server.listen(5002)

console.log("server di 5002")*/

console.log("satu")

function coba2(callback) {
	setTimeout(function () {
		console.log("dua")
		callback()
	}, 2000);
}

function coba3() {
	console.log("tiga")
}

coba2(coba3)