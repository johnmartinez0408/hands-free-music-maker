sorted = true;

Template.instrument.helpers({
	
	instrumentFunction: function(){
		{
			return Instruments.find()
		} 
	},

	instrumentSortedFunction:function(){
		{
			return Instruments.find({},{sort:{name:1}})
		} 
	},

	sorted: function(){
		return (sorted<=0);
	}
})

Template.instrument.events({
	"submit #instrumentinput": function(event){

		event.preventDefault();

		var message = event.target.message.value;
		console.log(JSON.stringify(message));

		Instruments.insert({name: message, status: "Suggested"});	
	},

	"click #sortname": function(event){
		if(sorted){
			sorted =false;
		}else{
			sorted =true;
		}
	}

}
)
