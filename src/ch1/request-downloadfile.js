//read module

const fs = require('fs')
const request = require('request')

//download file using request module

request('http://uta.pw/shodou/img/28/214.png').pipe(fs.createWriteStream('test.png'))