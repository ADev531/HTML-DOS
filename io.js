document.write('<p id="vertxt">HTML-DOS v1.00</p>');
document.write('<p id="iosoutput"></p>');
document.write('<input autocomplete="off" id="iosinput"/>');
let iosinput = document.getElementById('iosinput');
let iosoutput = document.getElementById('iosoutput');

var disk = readDisk();

iosinput.addEventListener('keypress', function(e){
	var args = iosinput.value.split(' ');
	var command = args[0].toLowerCase();
	
	if (e.keyCode === 13 || e.which === 13) {
		e.preventDefault();
		var disk = readDisk();
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
			iosoutput.innerHTML += "<br>JSFS Restore is checking problem for C: drive...";
			if (disk === undefined){
				iosoutput.innerHTML += "<br>JSFS Restore has finded problem. fixing...";
				disk = JSON.parse('{"files": {"hello.txt": "hello world"}}')
				//fetchs default disk
				if (disk != undefined) {
					iosoutput.innerHTML += "<br>JSFS Restore has completed disk recovery for C: drive.";
					saveDisk();
				} else {
					iosoutput.innerHTML += "<br>JSFS Restore has failed disk recovery."
					saveDisk();
				}
			} else {
				iosoutput.innerHTML += "<br>JSFS Restore is can't find any problem for C: drive.";
			}
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
