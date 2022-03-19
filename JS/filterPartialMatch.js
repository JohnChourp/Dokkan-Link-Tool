function filterPartialMatch(){
	let btnList = [] , catList = [];
	let categories = document.getElementsByClassName("categories");
	
	btnList[0] = document.getElementById("ds");
	catList[0] = document.getElementsByClassName("ds");
	
	btnList[1] = document.getElementById("pns");
	catList[1] = document.getElementsByClassName("pns");
	
	btnList[2] = document.getElementById("acs");
	catList[2] = document.getElementsByClassName("acs");
	
	btnList[3] = document.getElementById("mbs");
	catList[3] = document.getElementsByClassName("mbs");
	
	btnList[4] = document.getElementById("fs");
	catList[4] = document.getElementsByClassName("fs");
	
	btnList[5] = document.getElementById("uss");
	catList[5] = document.getElementsByClassName("uss");
	
	btnList[6] = document.getElementById("sds");
	catList[6] = document.getElementsByClassName("sds");
	
	btnList[7] = document.getElementById("ps");
	catList[7] = document.getElementsByClassName("ps");
	
	btnList[8] = document.getElementById("hs");
	catList[8] = document.getElementsByClassName("hs");
	
	btnList[9] = document.getElementById("e");
	catList[9] = document.getElementsByClassName("e");
	
	btnList[10] = document.getElementById("n");
	catList[10] = document.getElementsByClassName("n");
	
	btnList[11] = document.getElementById("a");
	catList[11] = document.getElementsByClassName("a");
	
	btnList[12] = document.getElementById("alf");
	catList[12] = document.getElementsByClassName("alf");
	
	btnList[13] = document.getElementById("gfa");
	catList[13] = document.getElementsByClassName("gfa");
	
	btnList[14] = document.getElementById("vf");
	catList[14] = document.getElementsByClassName("vf");
	
	btnList[15] = document.getElementById("wb");
	catList[15] = document.getElementsByClassName("wb");
	
	btnList[16] = document.getElementById("y");
	catList[16] = document.getElementsByClassName("y");
	
	btnList[17] = document.getElementById("pg");
	catList[17] = document.getElementsByClassName("pg");
	
	btnList[18] = document.getElementById("ss");
	catList[18] = document.getElementsByClassName("ss");
	
	btnList[19] = document.getElementById("ss2");
	catList[19] = document.getElementsByClassName("ss2");
	
	btnList[20] = document.getElementById("ss3");
	catList[20] = document.getElementsByClassName("ss3");
	
	btnList[21] = document.getElementById("f");
	catList[21] = document.getElementsByClassName("f");
	
	btnList[22] = document.getElementById("p");
	catList[22] = document.getElementsByClassName("p");
	
	btnList[23] = document.getElementById("gfo");
	catList[23] = document.getElementsByClassName("gfo");
	
	btnList[24] = document.getElementById("tbo");
	catList[24] = document.getElementsByClassName("tbo");
	
	btnList[25] = document.getElementById("pa");
	catList[25] = document.getElementsByClassName("pa");
	
	btnList[26] = document.getElementById("k");
	catList[26] = document.getElementsByClassName("k");
	
	btnList[27] = document.getElementById("rog");
	catList[27] = document.getElementsByClassName("rog");
	
	btnList[28] = document.getElementById("fp");
	catList[28] = document.getElementsByClassName("fp");
	
	btnList[29] = document.getElementById("gap");
	catList[29] = document.getElementsByClassName("gap");
	
	btnList[30] = document.getElementById("mp");
	catList[30] = document.getElementsByClassName("mp");
	
	btnList[31] = document.getElementById("pc");
	catList[31] = document.getElementsByClassName("pc");
	
	btnList[32] = document.getElementById("ma");
	catList[32] = document.getElementsByClassName("ma");
	
	btnList[33] = document.getElementById("cbam");
	catList[33] = document.getElementsByClassName("cbam");
	
	btnList[34] = document.getElementById("rg");
	catList[34] = document.getElementsByClassName("rg");
	
	btnList[35] = document.getElementById("me");
	catList[35] = document.getElementsByClassName("me");
	
	btnList[36] = document.getElementById("tl");
	catList[36] = document.getElementsByClassName("tl");
	
	btnList[37] = document.getElementById("ftc");
	catList[37] = document.getElementsByClassName("ftc");
	
	btnList[38] = document.getElementById("wr");
	catList[38] = document.getElementsByClassName("wr");
	
	btnList[39] = document.getElementById("se");
	catList[39] = document.getElementsByClassName("se");
	
	btnList[40] = document.getElementById("jf");
	catList[40] = document.getElementsByClassName("jf");
	
	btnList[41] = document.getElementById("sb");
	catList[41] = document.getElementsByClassName("sb");
	
	btnList[42] = document.getElementById("bof");
	catList[42] = document.getElementsByClassName("bof");
	
	btnList[43] = document.getElementById("bomad");
	catList[43] = document.getElementsByClassName("bomad");
	
	btnList[44] = document.getElementById("gf");
	catList[44] = document.getElementsByClassName("gf");
	
	btnList[45] = document.getElementById("tba");
	catList[45] = document.getElementsByClassName("tba");
	
	btnList[46] = document.getElementById("u6");
	catList[46] = document.getElementsByClassName("u6");
	
	btnList[47] = document.getElementById("rou7");
	catList[47] = document.getElementsByClassName("rou7");
	
	btnList[48] = document.getElementById("u11");
	catList[48] = document.getElementsByClassName("u11");
	
	btnList[49] = document.getElementById("gh");
	catList[49] = document.getElementsByClassName("gh");
	
	btnList[50] = document.getElementById("gb");
	catList[50] = document.getElementsByClassName("gb");
	
	btnList[51] = document.getElementById("mh");
	catList[51] = document.getElementsByClassName("mh");
	
	btnList[52] = document.getElementById("mb");
	catList[52] = document.getElementsByClassName("mb");
	
	btnList[53] = document.getElementById("ts");
	catList[53] = document.getElementsByClassName("ts");
	
	btnList[54] = document.getElementById("wt");
	catList[54] = document.getElementsByClassName("wt");
	
	btnList[55] = document.getElementById("lcw");
	catList[55] = document.getElementsByClassName("lcw");
	
	btnList[56] = document.getElementById("gw");
	catList[56] = document.getElementsByClassName("gw");
	
	btnList[57] = document.getElementById("ow");
	catList[57] = document.getElementsByClassName("ow");
	
	btnList[58] = document.getElementById("rw");
	catList[58] = document.getElementsByClassName("rw");
	
	btnList[59] = document.getElementById("stw");
	catList[59] = document.getElementsByClassName("stw");
	
	btnList[60] = document.getElementById("tt");
	catList[60] = document.getElementsByClassName("tt");
	
	btnList[61] = document.getElementById("dbs");
	catList[61] = document.getElementsByClassName("dbs");
	
	btnList[62] = document.getElementById("sf");
	catList[62] = document.getElementsByClassName("sf");
	
	btnList[63] = document.getElementById("le");
	catList[63] = document.getElementsByClassName("le");
	
	btnList[64] = document.getElementById("s");
	catList[64] = document.getElementsByClassName("s");
	
	btnList[65] = document.getElementById("doj");
	catList[65] = document.getElementsByClassName("doj");
	
	btnList[66] = document.getElementById("r");
	catList[66] = document.getElementsByClassName("r");
	
	btnList[67] = document.getElementById("tg");
	catList[67] = document.getElementsByClassName("tg");
	
	btnList[68] = document.getElementById("tc");
	catList[68] = document.getElementsByClassName("tc");
	
	btnList[69] = document.getElementById("ide");
	catList[69] = document.getElementsByClassName("ide");
	
	btnList[70] = document.getElementById("pd");
	catList[70] = document.getElementsByClassName("pd");
	
	btnList[71] = document.getElementById("er");
	catList[71] = document.getElementsByClassName("er");
	
	btnList[72] = document.getElementById("ch");
	catList[72] = document.getElementsByClassName("ch");
	
	btnList[73] = document.getElementById("ew");
	catList[73] = document.getElementsByClassName("ew");
	
	btnList[74] = document.getElementById("aos");
	catList[74] = document.getElementsByClassName("aos");
	
	btnList[75] = document.getElementById("bow");
	catList[75] = document.getElementsByClassName("bow");
	
	btnList[76] = document.getElementById("ab");
	catList[76] = document.getElementsByClassName("ab");
	
	btnList[77] = document.getElementById("he");
	catList[77] = document.getElementsByClassName("he");
	
	btnList[78] = document.getElementById("sp");
	catList[78] = document.getElementsByClassName("sp");
	
	btnList[79] = document.getElementById("wc");
	catList[79] = document.getElementsByClassName("wc");
	
	btnList[80] = document.getElementById("c");
	catList[80] = document.getElementsByClassName("c");
	
	btnList[81] = document.getElementById("dbh");
	catList[81] = document.getElementsByClassName("dbh");
	
	for(let i = 0; i < categories.length; i ++){
		categories.item(i).style.display = "none";
	}
	
	for(let j = 0; j < btnList.length; j ++){
		btnList[j].addEventListener("click" , function(){
			if(btnList[j].classList.contains("catChecked")){
				btnList[j].classList.remove("catChecked");
				
				for(let i = 0; i < categories.length; i ++){
					categories.item(i).style.display = "none";
				}
			}else{
				btnList[j].classList.add("catChecked");
				
				for(let i = 0; i < catList[j].length; i ++){
					catList[j].item(i).style.display = "inline-block";
				}
			}
		});
	}
}
