document.write("<p>HTML-DOS v1.00</p>")
document.write('<p id="iosoutput"></p>')
document.write('<input id="iosinput"/>')

var iosinput = document.getElementById('iosinput')
var iosoutput = document.getElementById('iosoutput')

var disk = null

fetch('https://adev531.github.io/HTMLDOS/disk.json')
    .then((response) => response.json())
    .then((json) => {
	console.log('HTML-DOS Boot drive information :' + json)
	disk = json
    });

iosinput.addEventListener('keypress', function(e){
	var args = iosinput.value.split(" ")
	var command = args[0]
	if (e.keyCode === 13 || e.which === 13) {
		e.preventDefault()
		if (command === "echo") {
			iosoutput.innerHTML += '<br>'
			args.forEach(function(arg){
				if (arg != command) {
					iosoutput.innerHTML += arg + ' '
				}
			});
		} else if (command === "readfile") {
			iosoutput.innerHTML += "<br>" + disk[args[1]]
		} else {
			iosoutput.innerHTML += "<br>no command named " + command + ".\n"
		}
	}
})

setInterval(function() {
		window.scrollBy(0,50)
}, 1)
