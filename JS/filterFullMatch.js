function filterFullMatch(){
	let catList = [];
	let categories = document.getElementsByClassName("categories");
	
	catList[0] = document.getElementsByClassName("ds");
	catList[1] = document.getElementsByClassName("pns");
	catList[2] = document.getElementsByClassName("acs");
	catList[3] = document.getElementsByClassName("mbs");
	catList[4] = document.getElementsByClassName("fs");
	catList[5] = document.getElementsByClassName("uss");
	catList[6] = document.getElementsByClassName("sds");
	catList[7] = document.getElementsByClassName("ps");
	catList[8] = document.getElementsByClassName("hs");
	catList[9] = document.getElementsByClassName("e");
	catList[10] = document.getElementsByClassName("n");
	catList[11] = document.getElementsByClassName("a");
	catList[12] = document.getElementsByClassName("alf");
	catList[13] = document.getElementsByClassName("gfa");
	catList[14] = document.getElementsByClassName("vf");
	catList[15] = document.getElementsByClassName("wb");
	catList[16] = document.getElementsByClassName("y");
	catList[17] = document.getElementsByClassName("pg");
	catList[18] = document.getElementsByClassName("ss");
	catList[19] = document.getElementsByClassName("ss2");
	catList[20] = document.getElementsByClassName("ss3");
	catList[21] = document.getElementsByClassName("f");
	catList[22] = document.getElementsByClassName("p");
	catList[23] = document.getElementsByClassName("gfo");
	catList[24] = document.getElementsByClassName("tbo");
	catList[25] = document.getElementsByClassName("pa");
	catList[26] = document.getElementsByClassName("k");
	catList[27] = document.getElementsByClassName("rog");
	catList[28] = document.getElementsByClassName("fp");
	catList[29] = document.getElementsByClassName("gap");
	catList[30] = document.getElementsByClassName("mp");
	catList[31] = document.getElementsByClassName("pc");
	catList[32] = document.getElementsByClassName("ma");
	catList[33] = document.getElementsByClassName("cbam");
	catList[34] = document.getElementsByClassName("rg");
	catList[35] = document.getElementsByClassName("me");
	catList[36] = document.getElementsByClassName("tl");
	catList[37] = document.getElementsByClassName("ftc");
	catList[38] = document.getElementsByClassName("wr");
	catList[39] = document.getElementsByClassName("se");
	catList[40] = document.getElementsByClassName("jf");
	catList[41] = document.getElementsByClassName("sb");
	catList[42] = document.getElementsByClassName("bof");
	catList[43] = document.getElementsByClassName("bomad");
	catList[44] = document.getElementsByClassName("gf");
	catList[45] = document.getElementsByClassName("tba");
	catList[46] = document.getElementsByClassName("u6");
	catList[47] = document.getElementsByClassName("rou7");
	catList[48] = document.getElementsByClassName("u11");
	catList[49] = document.getElementsByClassName("gh");
	catList[50] = document.getElementsByClassName("gb");
	catList[51] = document.getElementsByClassName("mh");
	catList[52] = document.getElementsByClassName("mb");
	catList[53] = document.getElementsByClassName("ts");
	catList[54] = document.getElementsByClassName("wt");
	catList[55] = document.getElementsByClassName("lcw");
	catList[56] = document.getElementsByClassName("gw");
	catList[57] = document.getElementsByClassName("ow");
	catList[58] = document.getElementsByClassName("rw");
	catList[59] = document.getElementsByClassName("stw");
	catList[60] = document.getElementsByClassName("tt");
	catList[61] = document.getElementsByClassName("dbs");
	catList[62] = document.getElementsByClassName("sf");
	catList[63] = document.getElementsByClassName("le");
	catList[64] = document.getElementsByClassName("s");
	catList[65] = document.getElementsByClassName("doj");
	catList[66] = document.getElementsByClassName("r");
	catList[67] = document.getElementsByClassName("tg");
	catList[68] = document.getElementsByClassName("tc");
	catList[69] = document.getElementsByClassName("ide");
	catList[70] = document.getElementsByClassName("pd");
	catList[71] = document.getElementsByClassName("er");
	catList[72] = document.getElementsByClassName("ch");
	catList[73] = document.getElementsByClassName("ew");
	catList[74] = document.getElementsByClassName("aos");
	catList[75] = document.getElementsByClassName("bow");
	catList[76] = document.getElementsByClassName("ab");
	catList[77] = document.getElementsByClassName("he");
	catList[78] = document.getElementsByClassName("sp");
	catList[79] = document.getElementsByClassName("wc");
	catList[80] = document.getElementsByClassName("c");
	catList[81] = document.getElementsByClassName("dbh");
	
	let appearedType = document.getElementsByClassName("appearedType");
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let j = 0; j < categoriesOrange.length; j ++){
		categoriesOrange.item(j).addEventListener("click" , function(){
			categoriesOrange.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j].length; i ++){
				catList[j].item(i).style.display = "inline-block";
				catList[j].item(i).classList.add("appeared");
			}
			if(appearedType.length > 0){
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				for(let i = 0; i < catList[j].length; i ++){
					appearedType.item(i).style.display = "inline-block";
					appearedType.item(i).classList.add("appeared");
				}
			}
			changeDefaultOrange(j);
		});
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let j = 0; j < categoriesGreen.length; j ++){
		categoriesGreen.item(j).addEventListener("click" , function(){
			categoriesGreen.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length].length; i ++){
				catList[j + categoriesOrange.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length].item(i).classList.add("appeared");
			}
			if(appearedType.length > 0){
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				for(let i = 0; i < catList[j].length; i ++){
					appearedType.item(i).style.display = "inline-block";
					appearedType.item(i).classList.add("appeared");
				}
			}
			changeDefaultGreen(j);
		});
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let j = 0; j < categoriesYellow.length; j ++){
		categoriesYellow.item(j).addEventListener("click" , function(){
			categoriesYellow.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length].item(i).classList.add("appeared");
			}
			if(appearedType.length > 0){
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				for(let i = 0; i < catList[j].length; i ++){
					appearedType.item(i).style.display = "inline-block";
					appearedType.item(i).classList.add("appeared");
				}
			}
			changeDefaultYellow(j);
		});
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let j = 0; j < categoriesCyan.length; j ++){
		categoriesCyan.item(j).addEventListener("click" , function(){
			categoriesCyan.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length].item(i).classList.add("appeared");
			}
			if(appearedType.length > 0){
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				for(let i = 0; i < catList[j].length; i ++){
					appearedType.item(i).style.display = "inline-block";
					appearedType.item(i).classList.add("appeared");
				}
			}
			changeDefaultCyan(j);
		});
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let j = 0; j < categoriesBlue.length; j ++){
		categoriesBlue.item(j).addEventListener("click" , function(){
			categoriesBlue.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length].item(i).classList.add("appeared");
			}
			if(appearedType.length > 0){
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				for(let i = 0; i < catList[j].length; i ++){
					appearedType.item(i).style.display = "inline-block";
					appearedType.item(i).classList.add("appeared");
				}
			}
			changeDefaultBlue(j);
		});
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let j = 0; j < categoriesPurple.length; j ++){
		categoriesPurple.item(j).addEventListener("click" , function(){
			categoriesPurple.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length].item(i).classList.add("appeared");
			}
			if(appearedType.length > 0){
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				for(let i = 0; i < catList[j].length; i ++){
					appearedType.item(i).style.display = "inline-block";
					appearedType.item(i).classList.add("appeared");
				}
			}
			changeDefaultPurple(j);
		});
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let j = 0; j < categoriesRed.length; j ++){
		categoriesRed.item(j).addEventListener("click" , function(){
			categoriesRed.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length].item(i).classList.add("appeared");
			}
			if(appearedType.length > 0){
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				for(let i = 0; i < catList[j].length; i ++){
					appearedType.item(i).style.display = "inline-block";
					appearedType.item(i).classList.add("appeared");
				}
			}
			changeDefaultRed(j);
		});
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let j = 0; j < categoriesDarkGreen.length; j ++){
		categoriesDarkGreen.item(j).addEventListener("click" , function(){
			categoriesDarkGreen.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length].item(i).classList.add("appeared");
			}
			if(appearedType.length > 0){
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				for(let i = 0; i < catList[j].length; i ++){
					appearedType.item(i).style.display = "inline-block";
					appearedType.item(i).classList.add("appeared");
				}
			}
			changeDefaultDarkGreen(j);
		});
	}
	
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let j = 0; j < categoriesDarkBlue.length; j ++){
		categoriesDarkBlue.item(j).addEventListener("click" , function(){
			categoriesDarkBlue.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appeared");
			}
			
			for(let i = 0; i < catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkBlue].length; i ++){
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkBlue].item(i).style.display = "inline-block";
				catList[j + categoriesOrange.length + categoriesGreen.length + categoriesYellow.length + categoriesCyan.length + categoriesBlue.length + categoriesPurple.length + categoriesRed.length + categoriesDarkBlue].item(i).classList.add("appeared");
			}
			if(appearedType.length > 0){
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appeared");
				}
				for(let i = 0; i < catList[j].length; i ++){
					appearedType.item(i).style.display = "inline-block";
					appearedType.item(i).classList.add("appeared");
				}
			}
			changeDefaultDarkBlue(j);
		});
	}
}

function showAllCharacters(){
	let categories = document.getElementsByClassName("categories");
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "inline-block";
		categories.item(i).classList.remove("appeared");
		categories.item(i).classList.remove("appearedType");
	}
	
}

function hideAllCat(){
	document.getElementsByClassName("CategoriesFilter").item(0).classList.add("CategoriesFilterShow");
	document.getElementsByClassName("typeFilter").item(0).classList.remove("typeFilterShow");
}

function initTypeFilter(){
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
			if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_agl.png"){
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
				if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_agl.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		if(!agl_filter.classList.contains("checkedTypeBtn")){
			agl_filter.style.backgroundColor = "#EEC310";
			agl_filter.classList.add("checkedTypeBtn");
			
			int_filter.style.backgroundColor = "#A75EC2";
			int_filter.classList.remove("checkedTypeBtn");
			
			phy_filter.style.backgroundColor = "#A55D03";
			phy_filter.classList.remove("checkedTypeBtn");
			
			str_filter.style.backgroundColor = "#CE2C33";
			str_filter.classList.remove("checkedTypeBtn");
			
			teq_filter.style.backgroundColor = "#008E08";
			teq_filter.classList.remove("checkedTypeBtn");
			
			super_type_filter.style.backgroundColor = "#6E6E6E";
			super_type_filter.classList.remove("checkedTypeBtn");
			
			extreme_type_filter.style.backgroundColor = "#6E6E6E";
			extreme_type_filter.classList.remove("checkedTypeBtn");
		}
	});
	
	int_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_int.png"){
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
				if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_int.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		if(!int_filter.classList.contains("checkedTypeBtn")){
			int_filter.style.backgroundColor = "#EEC310";
			int_filter.classList.add("checkedTypeBtn");
			
			agl_filter.style.backgroundColor = "#076CDC";
			agl_filter.classList.remove("checkedTypeBtn");
			
			phy_filter.style.backgroundColor = "#A55D03";
			phy_filter.classList.remove("checkedTypeBtn");
			
			str_filter.style.backgroundColor = "#CE2C33";
			str_filter.classList.remove("checkedTypeBtn");
			
			teq_filter.style.backgroundColor = "#008E08";
			teq_filter.classList.remove("checkedTypeBtn");
			
			super_type_filter.style.backgroundColor = "#6E6E6E";
			super_type_filter.classList.remove("checkedTypeBtn");
			
			extreme_type_filter.style.backgroundColor = "#6E6E6E";
			extreme_type_filter.classList.remove("checkedTypeBtn");
		}
	});
	
	phy_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_phy.png"){
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
				if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_phy.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		if(!phy_filter.classList.contains("checkedTypeBtn")){
			phy_filter.style.backgroundColor = "#EEC310";
			phy_filter.classList.add("checkedTypeBtn");
			
			agl_filter.style.backgroundColor = "#076CDC";
			agl_filter.classList.remove("checkedTypeBtn");
			
			int_filter.style.backgroundColor = "#A75EC2";
			int_filter.classList.remove("checkedTypeBtn");
			
			str_filter.style.backgroundColor = "#CE2C33";
			str_filter.classList.remove("checkedTypeBtn");
			
			teq_filter.style.backgroundColor = "#008E08";
			teq_filter.classList.remove("checkedTypeBtn");
			
			super_type_filter.style.backgroundColor = "#6E6E6E";
			super_type_filter.classList.remove("checkedTypeBtn");
			
			extreme_type_filter.style.backgroundColor = "#6E6E6E";
			extreme_type_filter.classList.remove("checkedTypeBtn");
		}
	});
	
	str_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_str.png"){
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
				if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_str.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		if(!str_filter.classList.contains("checkedTypeBtn")){
			str_filter.style.backgroundColor = "#EEC310";
			str_filter.classList.add("checkedTypeBtn");
			
			agl_filter.style.backgroundColor = "#076CDC";
			agl_filter.classList.remove("checkedTypeBtn");
			
			int_filter.style.backgroundColor = "#A75EC2";
			int_filter.classList.remove("checkedTypeBtn");
			
			phy_filter.style.backgroundColor = "#A55D03";
			phy_filter.classList.remove("checkedTypeBtn");
			
			teq_filter.style.backgroundColor = "#008E08";
			teq_filter.classList.remove("checkedTypeBtn");
			
			super_type_filter.style.backgroundColor = "#6E6E6E";
			super_type_filter.classList.remove("checkedTypeBtn");
			
			extreme_type_filter.style.backgroundColor = "#6E6E6E";
			extreme_type_filter.classList.remove("checkedTypeBtn");
		}
	});
	
	teq_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_teq.png"){
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
				if(charBaseType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterBase/char_base_teq.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		if(!teq_filter.classList.contains("checkedTypeBtn")){
			teq_filter.style.backgroundColor = "#EEC310";
			teq_filter.classList.add("checkedTypeBtn");
			
			agl_filter.style.backgroundColor = "#076CDC";
			agl_filter.classList.remove("checkedTypeBtn");
			
			int_filter.style.backgroundColor = "#A75EC2";
			int_filter.classList.remove("checkedTypeBtn");
			
			phy_filter.style.backgroundColor = "#A55D03";
			phy_filter.classList.remove("checkedTypeBtn");
			
			str_filter.style.backgroundColor = "#CE2C33";
			str_filter.classList.remove("checkedTypeBtn");
			
			super_type_filter.style.backgroundColor = "#6E6E6E";
			super_type_filter.classList.remove("checkedTypeBtn");
			
			extreme_type_filter.style.backgroundColor = "#6E6E6E";
			extreme_type_filter.classList.remove("checkedTypeBtn");
		}
	});
	super_type_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if((cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_int.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_str.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")) {
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
				if((cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_int.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_str.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png")) {
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		if(!super_type_filter.classList.contains("checkedTypeBtn")){
			super_type_filter.style.backgroundColor = "#EEC310";
			super_type_filter.classList.add("checkedTypeBtn");
			
			agl_filter.style.backgroundColor = "#076CDC";
			agl_filter.classList.remove("checkedTypeBtn");
			
			int_filter.style.backgroundColor = "#A75EC2";
			int_filter.classList.remove("checkedTypeBtn");
			
			phy_filter.style.backgroundColor = "#A55D03";
			phy_filter.classList.remove("checkedTypeBtn");
			
			str_filter.style.backgroundColor = "#CE2C33";
			str_filter.classList.remove("checkedTypeBtn");
			
			teq_filter.style.backgroundColor = "#008E08";
			teq_filter.classList.remove("checkedTypeBtn");
			
			extreme_type_filter.style.backgroundColor = "#6E6E6E";
			extreme_type_filter.classList.remove("checkedTypeBtn");
		}
	});
	
	extreme_type_filter.addEventListener('click' , function(){
		for(let i = 0; i < charBaseType.length; i ++){
			if((cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")) {
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
				if((cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png") && (cardType.item(i).src !== "http://localhost:8090/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png")) {
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		if(!extreme_type_filter.classList.contains("checkedTypeBtn")){
			extreme_type_filter.style.backgroundColor = "#EEC310";
			extreme_type_filter.classList.add("checkedTypeBtn");
			
			agl_filter.style.backgroundColor = "#076CDC";
			agl_filter.classList.remove("checkedTypeBtn");
			
			int_filter.style.backgroundColor = "#A75EC2";
			int_filter.classList.remove("checkedTypeBtn");
			
			phy_filter.style.backgroundColor = "#A55D03";
			phy_filter.classList.remove("checkedTypeBtn");
			
			str_filter.style.backgroundColor = "#CE2C33";
			str_filter.classList.remove("checkedTypeBtn");
			
			teq_filter.style.backgroundColor = "#008E08";
			teq_filter.classList.remove("checkedTypeBtn");
			
			super_type_filter.style.backgroundColor = "#6E6E6E";
			super_type_filter.classList.remove("checkedTypeBtn");
		}
	});
}

function resetFilterType(){
	document.getElementsByClassName("typeFilter").item(0).classList.add("typeFilterShow");
	document.getElementsByClassName("CategoriesFilter").item(0).classList.remove("CategoriesFilterShow");
	
	let agl_filter = document.getElementById("agl");
	agl_filter.style.backgroundColor = "#076CDC";
	
	let int_filter = document.getElementById("int");
	int_filter.style.backgroundColor = "#A75EC2";
	
	let phy_filter = document.getElementById("phy");
	phy_filter.style.backgroundColor = "#A55D03";
	
	let str_filter = document.getElementById("str");
	str_filter.style.backgroundColor = "#CE2C33";
	
	let teq_filter = document.getElementById("teq");
	teq_filter.style.backgroundColor = "#008E08";
	
	let categories = document.getElementsByClassName("categories");
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).classList.remove("appeared");
	}
}

function hoverCategories(){
	resetFilterType();
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).onmouseover = function(){
			categoriesOrange.item(i).style.backgroundColor = "#FDAC67";
			if(categoriesOrange.item(i).classList.contains("clicked")){
				categoriesOrange.item(i).style.backgroundColor = "#FF6200";
			}
		}
		
		categoriesOrange.item(i).onmouseout = function(){
			categoriesOrange.item(i).style.backgroundColor = "#83451F";
			if(categoriesOrange.item(i).classList.contains("clicked")){
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
			categoriesGreen.item(i).style.backgroundColor = "#ADF373";
			if(categoriesGreen.item(i).classList.contains("clicked")){
				categoriesGreen.item(i).style.backgroundColor = "#79FF00";
			}
		}
		
		categoriesGreen.item(i).onmouseout = function(){
			categoriesGreen.item(i).style.backgroundColor = "#56941D";
			if(categoriesGreen.item(i).classList.contains("clicked")){
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
			categoriesYellow.item(i).style.backgroundColor = "#FFDD79";
			if(categoriesYellow.item(i).classList.contains("clicked")){
				categoriesYellow.item(i).style.backgroundColor = "#FFD800";
			}
		}
		
		categoriesYellow.item(i).onmouseout = function(){
			categoriesYellow.item(i).style.backgroundColor = "#A28E23";
			if(categoriesYellow.item(i).classList.contains("clicked")){
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
			categoriesCyan.item(i).style.backgroundColor = "#A0FFFF";
			if(categoriesCyan.item(i).classList.contains("clicked")){
				categoriesCyan.item(i).style.backgroundColor = "#00E5E5";
			}
		}
		
		categoriesCyan.item(i).onmouseout = function(){
			categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
			if(categoriesCyan.item(i).classList.contains("clicked")){
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
			if(categoriesBlue.item(i).classList.contains("clicked")){
				categoriesBlue.item(i).style.backgroundColor = "#0067FF";
			}
		}
		
		categoriesBlue.item(i).onmouseout = function(){
			categoriesBlue.item(i).style.backgroundColor = "#1D4477";
			if(categoriesBlue.item(i).classList.contains("clicked")){
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
			if(categoriesPurple.item(i).classList.contains("clicked")){
				categoriesPurple.item(i).style.backgroundColor = "#6100FF";
			}
		}
		
		categoriesPurple.item(i).onmouseout = function(){
			categoriesPurple.item(i).style.backgroundColor = "#482077";
			if(categoriesPurple.item(i).classList.contains("clicked")){
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
			if(categoriesRed.item(i).classList.contains("clicked")){
				categoriesRed.item(i).style.backgroundColor = "#FF0054";
			}
		}
		
		categoriesRed.item(i).onmouseout = function(){
			categoriesRed.item(i).style.backgroundColor = "#881539";
			if(categoriesRed.item(i).classList.contains("clicked")){
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
			categoriesDarkGreen.item(i).style.backgroundColor = "#73F6C4";
			if(categoriesDarkGreen.item(i).classList.contains("clicked")){
				categoriesDarkGreen.item(i).style.backgroundColor = "#05BD76";
			}
		}
		
		categoriesDarkGreen.item(i).onmouseout = function(){
			categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
			if(categoriesDarkGreen.item(i).classList.contains("clicked")){
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
			if(categoriesDarkBlue.item(i).classList.contains("clicked")){
				categoriesDarkBlue.item(i).style.backgroundColor = "#002DC0";
			}
		}
		
		categoriesDarkBlue.item(i).onmouseout = function(){
			categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
			if(categoriesDarkBlue.item(i).classList.contains("clicked")){
				categoriesDarkBlue.item(i).style.backgroundColor = "#002DC0";
			}
		}
		
		categoriesDarkBlue.item(i).onclick = function(){
			categoriesDarkBlue.item(i).style.backgroundColor = "#002DC0";
		}
	}
}

function changeDefaultOrange(n){
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
		categoriesDarkBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
		categoriesDarkGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
		categoriesRed.item(i).classList.remove("clicked");
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
		categoriesPurple.item(i).classList.remove("clicked");
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
		categoriesBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
		categoriesCyan.item(i).classList.remove("clicked");
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
		categoriesYellow.item(i).classList.remove("clicked");
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
		categoriesGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
		categoriesOrange.item(i).classList.remove("clicked");
	}
	
	categoriesOrange.item(n).style.backgroundColor = "#FF6200";
	categoriesOrange.item(n).classList.add("clicked");
}

function changeDefaultGreen(n){
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
		categoriesDarkBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
		categoriesDarkGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
		categoriesRed.item(i).classList.remove("clicked");
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
		categoriesPurple.item(i).classList.remove("clicked");
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
		categoriesBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
		categoriesCyan.item(i).classList.remove("clicked");
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
		categoriesYellow.item(i).classList.remove("clicked");
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
		categoriesOrange.item(i).classList.remove("clicked");
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
		categoriesGreen.item(i).classList.remove("clicked");
	}
	
	categoriesGreen.item(n).style.backgroundColor = "#79FF00";
	categoriesGreen.item(n).classList.add("clicked");
}

function changeDefaultYellow(n){
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
		categoriesDarkBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
		categoriesDarkGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
		categoriesRed.item(i).classList.remove("clicked");
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
		categoriesPurple.item(i).classList.remove("clicked");
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
		categoriesBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
		categoriesCyan.item(i).classList.remove("clicked");
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
		categoriesOrange.item(i).classList.remove("clicked");
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
		categoriesGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
		categoriesYellow.item(i).classList.remove("clicked");
	}
	categoriesYellow.item(n).style.backgroundColor = "#FFD500";
	categoriesYellow.item(n).classList.add("clicked");
}

function changeDefaultCyan(n){
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
		categoriesDarkBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
		categoriesDarkGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
		categoriesRed.item(i).classList.remove("clicked");
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
		categoriesPurple.item(i).classList.remove("clicked");
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
		categoriesBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
		categoriesOrange.item(i).classList.remove("clicked");
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
		categoriesGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
		categoriesYellow.item(i).classList.remove("clicked");
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
		categoriesCyan.item(i).classList.remove("clicked");
	}
	
	categoriesCyan.item(n).style.backgroundColor = "#00E5E5";
	categoriesCyan.item(n).classList.add("clicked");
}

function changeDefaultBlue(n){
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
		categoriesDarkBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
		categoriesDarkGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
		categoriesRed.item(i).classList.remove("clicked");
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
		categoriesPurple.item(i).classList.remove("clicked");
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
		categoriesOrange.item(i).classList.remove("clicked");
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
		categoriesGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
		categoriesYellow.item(i).classList.remove("clicked");
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
		categoriesCyan.item(i).classList.remove("clicked");
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
		categoriesBlue.item(i).classList.remove("clicked");
	}
	
	categoriesBlue.item(n).style.backgroundColor = "#0067FF";
	categoriesBlue.item(n).classList.add("clicked");
}

function changeDefaultPurple(n){
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
		categoriesDarkBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
		categoriesDarkGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
		categoriesRed.item(i).classList.remove("clicked");
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
		categoriesOrange.item(i).classList.remove("clicked");
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
		categoriesGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
		categoriesYellow.item(i).classList.remove("clicked");
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
		categoriesCyan.item(i).classList.remove("clicked");
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
		categoriesBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
		categoriesPurple.item(i).classList.remove("clicked");
	}
	
	categoriesPurple.item(n).style.backgroundColor = "#6100FF";
	categoriesPurple.item(n).classList.add("clicked");
}

function changeDefaultRed(n){
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
		categoriesDarkBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
		categoriesDarkGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
		categoriesOrange.item(i).classList.remove("clicked");
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
		categoriesGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
		categoriesYellow.item(i).classList.remove("clicked");
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
		categoriesCyan.item(i).classList.remove("clicked");
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
		categoriesBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
		categoriesPurple.item(i).classList.remove("clicked");
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
		categoriesRed.item(i).classList.remove("clicked");
	}
	
	categoriesRed.item(n).style.backgroundColor = "#FF0054";
	categoriesRed.item(n).classList.add("clicked");
}

function changeDefaultDarkGreen(n){
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
		categoriesDarkBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
		categoriesOrange.item(i).classList.remove("clicked");
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
		categoriesGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
		categoriesYellow.item(i).classList.remove("clicked");
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
		categoriesCyan.item(i).classList.remove("clicked");
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
		categoriesBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
		categoriesPurple.item(i).classList.remove("clicked");
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
		categoriesRed.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
		categoriesDarkGreen.item(i).classList.remove("clicked");
	}
	
	categoriesDarkGreen.item(n).style.backgroundColor = "#05BD76";
	categoriesDarkGreen.item(n).classList.add("clicked");
}

function changeDefaultDarkBlue(n){
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let i = 0; i < categoriesOrange.length; i ++){
		categoriesOrange.item(i).style.backgroundColor = "#83451F";
		categoriesOrange.item(i).classList.remove("clicked");
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let i = 0; i < categoriesGreen.length; i ++){
		categoriesGreen.item(i).style.backgroundColor = "#56941D";
		categoriesGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let i = 0; i < categoriesYellow.length; i ++){
		categoriesYellow.item(i).style.backgroundColor = "#A28E23";
		categoriesYellow.item(i).classList.remove("clicked");
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let i = 0; i < categoriesCyan.length; i ++){
		categoriesCyan.item(i).style.backgroundColor = "#1D6E6E";
		categoriesCyan.item(i).classList.remove("clicked");
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let i = 0; i < categoriesBlue.length; i ++){
		categoriesBlue.item(i).style.backgroundColor = "#1D4477";
		categoriesBlue.item(i).classList.remove("clicked");
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let i = 0; i < categoriesPurple.length; i ++){
		categoriesPurple.item(i).style.backgroundColor = "#482077";
		categoriesPurple.item(i).classList.remove("clicked");
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let i = 0; i < categoriesRed.length; i ++){
		categoriesRed.item(i).style.backgroundColor = "#881539";
		categoriesRed.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let i = 0; i < categoriesDarkGreen.length; i ++){
		categoriesDarkGreen.item(i).style.backgroundColor = "#17523B";
		categoriesDarkGreen.item(i).classList.remove("clicked");
	}
	
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let i = 0; i < categoriesDarkBlue.length; i ++){
		categoriesDarkBlue.item(i).style.backgroundColor = "#162669";
		categoriesDarkBlue.item(i).classList.remove("clicked");
	}
	
	categoriesDarkBlue.item(n).style.backgroundColor = "#002DC0";
	categoriesDarkBlue.item(n).classList.add("clicked");
}