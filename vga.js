var vgascreen = null;
let vertext = document.getElementById('vertxt');

function InitVGA() {
	vgascreen = document.createElement("div");
	vgascreen.style.width = "600px";
	vgascreen.style.height = "400px";
	vgascreen.style.backgroundColor = "white";
	document.body.appendChild(vgascreen);
	
	iosinput.remove();
	iosoutput.remove();
	vertext.remove();
}