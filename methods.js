Meteor.methods({
	insertPost: function(postDocument){
		if(this.isSimulation){
			Session.set('saveButton', 'Saving...'); 
		}else
		{
			var user= Meteor.user(); 
			if(!user)
				throw new Meteor.Error(402, "Gotta be logged in chief");
			if(Posts.findOne({slug: postDocument.slug}))
				postDocument.timeCreated = moment.unix(); 
				postDocument.author      = user.profile.name; 
				postDocument.owner       = user._id; 

				Posts.insert(postDocument);

				//This is the 2nd argument of the callback 
				return postDocument.slug; 
		}
	}
});