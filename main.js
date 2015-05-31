Accounts.config({
	forbidClientAccountCreation: true
});
if(Meteor.isClient){
	Meteor.subscribe("userRoles");
}