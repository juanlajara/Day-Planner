$("#currentDay").text(moment().format("dddd, MMMM Do"));

var alltextarea = $("textarea");

for (var i = 0; i < alltextarea.length; i++) {
	var ElDvHour = parseInt($(alltextarea[i]).attr("data-value"));
	// 	var ElDvHour = parseInt(alltextarea[i].getAttribute("data-value"));
	var currentHour = parseInt(moment().format("HH"));
	// Color TextArea based on past,present or future
	if (ElDvHour < currentHour) {
		$(alltextarea[i]).addClass("past");
	} else if (ElDvHour > currentHour) {
		$(alltextarea[i]).addClass("future");
	} else {
		$(alltextarea[i]).addClass("present");
	}
}

$(document).ready(function () {
	$("button").click(function () {
		storeTxtArea();
	});
});

function storeTxtArea() {
	for (let i = 0; i < alltextarea.length; i++) {
		localStorage.setItem(
			$(alltextarea[i]).attr("id"),
			// alltextarea[i].getAttribute("id"),
			$(alltextarea[i]).val()
			// alltextarea[i].value
		);
		// const element = alltextarea[time];
	}
	alltextarea;
	// If storedevent + each text area
}
