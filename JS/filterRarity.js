function filterRarity(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
	let categories = document.getElementsByClassName("categories");
	let cardRarity = document.getElementsByClassName("card-rarity");
	
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	rarity_n.addEventListener('click' , function(){
		for(let i = 0; i < categories.length; i ++){
			if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_n.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
		defaultNFilter();
	});
	
	rarity_r.addEventListener('click' , function(){
		for(let i = 0; i < categories.length; i ++){
			if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_r.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
		defaultRFilter();
	});
	
	rarity_sr.addEventListener('click' , function(){
		for(let i = 0; i < categories.length; i ++){
			if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_sr.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
		defaultSRFilter();
	});
	
	rarity_ssr.addEventListener('click' , function(){
		for(let i = 0; i < categories.length; i ++){
			if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_ssr.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
		defaultSSRFilter();
	});
	
	rarity_ur.addEventListener('click' , function(){
		for(let i = 0; i < categories.length; i ++){
			if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_ur.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
		defaultURFilter();
	});
	
	
	rarity_lr.addEventListener('click' , function(){
		for(let i = 0; i < categories.length; i ++){
			if(cardRarity.item(i).src === httpLink + hostName + "/Dokkan-Link-Tool/CharacterRarity/char_rarity_lr.png"){
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedRarity");
			}else{
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedRarity");
			}
		}
		defaultLRFilter();
	});
	hoverRarity();
}

function showFilterRarity(){
	document.getElementsByClassName("rarityFilter").item(0).classList.remove("rarityFilterShow");
}

function hoverRarity(){
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	rarity_n.onmouseover = function(){
		rarity_n.style.backgroundColor = "#919090";
		if(rarity_n.classList.contains("checkedRarityBtn")){
			rarity_n.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_n.onmouseout = function(){
		rarity_n.style.backgroundColor = "#494949";
		if(rarity_n.classList.contains("checkedRarityBtn")){
			rarity_n.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_r.onmouseover = function(){
		rarity_r.style.backgroundColor = "#919090";
		if(rarity_r.classList.contains("checkedRarityBtn")){
			rarity_r.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_r.onmouseout = function(){
		rarity_r.style.backgroundColor = "#494949";
		if(rarity_r.classList.contains("checkedRarityBtn")){
			rarity_r.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_sr.onmouseover = function(){
		rarity_sr.style.backgroundColor = "#919090";
		if(rarity_sr.classList.contains("checkedRarityBtn")){
			rarity_sr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_sr.onmouseout = function(){
		rarity_sr.style.backgroundColor = "#494949";
		if(rarity_sr.classList.contains("checkedRarityBtn")){
			rarity_sr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_ssr.onmouseover = function(){
		rarity_ssr.style.backgroundColor = "#919090";
		if(rarity_ssr.classList.contains("checkedRarityBtn")){
			rarity_ssr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_ssr.onmouseout = function(){
		rarity_ssr.style.backgroundColor = "#494949";
		if(rarity_ssr.classList.contains("checkedRarityBtn")){
			rarity_ssr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_ur.onmouseover = function(){
		rarity_ur.style.backgroundColor = "#919090";
		if(rarity_ur.classList.contains("checkedRarityBtn")){
			rarity_ur.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_ur.onmouseout = function(){
		rarity_ur.style.backgroundColor = "#494949";
		if(rarity_ur.classList.contains("checkedRarityBtn")){
			rarity_ur.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_lr.onmouseover = function(){
		rarity_lr.style.backgroundColor = "#919090";
		if(rarity_lr.classList.contains("checkedRarityBtn")){
			rarity_lr.style.backgroundColor = "#EEC310";
		}
	}
	
	rarity_lr.onmouseout = function(){
		rarity_lr.style.backgroundColor = "#494949";
		if(rarity_lr.classList.contains("checkedRarityBtn")){
			rarity_lr.style.backgroundColor = "#EEC310";
		}
	}
}

function defaultNFilter(){
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	if(!rarity_n.classList.contains("checkedRarityBtn")){
		rarity_n.style.backgroundColor = "#EEC310";
		rarity_n.classList.add("checkedRarityBtn");
		
		rarity_r.style.backgroundColor = "#494949";
		rarity_r.classList.remove("checkedRarityBtn");
		
		rarity_sr.style.backgroundColor = "#494949";
		rarity_sr.classList.remove("checkedRarityBtn");
		
		rarity_ssr.style.backgroundColor = "#494949";
		rarity_ssr.classList.remove("checkedRarityBtn");
		
		rarity_ur.style.backgroundColor = "#494949";
		rarity_ur.classList.remove("checkedRarityBtn");
		
		rarity_lr.style.backgroundColor = "#494949";
		rarity_lr.classList.remove("checkedRarityBtn");
	}
}

function defaultRFilter(){
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	if(!rarity_r.classList.contains("checkedRarityBtn")){
		rarity_r.style.backgroundColor = "#EEC310";
		rarity_r.classList.add("checkedRarityBtn");
		
		rarity_n.style.backgroundColor = "#494949";
		rarity_n.classList.remove("checkedRarityBtn");
		
		rarity_sr.style.backgroundColor = "#494949";
		rarity_sr.classList.remove("checkedRarityBtn");
		
		rarity_ssr.style.backgroundColor = "#494949";
		rarity_ssr.classList.remove("checkedRarityBtn");
		
		rarity_ur.style.backgroundColor = "#494949";
		rarity_ur.classList.remove("checkedRarityBtn");
		
		rarity_lr.style.backgroundColor = "#494949";
		rarity_lr.classList.remove("checkedRarityBtn");
	}
}

function defaultSRFilter(){
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	if(!rarity_sr.classList.contains("checkedRarityBtn")){
		rarity_sr.style.backgroundColor = "#EEC310";
		rarity_sr.classList.add("checkedRarityBtn");
		
		rarity_n.style.backgroundColor = "#494949";
		rarity_n.classList.remove("checkedRarityBtn");
		
		rarity_r.style.backgroundColor = "#494949";
		rarity_r.classList.remove("checkedRarityBtn");
		
		rarity_ssr.style.backgroundColor = "#494949";
		rarity_ssr.classList.remove("checkedRarityBtn");
		
		rarity_ur.style.backgroundColor = "#494949";
		rarity_ur.classList.remove("checkedRarityBtn");
		
		rarity_lr.style.backgroundColor = "#494949";
		rarity_lr.classList.remove("checkedRarityBtn");
	}
}

function defaultSSRFilter(){
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	if(!rarity_ssr.classList.contains("checkedRarityBtn")){
		rarity_ssr.style.backgroundColor = "#EEC310";
		rarity_ssr.classList.add("checkedRarityBtn");
		
		rarity_n.style.backgroundColor = "#494949";
		rarity_n.classList.remove("checkedRarityBtn");
		
		rarity_r.style.backgroundColor = "#494949";
		rarity_r.classList.remove("checkedRarityBtn");
		
		rarity_sr.style.backgroundColor = "#494949";
		rarity_sr.classList.remove("checkedRarityBtn");
		
		rarity_ur.style.backgroundColor = "#494949";
		rarity_ur.classList.remove("checkedRarityBtn");
		
		rarity_lr.style.backgroundColor = "#494949";
		rarity_lr.classList.remove("checkedRarityBtn");
	}
}

function defaultURFilter(){
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	if(!rarity_ur.classList.contains("checkedRarityBtn")){
		rarity_ur.style.backgroundColor = "#EEC310";
		rarity_ur.classList.add("checkedRarityBtn");
		
		rarity_n.style.backgroundColor = "#494949";
		rarity_n.classList.remove("checkedRarityBtn");
		
		rarity_r.style.backgroundColor = "#494949";
		rarity_r.classList.remove("checkedRarityBtn");
		
		rarity_sr.style.backgroundColor = "#494949";
		rarity_sr.classList.remove("checkedRarityBtn");
		
		rarity_ssr.style.backgroundColor = "#494949";
		rarity_ssr.classList.remove("checkedRarityBtn");
		
		rarity_lr.style.backgroundColor = "#494949";
		rarity_lr.classList.remove("checkedRarityBtn");
	}
}

function defaultLRFilter(){
	let rarity_n = document.getElementById("rarity_n");
	let rarity_r = document.getElementById("rarity_r");
	let rarity_sr = document.getElementById("rarity_sr");
	let rarity_ssr = document.getElementById("rarity_ssr");
	let rarity_ur = document.getElementById("rarity_ur");
	let rarity_lr = document.getElementById("rarity_lr");
	
	if(!rarity_lr.classList.contains("checkedRarityBtn")){
		rarity_lr.style.backgroundColor = "#EEC310";
		rarity_lr.classList.add("checkedRarityBtn");
		
		rarity_n.style.backgroundColor = "#494949";
		rarity_n.classList.remove("checkedRarityBtn");
		
		rarity_r.style.backgroundColor = "#494949";
		rarity_r.classList.remove("checkedRarityBtn");
		
		rarity_sr.style.backgroundColor = "#494949";
		rarity_sr.classList.remove("checkedRarityBtn");
		
		rarity_ssr.style.backgroundColor = "#494949";
		rarity_ssr.classList.remove("checkedRarityBtn");
		
		rarity_ur.style.backgroundColor = "#494949";
		rarity_ur.classList.remove("checkedRarityBtn");
	}
}