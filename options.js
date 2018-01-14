

(function() {
	/**
	 * Represents the user profile
	 */
	var attr = {
		img:"image.jpg",
		firstName:"Matthew",
		lastName:"Karami",
		age:20,
		interests:"interests"
	};
	var logistics = {
			maxDistance:5,
			distance:0,
			numP:2,
			time:30,
			cuisine:"indian"
	};
	window.onload = function() {
		document.querySelector("#submit").onclick = buildCards;
	};

	/**
	 * matches up users, based upon a common attribute
	 */
	function match() {
		var otherUsers = genUsers();
		// match
		//console.log(otherUsers);
		console.log(otherUsers.length);
		var matches = [];
		for (var i = 0; i < otherUsers.length; i++) {
			var curr = otherUsers[i].logistics;
			//onsole.log("cc")
			// check distance matches
			if (curr.distance <= logistics.maxDistance) {
				// check time matches
				//console.log("distance matched")
				if (curr.time <= (logistics.time + 10) && curr.time >= (logistics.time - 10)) {
					//console.log("time matched")
					// check cusine matches
					if (curr.cuisine === logistics.cuisine) {
						//console.log("cuisine matched")

						// check number of people matches
						if (curr.numP == logistics.numP) {
							// we have passed all checks - we have a match
							matches.push(otherUsers[i]);
							console.log(i);
						}
					}
				}
			}
		}
		//console.log(matches.length)
		if (matches.length == 0) {
			alert("No matches found, try different parameters");
			document.querySelector(".options").style.display = "block";
		} else {
			//console.log("check")

			if (logistics.numP == 1) {
				console.log("check")
				console.log(matches)
				return [getRandMatch(matches)];
			} else if (logistics.numP == 2) {
				//console.log("check")

				if (matches.length > 5) {
					// choose five random matches
					var result = new Set();
					while (result.length < 5) {
						result.add(getRandMatch(matches));
					}
					return result;
				} else {
					// we already have 2-5 matches made
					console.log("check")
					return matches;
				}
			} else if (logistics.numP == 3){
				return matches;
			}
		}
		return matches;
	}
	
	/**
	 * First gets logistics, then hides options view, displays card view
	 */
	function buildCards() {
		//console.log("getting in buildcards");
		getLogistics();
		// hide options view
		document.querySelector(".options").style.display = "none";
		document.querySelector("#congrats").style.display = "block"
		// display card view
		var cardView = document.querySelector(".cards");
		cardView.style.display = "block"; 
		// create/populate cards
		var matches = match();
		//console.log("below are matches")
		//console.log(matches)

		for (var i = 0; i < matches.length; i++) {
			var attr = matches[i].attr;
			//console.log("-----below")
			//console.log(matches[i])
			var card = document.createElement("div");
			card.classList.add("card");
			// add image
			var img = document.createElement("img");
			//console.log(attr)
			img.src = attr.img;
			img.classList.add("card-img-bottom");
			card.appendChild(img);
			// add firstName
			var name = document.createElement("h2");
			name.innerText = attr.firstName;
			name.classList.add("name");
			card.appendChild(name);
			// add interests
			var interests = document.createElement("p");
			interests.innerText = attr.interests;
			interests.classList.add("interests");
			card.appendChild(interests);

			cardView.appendChild(card);
		}
	}
	
	/**
	 * selects a random element from matches
	 * 
	 * @param matches
	 */
	function getRandMatch(matches) {
		return matches[Math.floor(Math.random() * matches.length)];
	}
	
	/**
	 * Populates the logistics of the user profile
	 */
	function getLogistics() {
		// TODO: actuallly retrieve value correctly
		logistics.dist = document.querySelector("#selectDistance").value;
		logistics.numP = document.querySelector("#selectPeople").value;
		logistics.time = document.querySelector("#selectTime").value;
		var selectCuisine = document.querySelector("#selectCuisine");
		logistics.cuisine = selectCuisine.options[selectCuisine.selectedIndex].value;
	}
	
	/**
	 * populates logistics with hardcoded users
	 */
	function genUsers() {
		var user1 = {
			attr: {age: 35, interests:"Mtn", firstName:"Fox", lastName:"Hancock", img:"img/fox.jpg"}, 
			logistics: {time: 30, location:0, distance:0, cuisine: "italian", numP:2}
		};

		var userx= {
			attr: {age: 35, interests:"Mtn", firstName:"Fox", lastName:"Hancock", img:"img/fox.jpg"}, 
			logistics: {time: 30, location:0, distance:0, cuisine: "italian", numP:2}
		};

		var user2 = {
			attr: {age: 35, interests:"Mtn", firstName:"IceClimbers", lastName:"Hancock", img:"img/iceclimbers.jpg"}, 
			logistics: {time: 30, location:0, distance:0, cuisine: "indian", numP:2}
		};

		var user3 = {
			attr: {age: 25, interests:"To be or not to be", firstName:"Mario", lastName:"Hancock", img:"img/mario.jpg"}, 
			logistics: {time: 30, location:0, distance:0, cuisine: "indian", numP:2}
		};
		
		var user4 = {
			attr: {age: 15, interests:"Bike", firstName:"Luigi", lastName:"Hancock", img:"img/luigi.jpg"}, 
			logistics: {time:60, location:0, distance:0, cuisine: "italian", numP:1}
		};
		
		var user5 = {
			attr: {age: 5, interests:"Redbull", firstName:"Peach", lastName:"Hancock", img:"img/marth.jpg"}, 
			logistics: {time:60, location:0, distance:0, cuisine: "thai", numP:1}
		};
				
		var user6 = {
			attr: {age: 35, interests:"Mtn", firstName:"Fox", lastName:"Hancock", img:"img/fox.jpg"}, 
			logistics: {time: 30, location:0, distance:0, cuisine: "chinese", numP:2}
		};

		var user7 = {
			attr: {age: 35, interests:"Mtn", firstName:"IceClimbers", lastName:"Hancock", img:"img/iceclimbers.jpg"}, 
			logistics: {time: 30, location:0, distance:0, cuisine: "korean", numP:2}
		};

		var user8 = {
			attr: {age: 25, interests:"To be or not to be", firstName:"Mario", lastName:"Hancock", img:"img/mario.jpg"}, 
			logistics: {time: 60, location:0, distance:0, cuisine: "korean", numP:3}
		};
		
		var user9 = {
			attr: {age: 15, interests:"Bike", firstName:"Luigi", lastName:"Hancock", img:"img/luigi.jpg"}, 
			logistics: {time:30, location:0, distance:0, cuisine: "chinese", numP:2}
		};
		
		var user10 = {
			attr: {age: 5, interests:"Redbull", firstName:"Peach", lastName:"Hancock", img:"img/marth.jpg"}, 
			logistics: {time:60, location:0, distance:0, cuisine: "chinese", numP:1}
		};

		var user11 = {
			attr: {age: 35, interests:"Mtn", firstName:"Fox", lastName:"Hancock", img:"img/fox.jpg"}, 
			logistics: {time: 30, location:0, distance:0, cuisine: "korean", numP:2}
		};

		var user12 = {
			attr: {age: 35, interests:"Mtn", firstName:"IceClimbers", lastName:"Hancock", img:"img/iceclimbers.jpg"}, 
			logistics: {time: 30, location:0, distance:0, cuisine: "thai", numP:2}
		};

		var user13 = {
			attr: {age: 25, interests:"To be or not to be", firstName:"Mario", lastName:"Hancock", img:"img/mario.jpg"}, 
			logistics: {time: 30, location:0, distance:0, cuisine: "indian", numP:1}
		};
		
		var user14 = {
			attr: {age: 15, interests:"Bike", firstName:"Luigi", lastName:"Hancock", img:"img/luigi.jpg"}, 
			logistics: {time:30, location:0, distance:0, cuisine: "indian", numP:1}
		};
		
		var user15 = {
			attr: {age: 5, interests:"Redbull", firstName:"Peach", lastName:"Hancock", img:"img/marth.jpg"}, 
			logistics: {time:30, location:0, distance:0, cuisine: "indian", numP:3}
		};

		return [user1, userx, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15];
	};

})();



