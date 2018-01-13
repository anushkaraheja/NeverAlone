(function() {
	window.onload = function() {
		card();
	};

	function card() {
		var user1 = {
					firstName:"John" ,
					lastName:"Hancock" , 
					attr: {age: 35, interests:"Mtn"}, 
					logistics: {time: 30, distance:1, cuisine: "", numP:1}
					};

		var user2 = {
					firstName:"Mario" ,
					lastName:"Hancock" ,
					attr: {age: 25, interests:"To be or not to be"}, 
					logistics: {time: 45, distance:1, cuisine: "", numP:1}
					};
		
		var user3 = {
					firstName:"Luigi" ,
					lastName:"Hancock" ,
					attr: {age: 15, interests:"Bike"}, 
					logistics: {time:30, distance:1, cuisine: "", numP:1}
					};
		
		var user4 = {
					firstName:"Peach" ,
					lastName:"Hancock" ,
					attr: {age: 5, interests:"Redbull"}, 
					logistics: {time:20, distance:1, cuisine: "", numP:1}
					};
		
		var user5 = {
					firstName:"Fox" ,
					lastName:"Hancock" ,
					attr: {age: -5, interests:"To be or not to be"}, 
					logistics: {time:120, distance:1, cuisine: "", numP:1}
					};			

		console.log(user1);					
	};

})();