const fs = require('fs')

function readFile_pr (fname) {
  return new Promise((resolve) => {
    fs.readFile(fname, 'utf-8', (err, s)=> {
      resolve(s)
    })
  })
}

readFile_pr('a.txt')
.then((text)=> {
  console.log('a.txt done!', text)
  return readFile_pr('b.txt')
})
.then((text)=> {
  console.log('b.txt done!', text)
  return readFile_pr('c.txt')
})
.then((text)=> {
  console.log('c.txt done!', text)
})