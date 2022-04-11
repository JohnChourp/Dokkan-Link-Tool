function searchCharacter(){
	let dataChar = 'data-char';
	let dataCharItems = document.querySelectorAll('[' + dataChar + ']');
	let categories = document.getElementsByClassName("categories");
	let characterSearchId = document.getElementById("character-search-id");
	
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "none";
	}
	
	for(let i = 0; i < categories.length; i ++){
		if(dataCharItems[i].getAttribute(dataChar).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0){
			categories.item(i).style.display = "inline-block";
		}else{
			categories.item(i).style.display = "none";
		}
	}
}