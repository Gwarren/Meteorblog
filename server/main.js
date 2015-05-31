Meteor.startup(function(){
	if(Meteor.users.find().count() === 0){
		console.log("Created Admin user");
		var userId = Accounts.createUser({
			username:'grant', 
			email:'grant@example.com', 
			password: '1234', 
			profile: {
				name:"Grant Warren"
			}
		});
		Meteor.users.update(userId, {$set: {
			roles: {admin: true},
		}})
	}

	//#Storing data -> Adding post examples
	if(Posts.find().count() === 0){

		console.log('Adding dummy posts'); 
		var dummyPosts = [
			{
				title: 'My First entry', 
				slug: 'my-first-entry', 
				description: 'This is my first entry', 
				text: 'My first entry is super cool.', 
				timeCreated: moment().subtract(7, 'days').unix(), 
				author:"Grant Warren" 
			},
			{
				title: 'My Second entry', 
				slug: 'my-second-entry', 
				description: 'This is my Second entry', 
				text: 'My second entry is even cooler.', 
				timeCreated: moment().subtract(5, 'days').unix(), 
				author:"Grant Warren"
			},
			{ 
				title: 'My Third entry', 
				slug: 'my-second-entry', 
				description: 'This is my third entry', 
				text: 'My third entry sucks.', 
				timeCreated: moment().subtract(3, 'days').unix(), 
				author:"Grant Warren"
			},
			{
				title: 'My Fourth entry', 
				slug: 'my-fourth-entry', 
				description: 'This is my Fourth entry', 
				text: 'My fourth entry is even more lame.', 
				timeCreated: moment().subtract(2, 'days').unix(), 
				author:"Grant Warren"
			},
			{
				title: 'My Fifth entry', 
				slug: 'my-fifth-entry', 
				description: 'This is my Fifth entry', 
				text: 'My fifth entry is boring.', 
				timeCreated: moment().subtract(1, 'days').unix(), 
				author:"Grant Warren"
			}
		];
		_.each(dummyPosts, function(post){
			Posts.insert(post);
		
		});
	}
});