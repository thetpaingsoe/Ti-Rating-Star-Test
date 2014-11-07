function doClick(e) {
    alert($.label.text);
}

var doRating = function(rating){
	
	alert("Rating : "+ rating);
	
	$.starwidget.setRating(rating);
	
};


var showRating = function() {
	
	// get the current rating:
	var rating = $.starwidget.getRating();
	
	alert(" Rating Star : " + rating);
	
};

$.index.addEventListener('open', function(){
	
	$.starwidget.init(doRating); 
	
	// start another star rating widget
	$.starwidget2.init(doRating);
	
	// make vertical star rating 
	$.starwidget3.init(doRating);
	$.starwidget3.makeVertical();
});

$.index.open();
