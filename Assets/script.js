// Render Current Time on Page Header
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// Select all the Text Area Elements
var alltextarea = $("textarea");
// For every textarea element
for (var i = 0; i < alltextarea.length; i++) {
	// Get the Data-Value's value
	var ElDvHour = parseInt($(alltextarea[i]).attr("data-value"));
	//  Vanilla JS: var ElDvHour = parseInt(alltextarea[i].getAttribute("data-value"));
	var currentHour = parseInt(moment().format("HH"));
	// Color TextArea based on past, present or future CSS file class
	if (ElDvHour < currentHour) {
		$(alltextarea[i]).addClass("past");
	} else if (ElDvHour > currentHour) {
		$(alltextarea[i]).addClass("future");
	} else {
		$(alltextarea[i]).addClass("present");
	}
}
// Add onclick event to every button on the page
$(document).ready(function () {
	$("button").click(function () {
		storeTxtArea();
	});
	// Store All the Text Area Values in Local Storage
	function storeTxtArea() {
		for (let i = 0; i < alltextarea.length; i++) {
			localStorage.setItem(
				$(alltextarea[i]).attr("id"),
				// Vanilla JS: alltextarea[i].getAttribute("id"),
				$(alltextarea[i]).val()
				// Vanilla JS: alltextarea[i].value
			);
		}
	}
	renderTxtArea();
	// Render to the page All the Stored Text Area Values
	function renderTxtArea() {
		for (let i = 0; i < alltextarea.length; i++) {
			storedItem = localStorage.getItem($(alltextarea[i]).attr("id"));
			$(alltextarea[i]).val(storedItem);
		}
	}
});
