function filterPartialMatch(){
	let catList = [];
	let categories = document.getElementsByClassName("categories");
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	
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
	
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	for(let j = 0; j < categoriesOrange.length; j ++){
		categoriesOrange.item(j).addEventListener('click' , function(){
			if(categoriesOrange.item(j).classList.contains("activeCategory")){
				categoriesOrange.item(j).classList.remove("activeCategory");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
			}else{
				categoriesOrange.item(j).classList.add("activeCategory");
				
				for(let i = 0; i < catList[j].length; i ++){
					catList[j].item(i).style.display = "inline-block";
					catList[j].item(i).classList.add("appeared");
				}
			}
			filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter);
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
			}else{
				categoriesGreen.item(j).classList.add("activeCategory");
				
				for(let i = 0; i < catList[j + categoriesOrange.length].length; i ++){
					catList[j + categoriesOrange.length].item(i).style.display = "inline-block";
					catList[j + categoriesOrange.length].item(i).classList.add("appeared");
				}
			}
			filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter);
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
			}else{
				categoriesYellow.item(j).classList.add("activeCategory");
				
				for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length].length; i ++){
					catList[j + categoriesOrange.length + categoriesGreen.length].item(i).style.display = "inline-block";
					catList[j + categoriesOrange.length + categoriesGreen.length].item(i).classList.add("appeared");
				}
			}
			filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter);
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
			}else{
				categoriesCyan.item(j).classList.add("activeCategory");
				
				for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].length; i ++){
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].item(i).style.display = "inline-block";
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].item(i).classList.add("appeared");
				}
			}
			filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter);
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
			}else{
				categoriesBlue.item(j).classList.add("activeCategory");
				
				for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].length; i ++){
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].item(i).style.display = "inline-block";
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].item(i).classList.add("appeared");
				}
			}
			filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter);
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
			}else{
				categoriesPurple.item(j).classList.add("activeCategory");
				
				for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].length; i ++){
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].item(i).style.display = "inline-block";
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].item(i).classList.add("appeared");
				}
			}
			filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter);
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
			}else{
				categoriesRed.item(j).classList.add("activeCategory");
				
				for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].length; i ++){
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].item(i).style.display = "inline-block";
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].item(i).classList.add("appeared");
				}
			}
			filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter);
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
			}else{
				categoriesDarkGreen.item(j).classList.add("activeCategory");
				
				for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].length; i ++){
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].item(i).style.display = "inline-block";
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].item(i).classList.add("appeared");
				}
			}
			filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter);
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
			}else{
				categoriesDarkBlue.item(j).classList.add("activeCategory");
				
				for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkGreen.length].length; i ++){
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkGreen.length].item(i).style.display = "inline-block";
					catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkGreen.length].item(i).classList.add("appeared");
				}
			}
			filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter);
		});
	}
}

function ResetSelectionFilters(){
	let categories = document.getElementsByClassName("categories");
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "inline-block";
		categories.item(i).classList.remove("appeared");
		categories.item(i).classList.remove("appearedType");
		categories.item(i).classList.remove("appearedSuperType");
		categories.item(i).classList.remove("appearedExtremeType");
	}
	
	for(let i = 0; i < categoriesBtn.length; i ++){
		categoriesBtn.item(i).classList.remove("activeCategory");
	}
	
	let agl_filter = document.getElementById("agl");
	agl_filter.style.backgroundColor = "#064794";
	
	let int_filter = document.getElementById("int");
	int_filter.style.backgroundColor = "#6E3E80";
	
	let phy_filter = document.getElementById("phy");
	phy_filter.style.backgroundColor = "#673A03";
	
	let str_filter = document.getElementById("str");
	str_filter.style.backgroundColor = "#7C1A1E";
	
	let teq_filter = document.getElementById("teq");
	teq_filter.style.backgroundColor = "#015907";
	
	let super_filter = document.getElementById("super_type");
	super_filter.style.backgroundColor = "#494949";
	
	let extreme_filter = document.getElementById("extreme_type");
	extreme_filter.style.backgroundColor = "#494949";
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
	}
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
	}
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
	}
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
	}
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
	}
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
	}
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
	}
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
	}
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
	}
}

function showFilterType(){
	document.getElementsByClassName("typeFilter").item(0).classList.remove("typeFilterShow");
}

function hoverFilterType(){
	let agl_filter = document.getElementById("agl");
	
	agl_filter.onmouseover = function(){
		agl_filter.style.backgroundColor = "#0A7FFF";
		if(agl_filter.classList.contains("checkedTypeBtn")){
			agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	agl_filter.onmouseout = function(){
		agl_filter.style.backgroundColor = "#064794";
		if(agl_filter.classList.contains("checkedTypeBtn")){
			agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let int_filter = document.getElementById("int");
	int_filter.onmouseover = function(){
		int_filter.style.backgroundColor = "#B367D7";
		if(int_filter.classList.contains("checkedTypeBtn")){
			int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	int_filter.onmouseout = function(){
		int_filter.style.backgroundColor = "#6E3E80";
		if(int_filter.classList.contains("checkedTypeBtn")){
			int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let phy_filter = document.getElementById("phy");
	phy_filter.onmouseover = function(){
		phy_filter.style.backgroundColor = "#C06D06";
		if(phy_filter.classList.contains("checkedTypeBtn")){
			phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	phy_filter.onmouseout = function(){
		phy_filter.style.backgroundColor = "#673A03";
		if(phy_filter.classList.contains("checkedTypeBtn")){
			phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let str_filter = document.getElementById("str");
	str_filter.onmouseover = function(){
		str_filter.style.backgroundColor = "#C72931";
		if(str_filter.classList.contains("checkedTypeBtn")){
			str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	str_filter.onmouseout = function(){
		str_filter.style.backgroundColor = "#7C1A1E";
		if(str_filter.classList.contains("checkedTypeBtn")){
			str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let teq_filter = document.getElementById("teq");
	teq_filter.onmouseover = function(){
		teq_filter.style.backgroundColor = "#00B712";
		if(teq_filter.classList.contains("checkedTypeBtn")){
			teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	teq_filter.onmouseout = function(){
		teq_filter.style.backgroundColor = "#015907";
		if(teq_filter.classList.contains("checkedTypeBtn")){
			teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let super_filter = document.getElementById("super_type");
	super_filter.onmouseover = function(){
		super_filter.style.backgroundColor = "#919090";
		if(super_filter.classList.contains("checkedTypeBtn")){
			super_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_filter.onmouseout = function(){
		super_filter.style.backgroundColor = "#494949";
		if(super_filter.classList.contains("checkedTypeBtn")){
			super_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_filter = document.getElementById("extreme_type");
	extreme_filter.onmouseover = function(){
		extreme_filter.style.backgroundColor = "#919090";
		if(extreme_filter.classList.contains("checkedTypeBtn")){
			extreme_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_filter.onmouseout = function(){
		extreme_filter.style.backgroundColor = "#494949";
		if(extreme_filter.classList.contains("checkedTypeBtn")){
			extreme_filter.style.backgroundColor = "#EEC310";
		}
	}
}

function showCategories(){
	document.getElementsByClassName("CategoriesFilter").item(0).classList.remove("CategoriesFilterShow");
}

function hoverCategories(){
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

function filterTypePerformClick(agl_filter , int_filter , phy_filter , str_filter , teq_filter , super_type_filter , extreme_type_filter){
	if(agl_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		agl_filter.click();
	}
	if(int_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		int_filter.click();
	}
	if(phy_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		phy_filter.click();
	}
	if(str_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		str_filter.click();
	}
	if(teq_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		teq_filter.click();
	}
	if(super_type_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_type_filter.click();
	}
	if(extreme_type_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_type_filter.click();
	}
}

function initTypeFilter(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
	let categories = document.getElementsByClassName("categories");
	let charBaseType = document.getElementsByClassName("char-base-type");
	let cardType = document.getElementsByClassName("card-type");
	let appeared = document.getElementsByClassName("appeared");
	
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	agl_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_agl.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < charBaseType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < charBaseType.length; i ++){
				if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_agl.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultAglFilter();
	});
	
	int_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_int.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < charBaseType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < charBaseType.length; i ++){
				if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_int.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultIntFilter();
	});
	
	phy_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_phy.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < charBaseType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < charBaseType.length; i ++){
				if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_phy.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultPhyFilter();
	});
	
	str_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_str.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < charBaseType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < charBaseType.length; i ++){
				if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_str.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultStrFilter();
	});
	
	teq_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_teq.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < charBaseType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < charBaseType.length; i ++){
				if(charBaseType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterBase/char_base_teq.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultTeqFilter();
	});
	
	super_type_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if((cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_int.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_str.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
				categories.item(i).classList.remove("appearedSuperType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
				categories.item(i).classList.add("appearedSuperType");
			}
		}
		
		for(let i = 0; i < charBaseType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < charBaseType.length; i ++){
				if((cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_int.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_str.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
					categories.item(i).classList.remove("appearedSuperType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
					categories.item(i).classList.add("appearedSuperType");
				}
			}
		}
		defaultSuperFilter();
	});
	
	extreme_type_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if((cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
				categories.item(i).classList.remove("appearedExtremeType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
				categories.item(i).classList.add("appearedExtremeType");
			}
		}
		
		for(let i = 0; i < charBaseType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < charBaseType.length; i ++){
				if((cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
					categories.item(i).classList.remove("appearedExtremeType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
					categories.item(i).classList.add("appearedExtremeType");
				}
			}
		}
		defaultExtremeFilter();
	});
}

function defaultAglFilter(){
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!agl_filter.classList.contains("checkedTypeBtn")){
		agl_filter.style.backgroundColor = "#EEC310";
		agl_filter.classList.add("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6E3E80";
		int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultIntFilter(){
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!int_filter.classList.contains("checkedTypeBtn")){
		int_filter.style.backgroundColor = "#EEC310";
		int_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultPhyFilter(){
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!phy_filter.classList.contains("checkedTypeBtn")){
		phy_filter.style.backgroundColor = "#EEC310";
		phy_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6E3E80";
		int_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultStrFilter(){
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!str_filter.classList.contains("checkedTypeBtn")){
		str_filter.style.backgroundColor = "#EEC310";
		str_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6E3E80";
		int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultTeqFilter(){
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!teq_filter.classList.contains("checkedTypeBtn")){
		teq_filter.style.backgroundColor = "#EEC310";
		teq_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6E3E80";
		int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultSuperFilter(){
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!super_type_filter.classList.contains("checkedTypeBtn")){
		super_type_filter.style.backgroundColor = "#EEC310";
		super_type_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6E3E80";
		int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultExtremeFilter(){
	let agl_filter = document.getElementById("agl");
	let int_filter = document.getElementById("int");
	let phy_filter = document.getElementById("phy");
	let str_filter = document.getElementById("str");
	let teq_filter = document.getElementById("teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!extreme_type_filter.classList.contains("checkedTypeBtn")){
		extreme_type_filter.style.backgroundColor = "#EEC310";
		extreme_type_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6E3E80";
		int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
	}
}