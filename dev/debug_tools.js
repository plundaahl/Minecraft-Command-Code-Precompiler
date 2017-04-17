function write(string) {
	if (string == undefined) {string = "";}

	document.getElementById("console").innerHTML += string;
	document.getElementById("console").scrollTop = document.getElementById("console").scrollHeight;
}

function writeln(string) {
	if (string == undefined) {string = "";}
	write(string + "\n");
}