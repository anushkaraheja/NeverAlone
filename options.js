/**
 * Represents the user profile
 */
var myProfile = {
	attr:{
		img:"image.jpg",
		firstName:"Matthew",
		lastName:"Karami",
		age:	20,
		interests:"interests"
	},
	logistics:{
			maxDistance:5,
			distance:0,
			numPeople:3,
			time:30,
			cusine:"italian"
	}
}

(function() {
	window.onload = function() {
		document.getElementByID("submit").onclick = buildCards;
	};

	/**
	 * matches up users, based upon a common attribute
	 */
	function match() {
		var otherUsers = genUsers();
		// match
		var myProfile = myProfile.logistics;
		var matches = [];
		for (var i = 0; i < otherUsers.length; i++) {
			var curr = otherUsers[i];
			// check distance matches
			if (curr.distance < myProfile.maxDistance) {
				// check time matches
				if (curr.time >= (myProfile.time + 10) || curr.time <= (myProfile.time - 10)) {
					// check cusine matches
					if (curr.cuisine.equals(myProfile.cuisine) || myProfile.cuisine.equals("dont care")) {
						// check number of people matches
						if (curr.numP == myProfile.numP) {
							// we have passed all checks - we have a match
							matches.put(otherUsers[i]);
						}
					}
				}
			}
		}
		if (matches.length == 0) {
			alert("No matches found, try different parameters");
		} else {
			if (myProfile.numP == 1) {
				return [getRandMatch(matches)];
			} else if (myProfile.numP == 2) {
				if (matches.length > 5) {
					// choose five random matches
					var result = new Set();
					while (result.length < 5) {
						result.add(getRandMatch(matches));
					}
					return result;
				} else {
					// we already have 2-5 matches made
					return matches;
				}
			} else if (muProfile.numP == 3){
				return matches;
			}
		}
	}
	
	/**
	 * First gets logistics, then hides options view, displays card view
	 */
	function buildCards() {
		getLogistics();
		// hide options view
		document.getElementById("options").style.display = "none";
		// display card view
		var cardView = document.getElementById("cards");
		cardView.style.display = "block";
		// create/populate cards
		var matches = match();
		for (var i = 0; i < matches.length; i++) {
			var attr = matches[i].attr;
			var card = document.createElement("div");
			card.classList.add("card");
			// add image
			var img = document.createElement("img");
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
		var logistics = myProfile.logistics;
		logistics.dist = document.getElementByID("distance").value;
		logistics.numP = document.getElementByID("num-people").value;
		logistics.time = document.getElementByID("time").value;
		logistics.cusine = document.getElementByID("cusine").value;
	}
	
	/**
	 * populates logistics with hardcoded users
	 */
	function genUsers() {
		var user1 = {
			attr: {age: 35, interests:"Mtn", firstName:"John", lastName:"Hancock", img:"image.jpg"}, 
			logistics: {time: 30, location:0, distance:1, cuisine: "", numP:1}
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

		return [user1, user2, user3, user4, user5];
	};

})();