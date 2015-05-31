Posts = new Mongo.Collection('posts');
if(Meteor.isServer){ 
	//Allow rules
	Posts.allow({
		insert:function(userId, doc){ 
//User must be logged in and owner of doc
		return userId && doc.owner === userId && Meteor.user().roles.admin;
		}, 
		update: function(userId, docs, fields, modifier){ 
// User must be admin
			return Meteor.user.roles.admin
		},
		//Making sure we only get this field from the docs
		fetch: ['owner']
	});
}  
if(Meteor.isServer){ 
	//deny rules
	Posts.deny({
		//This function checks to see if fields contains a 
		//restricted field then denies the update
		update: function(userId, doc, fields, modifier){
			//Can't change owners, timeCreated or slug.
			return _.contains(fields, 'owner')
					||_.contains(fields, 'timeCreated')
					||_.contains(fields, 'slug');
		}
	});
}                            