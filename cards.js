(function() {
	window.onload = function() {
		card();
	};

	function card() {
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

		var users = [user1, user2, user3, user4, user5];

		console.log(user1);					
	};

})();