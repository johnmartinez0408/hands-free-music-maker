

Meteor.startup(function(){
	

	if (Instruments.find({}).count()==0){
		Instruments.insert({name: "Piano", status: "Being implemented"});
		Instruments.insert({name: "Guitar", status: "Planned"});
		Instruments.insert({name: "Flute", status: "Planned"});
		Instruments.insert({name: "Bass", status: "Planned"});
		Instruments.insert({name: "Violin", status: "Planned"});
	}
});
