Template.instrument.helpers({
	instrumentFunction: function(){
		{
			return Instruments.find()
		} 
	}
})

Template.instrument.events({
	"submit #instrumentinput": function(event){

		event.preventDefault();

		var message = event.target.message.value;
		console.log(JSON.stringify(message));

		Instruments.insert({name: message, status: "Suggested"});	
		


	}

}
)