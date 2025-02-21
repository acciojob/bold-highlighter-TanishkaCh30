let words = document.querySelectorAll("strong")

function highlight() {
    words.forEach(word =>{
		word.style.color = "rgb(0, 128, 0)";
	})
}


function return_normal() {
     words.forEach(word =>{
		word.style.color = "rgb(0, 0, 0)";
	})
}

    

