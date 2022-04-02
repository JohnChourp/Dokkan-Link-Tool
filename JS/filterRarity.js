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
	});
}

function showFilterRarity(){
	document.getElementsByClassName("rarityFilter").item(0).classList.remove("rarityFilterShow");
}