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
	
	let categoriesOrange = document.getElementsByClassName("categories-btn-orange");
	
	for(let j = 0; j < categoriesOrange.length; j ++){
		categoriesOrange.item(j).addEventListener("click" , function(){
			categoriesOrange.item(j).classList.add("clicked");
			
			for(let i = 0; i < categories.length; i ++){
				categories.item(i).style.display = "none";
			}
			
			for(let i = 0; i < catList[j].length; i ++){
				catList[j].item(i).style.display = "inline-block";
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
			}
			
			for(let i = 0; i < catList[j].length; i ++){
				catList[j].item(i).style.display = "inline-block";
			}
			changeDefaultGreen(j);
		});
	}
}

function showAllCat(){
	let categories = document.getElementsByClassName("categories");
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "inline-block";
	}
}

function hoverThumbInit(){
	document.getElementsByClassName("CategoriesFilter").item(0).classList.remove("CategoriesFilterShow");
	
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
			categoriesGreen.item(i).style.backgroundColor = "#adf373";
			if(categoriesGreen.item(i).classList.contains("clicked")){
				categoriesGreen.item(i).style.backgroundColor = "#79ff00";
			}
		}
		
		categoriesGreen.item(i).onmouseout = function(){
			categoriesGreen.item(i).style.backgroundColor = "#56941D";
			if(categoriesGreen.item(i).classList.contains("clicked")){
				categoriesGreen.item(i).style.backgroundColor = "#79ff00";
			}
		}
		
		categoriesGreen.item(i).onclick = function(){
			categoriesGreen.item(i).style.backgroundColor = "#79ff00";
		}
	}
}

function changeDefaultOrange(n){
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
	
	categoriesGreen.item(n).style.backgroundColor = "#79ff00";
	categoriesGreen.item(n).classList.add("clicked");
}
