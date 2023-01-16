// not used. used in 1.0 devalpha 1 (jsfs service)

function readDisk() {
	fetch('https://adev531.github.io/HTMLDOS/disk.json')
		.then(response => {
		return response.json();
	})
}
