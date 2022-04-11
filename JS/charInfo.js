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
		
		if((dataRarityItems[i].getAttribute(dataRarity) === "lr") || (dataRarityItems[i].getAttribute(dataRarity) === "ur") || (dataRarityItems[i].getAttribute(dataRarity) === "ssr")){
			charBaseTypeImage.src = "CharacterBase/char_base_" + dataTypeItems[i].getAttribute(dataType) + ".png";
		}
		if((dataRarityItems[i].getAttribute(dataRarity) === "sr") || (dataRarityItems[i].getAttribute(dataRarity) === "r") || (dataRarityItems[i].getAttribute(dataRarity) === "n")){
			charBaseTypeImage.src = "CharacterBase/char_base_" + dataTypeItems[i].getAttribute(dataType) + "_" + dataRarityItems[i].getAttribute(dataRarity) + ".png";
		}
		
		charBaseTypeDiv.appendChild(charBaseTypeImage);
		categories.item(i).appendChild(charBaseTypeDiv);
		
		charThumbImage.src = "CharacterThumb/card_" + dataIdItems[i].getAttribute(dataId) + "_thumb.png";
		charThumbImageDiv.appendChild(charThumbImage);
		categories.item(i).appendChild(charThumbImageDiv);
		
		charTypeImage.src = "CharacterType/char_type_" + dataClassItems[i].getAttribute(dataClass) + "_" + dataTypeItems[i].getAttribute(dataType) + ".png"
		charTypeImageDiv.appendChild(charTypeImage);
		categories.item(i).appendChild(charTypeImageDiv);
		
		charRarityImage.src = "CharacterRarity/char_rarity_" + dataRarityItems[i].getAttribute(dataRarity) + ".png";
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