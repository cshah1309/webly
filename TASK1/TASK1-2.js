
for (var i = 0; i < 1000; i += 100) {
  waitFor(i, function then(i) {
    console.log(i+100);
  })
}

function waitFor(milliseconds, callback) {
  setTimeout(function(){callback(milliseconds)}, milliseconds)//passing Argument with callback
}
