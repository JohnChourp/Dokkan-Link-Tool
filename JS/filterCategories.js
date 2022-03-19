function filterCategories(){
	let categories = document.getElementsByClassName("categories");
	
	let showAllCategories = document.getElementById("show-all-categories");
	
	showAllCategories.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "inline-block";
		}
	});
	
	let dbSagaBtn = document.getElementById("ds");
	let dbSagaCategory = document.getElementsByClassName("ds");
	
	let planetNamekSagaBtn = document.getElementById("pns");
	let planetNamekSagaCategory = document.getElementsByClassName("pns");
	
	let androidsCellSagaBtn = document.getElementById("acs");
	let androidsCellSagaCategory = document.getElementsByClassName("acs");
	
	let majinBuuSagaBtn = document.getElementById("mbs");
	let majinBuuSagaCategory = document.getElementsByClassName("mbs");
	
	let futureSagaBtn = document.getElementById("fs");
	let futureSagaCategory = document.getElementsByClassName("fs");
	
	let universeSurvivalSagaBtn = document.getElementById("uss");
	let universeSurvivalSagaCategory = document.getElementsByClassName("uss");
	
	let shadowDragonSagaBtn = document.getElementById("sds");
	let shadowDragonSagaCategory = document.getElementsByClassName("sds");
	
	dbSagaBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < dbSagaCategory.length; i ++){
			dbSagaCategory.item(i).style.display = "inline-block";
		}
	});
	
	planetNamekSagaBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < planetNamekSagaCategory.length; i ++){
			planetNamekSagaCategory.item(i).style.display = "inline-block";
		}
	});
	
	androidsCellSagaBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < androidsCellSagaCategory.length; i ++){
			androidsCellSagaCategory.item(i).style.display = "inline-block";
		}
	});
	
	majinBuuSagaBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < majinBuuSagaCategory.length; i ++){
			majinBuuSagaCategory.item(i).style.display = "inline-block";
		}
	});
	
	futureSagaBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < futureSagaCategory.length; i ++){
			futureSagaCategory.item(i).style.display = "inline-block";
		}
	});
	
	universeSurvivalSagaBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < universeSurvivalSagaCategory.length; i ++){
			universeSurvivalSagaCategory.item(i).style.display = "inline-block";
		}
	});
	
	shadowDragonSagaBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < shadowDragonSagaCategory.length; i ++){
			shadowDragonSagaCategory.item(i).style.display = "inline-block";
		}
	});
	
	let PureSaiyansBtn = document.getElementById("ps");
	let PureSaiyansCategory = document.getElementsByClassName("ps");
	
	let hybridSaiyansBtn = document.getElementById("hs");
	let hybridSaiyansCategory = document.getElementsByClassName("hs");
	
	let earthlingsBtn = document.getElementById("e");
	let earthlingsCategory = document.getElementsByClassName("e");
	
	let namekiansBtn = document.getElementById("n");
	let namekiansCategory = document.getElementsByClassName("n");
	
	let androidsBtn = document.getElementById("a");
	let androidsCategory = document.getElementsByClassName("a");
	
	let artificialLifeFormsBtn = document.getElementById("alf");
	let artificialLifeFormsCategory = document.getElementsByClassName("alf");
	
	let gokusFamilyBtn = document.getElementById("gfa");
	let gokusFamilyCategory = document.getElementsByClassName("gfa");
	
	let vegetasFamilyBtn = document.getElementById("vf");
	let vegetasFamilyCategory = document.getElementsByClassName("vf");
	
	let wickedBloodlineBtn = document.getElementById("wb");
	let wickedBloodlineCategory = document.getElementsByClassName("wb");
	
	let youthBtn = document.getElementById("y");
	let youthCategory = document.getElementsByClassName("y");
	
	let peppyGalsBtn = document.getElementById("pg");
	let peppyGalsCategory = document.getElementsByClassName("pg");
	
	PureSaiyansBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < PureSaiyansCategory.length; i ++){
			PureSaiyansCategory.item(i).style.display = "inline-block";
		}
	});
	
	hybridSaiyansBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < hybridSaiyansCategory.length; i ++){
			hybridSaiyansCategory.item(i).style.display = "inline-block";
		}
	});
	
	earthlingsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < earthlingsCategory.length; i ++){
			earthlingsCategory.item(i).style.display = "inline-block";
		}
	});
	
	namekiansBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < namekiansCategory.length; i ++){
			namekiansCategory.item(i).style.display = "inline-block";
		}
	});
	
	androidsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < androidsCategory.length; i ++){
			androidsCategory.item(i).style.display = "inline-block";
		}
	});
	
	artificialLifeFormsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < artificialLifeFormsCategory.length; i ++){
			artificialLifeFormsCategory.item(i).style.display = "inline-block";
		}
	});
	
	gokusFamilyBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < gokusFamilyCategory.length; i ++){
			gokusFamilyCategory.item(i).style.display = "inline-block";
		}
	});
	
	vegetasFamilyBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < vegetasFamilyCategory.length; i ++){
			vegetasFamilyCategory.item(i).style.display = "inline-block";
		}
	});
	
	wickedBloodlineBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < wickedBloodlineCategory.length; i ++){
			wickedBloodlineCategory.item(i).style.display = "inline-block";
		}
	});
	
	youthBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < youthCategory.length; i ++){
			youthCategory.item(i).style.display = "inline-block";
		}
	});
	
	peppyGalsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < peppyGalsCategory.length; i ++){
			peppyGalsCategory.item(i).style.display = "inline-block";
		}
	});
	
	let superSaiyansBtn = document.getElementById("ss");
	let superSaiyansCategory = document.getElementsByClassName("ss");
	
	let superSaiyan2Btn = document.getElementById("ss2");
	let superSaiyan2Category = document.getElementsByClassName("ss2");
	
	let superSaiyan3Btn = document.getElementById("ss3");
	let superSaiyan3Category = document.getElementsByClassName("ss3");
	
	let fusionBtn = document.getElementById("f");
	let fusionCategory = document.getElementsByClassName("f");
	
	let potaraBtn = document.getElementById("p");
	let potaraCategory = document.getElementsByClassName("p");
	
	let giantFormBtn = document.getElementById("gfo");
	let giantFormCategory = document.getElementsByClassName("gfo");
	
	let transformationBoostBtn = document.getElementById("tbo");
	let transformationBoostCategory = document.getElementsByClassName("tbo");
	
	let powerAbsorptionBtn = document.getElementById("pa");
	let powerAbsorptionCategory = document.getElementsByClassName("pa");
	
	let kamehamehaBtn = document.getElementById("k");
	let kamehamehaCategory = document.getElementsByClassName("k");
	
	superSaiyansBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < superSaiyansCategory.length; i ++){
			superSaiyansCategory.item(i).style.display = "inline-block";
		}
	});
	
	superSaiyan2Btn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < superSaiyan2Category.length; i ++){
			superSaiyan2Category.item(i).style.display = "inline-block";
		}
	});
	
	superSaiyan3Btn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < superSaiyan3Category.length; i ++){
			superSaiyan3Category.item(i).style.display = "inline-block";
		}
	});
	
	fusionBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < fusionCategory.length; i ++){
			fusionCategory.item(i).style.display = "inline-block";
		}
	});
	
	potaraBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < potaraCategory.length; i ++){
			potaraCategory.item(i).style.display = "inline-block";
		}
	});
	
	giantFormBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < giantFormCategory.length; i ++){
			giantFormCategory.item(i).style.display = "inline-block";
		}
	});
	
	transformationBoostBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < transformationBoostCategory.length; i ++){
			transformationBoostCategory.item(i).style.display = "inline-block";
		}
	});
	
	powerAbsorptionBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < powerAbsorptionCategory.length; i ++){
			powerAbsorptionCategory.item(i).style.display = "inline-block";
		}
	});
	
	kamehamehaBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < kamehamehaCategory.length; i ++){
			kamehamehaCategory.item(i).style.display = "inline-block";
		}
	});
	
	let realmOfGodsBtn = document.getElementById("rog");
	let realmOfGodsCategory = document.getElementsByClassName("rog");
	
	let fullPowerBtn = document.getElementById("fp");
	let fullPowerCategory = document.getElementsByClassName("fp");
	
	let giantApePowerBtn = document.getElementById("gap");
	let giantApePowerCategory = document.getElementsByClassName("gap");
	
	let majinPowerBtn = document.getElementById("mp");
	let majinPowerCategory = document.getElementsByClassName("mp");
	
	let powerfulComebackBtn = document.getElementById("pc");
	let powerfulComebackCategory = document.getElementsByClassName("pc");
	
	let miraculousAwakeningBtn = document.getElementById("ma");
	let miraculousAwakeningCategory = document.getElementsByClassName("ma");
	
	let corrodedBodyAndMindBtn = document.getElementById("cbam");
	let corrodedBodyAndMindCategory = document.getElementsByClassName("cbam");
	
	let rapidGrowthBtn = document.getElementById("rg");
	let rapidGrowthCategory = document.getElementsByClassName("rg");
	
	let masteredEvolutionBtn = document.getElementById("me");
	let masteredEvolutionCategory = document.getElementsByClassName("me");
	
	let timeLimitBtn = document.getElementById("tl");
	let timeLimitCategory = document.getElementsByClassName("tl");
	
	let finalTrumpCardBtn = document.getElementById("ftc");
	let finalTrumpCardCategory = document.getElementsByClassName("ftc");
	
	realmOfGodsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < realmOfGodsCategory.length; i ++){
			realmOfGodsCategory.item(i).style.display = "inline-block";
		}
	});
	
	fullPowerBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < fullPowerCategory.length; i ++){
			fullPowerCategory.item(i).style.display = "inline-block";
		}
	});
	
	giantApePowerBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < giantApePowerCategory.length; i ++){
			giantApePowerCategory.item(i).style.display = "inline-block";
		}
	});
	
	majinPowerBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < majinPowerCategory.length; i ++){
			majinPowerCategory.item(i).style.display = "inline-block";
		}
	});
	
	powerfulComebackBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < powerfulComebackCategory.length; i ++){
			powerfulComebackCategory.item(i).style.display = "inline-block";
		}
	});
	
	miraculousAwakeningBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < miraculousAwakeningCategory.length; i ++){
			miraculousAwakeningCategory.item(i).style.display = "inline-block";
		}
	});
	
	corrodedBodyAndMindBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < corrodedBodyAndMindCategory.length; i ++){
			corrodedBodyAndMindCategory.item(i).style.display = "inline-block";
		}
	});
	
	rapidGrowthBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < rapidGrowthCategory.length; i ++){
			rapidGrowthCategory.item(i).style.display = "inline-block";
		}
	});
	
	masteredEvolutionBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < masteredEvolutionCategory.length; i ++){
			masteredEvolutionCategory.item(i).style.display = "inline-block";
		}
	});
	
	timeLimitBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < timeLimitCategory.length; i ++){
			timeLimitCategory.item(i).style.display = "inline-block";
		}
	});
	
	finalTrumpCardBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < finalTrumpCardCategory.length; i ++){
			finalTrumpCardCategory.item(i).style.display = "inline-block";
		}
	});
	
	let worthyRivalsBtn = document.getElementById("wr");
	let worthyRivalsCategory = document.getElementsByClassName("wr");
	
	let swornEnemiesBtn = document.getElementById("se");
	let swornEnemiesCategory = document.getElementsByClassName("se");
	
	let joinedForcesBtn = document.getElementById("jf");
	let joinedForcesCategory = document.getElementsByClassName("jf");
	
	let siblingsBondBtn = document.getElementById("sb");
	let siblingsBondCategory = document.getElementsByClassName("sb");
	
	let bondOfFriendshipBtn = document.getElementById("bof");
	let bondOfFriendshipCategory = document.getElementsByClassName("bof");
	
	let bondOfMasterAndDiscipleBtn = document.getElementById("bomad");
	let bondOfMasterAndDiscipleCategory = document.getElementsByClassName("bomad");
	
	worthyRivalsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < worthyRivalsCategory.length; i ++){
			worthyRivalsCategory.item(i).style.display = "inline-block";
		}
	});
	
	swornEnemiesBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < swornEnemiesCategory.length; i ++){
			swornEnemiesCategory.item(i).style.display = "inline-block";
		}
	});
	
	joinedForcesBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < joinedForcesCategory.length; i ++){
			joinedForcesCategory.item(i).style.display = "inline-block";
		}
	});
	
	siblingsBondBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < siblingsBondCategory.length; i ++){
			siblingsBondCategory.item(i).style.display = "inline-block";
		}
	});
	
	bondOfFriendshipBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < bondOfFriendshipCategory.length; i ++){
			bondOfFriendshipCategory.item(i).style.display = "inline-block";
		}
	});
	
	bondOfMasterAndDiscipleBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < bondOfMasterAndDiscipleCategory.length; i ++){
			bondOfMasterAndDiscipleCategory.item(i).style.display = "inline-block";
		}
	});
	
	let ginyuForceBtn = document.getElementById("gf");
	let ginyuForceCategory = document.getElementsByClassName("gf");
	
	let teamBardockBtn = document.getElementById("tba");
	let teamBardockCategory = document.getElementsByClassName("tba");
	
	let universe6Btn = document.getElementById("u6");
	let universe6Category = document.getElementsByClassName("u6");
	
	let representativesOfUniverse7Btn = document.getElementById("rou7");
	let representativesOfUniverse7Category = document.getElementsByClassName("rou7");
	
	let universe11Btn = document.getElementById("u11");
	let universe11Category = document.getElementsByClassName("u11");
	
	let gtHeroesBtn = document.getElementById("gh");
	let gtHeroesCategory = document.getElementsByClassName("gh");
	
	let gtBossesBtn = document.getElementById("gb");
	let gtBossesCategory = document.getElementsByClassName("gb");
	
	let movieHeroesBtn = document.getElementById("mh");
	let movieHeroesCategory = document.getElementsByClassName("mh");
	
	let movieBossesBtn = document.getElementById("mb");
	let movieBossesCategory = document.getElementsByClassName("mb");
	
	let turtleSchoolBtn = document.getElementById("ts");
	let turtleSchoolCategory = document.getElementsByClassName("ts");
	
	let worldTournamentBtn = document.getElementById("wt");
	let worldTournamentCategory = document.getElementsByClassName("wt");
	
	ginyuForceBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < ginyuForceCategory.length; i ++){
			ginyuForceCategory.item(i).style.display = "inline-block";
		}
	});
	
	teamBardockBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < teamBardockCategory.length; i ++){
			teamBardockCategory.item(i).style.display = "inline-block";
		}
	});
	
	universe6Btn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < universe6Category.length; i ++){
			universe6Category.item(i).style.display = "inline-block";
		}
	});
	
	representativesOfUniverse7Btn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < representativesOfUniverse7Category.length; i ++){
			representativesOfUniverse7Category.item(i).style.display = "inline-block";
		}
	});
	
	universe11Btn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < universe11Category.length; i ++){
			universe11Category.item(i).style.display = "inline-block";
		}
	});
	
	gtHeroesBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < gtHeroesCategory.length; i ++){
			gtHeroesCategory.item(i).style.display = "inline-block";
		}
	});
	
	gtBossesBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < gtBossesCategory.length; i ++){
			gtBossesCategory.item(i).style.display = "inline-block";
		}
	});
	
	movieHeroesBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < movieHeroesCategory.length; i ++){
			movieHeroesCategory.item(i).style.display = "inline-block";
		}
	});
	
	movieBossesBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < movieBossesCategory.length; i ++){
			movieBossesCategory.item(i).style.display = "inline-block";
		}
	});
	
	turtleSchoolBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < turtleSchoolCategory.length; i ++){
			turtleSchoolCategory.item(i).style.display = "inline-block";
		}
	});
	
	worldTournamentBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < worldTournamentCategory.length; i ++){
			worldTournamentCategory.item(i).style.display = "inline-block";
		}
	});
	
	let lowClassWarriorBtn = document.getElementById("lcw");
	let lowClassWarriorCategory = document.getElementsByClassName("lcw");
	
	let giftedWarriorsBtn = document.getElementById("gw");
	let giftedWarriorsCategory = document.getElementsByClassName("gw");
	
	let otherworldWarriorsBtn = document.getElementById("ow");
	let otherworldWarriorsCategory = document.getElementsByClassName("ow");
	
	let resurrectedWarriorsBtn = document.getElementById("rw");
	let resurrectedWarriorsCategory = document.getElementsByClassName("rw");
	
	let spaceTravelingWarriorsBtn = document.getElementById("stw");
	let spaceTravelingWarriorsCategory = document.getElementsByClassName("stw");
	
	let timeTravelersBtn = document.getElementById("tt");
	let timeTravelersCategory = document.getElementsByClassName("tt");
	
	let dragonBallSeekersBtn = document.getElementById("dbs");
	let dragonBallSeekersCategory = document.getElementsByClassName("dbs");
	
	let storiedFiguresBtn = document.getElementById("sf");
	let storiedFiguresCategory = document.getElementsByClassName("sf");
	
	let legendaryExistenceBtn = document.getElementById("le");
	let legendaryExistenceCategory = document.getElementsByClassName("le");
	
	let SaviorsBtn = document.getElementById("s");
	let SaviorsCategory = document.getElementsByClassName("s");
	
	let defendersOfJusticeBtn = document.getElementById("doj");
	let defendersOfJusticeCategory = document.getElementsByClassName("doj");
	
	lowClassWarriorBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < lowClassWarriorCategory.length; i ++){
			lowClassWarriorCategory.item(i).style.display = "inline-block";
		}
	});
	
	giftedWarriorsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < giftedWarriorsCategory.length; i ++){
			giftedWarriorsCategory.item(i).style.display = "inline-block";
		}
	});
	
	otherworldWarriorsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < otherworldWarriorsCategory.length; i ++){
			otherworldWarriorsCategory.item(i).style.display = "inline-block";
		}
	});
	
	resurrectedWarriorsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < resurrectedWarriorsCategory.length; i ++){
			resurrectedWarriorsCategory.item(i).style.display = "inline-block";
		}
	});
	
	spaceTravelingWarriorsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < spaceTravelingWarriorsCategory.length; i ++){
			spaceTravelingWarriorsCategory.item(i).style.display = "inline-block";
		}
	});
	
	timeTravelersBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < timeTravelersCategory.length; i ++){
			timeTravelersCategory.item(i).style.display = "inline-block";
		}
	});
	
	dragonBallSeekersBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < dragonBallSeekersCategory.length; i ++){
			dragonBallSeekersCategory.item(i).style.display = "inline-block";
		}
	});
	
	storiedFiguresBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < storiedFiguresCategory.length; i ++){
			storiedFiguresCategory.item(i).style.display = "inline-block";
		}
	});
	
	legendaryExistenceBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < legendaryExistenceCategory.length; i ++){
			legendaryExistenceCategory.item(i).style.display = "inline-block";
		}
	});
	
	SaviorsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < SaviorsCategory.length; i ++){
			SaviorsCategory.item(i).style.display = "inline-block";
		}
	});
	
	defendersOfJusticeBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < defendersOfJusticeCategory.length; i ++){
			defendersOfJusticeCategory.item(i).style.display = "inline-block";
		}
	});
	
	let revengeBtn = document.getElementById("r");
	let revengeCategory = document.getElementsByClassName("r");
	
	let targetGokuBtn = document.getElementById("tg");
	let targetGokuCategory = document.getElementsByClassName("tg");
	
	let terrifyingConquerorsBtn = document.getElementById("tc");
	let terrifyingConquerorsCategory = document.getElementsByClassName("tc");
	
	let inhumanDeedsBtn = document.getElementById("ide");
	let inhumanDeedsCategory = document.getElementsByClassName("ide");
	
	let planetaryDestructionBtn = document.getElementById("pd");
	let planetaryDestructionCategory = document.getElementsByClassName("pd");
	
	let explodingRageBtn = document.getElementById("er");
	let explodingRageCategory = document.getElementsByClassName("er");
	
	let connectedHopeBtn = document.getElementById("ch");
	let connectedHopeCategory = document.getElementsByClassName("ch");
	
	let entrustedWillBtn = document.getElementById("ew");
	let entrustedWillCategory = document.getElementsByClassName("ew");
	
	let allOutStruggleBtn = document.getElementById("aos");
	let allOutStruggleCategory = document.getElementsByClassName("aos");
	
	let battleOfWitsBtn = document.getElementById("bow");
	let battleOfWitsCategory = document.getElementsByClassName("bow");
	
	let acceleratedBattleBtn = document.getElementById("ab");
	let acceleratedBattleCategory = document.getElementsByClassName("ab");
	
	let heavenlyEventsBtn = document.getElementById("he");
	let heavenlyEventsCategory = document.getElementsByClassName("he");
	
	let specialPoseBtn = document.getElementById("sp");
	let specialPoseCategory = document.getElementsByClassName("sp");
	
	let worldwideChaosBtn = document.getElementById("wc");
	let worldwideChaosCategory = document.getElementsByClassName("wc");
	
	revengeBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < revengeCategory.length; i ++){
			revengeCategory.item(i).style.display = "inline-block";
		}
	});
	
	targetGokuBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < targetGokuCategory.length; i ++){
			targetGokuCategory.item(i).style.display = "inline-block";
		}
	});
	
	terrifyingConquerorsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < terrifyingConquerorsCategory.length; i ++){
			terrifyingConquerorsCategory.item(i).style.display = "inline-block";
		}
	});
	
	inhumanDeedsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < inhumanDeedsCategory.length; i ++){
			inhumanDeedsCategory.item(i).style.display = "inline-block";
		}
	});
	
	planetaryDestructionBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < planetaryDestructionCategory.length; i ++){
			planetaryDestructionCategory.item(i).style.display = "inline-block";
		}
	});
	
	explodingRageBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < explodingRageCategory.length; i ++){
			explodingRageCategory.item(i).style.display = "inline-block";
		}
	});
	
	connectedHopeBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < connectedHopeCategory.length; i ++){
			connectedHopeCategory.item(i).style.display = "inline-block";
		}
	});
	
	entrustedWillBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < entrustedWillCategory.length; i ++){
			entrustedWillCategory.item(i).style.display = "inline-block";
		}
	});
	
	allOutStruggleBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < allOutStruggleCategory.length; i ++){
			allOutStruggleCategory.item(i).style.display = "inline-block";
		}
	});
	
	battleOfWitsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < battleOfWitsCategory.length; i ++){
			battleOfWitsCategory.item(i).style.display = "inline-block";
		}
	});
	
	acceleratedBattleBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < acceleratedBattleCategory.length; i ++){
			acceleratedBattleCategory.item(i).style.display = "inline-block";
		}
	});
	
	heavenlyEventsBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < heavenlyEventsCategory.length; i ++){
			heavenlyEventsCategory.item(i).style.display = "inline-block";
		}
	});
	
	specialPoseBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < specialPoseCategory.length; i ++){
			specialPoseCategory.item(i).style.display = "inline-block";
		}
	});
	
	worldwideChaosBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < worldwideChaosCategory.length; i ++){
			worldwideChaosCategory.item(i).style.display = "inline-block";
		}
	});
	
	let crossoverBtn = document.getElementById("c");
	let crossoverCategory = document.getElementsByClassName("c");
	
	let dragonBallHeroesBtn = document.getElementById("dbh");
	let dragonBallHeroesCategory = document.getElementsByClassName("dbh");
	
	crossoverBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < crossoverCategory.length; i ++){
			crossoverCategory.item(i).style.display = "inline-block";
		}
	});
	
	dragonBallHeroesBtn.addEventListener("click" , function(){
		for(let i = 0; i < categories.length; i ++){
			categories.item(i).style.display = "none";
		}
		
		for(let i = 0; i < dragonBallHeroesCategory.length; i ++){
			dragonBallHeroesCategory.item(i).style.display = "inline-block";
		}
	});
}