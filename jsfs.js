// the JSFS stands "JSON FileSystem". This manage disk, and files.

function saveDisk() {
	//Saves disk
	localStorage.setItem("disk", JSON.stringify(disk));
}

function Format() {
	//Formats disk
	fetch('https://adev531.github.io/HTMLDOS/disk.json')
			.then((response) => response.json())
    			.then((json) => disk = json)
			//fetchs default disk.
			saveDisk();
}

function readDisk() {
	try {
		if (localStorage.getItem("disk") === null) {
			fetch('https://adev531.github.io/HTMLDOS/disk.json')
			.then((response) => response.json())
    			.then((json) => disk = json)
			//fetchs default disk.
			saveDisk();
		} else {
			disk = JSON.parse(localStorage.getItem("disk"));
		}
	} catch {
		iosoutput.innerHTML += "<br>JSFS Error : Disk may Damaged. Please run command 'restore' to restore HTML-DOS."
	}
}

function getAllFiles() {
	return disk["files"];
}
