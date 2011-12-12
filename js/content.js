var firstShift = 0;
var isDoubleShift = false;

window.addEventListener('keydown', function(e) {
	if (e.keyCode == 16 && firstShift != 0) {
		var date = new Date();
		var currentTime = (function() {
			var m = date.getMinutes();
			if (m < 10) m = '0' + m;
			var s = date.getSeconds();
			if (s < 10) s = '0' + s;
			var ms = date.getMilliseconds();
			if (ms < 10) ms = '0' + ms;
			if (ms < 100) ms = '0' + ms;
			return m + s + ms;
		})();
		if (currentTime - firstShift < 200) {
			isDoubleShift = true;
		} else {
			isDoubleShift = false;
		}
	}
	if (isDoubleShift)
		switch (e.keyCode) {
			case 37:
				chrome.extension.sendRequest({
					method: "getLeftChannel"
				}, function(response) {
					chrome.extension.sendRequest({
						method: "openURL",
						data: {channel: response}
					});
				});
				break;
			case 38:
				chrome.extension.sendRequest({
					method: "getUpChannel"
				}, function(response) {
					chrome.extension.sendRequest({
						method: "openURL",
						data: {channel: response}
					});
				});
				break;
			case 39:
				chrome.extension.sendRequest({
					method: "getRightChannel"
				}, function(response) {
					chrome.extension.sendRequest({
						method: "openURL",
						data: {channel: response}
					});
				});
				break;
			case 40:
				chrome.extension.sendRequest({
					method: "getDownChannel"
				}, function(response) {
					chrome.extension.sendRequest({
						method: "openURL",
						data: {channel: response}
					});
				});
				break;
		}
});
window.addEventListener('keyup', function(e) {
	if (e.keyCode == 16) {// Shift
		var date = new Date();
		var currentTime = (function() {
			var m = date.getMinutes();
			if (m < 10) m = '0' + m;
			var s = date.getSeconds();
			if (s < 10) s = '0' + s;
			var ms = date.getMilliseconds();
			if (ms < 10) ms = '0' + ms;
			if (ms < 100) ms = '0' + ms;
			return m + s + ms;
		})();
		firstShift = currentTime;
	}
	isDoubleShift = false;
});

//var isDoubleShift = false;
//window.addEventListener('keydown', function(e) {
//	if (isDoubleShift && !e.altKey && e.shiftKey && !e.ctrlKey && e.keyCode == 37) {
//		chrome.extension.sendRequest({
//			method: "openURL",
//			data: {channel: 'suttang'}
//		});
//		isDoubleShift = false;
//	}
//	if (e.keyCode == 16) {
//		if (!isDoubleShift)
//			isDoubleShift = true;
//	} else {
//		isDoubleShift = false;
//	}
//	/*
//	setTimeout(function() {
//		isDoubleShift = false;
//		console.log("timeout");
//	}, 300);
//	*/
//	/*
//// 37, 38, 39, 40
//	console.log(e.keyCode);
//    if (!e.altKey && e.shiftKey && e.ctrlKey && e.keyCode == 76) { // Ctrl + Shift + L
//      alert ("Shortcut Key Pressed");
//    }
//*/
//}, false);
//window.addEventListener('keyup', function(e) {
//	if (e.keyCode != 16)
//		isDoubleShift = false;
//})
///*
//window.addEventListener('keydown',  function(e) {
//  console.log(e.keyCode);
//    if (!e.altKey && e.shiftKey && e.ctrlKey && e.keyCode == 76) { // Ctrl + Shift + L
//      alert ("Shortcut Key Pressed");
//    }
//  }, false);
//*/