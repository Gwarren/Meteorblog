
Template.home.helpers ({
	postsList: function(){ 
		return Posts.find({}, {sort: {timeCreated: -1}});
	}, 
	sessionExample: function() {
		return Session.get('mySessionExample');
	}
});
Template.home.events ({
	'click button.lazyload':function(e, tpl){ 
	var currentLimit = Session.get('lazyloadLimit'); 
	Session.set('lazyloadLimit', currentLimit + 2);
	}
});