function filterPartialMatch(){
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
	
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "none";
	}
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let j = 0; j < categoriesOrange.length; j ++){
		categoriesOrange.item(j).addEventListener('click',function(){
			if(categoriesOrange.item(j).classList.contains("catChecked")){
				categoriesOrange.item(j).classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				categoriesOrange.item(j).classList.add("catChecked");
				
				for(let i = 0; i < catList[j].length; i ++){
					catList[j].item(i).style.display = "inline-block";
				}
			}
		});
	}
	
	let categoriesGreen = document.getElementsByClassName("categories-btn-green");
	
	for(let j = 0; j < categoriesGreen.length; j ++){
		categoriesGreen.item(j).addEventListener('click',function(){
			if(categoriesGreen.item(j).classList.contains("catChecked")){
				categoriesGreen.item(j).classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				categoriesGreen.item(j).classList.add("catChecked");
				
				for(let i = 0; i < catList[j+categoriesOrange.length].length; i ++){
					catList[j+categoriesOrange.length].item(i).style.display = "inline-block";
				}
			}
		});
	}
	
	let categoriesYellow = document.getElementsByClassName("categories-btn-yellow");
	
	for(let j = 0; j < categoriesYellow.length; j ++){
		categoriesYellow.item(j).addEventListener('click',function(){
			if(categoriesYellow.item(j).classList.contains("catChecked")){
				categoriesYellow.item(j).classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				categoriesYellow.item(j).classList.add("catChecked");
				
				for(let i = 0; i < catList[j+categoriesOrange.length+categoriesGreen.length].length; i ++){
					catList[j+categoriesOrange.length+categoriesGreen.length].item(i).style.display = "inline-block";
				}
			}
		});
	}
	
	let categoriesCyan = document.getElementsByClassName("categories-btn-cyan");
	
	for(let j = 0; j < categoriesCyan.length; j ++){
		categoriesCyan.item(j).addEventListener('click',function(){
			if(categoriesCyan.item(j).classList.contains("catChecked")){
				categoriesCyan.item(j).classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				categoriesCyan.item(j).classList.add("catChecked");
				
				for(let i = 0; i < catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length].length; i ++){
					catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length].item(i).style.display = "inline-block";
				}
			}
		});
	}
	
	let categoriesBlue = document.getElementsByClassName("categories-btn-blue");
	
	for(let j = 0; j < categoriesBlue.length; j ++){
		categoriesBlue.item(j).addEventListener('click',function(){
			if(categoriesBlue.item(j).classList.contains("catChecked")){
				categoriesBlue.item(j).classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				categoriesBlue.item(j).classList.add("catChecked");
				
				for(let i = 0; i < catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length].length; i ++){
					catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length].item(i).style.display = "inline-block";
				}
			}
		});
	}
	
	let categoriesPurple = document.getElementsByClassName("categories-btn-purple");
	
	for(let j = 0; j < categoriesPurple.length; j ++){
		categoriesPurple.item(j).addEventListener('click',function(){
			if(categoriesPurple.item(j).classList.contains("catChecked")){
				categoriesPurple.item(j).classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				categoriesPurple.item(j).classList.add("catChecked");
				
				for(let i = 0; i < catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length+categoriesBlue.length].length; i ++){
					catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length+categoriesBlue.length].item(i).style.display = "inline-block";
				}
			}
		});
	}
	
	let categoriesRed = document.getElementsByClassName("categories-btn-red");
	
	for(let j = 0; j < categoriesRed.length; j ++){
		categoriesRed.item(j).addEventListener('click',function(){
			if(categoriesRed.item(j).classList.contains("catChecked")){
				categoriesRed.item(j).classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				categoriesRed.item(j).classList.add("catChecked");
				
				for(let i = 0; i < catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length+categoriesBlue.length+categoriesPurple.length].length; i ++){
					catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length+categoriesBlue.length+categoriesPurple.length].item(i).style.display = "inline-block";
				}
			}
		});
	}
	
	let categoriesDarkGreen = document.getElementsByClassName("categories-btn-dark-green");
	
	for(let j = 0; j < categoriesDarkGreen.length; j ++){
		categoriesDarkGreen.item(j).addEventListener('click',function(){
			if(categoriesDarkGreen.item(j).classList.contains("catChecked")){
				categoriesDarkGreen.item(j).classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				categoriesDarkGreen.item(j).classList.add("catChecked");
				
				for(let i = 0; i < catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length+categoriesBlue.length+categoriesPurple.length+categoriesRed.length].length; i ++){
					catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length+categoriesBlue.length+categoriesPurple.length+categoriesRed.length].item(i).style.display = "inline-block";
				}
			}
		});
	}
	
	let categoriesDarkBlue = document.getElementsByClassName("categories-btn-dark-blue");
	
	for(let j = 0; j < categoriesDarkBlue.length; j ++){
		categoriesDarkBlue.item(j).addEventListener('click',function(){
			if(categoriesDarkBlue.item(j).classList.contains("catChecked")){
				categoriesDarkBlue.item(j).classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				categoriesDarkBlue.item(j).classList.add("catChecked");
				
				for(let i = 0; i < catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length+categoriesBlue.length+categoriesPurple.length+categoriesRed.length+categoriesDarkGreen.length].length; i ++){
					catList[j+categoriesOrange.length+categoriesGreen.length+categoriesYellow.length+categoriesCyan.length+categoriesBlue.length+categoriesPurple.length+categoriesRed.length+categoriesDarkGreen.length].item(i).style.display = "inline-block";
				}
			}
		});
	}
}

function hideAllCat(){
	let categories = document.getElementsByClassName("categories");
	let categoriesBtn = document.getElementsByClassName("categories-btn");
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "none";
	}
	
	for(let j = 0; j < 82; j ++){
		if(categoriesBtn.item(j).classList.contains("catChecked")){
			categoriesBtn[j].classList.remove("catChecked");
		}
	}
}

function hoverThumbInit(){
	document.getElementsByClassName("CategoriesFilter").item(0).classList.remove("CategoriesFilterShow");
}
