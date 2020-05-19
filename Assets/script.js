$("#currentDay").text(moment().format("dddd, MMMM Do"));
var alltextarea = $("textarea");

for (var i = 0; i < alltextarea.length; i++) {
	var ElDvHour = parseInt(alltextarea[i].getAttribute("data-value"));
	var currentHour = parseInt(moment().format("HH"));
	// If the time of my textarea is prior to current time make gray
	if (ElDvHour < currentHour) {
		$(alltextarea[i]).addClass("past");
	} else if (ElDvHour > currentHour) {
		$(alltextarea[i]).addClass("future");
	} else {
		$(alltextarea[i]).addClass("present");
	}
}
