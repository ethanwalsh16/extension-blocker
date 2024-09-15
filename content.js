const generateStyle = () => {
	return `<style>
		html {
  			background: rgb(201, 226, 221 );
  			display: flex;
		}
		.center-screen {
  			margin:auto;
		}
		</style>
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
		<div class="center-screen">
			<body>
				<h1>This website is bricked.</h1>
			</body>
		</div>
		</html>
	 `;
};

document.head.innerHTML = generateStyle();
document.body.innerHTML = generateHTML();
