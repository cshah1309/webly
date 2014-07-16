
for (var i = 0; i < 1000; i += 100) {
  waitFor(i, function then() {
    console.log(i)
  })
}

function waitFor(milliseconds, callback) {
  setTimeout(callback(milliseconds), milliseconds)//passing Argument with callback
}
