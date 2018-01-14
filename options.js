

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
			cuisine:"italian"
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
					if (curr.cuisine === logistics.cuisine || logistics.cuisine === "dont care") {
						//console.log("cuisine matched")

						// check number of people matches
						if (curr.numP == logistics.numP) {
							// we have passed all checks - we have a match
							matches.push(otherUsers[i]);
							//console.log(matches)
						}
					}
				}
			}
		}
		console.log(matches.length)
		if (matches.length == 0) {
			alert("No matches found, try different parameters");
			document.querySelector(".options").style.display = "block";
		} else {
			//console.log("check")

			if (logistics.numP == 1) {
				console.log("check")

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
		console.log("getting in buildcards");
		getLogistics();
		// hide options view
		document.querySelector(".options").style.display = "none";
		// display card view
		var cardView = document.querySelector(".cards");
		cardView.style.display = "block";
		// create/populate cards
		var matches = match();
		console.log("below are matches")
		console.log(matches)

		for (var i = 0; i < matches.length; i++) {
			var attr = matches[i].attr;
			console.log("-----below")
			console.log(matches[i])
			var card = document.createElement("div");
			card.classList.add("card");
			// add image
			var img = document.createElement("img");
			console.log(attr)
			img.src = attr.img;
			img.classList.add("profile-pic");
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
		return matches[Math.random(matches.length)];
	}
	
	/**
	 * Populates the logistics of the user profile
	 */
	function getLogistics() {
		// TODO: actuallly retrieve value correctly
		logistics.dist = document.querySelector("#selectDistance").value;
		logistics.numP = document.querySelector("#selectPeople").value;
		logistics.time = document.querySelector("#selectTime").value;
		logistics.cusine = document.querySelector("#selectCuisine").value;
	}
	
	/**
	 * populates logistics with hardcoded users
	 */
	function genUsers() {
		var user1 = {
			attr: {age: 35, interests:"Mtn", firstName:"Fox", lastName:"Hancock", img:"img/fox.jpg"}, 
			logistics: {time: 30, location:0, distance:1, cuisine: "italian", numP:2}
		};

		var userx = {
			attr: {age: 35, interests:"Mtn", firstName:"IceClimbers", lastName:"Hancock", img:"img/iceclimbers.jpg"}, 
			logistics: {time: 30, location:0, distance:1, cuisine: "italian", numP:2}
		};

		var user2 = {
			attr: {age: 25, interests:"To be or not to be", firstName:"Mario", lastName:"Hancock", img:"image2.jpg"}, 
			logistics: {time: 45, location:0, distance:1, cuisine: "", numP:1}
		};
		
		var user3 = {
			attr: {age: 15, interests:"Bike", firstName:"Luigi", lastName:"Hancock", img:"image.jpg"}, 
			logistics: {time:30, location:0, distance:1, cuisine: "", numP:1}
		};
		
		var user4 = {
			attr: {age: 5, interests:"Redbull", firstName:"Peach", lastName:"Hancock", img:"image.jpg"}, 
			logistics: {time:20, location:0, distance:1, cuisine: "", numP:1}
		};
		
		var user5 = {
			attr: {age: -5, interests:"To be or not to be", firstName:"Fox", lastName:"Hancock", img:"image.jpg"}, 
			logistics: {time:120, location:0, distance:1, cuisine: "", numP:1}
		};			

		return [user1, userx, user2, user3, user4, user5];
	};

})();



