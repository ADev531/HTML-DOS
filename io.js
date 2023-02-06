document.write('<p id="vertxt">HTML-DOS v1.00</p>');
document.write('<p id="iosoutput"></p>');
document.write('<input autocomplete="off" id="iosinput"/>');
let iosinput = document.getElementById('iosinput');
let iosoutput = document.getElementById('iosoutput');

var disk = readDisk();

iosinput.addEventListener('keypress', function(e){
	var args = iosinput.value.split(' ');
	var command = args[0].toLowerCase();
	var disk = readDisk();
	
	if (e.keyCode === 13 || e.which === 13) {
		e.preventDefault();
		if (command === "echo") {
			iosoutput.innerHTML += '<br>';
			args.forEach(function(arg){
				if (arg != command) {
					iosoutput.innerHTML += arg + ' ';
				}
			});
		} else if (command === "readfile") {
			var allfiles = getAllFiles();
			try {
				iosoutput.innerHTML += "<br>" + allfiles[args[1]];
			} catch {
				iosoutput.innerHTML += "<br>Disk error or No file found.";
			}
		} else if (command === "deletefile") {
			var allfiles = getAllFiles();
			try {
				delete allfiles[args[1]];
				console.log(args[1]);
				saveDisk();
			} catch(err) {
				console.log(err.message);
				iosoutput.innerHTML += "<br>Disk error or No file found.";
			}
		} else if (command === "dir") {
			var allfiles = getAllFiles();
			
			iosoutput.innerHTML += "<br>Directory Information:<br>";
			
			console.log(allfiles);
			Object.entries(allfiles).forEach(function([key, item]){
				iosoutput.innerHTML += "<br>" + key;
			});
			iosoutput.innerHTML += "<br>";
		} else if (command === "createfile") {
			try {
				var allfiles = getAllFiles();
				
				iosoutput.innerHTML += "<br>Creating file.";
				
				allfiles[args[1]] = "";
				saveDisk();
				
				iosoutput.innerHTML += "<br>Created file.";
			} catch {
				iosoutput.innerHTML += "<br>Failed to write HTML-DOS Disk.";
			}
		} else if (command === "writeline") {
			try {
				iosoutput.innerHTML += "<br><br>";
				var allfiles = getAllFiles();
			
				iosoutput.innerHTML += "<br>Writing to HTML-DOS Disk.";
				allfiles[args[1]] += "<br>";
				args.forEach(function(value) {
					if (value != command && value != args[1]) {
						allfiles[args[1]] += " " + value;
					}
				});
				saveDisk();
				iosoutput.innerHTML += "<br>Saved to HTML-DOS Disk.";
			} catch {
				iosoutput.innerHTML += "<br>Failed to write HTML-DOS Disk.";
			}
		}
		else if (command === "initvga") {
			InitVGA();
		}
		else if (command === "restore") {
			fetch('https://adev531.github.io/HTMLDOS/disk.json')
			.then((response) => response.json())
    			.then((json) => disk = json)
			saveDisk();
			iosoutput.innerHTML += "<br>Disk Restore Complete : C: drive. Restart (Refresh) to apply.";
		}
		else {
			iosoutput.innerHTML += "<br>No command named " + command + ".\n";
		}
		iosinput.value = "";
	}
})

setInterval(function() {
	window.scrollBy(0,50);
}, 1);
