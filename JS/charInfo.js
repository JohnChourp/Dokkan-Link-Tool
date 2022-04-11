function charInfo(){
	let dataType = 'data-type';
	let dataId = 'data-id';
	let dataClass = 'data-class';
	let dataRarity = 'data-rarity';
	
	let dataTypeItems = document.querySelectorAll('[' + dataType + ']');
	let dataIdItems = document.querySelectorAll('[' + dataId + ']');
	let dataClassItems = document.querySelectorAll('[' + dataClass + ']');
	let dataRarityItems = document.querySelectorAll('[' + dataRarity + ']');
	
	let categories = document.getElementsByClassName("categories");
	
	function addCharThumbImage(charThumbImage , i , charThumbImageDiv){
		charThumbImage.src = "CharacterThumb/card_" + dataIdItems[i].getAttribute(dataId) + "_thumb.png";
		charThumbImageDiv.appendChild(charThumbImage);
		categories.item(i).appendChild(charThumbImageDiv);
	}
	
	for(let i = 0; i < categories.length; i ++){
		let charBaseTypeDiv = document.createElement("div");
		charBaseTypeDiv.classList.add("char-base-type-margin");
		let charThumbImageDiv = document.createElement("div");
		charThumbImageDiv.classList.add("card-thumb-margin");
		let charTypeImageDiv = document.createElement("div");
		charTypeImageDiv.classList.add("card-type-margin");
		let charRarityImageDiv = document.createElement("div");
		charRarityImageDiv.classList.add("card-rarity-margin");
		let charBaseTypeImage = document.createElement("img");
		charBaseTypeImage.classList.add("char-base-type");
		let charThumbImage = document.createElement("img");
		charThumbImage.classList.add("card-thumb");
		let charTypeImage = document.createElement("img");
		charTypeImage.classList.add("card-type");
		let charRarityImage = document.createElement("img");
		charRarityImage.classList.add("card-rarity");
		
		if(dataTypeItems[i].getAttribute(dataType) === "agl"){
			if(((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr"))){
				charBaseTypeImage.src = "CharacterBase/char_base_agl.png";
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr") || (dataRarityItems[i].getAttribute(dataRarity) === "r") || (dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.src = "CharacterBase/char_base_agl_" + dataRarityItems[i].getAttribute(dataRarity) + ".png";
			}
		}
		
		if(dataTypeItems[i].getAttribute(dataType) === "int"){
			if((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr")){
				charBaseTypeImage.src = "CharacterBase/char_base_int.png";
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr") || (dataRarityItems[i].getAttribute(dataRarity) === "r") || (dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.src = "CharacterBase/char_base_int_" + dataRarityItems[i].getAttribute(dataRarity) + ".png";
			}
		}
		
		if(dataTypeItems[i].getAttribute(dataType) === "phy"){
			if((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr")){
				charBaseTypeImage.src = "CharacterBase/char_base_phy.png";
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr") || (dataRarityItems[i].getAttribute(dataRarity) === "r") || (dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.src = "CharacterBase/char_base_phy_" + dataRarityItems[i].getAttribute(dataRarity) + ".png";
			}
		}
		
		if(dataTypeItems[i].getAttribute(dataType) === "str"){
			if((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr")){
				charBaseTypeImage.src = "CharacterBase/char_base_str.png";
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr") || (dataRarityItems[i].getAttribute(dataRarity) === "r") || (dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.src = "CharacterBase/char_base_str_" + dataRarityItems[i].getAttribute(dataRarity) + ".png";
			}
		}
		
		if(dataTypeItems[i].getAttribute(dataType) === "teq"){
			if((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr")){
				charBaseTypeImage.src = "CharacterBase/char_base_teq.png";
			}
			if((dataRarityItems[i].getAttribute(dataRarity) === "sr") || (dataRarityItems[i].getAttribute(dataRarity) === "r") || (dataRarityItems[i].getAttribute(dataRarity) === "n")){
				charBaseTypeImage.src = "CharacterBase/char_base_teq_" + dataRarityItems[i].getAttribute(dataRarity) + ".png";
			}
		}
		
		charTypeImage.src = "CharacterType/char_type_" + dataClassItems[i].getAttribute(dataClass) + "_" + dataTypeItems[i].getAttribute(dataType) + ".png";
		charRarityImage.src = "CharacterRarity/char_rarity_" + dataRarityItems[i].getAttribute(dataRarity) + ".png";
		
		charBaseTypeDiv.appendChild(charBaseTypeImage);
		categories.item(i).appendChild(charBaseTypeDiv);
		
		addCharThumbImage(charThumbImage , i , charThumbImageDiv);
		
		charTypeImageDiv.appendChild(charTypeImage);
		categories.item(i).appendChild(charTypeImageDiv);
		
		charRarityImageDiv.appendChild(charRarityImage);
		categories.item(i).appendChild(charRarityImageDiv);
	}
}

function loadingScriptFile(){
	window.addEventListener('load' , function(){
		let container = document.getElementsByClassName("container-cards").item(0);
		container.style.display = "block";
	});
}

loadingScriptFile();