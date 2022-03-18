function filterCategories(){
	let categories = document.getElementsByClassName("categories");
	let worldTournamentCategory = document.getElementsByClassName("world-tournament");
	let worldTournamentBtn = document.getElementById("world-tournament");
	
	let hybridSaiyansCategory = document.getElementsByClassName("hybrid-saiyans");
	let hybridSaiyansBtn = document.getElementById("hybrid-saiyans");
	
	worldTournamentBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < worldTournamentCategory.length; i ++){
			worldTournamentCategory.item(i).style.display = "inline-block";
		}
	});
	
	hybridSaiyansBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < hybridSaiyansCategory.length; i ++){
			hybridSaiyansCategory.item(i).style.display = "inline-block";
		}
	});
}