
localStorage.setItem("theme", "light");

let theme1 = localStorage.getItem("theme")

let ThemeObj = {
	nome: theme1
}

function theme(){

	alert(`Tema: ${ThemeObj.nome}`)

	if (ThemeObj.nome == "light") {
		let toggleTheme = document.querySelector("body").classList
		toggleTheme.remove("dark")
	}else{
		//const list = element.classList;
		//list.add("myStyle");
		let toggleTheme = document.querySelector("body").classList
		toggleTheme.add("dark")
	}
	
}//fim fincao theme

function darkTheme(){
	document.getElementById("sun-icon").style.display = "block"
	let moon = document.getElementById("moon-icon").style.display = "none"
	//const list = element.classList;
	//list.add("myStyle");
	let toggleTheme = document.querySelector("body").classList
	toggleTheme.add("dark")
	localStorage.setItem("theme", "dark");
}

function lightTheme(){
	let moon = document.getElementById("moon-icon").style.display = "block"
	let sun = document.getElementById("sun-icon").style.display = "none"

	//const list = element.classList;
	//list.add("myStyle");
	let toggleTheme = document.querySelector("body").classList
	toggleTheme.remove("dark")

	localStorage.setItem("theme", "light");
}// fim funcao

