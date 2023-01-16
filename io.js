document.write("<p>HTML-DOS v1.00</p>")
document.write('<p id="iosoutput"></p>')
document.write('<input id="iosinput"/>')

var disk = null
var iosinput = document.getElementById('iosinput')
var iosoutput = document.getElementById('iosoutput')

iosinput.addEventListener('keypress', function(e){
	var args = iosinput.value.split(" ")
	var command = args[0]
	if (e.keyCode === 13 || epy.which === 13) {
		e.preventDefault()
		if (command === "echo") {
			iosoutput.innerHTML += '<br>'
			args.forEach(function(arg){
				if (arg != command) {
					iosoutput.innerHTML += arg + ' '
				}
			});
		} else {
			iosoutput.innerHTML += "<br>no command named " + command + ".\n"
		}
	}
})

setInterval(function() {
		window.scrollBy(0,50)
}, 1)