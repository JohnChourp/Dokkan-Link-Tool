function sleep(duration){
	return new Promise(resolve => {
		setTimeout(resolve , duration)
	})
}

function filterCategory(){
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
							showActiveCategoryWithDelay(catList , j);
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
							showActiveCategoryWithDelay(catList , j);
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
							showActiveCategoryWithDelay(catList , j);
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
							showActiveCategoryWithDelay(catList , j);
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
							showActiveCategoryWithDelay(catList , j);
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
							showActiveCategoryWithDelay(catList , j);
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
							showActiveCategoryWithDelay(catList , j);
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
							showActiveCategoryWithDelay(catList , j);
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
							showActiveCategoryWithDelay(catList , j);
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
			sleep(25).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 5)){
			sleep(50).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 4.5)){
			sleep(75).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 4)){
			sleep(100).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 3.5)){
			sleep(125).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 3)){
			sleep(150).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 2.5)){
			sleep(175).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 2)){
			sleep(200).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length / 1.5)){
			sleep(225).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
		
		if(i < (catList[j].length)){
			sleep(250).then(() => {
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			})
		}
	}
}

function showFilterCategory(){
	document.getElementsByClassName("CategoriesFilter").item(0).classList.remove("CategoriesFilterShow");
}

function hoverCategory(){
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).onmouseover = function(){
			categoriesOrange.item(i).style.backgroundColor = "#DA7632";
			if(categoriesOrange.item(i).classList.contains("activeCategory")){
				categoriesOrange.item(i).style.backgroundColor = "#FF6200";
			}
		}
		
		categoriesOrange.item(i).onmouseout = function(){
			categoriesOrange.item(i).style.backgroundColor = "#83451F";
			if(categoriesOrange.item(i).classList.contains("activeCategory")){
				categoriesOrange.item(i).style.backgroundColor = "#FF6200";
			}
		}
		
		categoriesOrange.item(i).onclick = function(){
			categoriesOrange.item(i).style.backgroundColor = "#FF6200";
		}
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).onmouseover = function(){
			categoriesGreen.item(i).style.backgroundColor = "#83E52A";
			if(categoriesGreen.item(i).classList.contains("activeCategory")){
				categoriesGreen.item(i).style.backgroundColor = "#79FF00";
			}
		}
		
		categoriesGreen.item(i).onmouseout = function(){
			categoriesGreen.item(i).style.backgroundColor = "#56941D";
			if(categoriesGreen.item(i).classList.contains("activeCategory")){
				categoriesGreen.item(i).style.backgroundColor = "#79FF00";
			}
		}
		
		categoriesGreen.item(i).onclick = function(){
			categoriesGreen.item(i).style.backgroundColor = "#79FF00";
		}
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).onmouseover = function(){
			categoriesYellow.item(i).style.backgroundColor = "#FD3";
			if(categoriesYellow.item(i).classList.contains("activeCategory")){
				categoriesYellow.item(i).style.backgroundColor = "#FFD800";
			}
		}
		
		categoriesYellow.item(i).onmouseout = function(){
			categoriesYellow.item(i).style.backgroundColor = "#A28E23";
			if(categoriesYellow.item(i).classList.contains("activeCategory")){
				categoriesYellow.item(i).style.backgroundColor = "#FFD800";
			}
		}
		
		categoriesYellow.item(i).onclick = function(){
			categoriesYellow.item(i).style.backgroundColor = "#FFD800";
		}
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).onmouseover = function(){
			categoriesCyan.item(i).style.backgroundColor = "#36D2D2";
			if(categoriesCyan.item(i).classList.contains("activeCategory")){
				categoriesCyan.item(i).style.backgroundColor = "#00E5E5";
			}
		}
		
		categoriesCyan.item(i).onmouseout = function(){
			categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
			if(categoriesCyan.item(i).classList.contains("activeCategory")){
				categoriesCyan.item(i).style.backgroundColor = "#00E5E5";
			}
		}
		
		categoriesCyan.item(i).onclick = function(){
			categoriesCyan.item(i).style.backgroundColor = "#00E5E5";
		}
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).onmouseover = function(){
			categoriesBlue.item(i).style.backgroundColor = "#5395FD";
			if(categoriesBlue.item(i).classList.contains("activeCategory")){
				categoriesBlue.item(i).style.backgroundColor = "#0067FF";
			}
		}
		
		categoriesBlue.item(i).onmouseout = function(){
			categoriesBlue.item(i).style.backgroundColor = "#1D4477";
			if(categoriesBlue.item(i).classList.contains("activeCategory")){
				categoriesBlue.item(i).style.backgroundColor = "#0067FF";
			}
		}
		
		categoriesBlue.item(i).onclick = function(){
			categoriesBlue.item(i).style.backgroundColor = "#0067FF";
		}
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).onmouseover = function(){
			categoriesPurple.item(i).style.backgroundColor = "#BD88FF";
			if(categoriesPurple.item(i).classList.contains("activeCategory")){
				categoriesPurple.item(i).style.backgroundColor = "#6100FF";
			}
		}
		
		categoriesPurple.item(i).onmouseout = function(){
			categoriesPurple.item(i).style.backgroundColor = "#482077";
			if(categoriesPurple.item(i).classList.contains("activeCategory")){
				categoriesPurple.item(i).style.backgroundColor = "#6100FF";
			}
		}
		
		categoriesPurple.item(i).onclick = function(){
			categoriesPurple.item(i).style.backgroundColor = "#6100FF";
		}
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).onmouseover = function(){
			categoriesRed.item(i).style.backgroundColor = "#FD5E94";
			if(categoriesRed.item(i).classList.contains("activeCategory")){
				categoriesRed.item(i).style.backgroundColor = "#FF0054";
			}
		}
		
		categoriesRed.item(i).onmouseout = function(){
			categoriesRed.item(i).style.backgroundColor = "#881539";
			if(categoriesRed.item(i).classList.contains("activeCategory")){
				categoriesRed.item(i).style.backgroundColor = "#FF0054";
			}
		}
		
		categoriesRed.item(i).onclick = function(){
			categoriesRed.item(i).style.backgroundColor = "#FF0054";
		}
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).onmouseover = function(){
			categoriesDarkGreen.item(i).style.backgroundColor = "#31B787";
			if(categoriesDarkGreen.item(i).classList.contains("activeCategory")){
				categoriesDarkGreen.item(i).style.backgroundColor = "#05BD76";
			}
		}
		
		categoriesDarkGreen.item(i).onmouseout = function(){
			categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
			if(categoriesDarkGreen.item(i).classList.contains("activeCategory")){
				categoriesDarkGreen.item(i).style.backgroundColor = "#05BD76";
			}
		}
		
		categoriesDarkGreen.item(i).onclick = function(){
			categoriesDarkGreen.item(i).style.backgroundColor = "#05BD76";
		}
	}
	
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).onmouseover = function(){
			categoriesDarkBlue.item(i).style.backgroundColor = "#4266E0";
			if(categoriesDarkBlue.item(i).classList.contains("activeCategory")){
				categoriesDarkBlue.item(i).style.backgroundColor = "#002DC0";
			}
		}
		
		categoriesDarkBlue.item(i).onmouseout = function(){
			categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
			if(categoriesDarkBlue.item(i).classList.contains("activeCategory")){
				categoriesDarkBlue.item(i).style.backgroundColor = "#002DC0";
			}
		}
		
		categoriesDarkBlue.item(i).onclick = function(){
			categoriesDarkBlue.item(i).style.backgroundColor = "#002DC0";
		}
	}
}