
if (localStorage.getItem('theme') === null){
    localStorage.setItem("theme", "false");
}

checkStatus();


function checkStatus(){
    if (localStorage.getItem('theme')==="true"){
		document.getElementById("sun-icon").style.display = "block"
		document.getElementById("moon-icon").style.display = "none"
		
		let toggleTheme = document.querySelector("body").classList
		toggleTheme.add("dark")

    }else{
        document.getElementById("moon-icon").style.display = "block"
		document.getElementById("sun-icon").style.display = "none"

		let toggleTheme = document.querySelector("body").classList
		toggleTheme.remove("dark")

    }
}

function changeStatus(){                                           
    if (localStorage.getItem('theme') === "true"){                 
        
		localStorage.setItem("theme", "false");
        document.getElementById("moon-icon").style.display = "block"
		document.getElementById("sun-icon").style.display = "none"

		let toggleTheme = document.querySelector("body").classList
		toggleTheme.remove("dark")
		
    } else{

		localStorage.setItem('theme', "true");                  
        document.getElementById("sun-icon").style.display = "block"
		document.getElementById("moon-icon").style.display = "none"

		let toggleTheme = document.querySelector("body").classList
		toggleTheme.add("dark")

    }
}

