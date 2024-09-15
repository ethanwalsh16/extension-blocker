const generateStyle = () => {
	return `<style>
		html {
			background-color: #ff0000;
		}</style>
	`;
};

const generateHTML = () => {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Bricked</title>
		</head>

		<body>
			<h1>You got bricked</h1>
		</body>
		</html>
	 `;
};

document.body.innerHTML = generateHTML();
document.head.innerHTML = generateStyle();