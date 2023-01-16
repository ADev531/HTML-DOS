fetch('https://adev531.github.io/HTMLDOS/data.json')
	 .then((response) => response.json())
	.then((json) => console.log(json));

function readDisk() {
	fetch('./data.json')
	    .then((response) => response.json())
		.then((json) => console.log(json));
}
