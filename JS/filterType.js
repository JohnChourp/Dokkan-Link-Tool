function initTypeFilter(){
	let httpLink;
	let hostName = window.location.host;
	
	if(hostName === "johnchourp.github.io"){
		httpLink = "https://";
	}else{
		httpLink = "http://";
	}
	
	let categories = document.getElementsByClassName("categories");
	let cardType = document.getElementsByClassName("card-type");
	let appeared = document.getElementsByClassName("appeared");
	
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	agl_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_agl.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_agl.png"){
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
	
	super_agl_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_agl.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultSuperAglFilter();
	});
	
	extreme_agl_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_agl.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultExtremeAglFilter();
	});
	
	int_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_int.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_int.png"){
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
	
	super_int_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_int.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultSuperIntFilter();
	});
	
	extreme_int_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_int.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultExtremeIntFilter();
	});
	
	phy_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_phy.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_phy.png"){
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
	
	super_phy_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_phy.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultSuperPhyFilter();
	});
	
	extreme_phy_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_phy.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultExtremePhyFilter();
	});
	
	str_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_str.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_str.png"){
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
	
	super_str_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_str.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultSuperStrFilter();
	});
	
	extreme_str_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_str.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultExtremeStrFilter();
	});
	
	teq_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_teq.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_teq.png"){
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
	
	super_teq_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_super_teq.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultSuperTeqFilter();
	});
	
	extreme_teq_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
			if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png"){
				categories.item(i).style.display = "none";
				categories.item(i).classList.remove("appearedType");
			}else{
				categories.item(i).style.display = "inline-block";
				categories.item(i).classList.add("appearedType");
			}
		}
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
				if(cardType.item(i).src !== httpLink + hostName + "/Dokkan-Link-Tool/CharacterType/char_type_extreme_teq.png"){
					categories.item(i).style.display = "none";
					categories.item(i).classList.remove("appearedType");
				}else{
					categories.item(i).style.display = "inline-block";
					categories.item(i).classList.add("appearedType");
				}
			}
		}
		defaultExtremeTeqFilter();
	});
	
	super_type_filter.addEventListener('click' , function(){
		for(let i = 0; i < cardType.length; i ++){
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
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
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
		for(let i = 0; i < cardType.length; i ++){
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
		
		for(let i = 0; i < cardType.length; i ++){
			if(categories.item(i).classList.contains("appeared") && categories.item(i).classList.contains("appearedType")){
				categories.item(i).style.display = "inline-block";
			}else{
				categories.item(i).style.display = "none";
			}
		}
		
		if(appeared.length < 1){
			for(let i = 0; i < cardType.length; i ++){
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
	hoverFilterType();
}
function showFilterType(){
	document.getElementsByClassName("typeFilter").item(0).classList.remove("typeFilterShow");
}
function hoverFilterType(){
	let agl_filter = document.getElementById("agl");
	agl_filter.onmouseover = function(){
		agl_filter.style.backgroundColor = "#0a7fff";
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
	
	let super_agl_filter = document.getElementById("super_agl");
	super_agl_filter.onmouseover = function(){
		super_agl_filter.style.backgroundColor = "#0a7fff";
		if(super_agl_filter.classList.contains("checkedTypeBtn")){
			super_agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_agl_filter.onmouseout = function(){
		super_agl_filter.style.backgroundColor = "#064794";
		if(super_agl_filter.classList.contains("checkedTypeBtn")){
			super_agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_agl_filter = document.getElementById("extreme_agl");
	extreme_agl_filter.onmouseover = function(){
		extreme_agl_filter.style.backgroundColor = "#0a7fff";
		if(extreme_agl_filter.classList.contains("checkedTypeBtn")){
			extreme_agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_agl_filter.onmouseout = function(){
		extreme_agl_filter.style.backgroundColor = "#064794";
		if(extreme_agl_filter.classList.contains("checkedTypeBtn")){
			extreme_agl_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let int_filter = document.getElementById("int");
	int_filter.onmouseover = function(){
		int_filter.style.backgroundColor = "#b367d7";
		if(int_filter.classList.contains("checkedTypeBtn")){
			int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	int_filter.onmouseout = function(){
		int_filter.style.backgroundColor = "#6e3e80";
		if(int_filter.classList.contains("checkedTypeBtn")){
			int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let super_int_filter = document.getElementById("super_int");
	super_int_filter.onmouseover = function(){
		super_int_filter.style.backgroundColor = "#b367d7";
		if(super_int_filter.classList.contains("checkedTypeBtn")){
			super_int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_int_filter.onmouseout = function(){
		super_int_filter.style.backgroundColor = "#6e3e80";
		if(super_int_filter.classList.contains("checkedTypeBtn")){
			super_int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_int_filter = document.getElementById("extreme_int");
	extreme_int_filter.onmouseover = function(){
		extreme_int_filter.style.backgroundColor = "#b367d7";
		if(extreme_int_filter.classList.contains("checkedTypeBtn")){
			extreme_int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_int_filter.onmouseout = function(){
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		if(extreme_int_filter.classList.contains("checkedTypeBtn")){
			extreme_int_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let phy_filter = document.getElementById("phy");
	phy_filter.onmouseover = function(){
		phy_filter.style.backgroundColor = "#c06d06";
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
	
	let super_phy_filter = document.getElementById("super_phy");
	super_phy_filter.onmouseover = function(){
		super_phy_filter.style.backgroundColor = "#c06d06";
		if(super_phy_filter.classList.contains("checkedTypeBtn")){
			super_phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_phy_filter.onmouseout = function(){
		super_phy_filter.style.backgroundColor = "#673A03";
		if(super_phy_filter.classList.contains("checkedTypeBtn")){
			super_phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_phy_filter = document.getElementById("extreme_phy");
	extreme_phy_filter.onmouseover = function(){
		extreme_phy_filter.style.backgroundColor = "#c06d06";
		if(extreme_phy_filter.classList.contains("checkedTypeBtn")){
			extreme_phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_phy_filter.onmouseout = function(){
		extreme_phy_filter.style.backgroundColor = "#673A03";
		if(extreme_phy_filter.classList.contains("checkedTypeBtn")){
			extreme_phy_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let str_filter = document.getElementById("str");
	str_filter.onmouseover = function(){
		str_filter.style.backgroundColor = "#c72931";
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
	
	let super_str_filter = document.getElementById("super_str");
	super_str_filter.onmouseover = function(){
		super_str_filter.style.backgroundColor = "#c72931";
		if(super_str_filter.classList.contains("checkedTypeBtn")){
			super_str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_str_filter.onmouseout = function(){
		super_str_filter.style.backgroundColor = "#7C1A1E";
		if(super_str_filter.classList.contains("checkedTypeBtn")){
			super_str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_str_filter = document.getElementById("extreme_str");
	extreme_str_filter.onmouseover = function(){
		extreme_str_filter.style.backgroundColor = "#c72931";
		if(extreme_str_filter.classList.contains("checkedTypeBtn")){
			extreme_str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_str_filter.onmouseout = function(){
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		if(extreme_str_filter.classList.contains("checkedTypeBtn")){
			extreme_str_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let teq_filter = document.getElementById("teq");
	teq_filter.onmouseover = function(){
		teq_filter.style.backgroundColor = "#00b712";
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
	
	let super_teq_filter = document.getElementById("super_teq");
	super_teq_filter.onmouseover = function(){
		super_teq_filter.style.backgroundColor = "#00b712";
		if(super_teq_filter.classList.contains("checkedTypeBtn")){
			super_teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	super_teq_filter.onmouseout = function(){
		super_teq_filter.style.backgroundColor = "#015907";
		if(super_teq_filter.classList.contains("checkedTypeBtn")){
			super_teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	let extreme_teq_filter = document.getElementById("extreme_teq");
	extreme_teq_filter.onmouseover = function(){
		extreme_teq_filter.style.backgroundColor = "#00b712";
		if(extreme_teq_filter.classList.contains("checkedTypeBtn")){
			extreme_teq_filter.style.backgroundColor = "#EEC310";
		}
	}
	
	extreme_teq_filter.onmouseout = function(){
		extreme_teq_filter.style.backgroundColor = "#015907";
		if(extreme_teq_filter.classList.contains("checkedTypeBtn")){
			extreme_teq_filter.style.backgroundColor = "#EEC310";
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
function filterTypeClick(agl_filter , super_agl_filter , extreme_agl_filter , int_filter , super_int_filter , extreme_int_filter , phy_filter , super_phy_filter , extreme_phy_filter , str_filter , super_str_filter , extreme_str_filter , teq_filter , super_teq_filter , extreme_teq_filter , super_type_filter , extreme_type_filter){
	if(agl_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		agl_filter.click();
	}
	if(super_agl_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_agl_filter.click();
	}
	if(extreme_agl_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_agl_filter.click();
	}
	
	if(int_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		int_filter.click();
	}
	if(super_int_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_int_filter.click();
	}
	if(extreme_int_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_int_filter.click();
	}
	
	if(phy_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		phy_filter.click();
	}
	if(super_phy_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_phy_filter.click();
	}
	if(extreme_phy_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_phy_filter.click();
	}
	
	if(str_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		str_filter.click();
	}
	if(super_str_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_str_filter.click();
	}
	if(extreme_str_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_str_filter.click();
	}
	
	if(teq_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		teq_filter.click();
	}
	if(super_teq_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_teq_filter.click();
	}
	if(extreme_teq_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_teq_filter.click();
	}
	
	if(super_type_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		super_type_filter.click();
	}
	if(extreme_type_filter.style.backgroundColor.toString() === "rgb(238, 195, 16)"){
		extreme_type_filter.click();
	}
}

function defaultAglFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!agl_filter.classList.contains("checkedTypeBtn")){
		agl_filter.style.backgroundColor = "#EEC310";
		agl_filter.classList.add("checkedTypeBtn");
		
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultSuperAglFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!super_agl_filter.classList.contains("checkedTypeBtn")){
		super_agl_filter.style.backgroundColor = "#EEC310";
		super_agl_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultExtremeAglFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!extreme_agl_filter.classList.contains("checkedTypeBtn")){
		extreme_agl_filter.style.backgroundColor = "#EEC310";
		extreme_agl_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultIntFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!int_filter.classList.contains("checkedTypeBtn")){
		int_filter.style.backgroundColor = "#EEC310";
		int_filter.classList.add("checkedTypeBtn");
		
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultSuperIntFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!super_int_filter.classList.contains("checkedTypeBtn")){
		super_int_filter.style.backgroundColor = "#EEC310";
		super_int_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultExtremeIntFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!extreme_int_filter.classList.contains("checkedTypeBtn")){
		extreme_int_filter.style.backgroundColor = "#EEC310";
		extreme_int_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultPhyFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!phy_filter.classList.contains("checkedTypeBtn")){
		phy_filter.style.backgroundColor = "#EEC310";
		phy_filter.classList.add("checkedTypeBtn");
		
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultSuperPhyFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!super_phy_filter.classList.contains("checkedTypeBtn")){
		super_phy_filter.style.backgroundColor = "#EEC310";
		super_phy_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultExtremePhyFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!extreme_phy_filter.classList.contains("checkedTypeBtn")){
		extreme_phy_filter.style.backgroundColor = "#EEC310";
		extreme_phy_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultStrFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!str_filter.classList.contains("checkedTypeBtn")){
		str_filter.style.backgroundColor = "#EEC310";
		str_filter.classList.add("checkedTypeBtn");
		
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultSuperStrFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!super_str_filter.classList.contains("checkedTypeBtn")){
		super_str_filter.style.backgroundColor = "#EEC310";
		super_str_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultExtremeStrFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!extreme_str_filter.classList.contains("checkedTypeBtn")){
		extreme_str_filter.style.backgroundColor = "#EEC310";
		extreme_str_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultTeqFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!teq_filter.classList.contains("checkedTypeBtn")){
		teq_filter.style.backgroundColor = "#EEC310";
		teq_filter.classList.add("checkedTypeBtn");
		
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultSuperTeqFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!super_teq_filter.classList.contains("checkedTypeBtn")){
		super_teq_filter.style.backgroundColor = "#EEC310";
		super_teq_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultExtremeTeqFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!extreme_teq_filter.classList.contains("checkedTypeBtn")){
		extreme_teq_filter.style.backgroundColor = "#EEC310";
		extreme_teq_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}

function defaultSuperFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!super_type_filter.classList.contains("checkedTypeBtn")){
		super_type_filter.style.backgroundColor = "#EEC310";
		super_type_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		extreme_type_filter.style.backgroundColor = "#494949";
		extreme_type_filter.classList.remove("checkedTypeBtn");
	}
}
function defaultExtremeFilter(){
	let agl_filter = document.getElementById("agl");
	let super_agl_filter = document.getElementById("super_agl");
	let extreme_agl_filter = document.getElementById("extreme_agl");
	let int_filter = document.getElementById("int");
	let super_int_filter = document.getElementById("super_int");
	let extreme_int_filter = document.getElementById("extreme_int");
	let phy_filter = document.getElementById("phy");
	let super_phy_filter = document.getElementById("super_phy");
	let extreme_phy_filter = document.getElementById("extreme_phy");
	let str_filter = document.getElementById("str");
	let super_str_filter = document.getElementById("super_str");
	let extreme_str_filter = document.getElementById("extreme_str");
	let teq_filter = document.getElementById("teq");
	let super_teq_filter = document.getElementById("super_teq");
	let extreme_teq_filter = document.getElementById("extreme_teq");
	let super_type_filter = document.getElementById("super_type");
	let extreme_type_filter = document.getElementById("extreme_type");
	
	if(!extreme_type_filter.classList.contains("checkedTypeBtn")){
		extreme_type_filter.style.backgroundColor = "#EEC310";
		extreme_type_filter.classList.add("checkedTypeBtn");
		
		agl_filter.style.backgroundColor = "#064794";
		agl_filter.classList.remove("checkedTypeBtn");
		super_agl_filter.style.backgroundColor = "#064794";
		super_agl_filter.classList.remove("checkedTypeBtn");
		extreme_agl_filter.style.backgroundColor = "#064794";
		extreme_agl_filter.classList.remove("checkedTypeBtn");
		
		int_filter.style.backgroundColor = "#6e3e80";
		int_filter.classList.remove("checkedTypeBtn");
		super_int_filter.style.backgroundColor = "#6e3e80";
		super_int_filter.classList.remove("checkedTypeBtn");
		extreme_int_filter.style.backgroundColor = "#6e3e80";
		extreme_int_filter.classList.remove("checkedTypeBtn");
		
		phy_filter.style.backgroundColor = "#673A03";
		phy_filter.classList.remove("checkedTypeBtn");
		super_phy_filter.style.backgroundColor = "#673A03";
		super_phy_filter.classList.remove("checkedTypeBtn");
		extreme_phy_filter.style.backgroundColor = "#673A03";
		extreme_phy_filter.classList.remove("checkedTypeBtn");
		
		str_filter.style.backgroundColor = "#7C1A1E";
		str_filter.classList.remove("checkedTypeBtn");
		super_str_filter.style.backgroundColor = "#7C1A1E";
		super_str_filter.classList.remove("checkedTypeBtn");
		extreme_str_filter.style.backgroundColor = "#7C1A1E";
		extreme_str_filter.classList.remove("checkedTypeBtn");
		
		teq_filter.style.backgroundColor = "#015907";
		teq_filter.classList.remove("checkedTypeBtn");
		super_teq_filter.style.backgroundColor = "#015907";
		super_teq_filter.classList.remove("checkedTypeBtn");
		extreme_teq_filter.style.backgroundColor = "#015907";
		extreme_teq_filter.classList.remove("checkedTypeBtn");
		
		super_type_filter.style.backgroundColor = "#494949";
		super_type_filter.classList.remove("checkedTypeBtn");
	}
}