// the JSFS stands "JSON FileSystem". This manage disk, and files.

function saveDisk() {
	//Saves disk
	localStorage.setItem("disk", JSON.stringify(disk));
}

function readDisk() {
	if (localStorage.getItem("disk") === null) {
		fetch('https://github.io/HTML-DOS/disk.json')
    		.then((response) => response.json())
    		.then((json) => disk = json)
		//fetchs default disk.
		saveDisk();
	} else {
		disk = JSON.parse(localStorage.getItem("disk"));
	}
}

function getAllFiles() {
	return disk["files"];
}
