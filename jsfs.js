// the JSFS stands "JSON FileSystem". This manage disk, and files.

function saveDisk() {
	//Saves disk
	localStorage.setItem("disk", JSON.stringify(disk));
}

function readDisk() {
	if (localStorage.getItem("disk") === null) {
		fetch('https://adev531.github.io/HTMLDOS/disk.json')
    		.then((response) => response.json())
    		.then((json) => disk = json)
		//fetchs default disk.
		saveDisk();
	} else {
		disk = JSON.parse(localStorage.getItem("disk"));
		console.log(JSON.stringify(disk));
	}
}

function getAllFiles() {
	return disk["files"];
}
