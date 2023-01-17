// the JSFS "JSON-File/System". This manage disk, and files.

function readDisk() {
	fetch('https://adev531.github.io/HTMLDOS/disk.json')
    		.then((response) => response.json())
    		.then((json) => {
		console.log(json)
		return json
	}
    });
}
