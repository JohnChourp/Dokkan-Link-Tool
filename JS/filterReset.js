function ResetSelectionFilters(n){
	let categories = document.getElementsByClassName("categories");
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	let typeBtn = document.getElementsByClassName("type-btn");
	
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).classList.remove("appeared");
		categories.item(i).classList.remove("appearedType");
		categories.item(i).classList.remove("appearedSuperType");
		categories.item(i).classList.remove("appearedExtremeType");
	}
	
	for(let i = 0; i < typeBtn.length; i ++){
		typeBtn.item(i).classList.remove("checkedTypeBtn");
	}
	
	if(n === 0){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "inline-block";
		}
	}
	
	if(n === 1){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
	}
	
	for(let i = 0; i < categoriesBtn.length; i ++){
		categoriesBtn.item(i).classList.remove("activeCategory");
	}
	
	let agl_filter = document.getElementById("agl");
	agl_filter.style.backgroundColor = "#064794";
	let super_agl_filter = document.getElementById("super_agl");
	super_agl_filter.style.backgroundColor = "#064794";
	let extreme_agl_filter = document.getElementById("extreme_agl");
	extreme_agl_filter.style.backgroundColor = "#064794";
	
	let int_filter = document.getElementById("int");
	int_filter.style.backgroundColor = "#6e3e80";
	let super_int_filter = document.getElementById("super_int");
	super_int_filter.style.backgroundColor = "#6e3e80";
	let extreme_int_filter = document.getElementById("extreme_int");
	extreme_int_filter.style.backgroundColor = "#6e3e80";
	
	let phy_filter = document.getElementById("phy");
	phy_filter.style.backgroundColor = "#673A03";
	let super_phy_filter = document.getElementById("super_phy");
	super_phy_filter.style.backgroundColor = "#673A03";
	let extreme_phy_filter = document.getElementById("extreme_phy");
	extreme_phy_filter.style.backgroundColor = "#673A03";
	
	let str_filter = document.getElementById("str");
	str_filter.style.backgroundColor = "#7C1A1E";
	let super_str_filter = document.getElementById("super_str");
	super_str_filter.style.backgroundColor = "#7C1A1E";
	let extreme_str_filter = document.getElementById("extreme_str");
	extreme_str_filter.style.backgroundColor = "#7C1A1E";
	
	let teq_filter = document.getElementById("teq");
	teq_filter.style.backgroundColor = "#015907";
	let super_teq_filter = document.getElementById("super_teq");
	super_teq_filter.style.backgroundColor = "#015907";
	let extreme_teq_filter = document.getElementById("extreme_teq");
	extreme_teq_filter.style.backgroundColor = "#015907";
	
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
	
	for(let i=0;i<categoriesOrange.length;i++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
	}
	for(let i=0;i<categoriesGreen.length;i++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
	}
	for(let i=0;i<categoriesYellow.length;i++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
	}
	for(let i=0;i<categoriesCyan.length;i++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
	}
	for(let i=0;i<categoriesBlue.length;i++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
	}
	for(let i=0;i<categoriesPurple.length;i++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
	}
	for(let i=0;i<categoriesRed.length;i++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
	}
	for(let i=0;i<categoriesDarkGreen.length;i++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
	}
	for(let i=0;i<categoriesDarkBlue.length;i++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
	}
}