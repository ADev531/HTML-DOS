function readDisk() {
	fetch('https://adev531.github.io/HTMLDOS/disk.json')
		.then(response => {
		return response.json();
	})
}
