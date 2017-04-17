function write(string) {
	try {
		document.getElementById("console").innerHTML += (string);
	} catch (err) {}
}

function writeln(string) {

	write(string + "\n");
}