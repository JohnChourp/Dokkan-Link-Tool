function sleep(duration){
	return new Promise(resolve => {
		setTimeout(resolve , duration)
	})
}

function filterPartialMatch(){
	let catList = [];
	
	let categories = document.getElementsByClassName("categories");
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	let appeared = document.getElementsByClassName("appeared");
	let appearedType = document.getElementsByClassName("appearedType");
	let appearedRarity = document.getElementsByClassName("appearedRarity");
	
	for(let i = 0; i < categoriesBtn.length; i ++){
		catList[i] = document.getElementsByClassName(categoriesBtn.item(i).id);
	}
	
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "none";
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let j = 0; j < categoriesOrange.length; j ++){
		categoriesOrange.item(j).addEventListener('click' , function(){
			if(categoriesOrange.item(j).classList.contains("activeCategory")){
				categoriesOrange.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				
				for(let j = 0; j < categoriesBtn.length; j ++){
					if(categoriesBtn.item(j).classList.contains("activeCategory")){
						for(let i = 0; i < catList[j].length; i ++){
							catList[j].item(i).style.display = "inline-block";
							catList[j].item(i).classList.add("appeared");
						}
					}
				}
			}else{
				categoriesOrange.item(j).classList.add("activeCategory");
				
				showActiveCategoryWithDelay(catList , j);
			}
			if(appeared.length > 0 && appearedRarity.length < 1){
				filterInit(appearedType , appearedRarity , categories , categoriesOrange , j)
			}
		});
	}
	
	for(let j = 0; j < categoriesGreen.length; j ++){
		categoriesGreen.item(j).addEventListener('click' , function(){
			if(categoriesGreen.item(j).classList.contains("activeCategory")){
				categoriesGreen.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				
				for(let j = 0; j < categoriesBtn.length; j ++){
					if(categoriesBtn.item(j).classList.contains("activeCategory")){
						for(let i = 0; i < catList[j].length; i ++){
							catList[j].item(i).style.display = "inline-block";
							catList[j].item(i).classList.add("appeared");
						}
					}
				}
			}else{
				categoriesGreen.item(j).classList.add("activeCategory");
				showActiveCategoryWithDelay(catList , j + categoriesOrange.length);
			}
			if(appeared.length > 0 && appearedRarity.length < 1){
				filterInit(appearedType , appearedRarity , categories , categoriesGreen , j)
			}
		});
	}
	
	for(let j = 0; j < categoriesYellow.length; j ++){
		categoriesYellow.item(j).addEventListener('click' , function(){
			if(categoriesYellow.item(j).classList.contains("activeCategory")){
				categoriesYellow.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				
				for(let j = 0; j < categoriesBtn.length; j ++){
					if(categoriesBtn.item(j).classList.contains("activeCategory")){
						for(let i = 0; i < catList[j].length; i ++){
							catList[j].item(i).style.display = "inline-block";
							catList[j].item(i).classList.add("appeared");
						}
					}
				}
			}else{
				categoriesYellow.item(j).classList.add("activeCategory");
				showActiveCategoryWithDelay(catList , j + categoriesOrange.length + categoriesGreen.length);
			}
			if(appeared.length > 0 && appearedRarity.length < 1){
				filterInit(appearedType , appearedRarity , categories , categoriesYellow , j)
			}
		});
	}
	
	for(let j = 0; j < categoriesCyan.length; j ++){
		categoriesCyan.item(j).addEventListener('click' , function(){
			if(categoriesCyan.item(j).classList.contains("activeCategory")){
				categoriesCyan.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				
				for(let j = 0; j < categoriesBtn.length; j ++){
					if(categoriesBtn.item(j).classList.contains("activeCategory")){
						for(let i = 0; i < catList[j].length; i ++){
							catList[j].item(i).style.display = "inline-block";
							catList[j].item(i).classList.add("appeared");
						}
					}
				}
			}else{
				categoriesCyan.item(j).classList.add("activeCategory");
				showActiveCategoryWithDelay(catList , j + categoriesOrange.length + categoriesGreen.length + categoriesCyan.length);
			}
			if(appeared.length > 0 && appearedRarity.length < 1){
				filterInit(appearedType , appearedRarity , categories , categoriesCyan , j)
			}
		});
	}
	
	for(let j = 0; j < categoriesBlue.length; j ++){
		categoriesBlue.item(j).addEventListener('click' , function(){
			if(categoriesBlue.item(j).classList.contains("activeCategory")){
				categoriesBlue.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				
				for(let j = 0; j < categoriesBtn.length; j ++){
					if(categoriesBtn.item(j).classList.contains("activeCategory")){
						for(let i = 0; i < catList[j].length; i ++){
							catList[j].item(i).style.display = "inline-block";
							catList[j].item(i).classList.add("appeared");
						}
					}
				}
			}else{
				categoriesBlue.item(j).classList.add("activeCategory");
				showActiveCategoryWithDelay(catList , j + categoriesOrange.length + categoriesGreen.length + categoriesCyan.length + categoriesCyan.length);
			}
			if(appeared.length > 0 && appearedRarity.length < 1){
				filterInit(appearedType , appearedRarity , categories , categoriesBlue , j)
			}
		});
	}
	
	for(let j = 0; j < categoriesPurple.length; j ++){
		categoriesPurple.item(j).addEventListener('click' , function(){
			if(categoriesPurple.item(j).classList.contains("activeCategory")){
				categoriesPurple.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				
				for(let j = 0; j < categoriesBtn.length; j ++){
					if(categoriesBtn.item(j).classList.contains("activeCategory")){
						for(let i = 0; i < catList[j].length; i ++){
							catList[j].item(i).style.display = "inline-block";
							catList[j].item(i).classList.add("appeared");
						}
					}
				}
			}else{
				categoriesPurple.item(j).classList.add("activeCategory");
				showActiveCategoryWithDelay(catList , j + categoriesOrange.length + categoriesGreen.length + categoriesCyan.length + categoriesCyan.length + categoriesBlue.length);
			}
			if(appeared.length > 0 && appearedRarity.length < 1){
				filterInit(appearedType , appearedRarity , categories , categoriesPurple , j)
			}
		});
	}
	
	for(let j = 0; j < categoriesRed.length; j ++){
		categoriesRed.item(j).addEventListener('click' , function(){
			if(categoriesRed.item(j).classList.contains("activeCategory")){
				categoriesRed.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				
				for(let j = 0; j < categoriesBtn.length; j ++){
					if(categoriesBtn.item(j).classList.contains("activeCategory")){
						for(let i = 0; i < catList[j].length; i ++){
							catList[j].item(i).style.display = "inline-block";
							catList[j].item(i).classList.add("appeared");
						}
					}
				}
			}else{
				categoriesRed.item(j).classList.add("activeCategory");
				showActiveCategoryWithDelay(catList , j + categoriesOrange.length + categoriesGreen.length + categoriesCyan.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length);
			}
			if(appeared.length > 0 && appearedRarity.length < 1){
				filterInit(appearedType , appearedRarity , categories , categoriesRed , j)
			}
		});
	}
	
	for(let j = 0; j < categoriesDarkGreen.length; j ++){
		categoriesDarkGreen.item(j).addEventListener('click' , function(){
			if(categoriesDarkGreen.item(j).classList.contains("activeCategory")){
				categoriesDarkGreen.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				
				for(let j = 0; j < categoriesBtn.length; j ++){
					if(categoriesBtn.item(j).classList.contains("activeCategory")){
						for(let i = 0; i < catList[j].length; i ++){
							catList[j].item(i).style.display = "inline-block";
							catList[j].item(i).classList.add("appeared");
						}
					}
				}
			}else{
				categoriesDarkGreen.item(j).classList.add("activeCategory");
				showActiveCategoryWithDelay(catList , j + categoriesOrange.length + categoriesGreen.length + categoriesCyan.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length);
			}
			if(appeared.length > 0 && appearedRarity.length < 1){
				filterInit(appearedType , appearedRarity , categories , categoriesDarkGreen , j)
			}
		});
	}
	
	for(let j = 0; j < categoriesDarkBlue.length; j ++){
		categoriesDarkBlue.item(j).addEventListener('click' , function(){
			if(categoriesDarkBlue.item(j).classList.contains("activeCategory")){
				categoriesDarkBlue.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				
				for(let j = 0; j < categoriesBtn.length; j ++){
					if(categoriesBtn.item(j).classList.contains("activeCategory")){
						for(let i = 0; i < catList[j].length; i ++){
							catList[j].item(i).style.display = "inline-block";
							catList[j].item(i).classList.add("appeared");
						}
					}
				}
			}else{
				categoriesDarkBlue.item(j).classList.add("activeCategory");
				showActiveCategoryWithDelay(catList , j + categoriesOrange.length + categoriesGreen.length + categoriesCyan.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkGreen.length);
			}
			if(appeared.length > 0 && appearedRarity.length < 1){
				filterInit(appearedType , appearedRarity , categories , categoriesDarkBlue , j)
			}
		});
	}
}

function filterInit(appearedType , appearedRarity , categories , categoriesColor , j){
	if(appearedType.length < 1 && appearedRarity.length > 0){
		filterAppearRarity(categories , categoriesColor , j);
	}
	
	if(appearedType.length > 0 && appearedRarity.length < 1){
		filterAppearType(categories , categoriesColor , j);
	}
	
	if(appearedType.length > 0 && appearedRarity.length > 0){
		filterAppearTypeAndAppearRarity(categories , categoriesColor , j);
	}
}

function filterAppearRarity(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
		}else{
			categories.item(i).style.display = "none";
		}
	}
}

function filterAppearType(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
		}else{
			categories.item(i).style.display = "none";
		}
	}
}

function filterAppearTypeAndAppearRarity(categories , categoriesColor , j){
	for(let i = 0; i < categories.length; i ++){
		if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType") && categories.item(i).classList.contains("appearedRarity") && categories.item(i).classList.contains(categoriesColor.item(j).id)){
			categories.item(i).style.display = "inline-block";
		}else{
			categories.item(i).style.display = "none";
		}
	}
}

function showActiveCategoryWithDelay(catList , j){
	for(let i = 0; i < catList[j].length; i ++){
		if(i < (catList[j].length / 6)){
			catList[j].item(i).style.display = "inline-block";
			catList[j].item(i).classList.add("appeared");
		}
		
		if(i < (catList[j].length / 5.5)){
			sleep(100).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 5)){
			sleep(200).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 4.5)){
			sleep(300).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 4)){
			sleep(400).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 3.5)){
			sleep(500).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 3)){
			sleep(600).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 2.5)){
			sleep(700).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 2)){
			sleep(800).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 1.5)){
			sleep(900).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length)){
			sleep(1000).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
	}
}