	final_transcript = '';
	var recognizing = false;


	//Musical Notes
	var aNote = new buzz.sound('/sounds/68437__pinkyfinger__piano-a.wav');
	var asNote = new buzz.sound('/sounds/68439__pinkyfinger__piano-bb.wav');
	var bNote = new buzz.sound('/sounds/68438__pinkyfinger__piano-b.wav');
	var cNote = new buzz.sound('/sounds/68440__pinkyfinger__piano-c.wav');
	var csNote = new buzz.sound('/sounds/68438__pinkyfinger__piano-b.wav');
	var dNote = new buzz.sound('/sounds/68442__pinkyfinger__piano-d.wav');
	var dsNote = new buzz.sound('/sounds/68444__pinkyfinger__piano-eb.wav');
	var eNote = new buzz.sound('/sounds/68443__pinkyfinger__piano-e.wav');
	var fNote = new buzz.sound('/sounds/68445__pinkyfinger__piano-f.wav');
	var fsNote = new buzz.sound('/sounds/68446__pinkyfinger__piano-f.wav');
	var gNote = new buzz.sound('/sounds/68447__pinkyfinger__piano-g.wav');
	var gsNote = new buzz.sound('/sounds/68448__pinkyfinger__piano-g.wav');


	if ('webkitSpeechRecognition' in window) {
		console.log("webkit is available!");
		var recognition = new webkitSpeechRecognition();
	    recognition.continuous = true;
	    recognition.interimResults = true;
 
	    recognition.onstart = function() {
	      recognizing = true;
	    };
 
	    recognition.onerror = function(event) {
	      console.log(event.error);
	    };
 
	    recognition.onend = function() {
	      recognizing = false;
	    };
 
	    recognition.onresult = function(event) {
			myevent = event;
	      var interim_transcript = '';
	      for (var i = event.resultIndex; i < event.results.length; ++i) {
			  console.log("i="+i);

			//Stops the dictation if it sees the phrase "stop dictation"
			if(event.results[i][0].transcript.includes("stop dictation")){
			  	recognition.stop();
			}


			//Play Notes:
			if(event.results[i][0].transcript.includes("nine" | "9")){
			 	aNote.play();
			 	event.results[i][0].transcript = "x";
			
			}


			if(event.results[i][0].transcript.includes("cat")){
			 	asNote.play();
			 	event.results[i][0].transcript = "x";
			
			} 	
			 

			if(event.results[i][0].transcript.includes("dog")){
			 	bNote.play();
			 	event.results[i][0].transcript = "x";
			
			} 	
			 

			if(event.results[i][0].transcript.includes("zero" | "0")){
			 	cNote.play();
			 	event.results[i][0].transcript = "x";
			
			} 	

			if(event.results[i][0].transcript.includes("one" | "1" | "One")){
			 	csNote.play();
			 	event.results[i][0].transcript = "x";
			
			} 	
			
			if(event.results[i][0].transcript.includes("two" | "2" | "to" | "too")){
			 	dNote.play();
			 	event.results[i][0].transcript = "x";
			
			} 	

			if(event.results[i][0].transcript.includes("three" | "3")){
			 	dsNote.play();
			 	event.results[i][0].transcript = "x";
			} 

			if(event.results[i][0].transcript.includes("four" | "for" | "4")){
			 	eNote.play();
			 	event.results[i][0].transcript = "x";
			
			} 

			if(event.results[i][0].transcript.includes("five" | "5")){
			 	fNote.play();
			 	event.results[i][0].transcript = "x";
			
			} 

			if(event.results[i][0].transcript.includes("six" | "6" | "sex")){
			 	fsNote.play();
			 	event.results[i][0].transcript = "x";
			
			} 

			if(event.results[i][0].transcript.includes("seven" | "7")){
			 	gNote.play();
			 	event.results[i][0].transcript = "x";
			
			}

			if(event.results[i][0].transcript.includes("eight" | "8")){
			 	gsNote.play();
			 	event.results[i][0].transcript = "x";
			
			} 

			 
			

	        if (event.results[i].isFinal) {

	          final_transcript += 

	          event.results[i][0].transcript.trim() +".\n";
			  console.log('final events.results[i][0].transcript = '+ JSON.stringify(event.results[i][0].transcript));
	        } else {
	          interim_transcript += 
	 
	          event.results[i][0].transcript;
			  console.log('interim events.results[i][0].transcript = '+ JSON.stringify(event.results[i][0].transcript));

			 
			  
			  

	        }
	      }
	      //final_transcript = capitalize(final_transcript);
	      final_span.innerHTML = linebreak(final_transcript);
	      interim_span.innerHTML = linebreak(interim_transcript);
    	  
	    };
	}
	
 
	var two_line = /\n\n/g;
	var one_line = /\n/g;
	function linebreak(s) {
	  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
	}
 
	function capitalize(s) {
	  return s.replace(s.substr(0,1), function(m) { return m.toUpperCase(); });
	}
 
	function startDictation(event) {
	  if (recognizing) {
	    recognition.stop();
	    return;
	  }
	  final_transcript = '';
	  recognition.lang = 'en-US';
	  recognition.start();
	  final_span.innerHTML = '';
	  interim_span.innerHTML = '';
	}
	
  Template.tryme.events({
	
	'click #start_button': function(event){
		startDictation(event);
	},

 });
	
 