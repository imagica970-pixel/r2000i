let rootFolder;

rootFolder = await window.showDirectoryPicker();

document.addEventListener("DOMContentLoaded", function () {

	// Disable groups 2 to 8 initially
	for (let i = 2; i <= 8; i++) {
		toggleGroup(i, false);
	}

	// Add event listener for each group
	for (let i = 1; i <= 8; i++) {

		let radios = document.querySelectorAll('input[name="group' + i + '"]');

		radios.forEach(function (radio) {
			radio.addEventListener("change", function () {

				// Enable next group when current is selected
				if (i < 8) {
					toggleGroup(i + 1, true);
				}
			});
		});
	}

});


// 🔹 Enable / Disable Entire Group
function toggleGroup(groupNumber, enable) {

	let radios = document.querySelectorAll('#group' + groupNumber + ' input');

	radios.forEach(function (radio) {
		radio.disabled = !enable;
	});
}




/////////////////////   NEW ENTRY


function loadCustomerData() {

	let customer = document.getElementById("customer").value;

	let addBtn = document.getElementById("ads");

	let fix = document.getElementById("tp");

	// RESET TABLE
	document.getElementById("tableBody").innerHTML = "";

	rowCount = 0;

	// RESET
	fix.value = "";

	// DEFAULT DISABLE
	addBtn.disabled = true;
	fix.disabled = true;

	// NON STANDARD
	if (customer === "nonstandard") {

		addBtn.disabled = false;
		fix.disabled = false;

		return;
	}

	let data = {};
		
	// RAGHVAN
	if (customer === "raghvan") {

		data = {

			fix: "WALL",

			distances: [225, 250, 275, 275, 275, 300, 275, 300],

			groups: [25, 35, 25, 35, 25, 35, 25, 25]
		};
	}

	// KALPATARU
	else if (customer === "kalpataru") {

		data = {

			fix: "WALL",

			distances: [225, 225, 275, 275, 300, 300, 300, 300],

			groups: [25, 35, 25, 35, 25, 35, 25, 25]
		};
	}


	else if (customer === "stdrev") {

		data = {

			fix: "WALL",

			distances: [225, 225, 275, 275, 300, 300, 300, 350],

			groups: [25, 35, 25, 35, 25, 35, 25, 25]
		};
	}


	else if (customer === "forsa") {

		data = {

			fix: "WALL",

			distances: [225, 225, 300, 300, 300, 300, 300, 300],

			groups: [35, 35, 35, 35, 25, 25, 25, 25]
		};
	}


	else if (customer === "lodha") {

		data = {

			fix: "WALL",

			distances: [225, 225, 250, 300, 300, 300, 300, 300],

			groups: [25, 35, 25, 35, 25, 35, 25, 25]
		};
	}

	else if (customer === "stdrevdeck") {

		data = {

			fix: "DECK",

			distances: [300, 300, 300],

			groups: [10, 10, 10]
		};
	}


	else if (customer === "kalptarudeck") {

		data = {

			fix: "DECK",

			distances: [250, 300, 300],

			groups: [10, 10, 10]
		};
	}

	else if (customer === "ip") {

		data = {

			fix: "WALL",

			distances: [225, 225, 300, 300, 300 , 300 , 300, 225],

			groups: [35, 35, 35, 35, 35 ,35 , 35, 35]
		};


	}




	else if (customer === "wt") {

		data = {

			fix: "WALL",

			distances: [250, 200, 200, 200, 200],

			groups: [25, 25, 25, 25, 25]
		};


	}

	currentData = data;













	// AUTO SELECT FIXTURE
	fix.value = data.fix;

	// CREATE ROWS
	for (let i = 0; i < data.distances.length; i++) {

		addRow();

		// DISTANCE
		document.getElementById("sty" + (i + 1)).value =
			data.distances[i];

		// RADIO SELECT
		let radio = document.querySelector(
			'input[name="group' + (i + 1) + '"][value="' +
			data.groups[i] + '"]'
		);

		if (radio) {

			radio.checked = true;
		}
	}
}







function runLengthFunction(lengthValue) {




	//////////////


	let length = Number(lengthValue);

	let customer = document.getElementById("customer").value;

	// WT SPECIAL LOGIC
	if (customer === "wt") {

		// CLEAR TABLE
		document.getElementById("tableBody").innerHTML = "";

		rowCount = 0;

		// LESS THAN 250 = NO ROW
		if (length < 250) {

			updateSr();
			return;
		}

		// 250 TO 365
		else if (length > 249 && length < 366) {

			addRow();

			document.getElementById("sty1").value =
				Math.floor(length / 2);

			let radio =
				document.querySelector('input[name="group1"][value="25"]');

			if (radio) {
				radio.checked = true;
			}
		}

		// 366 TO 565
		else if (length > 365 && length < 566) {

			addRow();

			document.getElementById("sty1").value = 250;

			let radio =
				document.querySelector('input[name="group1"][value="25"]');

			if (radio) {
				radio.checked = true;
			}
		}

		// 566 TO 765
		else if (length > 565 && length < 766) {

			addRow();
			addRow();

			document.getElementById("sty1").value = 250;
			document.getElementById("sty2").value = 200;

			let radio1 =
				document.querySelector('input[name="group1"][value="25"]');

			let radio2 =
				document.querySelector('input[name="group2"][value="25"]');

			if (radio1) {
				radio1.checked = true;
			}

			if (radio2) {
				radio2.checked = true;
			}
		}

		else if (length > 765 && length < 966) {

			addRow();
			addRow();
			addRow();

			document.getElementById("sty1").value = 250;
			document.getElementById("sty2").value = 200;
			document.getElementById("sty3").value = 200;

			let radio1 =
				document.querySelector('input[name="group1"][value="25"]');

			let radio2 =
				document.querySelector('input[name="group2"][value="25"]');

			let radio3 =
				document.querySelector('input[name="group3"][value="25"]');

			if (radio1) {
				radio1.checked = true;
			}

			if (radio2) {
				radio2.checked = true;
			}

			if (radio3) {
				radio3.checked = true;
			}
		}

		// 966 TO 1165
		else if (length > 965 && length < 1166) {

			addRow();
			addRow();
			addRow();
			addRow();

			document.getElementById("sty1").value = 250;
			document.getElementById("sty2").value = 200;
			document.getElementById("sty3").value = 200;
			document.getElementById("sty4").value = 200;

			for (let i = 1; i <= 4; i++) {

				let radio =
					document.querySelector('input[name="group' + i + '"][value="25"]');

				if (radio) {
					radio.checked = true;
				}
			}
		}


		// 1166 TO 1365
		else if (length > 1165 && length < 1366) {

			addRow();
			addRow();
			addRow();
			addRow();
			addRow();

			document.getElementById("sty1").value = 250;
			document.getElementById("sty2").value = 200;
			document.getElementById("sty3").value = 200;
			document.getElementById("sty4").value = 200;
			document.getElementById("sty5").value = 200;

			for (let i = 1; i <= 5; i++) {

				let radio =
					document.querySelector('input[name="group' + i + '"][value="25"]');

				if (radio) {
					radio.checked = true;
				}
			}
		}


		// 1366 TO 1565
		else if (length > 1365 && length < 1566) {

			addRow();
			addRow();
			addRow();
			addRow();
			addRow();
			addRow();

			document.getElementById("sty1").value = 250;
			document.getElementById("sty2").value = 200;
			document.getElementById("sty3").value = 200;
			document.getElementById("sty4").value = 200;
			document.getElementById("sty5").value = 200;
			document.getElementById("sty6").value = 200;

			for (let i = 1; i <= 6; i++) {

				let radio =
					document.querySelector('input[name="group' + i + '"][value="25"]');

				if (radio) {
					radio.checked = true;
				}
			}
		}


		// 1566 TO 1765
		else if (length > 1565 && length < 1766) {

			addRow();
			addRow();
			addRow();
			addRow();
			addRow();
			addRow();
			addRow();

			document.getElementById("sty1").value = 250;
			document.getElementById("sty2").value = 200;
			document.getElementById("sty3").value = 200;
			document.getElementById("sty4").value = 200;
			document.getElementById("sty5").value = 200;
			document.getElementById("sty6").value = 200;
			document.getElementById("sty7").value = 200;

			for (let i = 1; i <= 7; i++) {

				let radio =
					document.querySelector('input[name="group' + i + '"][value="25"]');

				if (radio) {
					radio.checked = true;
				}
			}
		}

		updateSr();

		return;
	}


	////////////

	let maxLength = Number(lengthValue);

	// CLEAR TABLE
	document.getElementById("tableBody").innerHTML = "";

	rowCount = 0;

	let total = 0;

	// LOOP THROUGH ORIGINAL DATA
	for (let i = 0; i < currentData.distances.length; i++) {

		let value = currentData.distances[i];

		// CHECK LIMIT
		if (total + value + 116 > maxLength) {
			break;
		}

		total += value;

		// ADD ROW
		addRow();

		// SET DISTANCE
		document.getElementById("sty" + (i + 1)).value = value;

		// SET RADIO
		let radio = document.querySelector(
			'input[name="group' + (i + 1) + '"][value="' +
			currentData.groups[i] + '"]'
		);

		if (radio) {
			radio.checked = true;
		}
	}

	updateSr();
}







//////////////////////////// NEW ENTRY


function setFixtureData() {



    let side = document.getElementById("fixtureSide").value;

    if (side === "rights") {

        document.getElementById("u1").value = 4;
        document.getElementById("u2").value = 5;
        document.getElementById("u3").value = 6;
        document.getElementById("tl").value = 1;
		document.getElementById("ccp").value = "ct";

    }

    else if (side === "lefts") {

        document.getElementById("u1").value = 1;
        document.getElementById("u2").value = 2;
        document.getElementById("u3").value = 3;
        document.getElementById("tl").value = 1;
		document.getElementById("ccp").value = "ct";

    }

    else {

        document.getElementById("u1").value = "";
        document.getElementById("u2").value = "";
        document.getElementById("u3").value = "";
        document.getElementById("tl").value = "";

    }
}








/////////////////////////////////



function LS() {

	//            //             //            //

	let group1Value = getGroupValue("group1");
	let group2Value = getGroupValue("group2");
	let group3Value = getGroupValue("group3");
	let group4Value = getGroupValue("group4");
	let group5Value = getGroupValue("group5");
	let group6Value = getGroupValue("group6");
	let group7Value = getGroupValue("group7");
	let group8Value = getGroupValue("group8");



	//  Common Function (Reusable)
	function getGroupValue(groupName) {

		let selected = document.querySelector('input[name="' + groupName + '"]:checked');

		return selected ? Number(selected.value) : 0;
	}


	// Values assign :

	let width = Number(document.getElementById('wh').value);
	let length = Number(document.getElementById('lh').value);
	let tool = document.getElementById("tl").value
	let uframe = document.getElementById('u1').value
	let rframe = document.getElementById('u2').value
	let nframe = document.getElementById('u3').value
	let pname = document.getElementById('nm').value
	let fix = document.getElementById('tp')
	let stiff1 = Number(document.getElementById('sty1')?.value || 0);
	let stiff2 = Number(document.getElementById('sty2')?.value || 0) + stiff1;
	let stiff3 = Number(document.getElementById('sty3')?.value || 0) + stiff2;
	let stiff4 = Number(document.getElementById('sty4')?.value || 0) + stiff3;
	let stiff5 = Number(document.getElementById('sty5')?.value || 0) + stiff4;
	let stiff6 = Number(document.getElementById('sty6')?.value || 0) + stiff5;
	let stiff7 = Number(document.getElementById('sty7')?.value || 0) + stiff6;
	let stiff8 = Number(document.getElementById('sty8')?.value || 0) + stiff7;


	// calculative


	xc06 = `${width}` - 50.000; x06 = xc06.toFixed(3);
	xc07 = `${width}` - 8.000; x07 = xc07.toFixed(3);
	xc08 = `${width}` - 110.000; x08 = xc08.toFixed(3);
	xc09 = `${width}` - 115.000; x09 = xc09.toFixed(3);
	xc10 = `${width}` / 2; x10 = xc10.toFixed(3);
	xc11 = `${width}` / 2 - 5.000; x11 = xc11.toFixed(3);
	xc12 = `${width}` - 90.000; x12 = xc12.toFixed(3);

	xc13 = `${width}` / 1.522; x13 = xc13.toFixed(3);
	xc14 = `${width}` / 1.522 - 38; x14 = xc14.toFixed(3);

	xc15 = `${width}` - 60; x15 = xc15.toFixed(3);
	xc16 = `${width}` - 98; x16 = xc16.toFixed(3);

	xc17 = `${width}` / 2.43; x17 = xc17.toFixed(3);
	xc18 = `${width}` / 2.43 - 38; x18 = xc18.toFixed(3);

	xc19 = `${width}` - 40.000; x19 = xc19.toFixed(3);


	xc20 = `${width}` / 2 + 18.000; x20 = xc20.toFixed(3);  // 450 
	xc21 = `${width}` / 2 - 18.000; x21 = xc21.toFixed(3);  // 450 

	xc22 = `${width}` / 2 + 20.000; x22 = xc22.toFixed(3);  // 450 
	xc23 = `${width}` / 2 - 18.000; x23 = xc23.toFixed(3);  // 450 
	xc24 = `${width}` / 2 + 20.000; x24 = xc24.toFixed(3);  // 450 
	xc25 = `${width}` / 2 - 18.000; x25 = xc25.toFixed(3);  // 450 






	yc06 = `${stiff1}` - `${group1Value}` - 25; y06 = yc06.toFixed(3);
	yc07 = `${stiff1}` - `${group1Value}`; y07 = yc07.toFixed(3);

	yc08 = `${stiff2}` - `${group2Value}` - 25; y08 = yc08.toFixed(3);
	yc09 = `${stiff2}` - `${group2Value}`; y09 = yc09.toFixed(3);

	yc10 = `${stiff3}` - `${group3Value}` - 25; y10 = yc10.toFixed(3);
	yc11 = `${stiff3}` - `${group3Value}`; y11 = yc11.toFixed(3);

	yc12 = `${stiff4}` - `${group4Value}` - 25; y12 = yc12.toFixed(3);
	yc13 = `${stiff4}` - `${group4Value}`; y13 = yc13.toFixed(3);

	yc14 = `${stiff5}` - `${group5Value}` - 25; y14 = yc14.toFixed(3);
	yc15 = `${stiff5}` - `${group5Value}`; y15 = yc15.toFixed(3);

	yc16 = `${stiff6}` - `${group6Value}` - 25; y16 = yc16.toFixed(3);
	yc17 = `${stiff6}` - `${group6Value}`; y17 = yc17.toFixed(3);

	yc18 = `${stiff7}` - `${group7Value}` - 25; y18 = yc18.toFixed(3);
	yc19 = `${stiff7}` - `${group7Value}`; y19 = yc19.toFixed(3);

	yc20 = `${stiff8}` - `${group8Value}` - 25; y20 = yc20.toFixed(3);
	yc21 = `${stiff8}` - `${group8Value}`; y21 = yc21.toFixed(3);


	yc22 = `${length}` - 58; y22 = yc22.toFixed(3);
	yc23 = `${length}` - 8; y23 = yc23.toFixed(3);
	yc24 = `${length}` - 50; y24 = yc24.toFixed(3);
	yc25 = `${length}` - 40; y25 = yc25.toFixed(3);


	yc26 = stiff1 + group1Value + 25; y26 = yc26.toFixed(3);
	yc27 = stiff1 + group1Value; y27 = yc27.toFixed(3);

	yc28 = stiff2 + group2Value + 25; y28 = yc28.toFixed(3);
	yc29 = stiff2 + group2Value; y29 = yc29.toFixed(3);

	yc30 = stiff3 + group3Value + 25; y30 = yc30.toFixed(3);
	yc31 = stiff3 + group3Value; y31 = yc31.toFixed(3);

	yc32 = stiff4 + group4Value + 25; y32 = yc32.toFixed(3);
	yc33 = stiff4 + group4Value; y33 = yc33.toFixed(3);

	yc34 = stiff5 + group5Value + 25; y34 = yc34.toFixed(3);
	yc35 = stiff5 + group5Value; y35 = yc35.toFixed(3);

	yc36 = stiff6 + group6Value + 25; y36 = yc36.toFixed(3);
	yc37 = stiff6 + group6Value; y37 = yc37.toFixed(3);

	yc38 = stiff7 + group7Value + 25; y38 = yc38.toFixed(3);
	yc39 = stiff7 + group7Value; y39 = yc39.toFixed(3);

	yc40 = stiff8 + group8Value + 25; y40 = yc40.toFixed(3);
	yc41 = stiff8 + group8Value; y41 = yc41.toFixed(3);


	yc42 = Number(y07) + 5; y42 = yc42.toFixed(3);
	yc43 = Number(y09) + 5; y43 = yc43.toFixed(3);
	yc44 = Number(y11) + 5; y44 = yc44.toFixed(3);
	yc45 = Number(y13) + 5; y45 = yc45.toFixed(3);
	yc46 = Number(y15) + 5; y46 = yc46.toFixed(3);
	yc47 = Number(y17) + 5; y47 = yc47.toFixed(3);
	yc48 = Number(y19) + 5; y48 = yc48.toFixed(3);
	yc49 = Number(y21) + 5; y49 = yc49.toFixed(3);



	yc51 = Number(y07) - 35; y51 = yc51.toFixed(3);
	yc52 = Number(y09) - 35; y52 = yc52.toFixed(3);
	yc53 = Number(y11) - 35; y53 = yc53.toFixed(3);
	yc54 = Number(y13) - 35; y54 = yc54.toFixed(3);
	yc55 = Number(y15) - 35; y55 = yc55.toFixed(3);
	yc56 = Number(y17) - 35; y56 = yc56.toFixed(3);
	yc57 = Number(y19) - 35; y57 = yc57.toFixed(3);
	yc58 = Number(y21) - 35; y58 = yc58.toFixed(3);




	if (group1Value == 25) {
		yc59 = Number(y27) - 5; y59 = yc59.toFixed(3);
	} else {
		yc59 = Number(y27) - 23; y59 = yc59.toFixed(3);
	}

	if (group2Value == 25) {
		yc60 = Number(y29) - 5; y60 = yc60.toFixed(3);
	} else {
		yc60 = Number(y29) - 23; y60 = yc60.toFixed(3);
	}


	if (group3Value == 25) {
		yc61 = Number(y31) - 5; y61 = yc61.toFixed(3);
	} else {
		yc61 = Number(y31) - 23; y61 = yc61.toFixed(3);
	}


	if (group4Value == 25) {
		yc62 = Number(y33) - 5; y62 = yc62.toFixed(3);
	} else {
		yc62 = Number(y33) - 23; y62 = yc62.toFixed(3);
	}


	if (group5Value == 25) {
		yc63 = Number(y35) - 5; y63 = yc63.toFixed(3);
	} else {
		yc63 = Number(y35) - 23; y63 = yc63.toFixed(3);
	}


	if (group6Value == 25) {
		yc64 = Number(y37) - 5; y64 = yc64.toFixed(3);
	} else {
		yc64 = Number(y37) - 23; y64 = yc64.toFixed(3);
	}


	if (group7Value == 25) {
		yc65 = Number(y39) - 5; y65 = yc65.toFixed(3);
	} else {
		yc65 = Number(y39) - 23; y65 = yc65.toFixed(3);
	}


	if (group8Value == 25) {
		yc66 = Number(y41) - 5; y66 = yc66.toFixed(3);
	} else {
		yc66 = Number(y41) - 23; y66 = yc66.toFixed(3);
	}




	yc67 = Number(y27) + 35; y67 = yc67.toFixed(3);
	yc68 = Number(y29) + 35; y68 = yc68.toFixed(3);
	yc69 = Number(y31) + 35; y69 = yc69.toFixed(3);
	yc70 = Number(y33) + 35; y70 = yc70.toFixed(3);
	yc71 = Number(y35) + 35; y71 = yc71.toFixed(3);
	yc72 = Number(y37) + 35; y72 = yc72.toFixed(3);
	yc73 = Number(y39) + 35; y73 = yc73.toFixed(3);
	yc74 = Number(y41) + 35; y74 = yc74.toFixed(3);



	yc75 = Number(y07) - 10; y75 = yc75.toFixed(3);
	yc76 = Number(y09) - 10; y76 = yc76.toFixed(3);
	yc77 = Number(y11) - 10; y77 = yc77.toFixed(3);
	yc78 = Number(y13) - 10; y78 = yc78.toFixed(3);
	yc79 = Number(y15) - 10; y79 = yc79.toFixed(3);
	yc80 = Number(y17) - 10; y80 = yc80.toFixed(3);
	yc81 = Number(y19) - 10; y81 = yc81.toFixed(3);
	yc82 = Number(y21) - 10; y82 = yc82.toFixed(3);






	if (group1Value == 25) {
		yc83 = Number(y07) + 5; y83 = yc83.toFixed(3);
	} else if (group1Value == 10) {
		yc83 = Number(y07) + 3; y83 = yc83.toFixed(3);
	} else {
		yc83 = Number(y07) + 7; y83 = yc83.toFixed(3);
	}



	if (group2Value == 25) {
		yc84 = Number(y09) + 5; y84 = yc84.toFixed(3);
	} else if (group2Value == 10) {
		yc84 = Number(y09) + 3; y84 = yc84.toFixed(3);
	} else {
		yc84 = Number(y09) + 7; y84 = yc84.toFixed(3);
	}



	if (group3Value == 25) {
		yc85 = Number(y11) + 5; y85 = yc85.toFixed(3);
	} else if (group3Value == 10) {
		yc85 = Number(y11) + 3; y85 = yc85.toFixed(3);
	} else {
		yc85 = Number(y11) + 7; y85 = yc85.toFixed(3);
	}




	if (group4Value == 25) {
		yc86 = Number(y13) + 5; y86 = yc86.toFixed(3);
	} else if (group4Value == 10) {
		yc86 = Number(y13) + 3; y86 = yc86.toFixed(3);
	} else {
		yc86 = Number(y13) + 7; y86 = yc86.toFixed(3);
	}




	if (group5Value == 25) {
		yc87 = Number(y15) + 5; y87 = yc87.toFixed(3);
	} else if (group5Value == 10) {
		yc87 = Number(y15) + 3; y87 = yc87.toFixed(3);
	} else {
		yc87 = Number(y15) + 7; y87 = yc87.toFixed(3);
	}



	if (group6Value == 25) {
		yc88 = Number(y17) + 5; y88 = yc88.toFixed(3);
	} else if (group6Value == 10) {
		yc88 = Number(y17) + 3; y88 = yc88.toFixed(3);
	} else {
		yc88 = Number(y17) + 7; y88 = yc88.toFixed(3);
	}



	if (group7Value == 25) {
		yc89 = Number(y19) + 5; y89 = yc89.toFixed(3);
	} else if (group7Value == 10) {
		yc89 = Number(y19) + 3; y89 = yc89.toFixed(3);
	} else {
		yc89 = Number(y19) + 7; y89 = yc89.toFixed(3);
	}




	if (group8Value == 25) {
		yc90 = Number(y21) + 5; y90 = yc90.toFixed(3);
	} else if (group8Value == 10) {
		yc90 = Number(y21) + 3; y90 = yc90.toFixed(3);
	} else {
		yc90 = Number(y21) + 7; y90 = yc90.toFixed(3);
	}






	if (group1Value == 25) {
		yc91 = Number(y07) + 43; y91 = yc91.toFixed(3);
	} else if (group1Value == 10) {
		yc91 = Number(y07) + 17; y91 = yc91.toFixed(3);
	} else {
		yc91 = Number(y07) + 52; y91 = yc91.toFixed(3);
	}



	if (group2Value == 25) {
		yc92 = Number(y09) + 43; y92 = yc92.toFixed(3);
	} else if (group2Value == 10) {
		yc92 = Number(y09) + 17; y92 = yc92.toFixed(3);
	} else {
		yc92 = Number(y09) + 52; y92 = yc92.toFixed(3);
	}




	if (group3Value == 25) {
		yc93 = Number(y11) + 43; y93 = yc93.toFixed(3);
	} else if (group3Value == 10) {
		yc93 = Number(y11) + 17; y93 = yc93.toFixed(3);
	} else {
		yc93 = Number(y11) + 52; y93 = yc93.toFixed(3);
	}




	if (group4Value == 25) {
		yc94 = Number(y13) + 43; y94 = yc94.toFixed(3);
	} else if (group4Value == 10) {
		yc94 = Number(y13) + 17; y94 = yc94.toFixed(3);
	} else {
		yc94 = Number(y13) + 52; y94 = yc94.toFixed(3);
	}




	if (group5Value == 25) {
		yc95 = Number(y15) + 43; y95 = yc95.toFixed(3);
	} else if (group5Value == 10) {
		yc95 = Number(y15) + 17; y95 = yc95.toFixed(3);
	} else {
		yc95 = Number(y15) + 52; y95 = yc95.toFixed(3);
	}




	if (group6Value == 25) {
		yc96 = Number(y17) + 43; y96 = yc96.toFixed(3);
	} else if (group6Value == 10) {
		yc96 = Number(y17) + 17; y96 = yc96.toFixed(3);
	} else {
		yc96 = Number(y17) + 52; y96 = yc96.toFixed(3);
	}




	if (group7Value == 25) {
		yc97 = Number(y19) + 43; y97 = yc97.toFixed(3);
	} else if (group7Value == 10) {
		yc97 = Number(y19) + 17; y97 = yc97.toFixed(3);
	} else {
		yc97 = Number(y19) + 52; y97 = yc97.toFixed(3);
	}




	if (group8Value == 25) {
		yc98 = Number(y21) + 43; y98 = yc98.toFixed(3);
	} else if (group8Value == 10) {
		yc98 = Number(y21) + 17; y98 = yc98.toFixed(3);
	} else {
		yc98 = Number(y21) + 52; y98 = yc98.toFixed(3);
	}







	/// Y99 BAN 


	yc100 = Number(y27) + 10; y100 = yc100.toFixed(3);
	yc101 = Number(y29) + 10; y101 = yc101.toFixed(3);
	yc102 = Number(y31) + 10; y102 = yc102.toFixed(3);
	yc103 = Number(y33) + 10; y103 = yc103.toFixed(3);
	yc104 = Number(y35) + 10; y104 = yc104.toFixed(3);
	yc105 = Number(y37) + 10; y105 = yc105.toFixed(3);
	yc106 = Number(y39) + 10; y106 = yc106.toFixed(3);
	yc107 = Number(y41) + 10; y107 = yc107.toFixed(3);









	if (group1Value == 25) {
		z01 = -44.001;
	} else {
		z01 = -11.001;
	}

	if (group2Value == 25) {
		z02 = -44.001;
	} else {
		z02 = -11.001;
	}

	if (group3Value == 25) {
		z03 = -44.001;
	} else {
		z03 = -11.001;
	}

	if (group4Value == 25) {
		z04 = -44.001;
	} else {
		z04 = -11.001;
	}

	if (group5Value == 25) {
		z05 = -44.001;
	} else {
		z05 = -11.001;
	}

	if (group6Value == 25) {
		z06 = -44.001;
	} else {
		z06 = -11.001;
	}

	if (group7Value == 25) {
		z07 = -44.001;
	} else {
		z07 = -11.001;
	}

	if (group8Value == 25) {
		z08 = -44.001;
	} else {
		z08 = -11.001;
	}


	/////////////////////////////////////


	if (group1Value == 25) {
		z09 = -38.001;
	} else if (group1Value == 10) {
		z09 = -20.001;
	} else {
		z09 = -11.001;
	}



	if (group2Value == 25) {
		z10 = -38.001;
	} else if (group2Value == 10) {
		z10 = -20.001;
	} else {
		z10 = -11.001;
	}



	if (group3Value == 25) {
		z11 = -38.001;
	} else if (group3Value == 10) {
		z11 = -20.001;
	} else {
		z11 = -11.001;
	}



	if (group4Value == 25) {
		z12 = -38.001;
	} else if (group4Value == 10) {
		z12 = -20.001;
	} else {
		z12 = -11.001;
	}



	if (group5Value == 25) {
		z13 = -38.001;
	} else if (group5Value == 10) {
		z13 = -20.001;
	} else {
		z13 = -11.001;
	}



	if (group6Value == 25) {
		z14 = -38.001;
	} else if (group6Value == 10) {
		z14 = -20.001;
	} else {
		z14 = -11.001;
	}



	if (group7Value == 25) {
		z15 = -38.001;
	} else if (group7Value == 10) {
		z15 = -20.001;
	} else {
		z15 = -11.001;
	}



	if (group8Value == 25) {
		z16 = -38.001;
	} else if (group8Value == 10) {
		z16 = -20.001;
	} else {
		z16 = -11.001;
	}






	// Trail Shots //

	console.log("Trail :", y83);
	console.log("Trail :", y84);
	console.log("Trail :", y85);
	console.log("Trail :", uframe);
	console.log("Trail :", rframe);
	console.log("Trail :", nframe);
	console.log("Trail :", pname);
	console.log("Trail :", group1Value);
	console.log("Trail :", group2Value);
	console.log("Trail :", group3Value);
	console.log("Trail :", group4Value);
	console.log("Trail :", group5Value);
	console.log("Trail :", group6Value);
	console.log("Trail :", group7Value);
	console.log("Trail :", group8Value);
	console.log("Trail :", stiff1);
	console.log("Trail :", stiff2);
	console.log("Trail :", stiff3);
	console.log("Trail :", stiff4);
	console.log("Trail :", stiff5);
	console.log("Trail :", stiff6);
	console.log("Trail :", stiff7);
	console.log("Trail :", stiff8);




	////////////////////

	let rowws = document.querySelectorAll("#tableBody tr");
	let totalRows = rowws.length;

	console.log("Total rows added:", totalRows);



	/////////////////////

	// Real World //



	ref =

		`/PROG ${pname}
/ATTR
OWNER		= MNEDITOR;
PROG_SIZE       = 0;
LINE_COUNT	= 951;
MEMORY_SIZE	= 0;
PROTECT		= READ_WRITE;
TCD:	STACK_SIZE	= 0,
		TASK_PRIORITY	= 50,
		TIME_SLICE	= 0,
		BUSY_LAMP_OFF	= 0,
		ABORT_REQUEST	= 0,
		PAUSE_REQUEST	= 0;
DEFAULT_GROUP	= 1,*,*,*,*;
CONTROL_CODE	= 00000000 00000000;
/MN
	1: UFRAME_NUM=${uframe} ;
	2: UTOOL_NUM=${tool} ;
	3:J P[1] 70% CNT30 ;
	4:L P[2] 1500 mm/sec CNT0 ;
	5:L P[3] 1500 mm/sec CNT0 ;
	6:L P[4] 1500 mm/sec CNT0 ;
	7: WELD_ON;
	8:L P[5] 15 mm/sec CNT40 ;
	9:L P[6] 15 mm/sec CNT20 ;
	10:L P[7] 15 mm/sec CNT0 ;
	11: WELD_OFF;
	12:L P[8] 1500 mm/sec CNT80 ;
	13:L P[9] 1500 mm/sec CNT80 ;
	14:J P[10] 70% CNT30 ;
	15:L P[11] 1500 mm/sec CNT80 ;
	16:L P[12] 1500 mm/sec CNT80 ;
	17: WELD_ON;
	18:L P[13] 15 mm/sec CNT40 ;
	19:L P[14] 15 mm/sec CNT20 ;
	20:L P[15] 15 mm/sec CNT0 ;
	21: WELD_OFF;
	22:L P[16] 1500 mm/sec CNT80 ;
	23:L P[17] 1500 mm/sec CNT0 ;
	24:J P[18] 70% CNT30 ;
	25:L P[19] 1500 mm/sec CNT80 ;
	26:L P[20] 1500 mm/sec CNT80 ;
	27:L P[21] 1500 mm/sec CNT80 ;
	28: WELD_ON;
	29:L P[22] 30 mm/sec CNT40 ;
	30:L P[23] 30 mm/sec CNT40 ;
	31:L P[24] 30 mm/sec CNT0 ;
	32: WELD_OFF;
	33:L P[25] 1500 mm/sec CNT80 ;
	34:L P[26] 1500 mm/sec CNT80 ;
	35:J P[27] 70% CNT30 ;
	36:L P[28] 1500 mm/sec CNT80 ;
	37:L P[29] 1500 mm/sec CNT80 ;
	38: WELD_ON;
	39:L P[30] 30 mm/sec CNT40 ;
	40:L P[31] 30 mm/sec CNT40 ;
	41:L P[32] 30 mm/sec CNT0 ;
	42: WELD_OFF;
	43:L P[33] 1500 mm/sec CNT80 ;
	44:L P[34] 1500 mm/sec CNT80 ;
	45:J P[35] 70% CNT30 ;
	46:L P[36] 1500 mm/sec CNT80 ;
	47:L P[37] 1500 mm/sec CNT80 ;
	48:L P[38] 1500 mm/sec CNT80 ;
	49: WELD_ON;
	50:L P[39] 30 mm/sec CNT40 ;
	51:L P[40] 30 mm/sec CNT40 ;
	52:L P[41] 30 mm/sec CNT0 ;
	53: WELD_OFF;
	54:L P[42] 1500 mm/sec CNT80 ;
	55:L P[43] 1500 mm/sec CNT0 ;
	56:J P[44] 70% CNT30 ;
	57:L P[45] 1500 mm/sec CNT80 ;
	58:L P[46] 1500 mm/sec CNT80 ;
	59:L P[47] 1500 mm/sec CNT80 ;
	60: WELD_ON;
	61:L P[48] 10 mm/sec CNT40 ;
	62:L P[49] 10 mm/sec CNT80 ;
	63:L P[50] 10 mm/sec CNT80 ;
	64:L P[51] 10 mm/sec CNT20 ;
	65:L P[52] 10 mm/sec CNT0 ;
	66: WELD_OFF;
	67:L P[53] 1500 mm/sec CNT80 ;
	68:L P[54] 1500 mm/sec CNT0 ;
`

	u2 =

		`	69: UFRAME_NUM=${rframe} ;
`


	st1 =

		`	70:J P[55] 70% CNT30 ;
	71:L P[56] 1500 mm/sec CNT80 ;
	72:L P[57] 1500 mm/sec CNT80 ;
	73:L P[58] 1500 mm/sec CNT80 ;
	74: WELD_ON;
	75:L P[59] 13 mm/sec CNT40 ;
	76:L P[60] 13 mm/sec CNT20 ;
	77:L P[61] 13 mm/sec CNT0 ;
	78: WELD_OFF;
	79:L P[62] 1500 mm/sec CNT80 ;
	80:L P[63] 1500 mm/sec CNT80 ;
	81:J P[64] 70% CNT30 ;
	82:L P[65] 1500 mm/sec CNT80 ;
	83:L P[66] 1500 mm/sec CNT80 ;
	84: WELD_ON;
	85:L P[67] 13 mm/sec CNT40 ;
	86:L P[68] 13 mm/sec CNT20 ;
	87:L P[69] 13 mm/sec CNT0 ;
	88: WELD_OFF;
	89:L P[70] 1500 mm/sec CNT80 ;
	90:L P[71] 1500 mm/sec CNT80 ;
`


	stk1 =

		`	70:J P[55] 70% CNT30 ;
	71:L P[56] 1500 mm/sec CNT80 ;
	72:L P[57] 1500 mm/sec CNT80 ;
	73:L P[58] 1500 mm/sec CNT80 ;
	74: WELD_ON;
	75:L P[59] 13 mm/sec CNT40 ;
	76:L P[60] 13 mm/sec CNT20 ;
	77:L P[61] 13 mm/sec CNT0 ;
	78: WELD_OFF;
	79:L P[62] 1500 mm/sec CNT80 ;
	80:L P[63] 1500 mm/sec CNT80 ;
`


	stm1 =

		`	81:J P[64] 70% CNT30 ;
	82:L P[65] 1500 mm/sec CNT80 ;
	83:L P[66] 1500 mm/sec CNT80 ;
	84: WELD_ON;
	85:L P[67] 13 mm/sec CNT40 ;
	86:L P[68] 13 mm/sec CNT20 ;
	87:L P[69] 13 mm/sec CNT0 ;
	88: WELD_OFF;
	89:L P[70] 1500 mm/sec CNT80 ;
	90:L P[71] 1500 mm/sec CNT80 ;		
`



	st2 =

		`	91:J P[72] 70% CNT30 ;
	92:L P[73] 1500 mm/sec CNT80 ;
	93:L P[74] 1500 mm/sec CNT80 ;
	94: WELD_ON;
	95:L P[75] 13 mm/sec CNT40 ;
	96:L P[76] 13 mm/sec CNT20 ;
	97:L P[77] 13 mm/sec CNT0 ;
	98: WELD_OFF;
	99:L P[78] 1500 mm/sec CNT80 ;
	100:L P[79] 1500 mm/sec CNT80 ;
	101:J P[80] 70% CNT30 ;
	102:L P[81] 1500 mm/sec CNT80 ;
	103:L P[82] 1500 mm/sec CNT80 ;
	104: WELD_ON;
	105:L P[83] 13 mm/sec CNT40 ;
	106:L P[84] 13 mm/sec CNT20 ;
	107:L P[85] 13 mm/sec CNT0 ;
	108: WELD_OFF;
	109:L P[86] 1500 mm/sec CNT80 ;
	110:L P[87] 1500 mm/sec CNT80 ;
`

	stk2 =

		`	91:J P[72] 70% CNT30 ;
	92:L P[73] 1500 mm/sec CNT80 ;
	93:L P[74] 1500 mm/sec CNT80 ;
	94: WELD_ON;
	95:L P[75] 13 mm/sec CNT40 ;
	96:L P[76] 13 mm/sec CNT20 ;
	97:L P[77] 13 mm/sec CNT0 ;
	98: WELD_OFF;
	99:L P[78] 1500 mm/sec CNT80 ;
	100:L P[79] 1500 mm/sec CNT80 ;
`


	stm2 =

		`	101:J P[80] 70% CNT30 ;
	102:L P[81] 1500 mm/sec CNT80 ;
	103:L P[82] 1500 mm/sec CNT80 ;
	104: WELD_ON;
	105:L P[83] 13 mm/sec CNT40 ;
	106:L P[84] 13 mm/sec CNT20 ;
	107:L P[85] 13 mm/sec CNT0 ;
	108: WELD_OFF;
	109:L P[86] 1500 mm/sec CNT80 ;
	110:L P[87] 1500 mm/sec CNT80 ;		
`





	st3 =

		`   111:J P[88] 70% CNT30 ;
	112:L P[89] 1500 mm/sec CNT80 ;
	113:L P[90] 1500 mm/sec CNT80 ;
	114: WELD_ON;
	115:L P[91] 13 mm/sec CNT40 ;
	116:L P[92] 13 mm/sec CNT20 ;
	117:L P[93] 13 mm/sec CNT0 ;
	118: WELD_OFF;
	119:L P[94] 1500 mm/sec CNT80 ;
	120:L P[95] 1500 mm/sec CNT80 ;
	121:J P[96] 70% CNT30 ;
	122:L P[97] 1500 mm/sec CNT80 ;
	123:L P[98] 1500 mm/sec CNT80 ;
	124: WELD_ON;
	125:L P[99] 13 mm/sec CNT40 ;
	126:L P[100] 13 mm/sec CNT20 ;
	127:L P[101] 13 mm/sec CNT0 ;
	128: WELD_OFF;
	129:L P[102] 1500 mm/sec CNT80 ;
	130:L P[103] 1500 mm/sec CNT80 ;
`

	stk3 =

		`   111:J P[88] 70% CNT30 ;
	112:L P[89] 1500 mm/sec CNT80 ;
	113:L P[90] 1500 mm/sec CNT80 ;
	114: WELD_ON;
	115:L P[91] 13 mm/sec CNT40 ;
	116:L P[92] 13 mm/sec CNT20 ;
	117:L P[93] 13 mm/sec CNT0 ;
	118: WELD_OFF;
	119:L P[94] 1500 mm/sec CNT80 ;
	120:L P[95] 1500 mm/sec CNT80 ;
`


	stm3 =

		`	121:J P[96] 70% CNT30 ;
	122:L P[97] 1500 mm/sec CNT80 ;
	123:L P[98] 1500 mm/sec CNT80 ;
	124: WELD_ON;
	125:L P[99] 13 mm/sec CNT40 ;
	126:L P[100] 13 mm/sec CNT20 ;
	127:L P[101] 13 mm/sec CNT0 ;
	128: WELD_OFF;
	129:L P[102] 1500 mm/sec CNT80 ;
	130:L P[103] 1500 mm/sec CNT80 ;		
`



	st4 =

		`	131:J P[104] 70% CNT30 ;
	132:L P[105] 1500 mm/sec CNT80 ;
	133:L P[106] 1500 mm/sec CNT80 ;
	134: WELD_ON;
	135:L P[107] 13 mm/sec CNT40 ;
	136:L P[108] 13 mm/sec CNT20 ;
	137:L P[109] 13 mm/sec CNT0 ;
	138: WELD_OFF;
	139:L P[110] 1500 mm/sec CNT80 ;
	140:L P[111] 1500 mm/sec CNT80 ;
	141:J P[112] 70% CNT30 ;
	142:L P[113] 1500 mm/sec CNT80 ;
	143:L P[114] 1500 mm/sec CNT80 ;
	144: WELD_ON;
	145:L P[115] 13 mm/sec CNT40 ;
	146:L P[116] 13 mm/sec CNT20 ;
	147:L P[117] 13 mm/sec CNT0 ;
	148: WELD_OFF;
	149:L P[118] 1500 mm/sec CNT80 ;
	150:L P[119] 1500 mm/sec CNT80 ;
`

	stk4 =

		`	131:J P[104] 70% CNT30 ;
	132:L P[105] 1500 mm/sec CNT80 ;
	133:L P[106] 1500 mm/sec CNT80 ;
	134: WELD_ON;
	135:L P[107] 13 mm/sec CNT40 ;
	136:L P[108] 13 mm/sec CNT20 ;
	137:L P[109] 13 mm/sec CNT0 ;
	138: WELD_OFF;
	139:L P[110] 1500 mm/sec CNT80 ;
	140:L P[111] 1500 mm/sec CNT80 ;
`


	stm4 =

		`	141:J P[112] 70% CNT30 ;
	142:L P[113] 1500 mm/sec CNT80 ;
	143:L P[114] 1500 mm/sec CNT80 ;
	144: WELD_ON;
	145:L P[115] 13 mm/sec CNT40 ;
	146:L P[116] 13 mm/sec CNT20 ;
	147:L P[117] 13 mm/sec CNT0 ;
	148: WELD_OFF;
	149:L P[118] 1500 mm/sec CNT80 ;
	150:L P[119] 1500 mm/sec CNT80 ;	
`


	st5 =

		`	151:J P[120] 70% CNT30 ;
	152:L P[121] 1500 mm/sec CNT80 ;
	153:L P[122] 1500 mm/sec CNT80 ;
	154: WELD_ON;
	155:L P[123] 13 mm/sec CNT40 ;
	156:L P[124] 13 mm/sec CNT20 ;
	157:L P[125] 13 mm/sec CNT0 ;
	158: WELD_OFF;
	159:L P[126] 1500 mm/sec CNT80 ;
	160:L P[127] 1500 mm/sec CNT80 ;
	161:J P[128] 70% CNT30 ;
	162:L P[129] 1500 mm/sec CNT80 ;
	163:L P[130] 1500 mm/sec CNT80 ;
	164: WELD_ON;
	165:L P[131] 13 mm/sec CNT40 ;
	166:L P[132] 13 mm/sec CNT20 ;
	167:L P[133] 13 mm/sec CNT0 ;
	168: WELD_OFF;
	169:L P[134] 1500 mm/sec CNT80 ;
	170:L P[135] 1500 mm/sec CNT80 ;
`


	stk5 =

		`	151:J P[120] 70% CNT30 ;
	152:L P[121] 1500 mm/sec CNT80 ;
	153:L P[122] 1500 mm/sec CNT80 ;
	154: WELD_ON;
	155:L P[123] 13 mm/sec CNT40 ;
	156:L P[124] 13 mm/sec CNT20 ;
	157:L P[125] 13 mm/sec CNT0 ;
	158: WELD_OFF;
	159:L P[126] 1500 mm/sec CNT80 ;
	160:L P[127] 1500 mm/sec CNT80 ;
`


	stm5 =

		`	161:J P[128] 70% CNT30 ;
	162:L P[129] 1500 mm/sec CNT80 ;
	163:L P[130] 1500 mm/sec CNT80 ;
	164: WELD_ON;
	165:L P[131] 13 mm/sec CNT40 ;
	166:L P[132] 13 mm/sec CNT20 ;
	167:L P[133] 13 mm/sec CNT0 ;
	168: WELD_OFF;
	169:L P[134] 1500 mm/sec CNT80 ;
	170:L P[135] 1500 mm/sec CNT80 ;	
`



	st6 =

		`	171:J P[136] 70% CNT30 ;
	172:L P[137] 1500 mm/sec CNT80 ;
	173:L P[138] 1500 mm/sec CNT80 ;
	174: WELD_ON;
	175:L P[139] 13 mm/sec CNT40 ;
	176:L P[140] 13 mm/sec CNT20 ;
	177:L P[141] 13 mm/sec CNT0 ;
	178: WELD_OFF;
	179:L P[142] 1500 mm/sec CNT80 ;
	180:L P[143] 1500 mm/sec CNT80 ;
	181:J P[144] 70% CNT30 ;
	182:L P[145] 1500 mm/sec CNT80 ;
	183:L P[146] 1500 mm/sec CNT80 ;
	184: WELD_ON;
	185:L P[147] 13 mm/sec CNT40 ;
	186:L P[148] 13 mm/sec CNT20 ;
	187:L P[149] 13 mm/sec CNT0 ;
	188: WELD_OFF;
	189:L P[150] 1500 mm/sec CNT80 ;
	190:L P[151] 1500 mm/sec CNT80 ;
`

	stk6 =

		`	171:J P[136] 70% CNT30 ;
	172:L P[137] 1500 mm/sec CNT80 ;
	173:L P[138] 1500 mm/sec CNT80 ;
	174: WELD_ON;
	175:L P[139] 13 mm/sec CNT40 ;
	176:L P[140] 13 mm/sec CNT20 ;
	177:L P[141] 13 mm/sec CNT0 ;
	178: WELD_OFF;
	179:L P[142] 1500 mm/sec CNT80 ;
	180:L P[143] 1500 mm/sec CNT80 ;
`


	stm6 =

		`	181:J P[144] 70% CNT30 ;
	182:L P[145] 1500 mm/sec CNT80 ;
	183:L P[146] 1500 mm/sec CNT80 ;
	184: WELD_ON;
	185:L P[147] 13 mm/sec CNT40 ;
	186:L P[148] 13 mm/sec CNT20 ;
	187:L P[149] 13 mm/sec CNT0 ;
	188: WELD_OFF;
	189:L P[150] 1500 mm/sec CNT80 ;
	190:L P[151] 1500 mm/sec CNT80 ;	
`



	st7 =

		`	191:J P[152] 70% CNT30 ;
	192:L P[153] 1500 mm/sec CNT80 ;
	193:L P[154] 1500 mm/sec CNT80 ;
	194:L P[155] 1500 mm/sec CNT80 ;
	195: WELD_ON;
	196:L P[156] 13 mm/sec CNT40 ;
	197:L P[157] 13 mm/sec CNT20 ;
	198:L P[158] 13 mm/sec CNT0 ;
	199: WELD_OFF;
	200:L P[159] 1500 mm/sec CNT80 ;
	201:L P[160] 1500 mm/sec CNT80 ;
	202:J P[161] 70% CNT30 ;
	203:L P[162] 1500 mm/sec CNT80 ;
	204:L P[163] 1500 mm/sec CNT80 ;
	205: WELD_ON;
	206:L P[164] 13 mm/sec CNT40 ;
	207:L P[165] 13 mm/sec CNT20 ;
	208:L P[166] 13 mm/sec CNT0 ;
	209: WELD_OFF;
	210:L P[167] 1500 mm/sec CNT80 ;
	211:L P[168] 1500 mm/sec CNT80 ;
`


	stk7 =

		`	191:J P[152] 70% CNT30 ;
	192:L P[153] 1500 mm/sec CNT80 ;
	193:L P[154] 1500 mm/sec CNT80 ;
	194:L P[155] 1500 mm/sec CNT80 ;
	195: WELD_ON;
	196:L P[156] 13 mm/sec CNT40 ;
	197:L P[157] 13 mm/sec CNT20 ;
	198:L P[158] 13 mm/sec CNT0 ;
	199: WELD_OFF;
	200:L P[159] 1500 mm/sec CNT80 ;
	201:L P[160] 1500 mm/sec CNT80 ;
`


	stm7 =

		`	202:J P[161] 70% CNT30 ;
	203:L P[162] 1500 mm/sec CNT80 ;
	204:L P[163] 1500 mm/sec CNT80 ;
	205: WELD_ON;
	206:L P[164] 13 mm/sec CNT40 ;
	207:L P[165] 13 mm/sec CNT20 ;
	208:L P[166] 13 mm/sec CNT0 ;
	209: WELD_OFF;
	210:L P[167] 1500 mm/sec CNT80 ;
	211:L P[168] 1500 mm/sec CNT80 ;	
`




	st8 =

		`	212:J P[169] 70% CNT30 ;
	213:L P[170] 1500 mm/sec CNT80 ;
	214:L P[171] 1500 mm/sec CNT80 ;
	215: WELD_ON;
	216:L P[172] 13 mm/sec CNT40 ;
	217:L P[173] 13 mm/sec CNT20 ;
	218:L P[174] 13 mm/sec CNT0 ;
	219: WELD_OFF;
	220:L P[175] 1500 mm/sec CNT80 ;
	221:L P[176] 1500 mm/sec CNT80 ;
	222:J P[177] 70% CNT30 ;
	223:L P[178] 1500 mm/sec CNT80 ;
	224:L P[179] 1500 mm/sec CNT80 ;
	225: WELD_ON;
	226:L P[180] 13 mm/sec CNT40 ;
	227:L P[181] 13 mm/sec CNT20 ;
	228:L P[182] 13 mm/sec CNT0 ;
	229: WELD_OFF;
	230:L P[183] 1500 mm/sec CNT80 ;
	231:L P[184] 1500 mm/sec CNT0 ;
`


	stk8 =

		`	212:J P[169] 70% CNT30 ;
	213:L P[170] 1500 mm/sec CNT80 ;
	214:L P[171] 1500 mm/sec CNT80 ;
	215: WELD_ON;
	216:L P[172] 13 mm/sec CNT40 ;
	217:L P[173] 13 mm/sec CNT20 ;
	218:L P[174] 13 mm/sec CNT0 ;
	219: WELD_OFF;
	220:L P[175] 1500 mm/sec CNT80 ;
	221:L P[176] 1500 mm/sec CNT80 ;
`


	stm8 =

		`	222:J P[177] 70% CNT30 ;
	223:L P[178] 1500 mm/sec CNT80 ;
	224:L P[179] 1500 mm/sec CNT80 ;
	225: WELD_ON;
	226:L P[180] 13 mm/sec CNT40 ;
	227:L P[181] 13 mm/sec CNT20 ;
	228:L P[182] 13 mm/sec CNT0 ;
	229: WELD_OFF;
	230:L P[183] 1500 mm/sec CNT80 ;
	231:L P[184] 1500 mm/sec CNT0 ;	
`




	u3 =

		`	232: UFRAME_NUM=${uframe} ;
`

	nref =

		`	233:J P[185] 70% CNT30 ;
	234:L P[186] 1500 mm/sec CNT80 ;
	235:L P[187] 1500 mm/sec CNT80 ;
	236:L P[188] 1500 mm/sec CNT80 ;
	237: WELD_ON;
	238:L P[189] 15 mm/sec CNT40 ;
	239:L P[190] 15 mm/sec CNT20 ;
	240:L P[191] 15 mm/sec CNT0 ;
	241: WELD_OFF;
	242:L P[192] 1500 mm/sec CNT80 ;
	243:L P[193] 1500 mm/sec CNT80 ;
	244:J P[194] 70% CNT30 ;
	245:L P[195] 1500 mm/sec CNT80 ;
	246:L P[196] 1500 mm/sec CNT80 ;
	247:L P[197] 1500 mm/sec CNT80 ;
	248: WELD_ON;
	249:L P[198] 15 mm/sec CNT40 ;
	250:L P[199] 15 mm/sec CNT20 ;
	251:L P[200] 15 mm/sec CNT0 ;
	252: WELD_OFF;
	253:L P[201] 1500 mm/sec CNT80 ;
	254:L P[202] 1500 mm/sec CNT0 ;
	255:J P[203] 70% CNT30 ;
	256:L P[204] 1500 mm/sec CNT80 ;
	257:L P[205] 1500 mm/sec CNT80 ;
	258:L P[206] 1500 mm/sec CNT80 ;
	259: WELD_ON;
	260:L P[207] 30 mm/sec CNT40 ;
	261:L P[208] 30 mm/sec CNT40 ;
	262:L P[209] 30 mm/sec CNT0 ;
	263: WELD_OFF;
	264:L P[210] 1500 mm/sec CNT80 ;
	265:L P[211] 1500 mm/sec CNT80 ;
	266:J P[212] 70% CNT30 ;
	267:L P[213] 1500 mm/sec CNT80 ;
	268:L P[214] 1500 mm/sec CNT80 ;
	269: WELD_ON;
	270:L P[215] 30 mm/sec CNT40 ;
	271:L P[216] 30 mm/sec CNT40 ;
	272:L P[217] 30 mm/sec CNT0 ;
	273: WELD_OFF;
	274:L P[218] 1500 mm/sec CNT80 ;
	275:L P[219] 1500 mm/sec CNT80 ;
	276:J P[220] 70% CNT30 ;
	277:L P[221] 1500 mm/sec CNT80 ;
	278:L P[222] 1500 mm/sec CNT80 ;
	279:L P[223] 1500 mm/sec CNT80 ;
	280: WELD_ON;
	281:L P[224] 30 mm/sec CNT40 ;
	282:L P[225] 30 mm/sec CNT40 ;
	283:L P[226] 30 mm/sec CNT0 ;
	284: WELD_OFF;
	285:L P[227] 1500 mm/sec CNT80 ;
	286:L P[228] 1500 mm/sec CNT0 ;
	287:J P[229] 70% CNT30 ;
	288:L P[230] 1500 mm/sec CNT80 ;
	289:L P[231] 1500 mm/sec CNT80 ;
	290:L P[232] 1500 mm/sec CNT80 ;
	291: WELD_ON;
	292:L P[233] 10 mm/sec CNT40 ;
	293:L P[234] 10 mm/sec CNT80 ;
	294:L P[235] 10 mm/sec CNT80 ;
	295:L P[236] 10 mm/sec CNT20 ;
	296:L P[237] 10 mm/sec CNT0 ;
	297: WELD_OFF;
	298:L P[238] 1500 mm/sec CNT80 ;
	299:L P[239] 1500 mm/sec CNT0 ;
`


	u4 =

		`	300: UFRAME_NUM=${nframe} ;
`


	nst1 =

		`	301:J P[240] 70% CNT30 ;
	302:L P[241] 1500 mm/sec CNT80 ;
	303:L P[242] 1500 mm/sec CNT80 ;
	304:L P[243] 1500 mm/sec CNT80 ;
	305: WELD_ON;
	306:L P[244] 13 mm/sec CNT40 ;
	307:L P[245] 13 mm/sec CNT20 ;
	308:L P[246] 13 mm/sec CNT0 ;
	309: WELD_OFF;
	310:L P[247] 1500 mm/sec CNT80 ;
	311:L P[248] 1500 mm/sec CNT80 ;
	312:J P[249] 70% CNT30 ;
	313:L P[250] 1500 mm/sec CNT80 ;
	314:L P[251] 1500 mm/sec CNT80 ;
	315: WELD_ON;
	316:L P[252] 13 mm/sec CNT40 ;
	317:L P[253] 13 mm/sec CNT20 ;
	318:L P[254] 13 mm/sec CNT0 ;
	319: WELD_OFF;
	320:L P[255] 1500 mm/sec CNT80 ;
	321:L P[256] 1500 mm/sec CNT80 ;
`

	nst2 =

		`	322:J P[257] 70% CNT30 ;
	323:L P[258] 1500 mm/sec CNT80 ;
	324:L P[259] 1500 mm/sec CNT80 ;
	325: WELD_ON;
	326:L P[260] 13 mm/sec CNT40 ;
	327:L P[261] 13 mm/sec CNT20 ;
	328:L P[262] 13 mm/sec CNT0 ;
	329: WELD_OFF;
	330:L P[263] 1500 mm/sec CNT80 ;
	331:L P[264] 1500 mm/sec CNT80 ;
	332:J P[265] 70% CNT30 ;
	333:L P[266] 1500 mm/sec CNT80 ;
	334:L P[267] 1500 mm/sec CNT80 ;
	335: WELD_ON;
	336:L P[268] 13 mm/sec CNT40 ;
	337:L P[269] 13 mm/sec CNT20 ;
	338:L P[270] 13 mm/sec CNT0 ;
	339: WELD_OFF;
	340:L P[271] 1500 mm/sec CNT80 ;
	341:L P[272] 1500 mm/sec CNT80 ;
`

	nst3 =

		`	342:J P[273] 70% CNT30 ;
	343:L P[274] 1500 mm/sec CNT80 ;
	344:L P[275] 1500 mm/sec CNT80 ;
	345: WELD_ON;
	346:L P[276] 13 mm/sec CNT40 ;
	347:L P[277] 13 mm/sec CNT20 ;
	348:L P[278] 13 mm/sec CNT0 ;
	349: WELD_OFF;
	350:L P[279] 1500 mm/sec CNT80 ;
	351:L P[280] 1500 mm/sec CNT80 ;
	352:J P[281] 70% CNT30 ;
	353:L P[282] 1500 mm/sec CNT80 ;
	354:L P[283] 1500 mm/sec CNT80 ;
	355: WELD_ON;
	356:L P[284] 13 mm/sec CNT40 ;
	357:L P[285] 13 mm/sec CNT20 ;
	358:L P[286] 13 mm/sec CNT0 ;
	359: WELD_OFF;
	360:L P[287] 1500 mm/sec CNT80 ;
	361:L P[288] 1500 mm/sec CNT80 ;
`

	nst4 =

		`	362:J P[289] 70% CNT30 ;
	363:L P[290] 1500 mm/sec CNT80 ;
	364:L P[291] 1500 mm/sec CNT80 ;
	365: WELD_ON;
	366:L P[292] 13 mm/sec CNT40 ;
	367:L P[293] 13 mm/sec CNT20 ;
	368:L P[294] 13 mm/sec CNT0 ;
	369: WELD_OFF;
	370:L P[295] 1500 mm/sec CNT80 ;
	371:L P[296] 1500 mm/sec CNT80 ;
	372:J P[297] 70% CNT30 ;
	373:L P[298] 1500 mm/sec CNT80 ;
	374:L P[299] 1500 mm/sec CNT80 ;
	375: WELD_ON;
	376:L P[300] 13 mm/sec CNT40 ;
	377:L P[301] 13 mm/sec CNT20 ;
	378:L P[302] 13 mm/sec CNT0 ;
	379: WELD_OFF;
	380:L P[303] 1500 mm/sec CNT80 ;
	381:L P[304] 1500 mm/sec CNT80 ;
`

	nst5 =

		`	382:J P[305] 70% CNT30 ;
	383:L P[306] 1500 mm/sec CNT80 ;
	384:L P[307] 1500 mm/sec CNT80 ;
	385: WELD_ON;
	386:L P[308] 13 mm/sec CNT40 ;
	387:L P[309] 13 mm/sec CNT20 ;
	388:L P[310] 13 mm/sec CNT0 ;
	389: WELD_OFF;
	390:L P[311] 1500 mm/sec CNT80 ;
	391:L P[312] 1500 mm/sec CNT80 ;
	392:J P[313] 70% CNT30 ;
	393:L P[314] 1500 mm/sec CNT80 ;
	394:L P[315] 1500 mm/sec CNT80 ;
	395: WELD_ON;
	396:L P[316] 13 mm/sec CNT40 ;
	397:L P[317] 13 mm/sec CNT20 ;
	398:L P[318] 13 mm/sec CNT0 ;
	399: WELD_OFF;
	400:L P[319] 1500 mm/sec CNT80 ;
	401:L P[320] 1500 mm/sec CNT80 ;
`

	nst6 =

		`	402:J P[321] 70% CNT30 ;
	403:L P[322] 1500 mm/sec CNT80 ;
	404:L P[323] 1500 mm/sec CNT80 ;
	405: WELD_ON;
	406:L P[324] 13 mm/sec CNT40 ;
	407:L P[325] 13 mm/sec CNT20 ;
	408:L P[326] 13 mm/sec CNT0 ;
	409: WELD_OFF;
	410:L P[327] 1500 mm/sec CNT80 ;
	411:L P[328] 1500 mm/sec CNT80 ;
	412:J P[329] 70% CNT30 ;
	413:L P[330] 1500 mm/sec CNT80 ;
	414:L P[331] 1500 mm/sec CNT80 ;
	415: WELD_ON;
	416:L P[332] 13 mm/sec CNT40 ;
	417:L P[333] 13 mm/sec CNT20 ;
	418:L P[334] 13 mm/sec CNT0 ;
	419: WELD_OFF;
	420:L P[335] 1500 mm/sec CNT80 ;
	421:L P[336] 1500 mm/sec CNT80 ;
`

	nst7 =

		`	422:J P[337] 70% CNT30 ;
	423:L P[338] 1500 mm/sec CNT80 ;
	424:L P[339] 1500 mm/sec CNT80 ;
	425:L P[340] 1500 mm/sec CNT80 ;
	426: WELD_ON;
	427:L P[341] 13 mm/sec CNT40 ;
	428:L P[342] 13 mm/sec CNT20 ;
	429:L P[343] 13 mm/sec CNT0 ;
	430: WELD_OFF;
	431:L P[344] 1500 mm/sec CNT80 ;
	432:L P[345] 1500 mm/sec CNT80 ;
	433:J P[346] 70% CNT30 ;
	434:L P[347] 1500 mm/sec CNT80 ;
	435:L P[348] 1500 mm/sec CNT80 ;
	436: WELD_ON;
	437:L P[349] 13 mm/sec CNT40 ;
	438:L P[350] 13 mm/sec CNT20 ;
	439:L P[351] 13 mm/sec CNT0 ;
	440: WELD_OFF;
	441:L P[352] 1500 mm/sec CNT80 ;
	442:L P[353] 1500 mm/sec CNT80 ;
`

	nst8 =

		`	443:J P[354] 70% CNT30 ;
	444:L P[355] 1500 mm/sec CNT80 ;
	445:L P[356] 1500 mm/sec CNT80 ;
	446: WELD_ON;
	447:L P[357] 13 mm/sec CNT40 ;
	448:L P[358] 13 mm/sec CNT20 ;
	449:L P[359] 13 mm/sec CNT0 ;
	450: WELD_OFF;
	451:L P[360] 1500 mm/sec CNT80 ;
	452:L P[361] 1500 mm/sec CNT80 ;
	453:J P[362] 70% CNT30 ;
	454:L P[363] 1500 mm/sec CNT80 ;
	455:L P[364] 1500 mm/sec CNT80 ;
	456: WELD_ON;
	457:L P[365] 13 mm/sec CNT40 ;
	458:L P[366] 13 mm/sec CNT20 ;
	459:L P[367] 13 mm/sec CNT0 ;
	460: WELD_OFF;
	461:L P[368] 1500 mm/sec CNT80 ;
	462:L P[369] 1500 mm/sec CNT0 ;
`


	///      350

	nstm1 =

		`	301:J P[240] 70% CNT30 ;
	302:L P[241] 1500 mm/sec CNT80 ;
	303:L P[242] 1500 mm/sec CNT80 ;
	304:L P[243] 1500 mm/sec CNT80 ;
	305: WELD_ON;
	306:L P[244] 13 mm/sec CNT40 ;
	307:L P[245] 13 mm/sec CNT20 ;
	308:L P[246] 13 mm/sec CNT0 ;
	309: WELD_OFF;
	310:L P[247] 1500 mm/sec CNT80 ;
	311:L P[248] 1500 mm/sec CNT80 ;
`

	nstm2 =

		`	322:J P[257] 70% CNT30 ;
	323:L P[258] 1500 mm/sec CNT80 ;
	324:L P[259] 1500 mm/sec CNT80 ;
	325: WELD_ON;
	326:L P[260] 13 mm/sec CNT40 ;
	327:L P[261] 13 mm/sec CNT20 ;
	328:L P[262] 13 mm/sec CNT0 ;
	329: WELD_OFF;
	330:L P[263] 1500 mm/sec CNT80 ;
	331:L P[264] 1500 mm/sec CNT80 ;
`

	nstm3 =

		`	342:J P[273] 70% CNT30 ;
	343:L P[274] 1500 mm/sec CNT80 ;
	344:L P[275] 1500 mm/sec CNT80 ;
	345: WELD_ON;
	346:L P[276] 13 mm/sec CNT40 ;
	347:L P[277] 13 mm/sec CNT20 ;
	348:L P[278] 13 mm/sec CNT0 ;
	349: WELD_OFF;
	350:L P[279] 1500 mm/sec CNT80 ;
	351:L P[280] 1500 mm/sec CNT80 ;
`

	nstm4 =

		`	362:J P[289] 70% CNT30 ;
	363:L P[290] 1500 mm/sec CNT80 ;
	364:L P[291] 1500 mm/sec CNT80 ;
	365: WELD_ON;
	366:L P[292] 13 mm/sec CNT40 ;
	367:L P[293] 13 mm/sec CNT20 ;
	368:L P[294] 13 mm/sec CNT0 ;
	369: WELD_OFF;
	370:L P[295] 1500 mm/sec CNT80 ;
	371:L P[296] 1500 mm/sec CNT80 ;
`

	nstm5 =

		`	382:J P[305] 70% CNT30 ;
	383:L P[306] 1500 mm/sec CNT80 ;
	384:L P[307] 1500 mm/sec CNT80 ;
	385: WELD_ON;
	386:L P[308] 13 mm/sec CNT40 ;
	387:L P[309] 13 mm/sec CNT20 ;
	388:L P[310] 13 mm/sec CNT0 ;
	389: WELD_OFF;
	390:L P[311] 1500 mm/sec CNT80 ;
	391:L P[312] 1500 mm/sec CNT80 ;
`

	nstm6 =

		`	402:J P[321] 70% CNT30 ;
	403:L P[322] 1500 mm/sec CNT80 ;
	404:L P[323] 1500 mm/sec CNT80 ;
	405: WELD_ON;
	406:L P[324] 13 mm/sec CNT40 ;
	407:L P[325] 13 mm/sec CNT20 ;
	408:L P[326] 13 mm/sec CNT0 ;
	409: WELD_OFF;
	410:L P[327] 1500 mm/sec CNT80 ;
	411:L P[328] 1500 mm/sec CNT80 ;
`

	nstm7 =

		`	422:J P[337] 70% CNT30 ;
	423:L P[338] 1500 mm/sec CNT80 ;
	424:L P[339] 1500 mm/sec CNT80 ;
	425:L P[340] 1500 mm/sec CNT80 ;
	426: WELD_ON;
	427:L P[341] 13 mm/sec CNT40 ;
	428:L P[342] 13 mm/sec CNT20 ;
	429:L P[343] 13 mm/sec CNT0 ;
	430: WELD_OFF;
	431:L P[344] 1500 mm/sec CNT80 ;
	432:L P[345] 1500 mm/sec CNT80 ;
`

	nstm8 =

		`	443:J P[354] 70% CNT30 ;
	444:L P[355] 1500 mm/sec CNT80 ;
	445:L P[356] 1500 mm/sec CNT80 ;
	446: WELD_ON;
	447:L P[357] 13 mm/sec CNT40 ;
	448:L P[358] 13 mm/sec CNT20 ;
	449:L P[359] 13 mm/sec CNT0 ;
	450: WELD_OFF;
	451:L P[360] 1500 mm/sec CNT80 ;
	452:L P[361] 1500 mm/sec CNT80 ;
`

	///     350


	u5 =

		`	463: UFRAME_NUM=${uframe} ;
`

	i1 =

		`	464:J P[370] 70% CNT30 ;
	465:L P[371] 1500 mm/sec CNT80 ;
	466:L P[372] 1500 mm/sec CNT80 ;
	467:L P[373] 1500 mm/sec CNT80 ;
	468: WELD_ON;
	469:L P[374] 17 mm/sec CNT40 ;
	470:L P[375] 17 mm/sec CNT20 ;
	471:L P[376] 17 mm/sec CNT0 ;
	472: WELD_OFF;
	473:L P[377] 1500 mm/sec CNT80 ;
	474:L P[378] 1500 mm/sec CNT80 ;
`

	i2 =

		`	475:J P[379] 70% CNT30 ;
	476:L P[380] 1500 mm/sec CNT80 ;
	477:L P[381] 1500 mm/sec CNT80 ;
	478: WELD_ON;
	479:L P[382] 17 mm/sec CNT40 ;
	480:L P[383] 17 mm/sec CNT20 ;
	481:L P[384] 17 mm/sec CNT0 ;
	482: WELD_OFF;
	483:L P[385] 1500 mm/sec CNT80 ;
	484:L P[386] 1500 mm/sec CNT80 ;
`

	i3 =

		`	485:J P[387] 70% CNT30 ;
	486:L P[388] 1500 mm/sec CNT80 ;
	487:L P[389] 1500 mm/sec CNT80 ;
	488: WELD_ON;
	489:L P[390] 17 mm/sec CNT40 ;
	490:L P[391] 17 mm/sec CNT20 ;
	491:L P[392] 17 mm/sec CNT0 ;
	492: WELD_OFF;
	493:L P[393] 1500 mm/sec CNT80 ;
	494:L P[394] 1500 mm/sec CNT80 ;
`

	i4 =

		`	495:J P[395] 70% CNT30 ;
	496:L P[396] 1500 mm/sec CNT80 ;
	497:L P[397] 1500 mm/sec CNT80 ;
	498: WELD_ON;
	499:L P[398] 17 mm/sec CNT40 ;
	500:L P[399] 17 mm/sec CNT20 ;
	501:L P[400] 17 mm/sec CNT0 ;
	502: WELD_OFF;
	503:L P[401] 1500 mm/sec CNT80 ;
	504:L P[402] 1500 mm/sec CNT80 ;
`

	i5 =

		`	505:J P[403] 70% CNT30 ;
	506:L P[404] 1500 mm/sec CNT80 ;
	507:L P[405] 1500 mm/sec CNT80 ;
	508: WELD_ON;
	509:L P[406] 17 mm/sec CNT40 ;
	510:L P[407] 17 mm/sec CNT20 ;
	511:L P[408] 17 mm/sec CNT0 ;
	512: WELD_OFF;
	513:L P[409] 1500 mm/sec CNT80 ;
	514:L P[410] 1500 mm/sec CNT80 ;
`

	i6 =

		`	515:J P[411] 70% CNT30 ;
	516:L P[412] 1500 mm/sec CNT80 ;
	517:L P[413] 1500 mm/sec CNT80 ;
	518: WELD_ON;
	519:L P[414] 17 mm/sec CNT40 ;
	520:L P[415] 17 mm/sec CNT20 ;
	521:L P[416] 17 mm/sec CNT0 ;
	522: WELD_OFF;
	523:L P[417] 1500 mm/sec CNT80 ;
	524:L P[418] 1500 mm/sec CNT80 ;
`

	i7 =

		`	525:J P[419] 70% CNT30 ;
	526:L P[420] 1500 mm/sec CNT80 ;
	527:L P[421] 1500 mm/sec CNT80 ;
	528: WELD_ON;
	529:L P[422] 17 mm/sec CNT40 ;
	530:L P[423] 17 mm/sec CNT20 ;
	531:L P[424] 17 mm/sec CNT0 ;
	532: WELD_OFF;
	533:L P[425] 1500 mm/sec CNT80 ;
	534:L P[426] 1500 mm/sec CNT80 ;
`

	i8 =

		`	535:J P[427] 70% CNT30 ;
	536:L P[428] 1500 mm/sec CNT80 ;
	537:L P[429] 1500 mm/sec CNT80 ;
	538: WELD_ON;
	539:L P[430] 17 mm/sec CNT40 ;
	540:L P[431] 17 mm/sec CNT20 ;
	541:L P[432] 17 mm/sec CNT0 ;
	542: WELD_OFF;
	543:L P[433] 1500 mm/sec CNT80 ;
	544:L P[434] 1500 mm/sec CNT0 ;
`

	i11 =

		`	545:J P[435] 70% CNT30 ;
	546:L P[436] 1500 mm/sec CNT80 ;
	547:L P[437] 1500 mm/sec CNT80 ;
	548:L P[438] 1500 mm/sec CNT80 ;
	549: WELD_ON;
	550:L P[439] 17 mm/sec CNT40 ;
	551:L P[440] 17 mm/sec CNT20 ;
	552:L P[441] 17 mm/sec CNT0 ;
	553: WELD_OFF;
	554:L P[442] 1500 mm/sec CNT80 ;
	555:L P[443] 1500 mm/sec CNT80 ;
`

	i12 =

		`	556:J P[444] 70% CNT30 ;
	557:L P[445] 1500 mm/sec CNT80 ;
	558:L P[446] 1500 mm/sec CNT80 ;
	559: WELD_ON;
	560:L P[447] 17 mm/sec CNT40 ;
	561:L P[448] 17 mm/sec CNT20 ;
	562:L P[449] 17 mm/sec CNT0 ;
	563: WELD_OFF;
	564:L P[450] 1500 mm/sec CNT80 ;
	565:L P[451] 1500 mm/sec CNT80 ;
`

	i13 =

		`	566:J P[452] 70% CNT30 ;
	567:L P[453] 1500 mm/sec CNT80 ;
	568:L P[454] 1500 mm/sec CNT80 ;
	569: WELD_ON;
	570:L P[455] 17 mm/sec CNT40 ;
	571:L P[456] 17 mm/sec CNT20 ;
	572:L P[457] 17 mm/sec CNT0 ;
	573: WELD_OFF;
	574:L P[458] 1500 mm/sec CNT80 ;
	575:L P[459] 1500 mm/sec CNT80 ;
`

	i14 =

		`	576:J P[460] 70% CNT30 ;
	577:L P[461] 1500 mm/sec CNT80 ;
	578:L P[462] 1500 mm/sec CNT80 ;
	579: WELD_ON;
	580:L P[463] 17 mm/sec CNT40 ;
	581:L P[464] 17 mm/sec CNT20 ;
	582:L P[465] 17 mm/sec CNT0 ;
	583: WELD_OFF;
	584:L P[466] 1500 mm/sec CNT80 ;
	585:L P[467] 1500 mm/sec CNT80 ;
`

	i15 =

		`	586:J P[468] 70% CNT30 ;
	587:L P[469] 1500 mm/sec CNT80 ;
	588:L P[470] 1500 mm/sec CNT80 ;
	589: WELD_ON;
	590:L P[471] 17 mm/sec CNT40 ;
	591:L P[472] 17 mm/sec CNT20 ;
	592:L P[473] 17 mm/sec CNT0 ;
	593: WELD_OFF;
	594:L P[474] 1500 mm/sec CNT80 ;
	595:L P[475] 1500 mm/sec CNT80 ;
`

	i16 =

		`	596:J P[476] 70% CNT30 ;
	597:L P[477] 1500 mm/sec CNT80 ;
	598:L P[478] 1500 mm/sec CNT80 ;
	599: WELD_ON;
	600:L P[479] 17 mm/sec CNT40 ;
	601:L P[480] 17 mm/sec CNT20 ;
	602:L P[481] 17 mm/sec CNT0 ;
	603: WELD_OFF;
	604:L P[482] 1500 mm/sec CNT80 ;
	605:L P[483] 1500 mm/sec CNT80 ;
`

	i17 =

		`	606:J P[484] 70% CNT30 ;
	607:L P[485] 1500 mm/sec CNT80 ;
	608:L P[486] 1500 mm/sec CNT80 ;
	609: WELD_ON;
	610:L P[487] 17 mm/sec CNT40 ;
	611:L P[488] 17 mm/sec CNT20 ;
	612:L P[489] 17 mm/sec CNT0 ;
	613: WELD_OFF;
	614:L P[490] 1500 mm/sec CNT80 ;
	615:L P[491] 1500 mm/sec CNT80 ;
`

	i18 =

		`	616:J P[492] 70% CNT30 ;
	617:L P[493] 1500 mm/sec CNT80 ;
	618:L P[494] 1500 mm/sec CNT80 ;
	619: WELD_ON;
	620:L P[495] 17 mm/sec CNT40 ;
	621:L P[496] 17 mm/sec CNT20 ;
	622:L P[497] 17 mm/sec CNT0 ;
	623: WELD_OFF;
	624:L P[498] 1500 mm/sec CNT80 ;
	625:L P[499] 1500 mm/sec CNT0 ;
`


	i21 =

		`	626:J P[500] 70% CNT30 ;
	627:L P[501] 1500 mm/sec CNT80 ;
	628:L P[502] 1500 mm/sec CNT80 ;
	629:L P[503] 1500 mm/sec CNT80 ;
	630: WELD_ON;
	631:L P[504] 17 mm/sec CNT40 ;
	632:L P[505] 17 mm/sec CNT20 ;
	633:L P[506] 17 mm/sec CNT0 ;
	634: WELD_OFF;
	635:L P[507] 1500 mm/sec CNT80 ;
	636:L P[508] 1500 mm/sec CNT80 ;
`

	i22 =

		`	637:J P[509] 70% CNT30 ;
	638:L P[510] 1500 mm/sec CNT80 ;
	639:L P[511] 1500 mm/sec CNT80 ;
	640: WELD_ON;
	641:L P[512] 17 mm/sec CNT40 ;
	642:L P[513] 17 mm/sec CNT20 ;
	643:L P[514] 17 mm/sec CNT0 ;
	644: WELD_OFF;
	645:L P[515] 1500 mm/sec CNT80 ;
	646:L P[516] 1500 mm/sec CNT80 ;
`

	i23 =

		`	647:J P[517] 70% CNT30 ;
	648:L P[518] 1500 mm/sec CNT80 ;
	649:L P[519] 1500 mm/sec CNT80 ;
	650: WELD_ON;
	651:L P[520] 17 mm/sec CNT40 ;
	652:L P[521] 17 mm/sec CNT20 ;
	653:L P[522] 17 mm/sec CNT0 ;
	654: WELD_OFF;
	655:L P[523] 1500 mm/sec CNT80 ;
	656:L P[524] 1500 mm/sec CNT80 ;
`

	i24 =

		`	657:J P[525] 70% CNT30 ;
	658:L P[526] 1500 mm/sec CNT80 ;
	659:L P[527] 1500 mm/sec CNT80 ;
	660: WELD_ON;
	661:L P[528] 17 mm/sec CNT40 ;
	662:L P[529] 17 mm/sec CNT20 ;
	663:L P[530] 17 mm/sec CNT0 ;
	664: WELD_OFF;
	665:L P[531] 1500 mm/sec CNT80 ;
	666:L P[532] 1500 mm/sec CNT80 ;
`

	i25 =

		`	667:J P[533] 70% CNT30 ;
	668:L P[534] 1500 mm/sec CNT80 ;
	669:L P[535] 1500 mm/sec CNT80 ;
	670: WELD_ON;
	671:L P[536] 17 mm/sec CNT40 ;
	672:L P[537] 17 mm/sec CNT20 ;
	673:L P[538] 17 mm/sec CNT0 ;
	674: WELD_OFF;
	675:L P[539] 1500 mm/sec CNT80 ;
	676:L P[540] 1500 mm/sec CNT80 ;
`

	i26 =

		`	677:J P[541] 70% CNT30 ;
	678:L P[542] 1500 mm/sec CNT80 ;
	679:L P[543] 1500 mm/sec CNT80 ;
	680: WELD_ON;
	681:L P[544] 17 mm/sec CNT40 ;
	682:L P[545] 17 mm/sec CNT20 ;
	683:L P[546] 17 mm/sec CNT0 ;
	684: WELD_OFF;
	685:L P[547] 1500 mm/sec CNT80 ;
	686:L P[548] 1500 mm/sec CNT80 ;
`

	i27 =

		`	687:J P[549] 70% CNT30 ;
	688:L P[550] 1500 mm/sec CNT80 ;
	689:L P[551] 1500 mm/sec CNT80 ;
	690: WELD_ON;
	691:L P[552] 17 mm/sec CNT40 ;
	692:L P[553] 17 mm/sec CNT20 ;
	693:L P[554] 17 mm/sec CNT0 ;
	694: WELD_OFF;
	695:L P[555] 1500 mm/sec CNT80 ;
	696:L P[556] 1500 mm/sec CNT80 ;
`

	i28 =

		`	697:J P[557] 70% CNT30 ;
	698:L P[558] 1500 mm/sec CNT80 ;
	699:L P[559] 1500 mm/sec CNT80 ;
	700: WELD_ON;
	701:L P[560] 17 mm/sec CNT40 ;
	702:L P[561] 17 mm/sec CNT20 ;
	703:L P[562] 17 mm/sec CNT0 ;
	704: WELD_OFF;
	705:L P[563] 1500 mm/sec CNT80 ;
	706:L P[564] 1500 mm/sec CNT0 ;
`

	i31 =

		`	707:J P[565] 70% CNT30 ;
	708:L P[566] 1500 mm/sec CNT80 ;
	709:L P[567] 1500 mm/sec CNT80 ;
	710:L P[568] 1500 mm/sec CNT80 ;
	711: WELD_ON;
	712:L P[569] 17 mm/sec CNT40 ;
	713:L P[570] 17 mm/sec CNT20 ;
	714:L P[571] 17 mm/sec CNT0 ;
	715: WELD_OFF;
	716:L P[572] 1500 mm/sec CNT80 ;
	717:L P[573] 1500 mm/sec CNT80 ;
`

	i32 =

		`	718:J P[574] 70% CNT30 ;
	719:L P[575] 1500 mm/sec CNT80 ;
	720:L P[576] 1500 mm/sec CNT80 ;
	721: WELD_ON;
	722:L P[577] 17 mm/sec CNT40 ;
	723:L P[578] 17 mm/sec CNT20 ;
	724:L P[579] 17 mm/sec CNT0 ;
	725: WELD_OFF;
	726:L P[580] 1500 mm/sec CNT80 ;
	727:L P[581] 1500 mm/sec CNT80 ;
`

	i33 =

		`	728:J P[582] 70% CNT30 ;
	729:L P[583] 1500 mm/sec CNT80 ;
	730:L P[584] 1500 mm/sec CNT80 ;
	731: WELD_ON;
	732:L P[585] 17 mm/sec CNT40 ;
	733:L P[586] 17 mm/sec CNT20 ;
	734:L P[587] 17 mm/sec CNT0 ;
	735: WELD_OFF;
	736:L P[588] 1500 mm/sec CNT80 ;
	737:L P[589] 1500 mm/sec CNT80 ;
`

	i34 =

		`	738:J P[590] 70% CNT30 ;
	739:L P[591] 1500 mm/sec CNT80 ;
	740:L P[592] 1500 mm/sec CNT80 ;
	741: WELD_ON;
	742:L P[593] 17 mm/sec CNT40 ;
	743:L P[594] 17 mm/sec CNT20 ;
	744:L P[595] 17 mm/sec CNT0 ;
	745: WELD_OFF;
	746:L P[596] 1500 mm/sec CNT80 ;
	747:L P[597] 1500 mm/sec CNT80 ;
`

	i35 =

		`	748:J P[598] 70% CNT30 ;
	749:L P[599] 1500 mm/sec CNT80 ;
	750:L P[600] 1500 mm/sec CNT80 ;
	751: WELD_ON;
	752:L P[601] 17 mm/sec CNT40 ;
	753:L P[602] 17 mm/sec CNT20 ;
	754:L P[603] 17 mm/sec CNT0 ;
	755: WELD_OFF;
	756:L P[604] 1500 mm/sec CNT80 ;
	757:L P[605] 1500 mm/sec CNT80 ;
`

	i36 =

		`	758:J P[606] 70% CNT30 ;
	759:L P[607] 1500 mm/sec CNT80 ;
	760:L P[608] 1500 mm/sec CNT80 ;
	761: WELD_ON;
	762:L P[609] 17 mm/sec CNT40 ;
	763:L P[610] 17 mm/sec CNT20 ;
	764:L P[611] 17 mm/sec CNT0 ;
	765: WELD_OFF;
	766:L P[612] 1500 mm/sec CNT80 ;
	767:L P[613] 1500 mm/sec CNT80 ;
`

	i37 =

		`	768:J P[614] 70% CNT30 ;
	769:L P[615] 1500 mm/sec CNT80 ;
	770:L P[616] 1500 mm/sec CNT80 ;
	771: WELD_ON;
	772:L P[617] 17 mm/sec CNT40 ;
	773:L P[618] 17 mm/sec CNT20 ;
	774:L P[619] 17 mm/sec CNT0 ;
	775: WELD_OFF;
	776:L P[620] 1500 mm/sec CNT80 ;
	777:L P[621] 1500 mm/sec CNT80 ;
`

	i38 =

		`	778:J P[622] 70% CNT30 ;
	779:L P[623] 1500 mm/sec CNT80 ;
	780:L P[624] 1500 mm/sec CNT80 ;
	781: WELD_ON;
	782:L P[625] 17 mm/sec CNT40 ;
	783:L P[626] 17 mm/sec CNT20 ;
	784:L P[627] 17 mm/sec CNT0 ;
	785: WELD_OFF;
	786:L P[628] 1500 mm/sec CNT80 ;
	787:L P[629] 1500 mm/sec CNT0 ;
`


	u6 =

		`	788: UFRAME_NUM=${uframe} ;
`



	up1 =

		`	1200: PAUSE;	
	789:J P[630] 70% CNT30 ;
	790:L P[631] 1500 mm/sec CNT80 ;
	791:L P[632] 1500 mm/sec CNT80 ;
	792:L P[633] 1500 mm/sec CNT80 ;
	793: WELD_ON;
	794:L P[634] 15 mm/sec CNT40 ;
	795:L P[635] 15 mm/sec CNT20 ;
	796:L P[636] 15 mm/sec CNT0 ;
	797: WELD_OFF;
	798:L P[637] 1500 mm/sec CNT80 ;
	799:L P[638] 1500 mm/sec CNT80 ;
`

	up2 =

		`	800:J P[639] 70% CNT30 ;
	801:L P[640] 1500 mm/sec CNT80 ;
	802:L P[641] 1500 mm/sec CNT80 ;
	803: WELD_ON;
	804:L P[642] 15 mm/sec CNT40 ;
	805:L P[643] 15 mm/sec CNT20 ;
	806:L P[644] 15 mm/sec CNT0 ;
	807: WELD_OFF;
	808:L P[645] 1500 mm/sec CNT80 ;
	809:L P[646] 1500 mm/sec CNT80 ;
`

	up3 =

		`	810:J P[647] 70% CNT30 ;
	811:L P[648] 1500 mm/sec CNT80 ;
	812:L P[649] 1500 mm/sec CNT80 ;
	813: WELD_ON;
	814:L P[650] 15 mm/sec CNT40 ;
	815:L P[651] 15 mm/sec CNT20 ;
	816:L P[652] 15 mm/sec CNT0 ;
	817: WELD_OFF;
	818:L P[653] 1500 mm/sec CNT80 ;
	819:L P[654] 1500 mm/sec CNT80 ;
`

	up4 =

		`	820:J P[655] 70% CNT30 ;
	821:L P[656] 1500 mm/sec CNT80 ;
	822:L P[657] 1500 mm/sec CNT80 ;
	823: WELD_ON;
	824:L P[658] 15 mm/sec CNT40 ;
	825:L P[659] 15 mm/sec CNT20 ;
	826:L P[660] 15 mm/sec CNT0 ;
	827: WELD_OFF;
	828:L P[661] 1500 mm/sec CNT80 ;
	829:L P[662] 1500 mm/sec CNT80 ;
`

	up5 =

		`	830:J P[663] 70% CNT30 ;
	831:L P[664] 1500 mm/sec CNT80 ;
	832:L P[665] 1500 mm/sec CNT80 ;
	833: WELD_ON;
	834:L P[666] 15 mm/sec CNT40 ;
	835:L P[667] 15 mm/sec CNT20 ;
	836:L P[668] 15 mm/sec CNT0 ;
	837: WELD_OFF;
	838:L P[669] 1500 mm/sec CNT80 ;
	839:L P[670] 1500 mm/sec CNT80 ;
`

	up6 =

		`	840:J P[671] 70% CNT30 ;
	841:L P[672] 1500 mm/sec CNT80 ;
	842:L P[673] 1500 mm/sec CNT80 ;
	843: WELD_ON;
	844:L P[674] 15 mm/sec CNT40 ;
	845:L P[675] 15 mm/sec CNT20 ;
	846:L P[676] 15 mm/sec CNT0 ;
	847: WELD_OFF;
	848:L P[677] 1500 mm/sec CNT80 ;
	849:L P[678] 1500 mm/sec CNT80 ;
`

	up7 =

		`	850:J P[679] 70% CNT30 ;
	851:L P[680] 1500 mm/sec CNT80 ;
	852:L P[681] 1500 mm/sec CNT80 ;
	853: WELD_ON;
	854:L P[682] 15 mm/sec CNT40 ;
	855:L P[683] 15 mm/sec CNT20 ;
	856:L P[684] 15 mm/sec CNT0 ;
	857: WELD_OFF;
	858:L P[685] 1500 mm/sec CNT80 ;
	859:L P[686] 1500 mm/sec CNT80 ;
`

	up8 =

		`	860:J P[687] 70% CNT30 ;
	861:L P[688] 1500 mm/sec CNT80 ;
	862:L P[689] 1500 mm/sec CNT80 ;
	863: WELD_ON;
	864:L P[690] 15 mm/sec CNT40 ;
	865:L P[691] 15 mm/sec CNT20 ;
	866:L P[692] 15 mm/sec CNT0 ;
	867: WELD_OFF;
	868:L P[693] 1500 mm/sec CNT80 ;
	869:L P[694] 1500 mm/sec CNT0 ;
`

	up11 =

		`	870:J P[695] 70% CNT30 ;
	871:L P[696] 1500 mm/sec CNT80 ;
	872:L P[697] 1500 mm/sec CNT80 ;
	873:L P[698] 1500 mm/sec CNT80 ;
	874: WELD_ON;
	875:L P[699] 15 mm/sec CNT40 ;
	876:L P[700] 15 mm/sec CNT20 ;
	877:L P[701] 15 mm/sec CNT0 ;
	878: WELD_OFF;
	879:L P[702] 1500 mm/sec CNT80 ;
	880:L P[703] 1500 mm/sec CNT80 ;
`

	up12 =

		`	881:J P[704] 70% CNT30 ;
	882:L P[705] 1500 mm/sec CNT80 ;
	883:L P[706] 1500 mm/sec CNT80 ;
	884: WELD_ON;
	885:L P[707] 15 mm/sec CNT40 ;
	886:L P[708] 15 mm/sec CNT20 ;
	887:L P[709] 15 mm/sec CNT0 ;
	888: WELD_OFF;
	889:L P[710] 1500 mm/sec CNT80 ;
	890:L P[711] 1500 mm/sec CNT80 ;
`

	up13 =

		`	891:J P[712] 70% CNT30 ;
	892:L P[713] 1500 mm/sec CNT80 ;
	893:L P[714] 1500 mm/sec CNT80 ;
	894: WELD_ON;
	895:L P[715] 15 mm/sec CNT40 ;
	896:L P[716] 15 mm/sec CNT20 ;
	897:L P[717] 15 mm/sec CNT0 ;
	898: WELD_OFF;
	899:L P[718] 1500 mm/sec CNT80 ;
	900:L P[719] 1500 mm/sec CNT80 ;
`

	up14 =

		`	901:J P[720] 70% CNT30 ;
	902:L P[721] 1500 mm/sec CNT80 ;
	903:L P[722] 1500 mm/sec CNT80 ;
	904: WELD_ON;
	905:L P[723] 15 mm/sec CNT40 ;
	906:L P[724] 15 mm/sec CNT20 ;
	907:L P[725] 15 mm/sec CNT0 ;
	908: WELD_OFF;
	909:L P[726] 1500 mm/sec CNT80 ;
	910:L P[727] 1500 mm/sec CNT80 ;
`

	up15 =

		`	911:J P[728] 70% CNT30 ;
	912:L P[729] 1500 mm/sec CNT80 ;
	913:L P[730] 1500 mm/sec CNT80 ;
	914: WELD_ON;
	915:L P[731] 15 mm/sec CNT40 ;
	916:L P[732] 15 mm/sec CNT20 ;
	917:L P[733] 15 mm/sec CNT0 ;
	918: WELD_OFF;
	919:L P[734] 1500 mm/sec CNT80 ;
	920:L P[735] 1500 mm/sec CNT80 ;
`

	up16 =

		`	921:J P[736] 70% CNT30 ;
	922:L P[737] 1500 mm/sec CNT80 ;
	923:L P[738] 1500 mm/sec CNT80 ;
	924: WELD_ON;
	925:L P[739] 15 mm/sec CNT40 ;
	926:L P[740] 15 mm/sec CNT20 ;
	927:L P[741] 15 mm/sec CNT0 ;
	928: WELD_OFF;
	929:L P[742] 1500 mm/sec CNT80 ;
	930:L P[743] 1500 mm/sec CNT80 ;
`

	up17 =

		`	931:J P[744] 70% CNT30 ;
	932:L P[745] 1500 mm/sec CNT80 ;
	933:L P[746] 1500 mm/sec CNT80 ;
	934: WELD_ON;
	935:L P[747] 15 mm/sec CNT40 ;
	936:L P[748] 15 mm/sec CNT20 ;
	937:L P[749] 15 mm/sec CNT0 ;
	938: WELD_OFF;
	939:L P[750] 1500 mm/sec CNT80 ;
	940:L P[751] 1500 mm/sec CNT80 ;
`

	up18 =

		`	941:J P[752] 70% CNT30 ;
	942:L P[753] 1500 mm/sec CNT80 ;
	943:L P[754] 1500 mm/sec CNT80 ;
	944: WELD_ON;
	945:L P[755] 15 mm/sec CNT40 ;
	946:L P[756] 15 mm/sec CNT20 ;
	947:L P[757] 15 mm/sec CNT0 ;
	948: WELD_OFF;
	949:L P[758] 1500 mm/sec CNT80 ;
	950:L P[759] 1500 mm/sec CNT0 ;
`

	home =

		`	951:J P[760] 70% CNT30 ;
`

	refp =
		`
/POS
P[1]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 156.000 deg,	P = 060.000 deg,	R = 016.000 deg
};
P[2]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 156.000 deg,	P = 060.000 deg,	R = 016.000 deg
};
P[3]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = 58.000 mm,  Z = -10.000 mm,
	W = 156.000 deg,	P = 060.000 deg,	R = 016.000 deg
};
P[4]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 8.000 mm,  Y = 8.000 mm,  Z = -15.000 mm,
	W = 156.000 deg,	P = 060.000 deg,	R = 016.000 deg
};
P[5]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 8.000 mm,  Y = 8.000 mm,  Z = -15.000 mm,
	W = 156.000 deg,	P = 060.000 deg,	R = 016.000 deg
};
P[6]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 8.000 mm,  Y = 8.000 mm,  Z = -45.000 mm,
	W = 156.000 deg,	P = 060.000 deg,	R = 016.000 deg
};
P[7]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 8.000 mm,  Y = 8.000 mm,  Z = -45.000 mm,
	W = 156.000 deg,	P = 060.000 deg,	R = 016.000 deg
};
P[8]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = 58.000 mm,  Z = -10.000 mm,
	W = 156.000 deg,	P = 060.000 deg,	R = 016.000 deg
};
P[9]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 156.000 deg,	P = 060.000 deg,	R = 016.000 deg
};
P[10]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = 58.000 mm,  Z = 250.000 mm,
    W = 160.000 deg,	P = 065.000 deg,	R = 115.000 deg
};
P[11]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = 58.000 mm,  Z = -10.000 mm,
	W = 160.000 deg,	P = 065.000 deg,	R = 115.000 deg
};
P[12]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,  Y = 8.000 mm,  Z = -15.000 mm,
	W = 160.000 deg,	P = 065.000 deg,	R = 115.000 deg
};
P[13]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,  Y = 8.000 mm,  Z = -15.000 mm,
	W = 160.000 deg,	P = 065.000 deg,	R = 115.000 deg
};
P[14]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,  Y = 8.000 mm,  Z = -45.000 mm,
	W = 160.000 deg,	P = 065.000 deg,	R = 115.000 deg
};
P[15]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,  Y = 8.000 mm,  Z = -45.000 mm,
	W = 160.000 deg,	P = 065.000 deg,	R = 115.000 deg
};
P[16]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = 58.000 mm,  Z = -10.000 mm,
	W = 160.000 deg,	P = 065.000 deg,	R = 115.000 deg
};
P[17]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = 58.000 mm,  Z = 350.000 mm,
	W = 160.000 deg,	P = 065.000 deg,	R = 115.000 deg
};
P[18]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[19]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[20]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = 45.000 mm,  Z = -10.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[21]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[22]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[23]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x09} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[24]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x09} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[25]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = 45.000 mm,  Z = -10.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[26]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[27]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[28]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = 45.000 mm,  Z = -10.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[29]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[30]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[31]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x11} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[32]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x11} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[33]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = 45.000 mm,  Z = -10.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[34]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[35]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[36]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[37]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	 X = 68.000 mm,  Y = 45.000 mm,  Z = -10.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[38]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[39]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[40]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.000 mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[41]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.000 mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[42]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = 45.000 mm,  Z = -10.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[43]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 162.510 deg,	P = 037.000 deg,	R = 061.254 deg
};
P[44]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[45]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = 58.000 mm,  Z = 250.000 mm,
	W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[46]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x12} mm,  Y = 45.000 mm,  Z = -10.000 mm,
	W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[47]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x12} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[48]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x12} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[49]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x12} mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[50]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[51]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[52]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = 8.000 mm,  Z = -60.000 mm,
	W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[53]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0', 
	X = 58.000 mm,  Y = 45.000 mm,  Z = -10.000 mm,
W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
P[54]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = 58.000 mm,  Z = 250.000 mm,
W = 154.345 deg,	P = 038.418 deg,	R = 030.856 deg
};
`




	stp1 =
		`
P[55]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[56]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[57]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y06} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[58]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[59]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[60]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[61]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[62]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y06} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
}; 
P[63]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[64]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[65]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y06} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[66]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[67]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[68]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[69]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[70]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y06} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[71]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stp2 =
		`
P[72]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y08} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[73]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y08} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[74]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[75]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[76]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[77]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[78]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y08} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[79]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y08} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[80]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y08} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[81]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y08} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[82]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[83]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[84]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[85]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[86]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y08} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[87]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y08} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stp3 =
		`
P[88]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y10} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[89]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y10} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[90]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[91]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[92]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[93]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[94]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y10} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[95]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y10} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[96]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y10} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[97]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y10} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[98]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[99]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[100]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[101]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[102]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y10} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[103]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y10} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stp4 =
		`
P[104]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y12} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[105]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y12} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[106]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[107]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[108]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[109]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[110]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y12} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[111]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y12} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[112]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y12} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[113]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y12} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[114]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[115]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[116]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[117]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[118]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y12} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[119]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y12} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stp5 =
		`
P[120]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y14} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[121]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y14} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[122]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[123]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[124]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[125]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[126]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y14} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[127]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y14} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[128]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y14} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[129]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y14} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[130]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[131]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[132]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[133]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[134]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y14} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[135]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y14} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stp6 =
		`
P[136]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y16} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[137]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y16} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[138]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[139]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[140]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[141]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[142]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y16} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[143]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y16} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[144]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y16} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[145]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y16} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[146]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[147]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[148]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[149]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[150]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y16} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[151]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y16} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stp7 =
		`
P[152]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[153]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[154]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y18} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[155]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[156]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[157]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[158]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[159]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y18} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[160]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[161]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[162]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y18} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[163]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[164]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[165]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[166]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[167]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y18} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[168]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stp8 =
		`
P[169]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y20} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[170]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y20} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[171]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[172]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[173]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[174]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x14} mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[175]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y20} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[176]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x13} mm,	Y = ${y20} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[177]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y20} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[178]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y20} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[179]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[180]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[181]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[182]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[183]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y20} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[184]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y20} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	nrefp =
		`
P[185]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = ${y22} mm,  Z = 350.000 mm,
	W = -175.000 deg,	P = 062.001 deg,	R = -130.657 deg
};
P[186]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = ${y22} mm,  Z = 350.000 mm,
	W = -175.000 deg,	P = 062.001 deg,	R = -130.657 deg
};
P[187]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = ${y22} mm,  Z = -10.000 mm,
	W = -175.000 deg,	P = 062.001 deg,	R = -130.657 deg
};
P[188]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,  Y = ${y23} mm,  Z = -15.000 mm,
	W = -175.000 deg,	P = 062.001 deg,	R = -130.657 deg
};
P[189]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,  Y = ${y23} mm,  Z = -15.000 mm,
	W = -175.000 deg,	P = 062.001 deg,	R = -130.657 deg
};
P[190]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,  Y = ${y23} mm,  Z = -45.000 mm,
	W = -175.000 deg,	P = 062.001 deg,	R = -130.657 deg
};
P[191]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,  Y = ${y23} mm,  Z = -45.000 mm,
	W = -175.000 deg,	P = 062.001 deg,	R = -130.657 deg
};
P[192]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = ${y22} mm,  Z = -10.000 mm,
	W = -175.000 deg,	P = 062.001 deg,	R = -130.657 deg
};
P[193]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x06} mm,  Y = ${y22} mm,  Z = 350.000 mm,
	W = -175.000 deg,	P = 062.001 deg,	R = -130.657 deg
};
P[194]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y24} mm,  Z = 350.000 mm,
	W = 174.000 deg,	P = 062.001 deg,	R = -51.001 deg
};
P[195]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y24} mm,  Z = 350.000 mm,
	W = 174.000 deg,	P = 062.001 deg,	R = -51.001 deg
};
P[196]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y24} mm,  Z = -10.000 mm,
	W = 174.000 deg,	P = 062.001 deg,	R = -51.001 deg
};
P[197]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 8.000 mm,  Y = ${y23} mm,  Z = -15.000 mm,
	W = 174.000 deg,	P = 062.001 deg,	R = -51.001 deg
};
P[198]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 8.000 mm,  Y = ${y23} mm,  Z = -15.000 mm,
	W = 174.000 deg,	P = 062.001 deg,	R = -51.001 deg
};
P[199]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 8.000 mm,  Y = ${y23} mm,  Z = -45.000 mm,
	W = 174.000 deg,	P = 062.001 deg,	R = -51.001 deg
};
P[200]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 8.000 mm,  Y = ${y23} mm,  Z = -45.000 mm,
	W = 174.000 deg,	P = 062.001 deg,	R = -51.001 deg
};
P[201]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y24} mm,  Z = -10.000 mm,
	W = 174.000 deg,	P = 062.001 deg,	R = -51.001 deg
};
P[202]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y24} mm,  Z = 350.000 mm,
	W = 174.000 deg,	P = 062.001 deg,	R = -51.001 deg
};
P[203]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[204]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[205]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = ${y25} mm,  Z = -10.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[206]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[207]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[208]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x09} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[209]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x09} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[210]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = ${y25} mm,  Z = -10.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[211]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x08} mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[212]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[213]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = ${y25} mm,  Z = -10.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[214]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[215]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[216]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x11} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[217]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x11} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[218]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = ${y25} mm,  Z = -10.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[219]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x10} mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[220]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[221]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[222]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = ${y25} mm,  Z = -10.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[223]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[224]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[225]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.000 mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[226]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.000 mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[227]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = ${y25} mm,  Z = -10.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[228]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 68.000 mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -142.784 deg,	P = 030.944 deg,	R = -013.346 deg
};
P[229]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x12} mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[230]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x12} mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[231]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x12} mm,  Y = ${y25} mm,  Z = -10.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[232]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x12} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[233]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x12} mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[234]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[235]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[236]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[237]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y23} mm,  Z = -60.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[238]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y25} mm,  Z = -10.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
P[239]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 58.000 mm,  Y = ${y24} mm,  Z = 250.000 mm,
	W = -143.765 deg,	P = 032.137 deg,	R = -015.222 deg
};
`


	nstp1 =
		`
P[240]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[241]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[242]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[243]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[244]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[245]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[246]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[247]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[248]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[249]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[250]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[251]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[252]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[253]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[254]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[255]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[256]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstp2 =
		`
P[257]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[258]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[259]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[260]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[261]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[262]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[263]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[264]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[265]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[266]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[267]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[268]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[269]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[270]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[271]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[272]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstp3 =
		`
P[273]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[274]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[275]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[276]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[277]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[278]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[279]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[280]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[281]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[282]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[283]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[284]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[285]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[286]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[287]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[288]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstp4 =
		`
P[289]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[290]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[291]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[292]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[293]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[294]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[295]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[296]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[297]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[298]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[299]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[300]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[301]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[302]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[303]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[304]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstp5 =
		`
P[305]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[306]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[307]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[308]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[309]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[310]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[311]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[312]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[313]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[314]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[315]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[316]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[317]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[318]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[319]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[320]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstp6 =
		`
P[321]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[322]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[323]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[324]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[325]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[326]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[327]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[328]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[329]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[330]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[331]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[332]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[333]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[334]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[335]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[336]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstp7 =
		`
P[337]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[338]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[339]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[340]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[341]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[342]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[343]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[344]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[345]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[346]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[347]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[348]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[349]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[350]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[351]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[352]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[353]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstp8 =
		`
P[354]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[355]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[356]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[357]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[358]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[359]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[360]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[361]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[362]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[363]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[364]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[365]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[366]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[367]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x18} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[368]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[369]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x17} mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`


	////////////////////////////////////////////////////////   



	ip1 =
		`
P[370]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y51} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[371]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y51} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[372]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y51} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[373]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y42} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[374]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y42} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[375]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y07} mm,	Z = -055.615 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[376]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y07} mm,	Z = -055.225 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[377]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y51} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[378]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y51} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
`

	ip2 =
		`
P[379]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y52} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[380]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y52} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[381]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y43} mm,	Z = -045.250 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[382]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y43} mm,	Z = -045.740 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[383]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y09} mm,	Z = -055.773 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[384]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y09} mm,	Z = -055.283 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[385]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y52} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[386]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y52} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
`

	ip3 =
		`
P[387]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y53} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[388]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y53} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[389]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y44} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[390]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y44} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[391]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y11} mm,	Z = -055.615 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[392]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y11} mm,	Z = -055.225 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[393]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y53} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[394]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y53} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
`

	ip4 =
		`
P[395]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y54} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[396]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y54} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[397]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y45} mm,	Z = -045.250 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[398]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y45} mm,	Z = -045.740 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[399]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y13} mm,	Z = -055.773 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[400]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y13} mm,	Z = -055.283 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[401]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y54} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[402]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y54} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
`

	ip5 =
		`
P[403]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y55} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[404]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y55} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[405]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y46} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[406]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y46} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[407]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y15} mm,	Z = -055.615 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[408]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y15} mm,	Z = -055.225 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[409]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y55} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[410]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y55} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
`

	ip6 =
		`
P[411]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y56} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[412]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y56} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[413]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y47} mm,	Z = -045.250 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[414]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y47} mm,	Z = -045.740 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[415]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y17} mm,	Z = -055.773 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[416]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y17} mm,	Z = -055.283 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[417]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y56} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[418]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y56} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
`

	ip7 =
		`
P[419]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y57} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[420]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y57} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[421]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y48} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[422]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y48} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[423]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y19} mm,	Z = -055.615 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[424]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y19} mm,	Z = -055.183 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[425]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y57} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[426]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y57} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
`

	ip8 =
		`
P[427]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y58} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[428]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y58} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[429]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y49} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[430]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y49} mm,	Z = -045.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[431]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y21} mm,	Z = -055.615 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[432]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y21} mm,	Z = -055.225 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[433]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y58} mm,	Z = -25.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
P[434]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y58} mm,	Z = 250.000 mm,
	W = -164.217 deg,	P = 052.507 deg,	R = -122.452 deg
};
`


	////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////
	// i1 to 18 and i21 to i28 completted ////////////////////
	//////////////////////////////////////////////////////////



	ip11 =
		`
P[435]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y74} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[436]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y74} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[437]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y74} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[438]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y66} mm,	Z = ${z08} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[439]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y66} mm,	Z = ${z08} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[440]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y41} mm,	Z = -055.615 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[441]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y41} mm,	Z = -055.225 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[442]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y74} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[443]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y74} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
`

	ip12 =
		`
P[444]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y73} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[445]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y73} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[446]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y65} mm,	Z = ${z07} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[447]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y65} mm,	Z = ${z07} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[448]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y39} mm,	Z = -055.615 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[449]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y39} mm,	Z = -055.225 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[450]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y73} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[451]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y73} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
`

	ip13 =
		`
P[452]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y72} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[453]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y72} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[454]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y64} mm,	Z = ${z06} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[455]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y64} mm,	Z = ${z06} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[456]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y37} mm,	Z = -055.773 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[457]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y37} mm,	Z = -055.283 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[458]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y72} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[459]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y72} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
`

	ip14 =
		`
P[460]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y71} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[461]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y71} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[462]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y63} mm,	Z = ${z05} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[463]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y63} mm,	Z = ${z05} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[464]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y35} mm,	Z = -055.615 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[465]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y35} mm,	Z = -055.225 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[466]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y71} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[467]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y71} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
`

	ip15 =
		`
P[468]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y70} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[469]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y70} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[470]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y62} mm,	Z = ${z04} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[471]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y62} mm,	Z = ${z04} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[472]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y33} mm,	Z = -055.773 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[473]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y33} mm,	Z = -055.283 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[474]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y70} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[475]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y70} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
`

	ip16 =
		`
P[476]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y69} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[477]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y69} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[478]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y61} mm,	Z = ${z03} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[479]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y61} mm,	Z = ${z03} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[480]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y31} mm,	Z = -055.615 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[481]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y31} mm,	Z = -055.225 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[482]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y69} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[483]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y69} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
`

	ip17 =
		`
P[484]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y68} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[485]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y68} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[486]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y60} mm,	Z = ${z02} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[487]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y60} mm,	Z = ${z02} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[488]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y29} mm,	Z = -055.773 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[489]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y29} mm,	Z = -055.283 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[490]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y68} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[491]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y68} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
`

	ip18 =
		`
P[492]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y67} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[493]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y67} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[494]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y59} mm,	Z = ${z01} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[495]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y59} mm,	Z = ${z01} mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[496]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y27} mm,	Z = -055.615 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[497]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y27} mm,	Z = -055.225 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[498]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y67} mm,	Z = -020.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
P[499]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y67} mm,	Z = 250.000 mm,
	W = 177.370 deg,	P = 054.625 deg,	R = 137.915 deg
};
`








	//  
	ip21 =
		`
P[500]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y51} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[501]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y51} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[502]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y51} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[503]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y42} mm,	Z = -043.944 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[504]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y42} mm,	Z = -044.334 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[505]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y07} mm,	Z = -055.615 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[506]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y07} mm,	Z = -055.225 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[507]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y51} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[508]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y51} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
`

	ip22 =
		`
P[509]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y52} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[510]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y52} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[511]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y43} mm,	Z = -045.306 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[512]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y43} mm,	Z = -045.740 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[513]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y09} mm,	Z = -055.773 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[514]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y09} mm,	Z = -055.339 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[515]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y52} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[516]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y52} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
`

	ip23 =
		`
P[517]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y53} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[518]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y53} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[519]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y44} mm,	Z = -043.944 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[520]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y44} mm,	Z = -044.334 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[521]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y11} mm,	Z = -055.615 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[522]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y11} mm,	Z = -055.225 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[523]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y53} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[524]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y53} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
`

	ip24 =
		`
P[525]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y54} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[526]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y54} mm,	Z = -25.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[527]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y45} mm,	Z = -045.250 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[528]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y45} mm,	Z = -045.740 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[529]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y13} mm,	Z = -055.773 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[530]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y13} mm,	Z = -055.283 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[531]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y54} mm,	Z = -25.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[532]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y54} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
`

	ip25 =
		`
P[533]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y55} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[534]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y55} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[535]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y46} mm,	Z = -043.944 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[536]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y46} mm,	Z = -044.334 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[537]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y15} mm,	Z = -055.615 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[538]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y15} mm,	Z = -055.225 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[539]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y55} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[540]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y55} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
`

	ip26 =
		`
P[541]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y56} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[542]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y56} mm,	Z = -25.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[543]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y47} mm,	Z = -045.250 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[544]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y47} mm,	Z = -045.740 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[545]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y17} mm,	Z = -055.773 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[546]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y17} mm,	Z = -055.283 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[547]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y56} mm,	Z = -25.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[548]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y56} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
`

	ip27 =
		`
P[549]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y57} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[550]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y57} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[551]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y48} mm,	Z = -043.944 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[552]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y48} mm,	Z = -044.334 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[553]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y19} mm,	Z = -055.615 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[554]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y19} mm,	Z = -055.225 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[555]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y57} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[556]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y57} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
`

	ip28 =
		`
P[557]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y58} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[558]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y58} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[559]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y49} mm,	Z = -043.944 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[560]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y49} mm,	Z = -044.334 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[561]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y21} mm,	Z = -055.615 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[562]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y21} mm,	Z = -055.225 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[563]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y58} mm,	Z = -025.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
P[564]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y58} mm,	Z = 250.000 mm,
	W = 177.639 deg,	P = 052.864 deg,	R = -045.023 deg
};
`


	ip31 =
		`
P[565]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y74} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[566]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y74} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[567]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y74} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[568]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y66} mm,	Z = ${z08} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[569]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y66} mm,	Z = ${z08} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[570]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y41} mm,	Z = -055.615 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[571]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y41} mm,	Z = -055.225 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[572]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y74} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[573]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y74} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
`

	ip32 =
		`
P[574]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y73} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[575]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y73} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[576]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y65} mm,	Z = ${z07} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[577]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y65} mm,	Z = ${z07} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[578]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y39} mm,	Z = -055.615 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[579]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y39} mm,	Z = -055.225 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[580]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y73} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[581]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y73} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
`

	ip33 =
		`
P[582]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y72} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[583]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y72} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[584]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y64} mm,	Z = ${z06} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[585]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y64} mm,	Z = ${z06} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[586]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y37} mm,	Z = -055.773 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[587]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y37} mm,	Z = -055.283 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[588]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y72} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[589]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y72} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
`

	ip34 =
		`
P[590]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y71} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[591]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y71} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[592]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y63} mm,	Z = ${z05} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[593]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y63} mm,	Z = ${z05} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[594]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y35} mm,	Z = -055.615 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[595]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y35} mm,	Z = -055.225 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[596]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y71} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[597]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y71} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
`

	ip35 =
		`
P[598]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y70} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[599]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y70} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[600]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y62} mm,	Z = ${z04} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[601]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y62} mm,	Z = ${z04} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[602]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y33} mm,	Z = -055.773 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[603]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y33} mm,	Z = -055.283 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[604]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y70} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[605]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y70} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
`

	ip36 =
		`
P[606]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y69} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[607]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y69} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[608]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y61} mm,	Z = ${z03} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[609]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y61} mm,	Z = ${z03} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[610]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y31} mm,	Z = -055.615 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[611]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y31} mm,	Z = -055.225 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[612]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y69} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[613]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y69} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
`

	ip37 =
		`
P[614]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y68} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[615]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y68} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[616]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y60} mm,	Z = ${z02} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[617]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y60} mm,	Z = ${z02} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[618]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y29} mm,	Z = -055.773 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[619]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y29} mm,	Z = -055.283 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[620]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y68} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[621]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y68} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
`

	ip38 =
		`
P[622]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y67} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[623]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y67} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[624]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y59} mm,	Z = ${z01} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[625]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y59} mm,	Z = ${z01} mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[626]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y27} mm,	Z = -055.615 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[627]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y27} mm,	Z = -055.225 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[628]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y67} mm,	Z = -020.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
P[629]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y67} mm,	Z = 250.000 mm,
	W = 178.343 deg,	P = 054.193 deg,	R = 029.903 deg
};
`




	/////////////////////////////

	////////////////////////////


	// up x com both    y incom        y retract com


	//'//

	upp1 =
		`
P[630]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y75} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[631]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y75} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[632]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y75} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[633]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y83} mm,	Z = ${z09} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[634]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y83} mm,	Z = ${z09} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[635]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y91} mm,	Z = ${z09} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[636]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y91} mm,	Z = ${z09} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[637]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y75} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[638]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y75} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
`

	upp2 =
		`
P[639]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y76} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[640]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y76} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[641]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y84} mm,	Z = ${z10} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[642]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y84} mm,	Z = ${z10} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[643]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y92} mm,	Z = ${z10} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[644]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y92} mm,	Z = ${z10} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[645]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y76} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[646]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y76} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
`

	upp3 =
		`
P[647]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y77} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[648]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y77} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[649]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y85} mm,	Z = ${z11} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[650]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y85} mm,	Z = ${z11} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[651]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y93} mm,	Z = ${z11} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[652]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y93} mm,	Z = ${z11} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[653]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y77} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[654]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y77} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
`

	upp4 =
		`
P[655]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y78} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[656]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y78} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[657]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y86} mm,	Z = ${z12} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[658]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y86} mm,	Z = ${z12} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[659]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y94} mm,	Z = ${z12} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[660]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y94} mm,	Z = ${z12} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[661]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y78} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[662]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y78} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
`

	upp5 =
		`
P[663]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y79} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[664]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y79} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[665]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y87} mm,	Z = ${z13} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[666]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y87} mm,	Z = ${z13} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[667]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y95} mm,	Z = ${z13} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[668]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y95} mm,	Z = ${z13} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[669]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y79} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[670]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y79} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
`

	upp6 =
		`
P[671]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y80} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[672]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y80} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[673]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y88} mm,	Z = ${z14} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[674]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y88} mm,	Z = ${z14} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[675]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y96} mm,	Z = ${z14} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[676]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y96} mm,	Z = ${z14} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[677]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y80} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[678]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y80} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
`

	upp7 =
		`
P[679]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y81} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[680]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y81} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[681]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y89} mm,	Z = ${z15} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[682]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y89} mm,	Z = ${z15} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[683]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y97} mm,	Z = ${z15} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[684]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y97} mm,	Z = ${z15} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[685]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y81} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[686]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y81} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
`

	upp8 =
		`
P[687]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y82} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[688]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y82} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[689]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y90} mm,	Z = ${z16} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[690]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y90} mm,	Z = ${z16} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[691]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y98} mm,	Z = ${z16} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[692]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x07} mm,	Y = ${y98} mm,	Z = ${z16} mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[693]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y82} mm,	Z = -5.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
P[694]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x19} mm,	Y = ${y82} mm,	Z = 250.000 mm,
	W = -144.138 deg,	P = 032.565 deg,	R = -105.918 deg
};
`

	upp11 =
		`
P[695]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y107} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[696]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y107} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[697]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y107} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[698]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y98} mm,	Z = ${z16} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[699]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y98} mm,	Z = ${z16} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[700]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y90} mm,	Z = ${z16} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[701]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y90} mm,	Z = ${z16} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[702]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y107} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[703]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y107} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
`

	upp12 =
		`
P[704]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y106} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[705]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y106} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[706]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y97} mm,	Z = ${z15} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[707]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y97} mm,	Z = ${z15} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[708]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y89} mm,	Z = ${z15} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[709]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y89} mm,	Z = ${z15} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[710]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y106} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[711]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y106} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
`

	upp13 =
		`
P[712]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y105} mm,	Z = 250.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[713]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y105} mm,	Z = -5.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[714]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y96} mm,	Z = ${z14} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[715]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y96} mm,	Z = ${z14} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[716]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y88} mm,	Z = ${z14} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[717]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y88} mm,	Z = ${z14} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[718]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y105} mm,	Z = -5.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[719]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y105} mm,	Z = 250.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
`

	upp14 =
		`
P[720]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y104} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[721]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y104} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[722]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y95} mm,	Z = ${z13} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[723]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y95} mm,	Z = ${z13} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[724]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y87} mm,	Z = ${z13} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[725]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y87} mm,	Z = ${z13} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[726]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y104} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[727]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y104} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
`

	upp15 =
		`
P[728]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y103} mm,	Z = 250.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[729]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y103} mm,	Z = -5.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[730]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y94} mm,	Z = ${z12} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[731]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y94} mm,	Z = ${z12} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[732]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y86} mm,	Z = ${z12} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[733]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y86} mm,	Z = ${z12} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[734]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y103} mm,	Z = -5.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[735]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y103} mm,	Z = 250.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
`

	upp16 =
		`
P[736]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y102} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[737]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y102} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[738]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y93} mm,	Z = ${z11} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[739]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y93} mm,	Z = ${z11} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[740]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y85} mm,	Z = ${z11} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[741]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y85} mm,	Z = ${z11} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[742]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y102} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[743]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y102} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
`

	upp17 =
		`
P[744]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y101} mm,	Z = 250.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[745]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y101} mm,	Z = -5.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[746]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y92} mm,	Z = ${z10} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[747]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y92} mm,	Z = ${z10} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[748]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y84} mm,	Z = ${z10} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[749]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y84} mm,	Z = ${z10} mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[750]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y101} mm,	Z = -5.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[751]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y101} mm,	Z = 250.000 mm,
	W = 163.477 deg,	P = 044.567 deg,	R = -002.161 deg
};
`

	upp18 =
		`
P[752]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y100} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[753]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y100} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[754]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y91} mm,	Z = ${z09} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[755]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y91} mm,	Z = ${z09} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[756]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y83} mm,	Z = ${z09} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[757]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 008.000 mm,	Y = ${y83} mm,	Z = ${z09} mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[758]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y100} mm,	Z = -5.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
P[759]{
 GP1:
	UF : ${uframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 040.000 mm,	Y = ${y100} mm,	Z = 250.000 mm,
	W = 163.478 deg,	P = 044.567 deg,	R = -002.161 deg
};
`

	homep =
		`
P[760]{
 GP1:
	UF : ${uframe}, UT : ${tool},
	J1 = 000.000 deg,	J2 = -045.000 deg,	J3 = 000.000 deg,
	J4 = 000.000 deg,	J5 = -090.000 deg,	J6 = 000.000 deg
};
/END
`




	/////////  450 ////////////




	stpk1 =
		`
P[55]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[56]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[57]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y06} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[58]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[59]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[60]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[61]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[62]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y06} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
}; 
P[63]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stpk2 =
		`
P[72]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y08} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[73]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y08} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[74]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[75]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[76]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[77]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[78]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y08} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[79]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y08} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`


	stpk3 =
		`
P[88]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y10} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[89]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y10} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[90]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[91]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[92]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[93]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[94]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y10} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[95]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y10} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stpk4 =
		`
P[104]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y12} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[105]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y12} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[106]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[107]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[108]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[109]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[110]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y12} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[111]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y12} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stpk5 =
		`
P[120]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y14} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[121]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y14} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[122]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[123]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[124]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[125]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[126]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y14} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[127]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y14} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`



	stpk6 =
		`
P[136]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y16} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[137]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y16} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[138]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[139]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[140]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[141]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[142]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y16} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[143]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y16} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`


	stpk7 =
		`
P[152]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[153]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[154]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y18} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[155]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[156]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[157]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[158]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[159]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y18} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[160]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stpk8 =
		`
P[169]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y20} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[170]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y20} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[171]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[172]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[173]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[174]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x21} mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[175]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y20} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[176]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x20} mm,	Y = ${y20} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`




	nstpk1 =
		`
P[240]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[241]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[242]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[243]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[244]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[245]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[246]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[247]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[248]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[249]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[250]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[251]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[252]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[253]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[254]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[255]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[256]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpk2 =
		`
P[257]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[258]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[259]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[260]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[261]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[262]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[263]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[264]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[265]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[266]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[267]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[268]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[269]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[270]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[271]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[272]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpk3 =
		`
P[273]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[274]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[275]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[276]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[277]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[278]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[279]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[280]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[281]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[282]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[283]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[284]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[285]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[286]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[287]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[288]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpk4 =
		`
P[289]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[290]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[291]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[292]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[293]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[294]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[295]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[296]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[297]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[298]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[299]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[300]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[301]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[302]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[303]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[304]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpk5 =
		`
P[305]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[306]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[307]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[308]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[309]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[310]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[311]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[312]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[313]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[314]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[315]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[316]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[317]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[318]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[319]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[320]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpk6 =
		`
P[321]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[322]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[323]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[324]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[325]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[326]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[327]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[328]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[329]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[330]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[331]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[332]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[333]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[334]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[335]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[336]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpk7 =
		`
P[337]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[338]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[339]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[340]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[341]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[342]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[343]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[344]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[345]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[346]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[347]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[348]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[349]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[350]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[351]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[352]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[353]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpk8 =
		`
P[354]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[355]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[356]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[357]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[358]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[359]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[360]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[361]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[362]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[363]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[364]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[365]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[366]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[367]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 63.001 mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[368]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[369]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 100.001 mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`



	////      350





	stpm1 =
		`
P[64]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[65]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y06} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[66]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[67]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[68]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[69]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y07} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[70]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y06} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[71]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y06} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stpm2 =
		`
P[80]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y08} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[81]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y08} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[82]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[83]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[84]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[85]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y09} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[86]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y08} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[87]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y08} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`


	stpm3 =
		`
P[96]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y10} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[97]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y10} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[98]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[99]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[100]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[101]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y11} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[102]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y10} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[103]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y10} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stpm4 =
		`
P[112]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y12} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[113]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y12} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[114]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[115]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[116]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[117]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y13} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[118]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y12} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[119]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y12} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stpm5 =
		`
P[128]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y14} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[129]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y14} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[130]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[131]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[132]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[133]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y15} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[134]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y14} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[135]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y14} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stpm6 =
		`
P[144]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y16} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[145]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y16} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[146]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[147]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[148]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[149]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y17} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[150]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y16} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[151]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y16} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`


	stpm7 =
		`
P[161]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[162]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y18} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[163]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[164]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[165]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[166]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y19} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[167]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y18} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[168]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y18} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`

	stpm8 =
		`
P[177]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y20} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[178]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y20} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[179]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[180]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[181]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[182]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 060.000 mm,	Y = ${y21} mm,	Z = -060.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[183]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y20} mm,	Z = -010.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
P[184]{
 GP1:
	UF : ${rframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = 098.000 mm,	Y = ${y20} mm,	Z = 250.000 mm,
	W = -172.645 deg,	P = 032.489 deg,	R = -048.297 deg
};
`


	///////////  350 nr



	nstpm1 =
		`
P[240]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[241]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[242]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[243]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[244]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[245]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[246]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y41} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[247]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[248]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y40} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpm2 =
		`
P[257]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[258]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[259]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[260]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[261]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[262]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y39} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[263]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[264]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y38} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpm3 =
		`
P[273]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[274]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[275]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[276]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[277]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[278]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y37} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[279]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[280]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y36} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpm4 =
		`
P[289]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[290]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[291]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[292]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[293]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[294]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y35} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[295]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[296]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y34} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpm5 =
		`
P[305]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[306]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[307]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[308]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[309]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[310]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y33} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[311]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[312]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y32} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpm6 =
		`
P[321]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[322]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[323]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[324]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[325]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[326]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y31} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[327]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[328]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y30} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`

	nstpm7 =
		`
P[337]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[338]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[339]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[340]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[341]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[342]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[343]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y29} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[344]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[345]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y28} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};

`

	nstpm8 =
		`
P[354]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[355]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[356]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[357]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[358]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[359]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x16} mm,	Y = ${y27} mm,	Z = -60.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[360]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = -10.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
P[361]{
 GP1:
	UF : ${nframe}, UT : ${tool}, CONFIG : 'N U T, 0, 0, 0',
	X = ${x15} mm,	Y = ${y26} mm,	Z = 250.000 mm,
	W = 167.371 deg,	P = 031.010 deg,	R = 038.323 deg
};
`



	////////// 350 nr


}



function condition() {


	LS();
	let rowws = document.querySelectorAll("#tableBody tr");

	let totalRows = rowws.length;

	let width = Number(document.getElementById('wh').value);
	let fix = document.getElementById('tp');


	//  WALL PANNEL  ( 450 - 600)


	if (totalRows == 8 && width <= 600 && width >= 451 && fix.value == "WALL") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + st5 + st6 + st7 + st8 + u3 + nref + u4 + nst1 + nst2 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28 + i31 + i32 + i33 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up8 + up11 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + stp5 + stp6 + stp7 + stp8 + nrefp + nstp1 + nstp2 + nstp3 + nstp4 + nstp5 + nstp6 + nstp7 + nstp8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip6 + ip7 + ip8 + ip11 + ip12 + ip13 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip26 + ip27 + ip28 + ip31 + ip32 + ip33 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp8 + upp11 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 7 && width <= 600 && width >= 451 && fix.value == "WALL") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + st5 + st6 + st7 + u3 + nref + u4 + nst2 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i32 + i33 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + stp5 + stp6 + stp7 + nrefp + nstp2 + nstp3 + nstp4 + nstp5 + nstp6 + nstp7 + nstp8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip6 + ip7 + ip12 + ip13 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip26 + ip27 + ip32 + ip33 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 6 && width <= 600 && width >= 451 && fix.value == "WALL") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + st5 + st6 + u3 + nref + u4 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i5 + i6 + i13 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i26 + i33 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + stp5 + stp6 + nrefp + nstp3 + nstp4 + nstp5 + nstp6 + nstp7 + nstp8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip6 + ip13 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip26 + ip33 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}

	else if (totalRows == 5 && width <= 600 && width >= 451 && fix.value == "WALL") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + st5 + u3 + nref + u4 + nst4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i5 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up14 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + stp5 + nrefp + nstp4 + nstp5 + nstp6 + nstp7 + nstp8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 4 && width <= 600 && width >= 451 && fix.value == "WALL") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + u3 + nref + u4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + nrefp + nstp5 + nstp6 + nstp7 + nstp8 + ip1 + ip2 + ip3 + ip4 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 3 && width <= 600 && width >= 451 && fix.value == "WALL") {
		lss = ref + u2 + st1 + st2 + st3 + u3 + nref + u4 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i16 + i17 + i18 + i21 + i22 + i23 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + nrefp + nstp6 + nstp7 + nstp8 + ip1 + ip2 + ip3 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}



	else if (totalRows == 2 && width <= 600 && width >= 451 && fix.value == "WALL") {
		lss = ref + u2 + st1 + st2 + u3 + nref + u4 + nst7 + nst8 + u5 + i1 + i2 + i17 + i18 + i21 + i22 + i37 + i38 + u6 + up1 + up2 + up17 + up18 + home + refp + stp1 + stp2 + nrefp + nstp7 + nstp8 + ip1 + ip2 + ip17 + ip18 + ip21 + ip22 + ip37 + ip38 + upp1 + upp2 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 1 && width <= 600 && width >= 451 && fix.value == "WALL") {
		lss = ref + u2 + st1 + u3 + nref + u4 + nst8 + u5 + i1 + i18 + i21 + i38 + u6 + up1 + up18 + home + refp + stp1 + nrefp + nstp8 + ip1 + ip18 + ip21 + ip38 + upp1 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 0 && width <= 600 && width >= 451 && fix.value == "WALL") {
		lss = ref + u2 + u3 + nref + u4 + u5 + home + refp + nrefp + homep;
		alert("Program Gentaed Succesfully");
		 
	}




	//  DECK PANNEL  ( 450 - 600)


	else if (totalRows == 8 && width <= 600 && width >= 451 && fix.value == "DECK") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + st5 + st6 + st7 + st8 + u3 + nref + u4 + nst1 + nst2 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up8 + up11 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + stp5 + stp6 + stp7 + stp8 + nrefp + nstp1 + nstp2 + nstp3 + nstp4 + nstp5 + nstp6 + nstp7 + nstp8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp8 + upp11 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 7 && width <= 600 && width >= 451 && fix.value == "DECK") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + st5 + st6 + st7 + u3 + nref + u4 + nst2 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + stp5 + stp6 + stp7 + nrefp + nstp2 + nstp3 + nstp4 + nstp5 + nstp6 + nstp7 + nstp8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 6 && width <= 600 && width >= 451 && fix.value == "DECK") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + st5 + st6 + u3 + nref + u4 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + stp5 + stp6 + nrefp + nstp3 + nstp4 + nstp5 + nstp6 + nstp7 + nstp8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}

	else if (totalRows == 5 && width <= 600 && width >= 451 && fix.value == "DECK") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + st5 + u3 + nref + u4 + nst4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up5 + up14 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + stp5 + nrefp + nstp4 + nstp5 + nstp6 + nstp7 + nstp8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 4 && width <= 600 && width >= 451 && fix.value == "DECK") {
		lss = ref + u2 + st1 + st2 + st3 + st4 + u3 + nref + u4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up15 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + stp4 + nrefp + nstp5 + nstp6 + nstp7 + nstp8 + upp1 + upp2 + upp3 + upp4 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 3 && width <= 600 && width >= 451 && fix.value == "DECK") {
		lss = ref + u2 + st1 + st2 + st3 + u3 + nref + u4 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up16 + up17 + up18 + home + refp + stp1 + stp2 + stp3 + nrefp + nstp6 + nstp7 + nstp8 + upp1 + upp2 + upp3 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}



	else if (totalRows == 2 && width <= 600 && width >= 451 && fix.value == "DECK") {
		lss = ref + u2 + st1 + st2 + u3 + nref + u4 + nst7 + nst8 + u6 + up1 + up2 + up17 + up18 + home + refp + stp1 + stp2 + nrefp + nstp7 + nstp8 + upp1 + upp2 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 1 && width <= 600 && width >= 451 && fix.value == "DECK") {
		lss = ref + u2 + st1 + u3 + nref + u4 + nst8 + u6 + up1 + up18 + home + refp + stp1 + nrefp + nstp8 + upp1 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 0 && width <= 600 && width >= 451 && fix.value == "DECK") {
		lss = ref + u2 + u3 + nref + u4 + u5 + home + refp + nrefp + homep;
		alert("Program Gentaed Succesfully");
		 
	}



	/////////////////////


	//  WALL PANNEL  ( 350 - 450)


	else if (totalRows == 8 && width <= 450 && width >= 351 && fix.value == "WALL") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + stk5 + stk6 + stk7 + stk8 + u3 + nref + u4 + nst1 + nst2 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28 + i31 + i32 + i33 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up8 + up11 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + stpk5 + stpk6 + stpk7 + stpk8 + nrefp + nstpk1 + nstpk2 + nstpk3 + nstpk4 + nstpk5 + nstpk6 + nstpk7 + nstpk8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip6 + ip7 + ip8 + ip11 + ip12 + ip13 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip26 + ip27 + ip28 + ip31 + ip32 + ip33 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp8 + upp11 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 7 && width <= 450 && width >= 351 && fix.value == "WALL") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + stk5 + stk6 + stk7 + u3 + nref + u4 + nst2 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i32 + i33 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + stpk5 + stpk6 + stpk7 + nrefp + nstpk2 + nstpk3 + nstpk4 + nstpk5 + nstpk6 + nstpk7 + nstpk8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip6 + ip7 + ip12 + ip13 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip26 + ip27 + ip32 + ip33 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 6 && width <= 450 && width >= 351 && fix.value == "WALL") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + stk5 + stk6 + u3 + nref + u4 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i5 + i6 + i13 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i26 + i33 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + stpk5 + stpk6 + nrefp + nstpk3 + nstpk4 + nstpk5 + nstpk6 + nstpk7 + nstpk8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip6 + ip13 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip26 + ip33 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}

	else if (totalRows == 5 && width <= 450 && width >= 351 && fix.value == "WALL") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + stk5 + u3 + nref + u4 + nst4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i5 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up14 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + stpk5 + nrefp + nstpk4 + nstpk5 + nstpk6 + nstpk7 + nstpk8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 4 && width <= 450 && width >= 351 && fix.value == "WALL") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + u3 + nref + u4 + nst5 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i4 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + nrefp + nstpk5 + nstpk6 + nstpk7 + nstpk8 + ip1 + ip2 + ip3 + ip4 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 3 && width <= 450 && width >= 351 && fix.value == "WALL") {
		lss = ref + u2 + stk1 + stk2 + stk3 + u3 + nref + u4 + nst6 + nst7 + nst8 + u5 + i1 + i2 + i3 + i16 + i17 + i18 + i21 + i22 + i23 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + nrefp + nstpk6 + nstpk7 + nstpk8 + ip1 + ip2 + ip3 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}



	else if (totalRows == 2 && width <= 450 && width >= 351 && fix.value == "WALL") {
		lss = ref + u2 + stk1 + stk2 + u3 + nref + u4 + nst7 + nst8 + u5 + i1 + i2 + i17 + i18 + i21 + i22 + i37 + i38 + u6 + up1 + up2 + up17 + up18 + home + refp + stpk1 + stpk2 + nrefp + nstpk7 + nstpk8 + ip1 + ip2 + ip17 + ip18 + ip21 + ip22 + ip37 + ip38 + upp1 + upp2 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 1 && width <= 450 && width >= 351 && fix.value == "WALL") {
		lss = ref + u2 + stk1 + u3 + nref + u4 + nst8 + u5 + i1 + i18 + i21 + i38 + u6 + up1 + up18 + home + refp + stpk1 + nrefp + nstpk8 + ip1 + ip18 + ip21 + ip38 + upp1 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 0 && width <= 450 && width >= 351 && fix.value == "WALL") {
		lss = ref + u2 + u3 + nref + u4 + u5 + home + refp + nrefp + homep;
		alert("Program Gentaed Succesfully");
		 
	}




	//  DECK PANNEL  ( 350 - 450)


	else if (totalRows == 8 && width <= 450 && width >= 351 && fix.value == "DECK") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + stk5 + stk6 + stk7 + stk8 + u3 + nref + u4 + nst1 + nst2 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up8 + up11 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + stpk5 + stpk6 + stpk7 + stpk8 + nrefp + nstpk1 + nstpk2 + nstpk3 + nstpk4 + nstpk5 + nstpk6 + nstpk7 + nstpk8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp8 + upp11 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 7 && width <= 450 && width >= 351 && fix.value == "DECK") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + stk5 + stk6 + stk7 + u3 + nref + u4 + nst2 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + stpk5 + stpk6 + stpk7 + nrefp + nstpk2 + nstpk3 + nstpk4 + nstpk5 + nstpk6 + nstpk7 + nstpk8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 6 && width <= 450 && width >= 351 && fix.value == "DECK") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + stk5 + stk6 + u3 + nref + u4 + nst3 + nst4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + stpk5 + stpk6 + nrefp + nstpk3 + nstpk4 + nstpk5 + nstpk6 + nstpk7 + nstpk8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}

	else if (totalRows == 5 && width <= 450 && width >= 351 && fix.value == "DECK") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + stk5 + u3 + nref + u4 + nst4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up5 + up14 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + stpk5 + nrefp + nstpk4 + nstpk5 + nstpk6 + nstpk7 + nstpk8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 4 && width <= 450 && width >= 351 && fix.value == "DECK") {
		lss = ref + u2 + stk1 + stk2 + stk3 + stk4 + u3 + nref + u4 + nst5 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up4 + up15 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + stpk4 + nrefp + nstpk5 + nstpk6 + nstpk7 + nstpk8 + upp1 + upp2 + upp3 + upp4 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 3 && width <= 450 && width >= 351 && fix.value == "DECK") {
		lss = ref + u2 + stk1 + stk2 + stk3 + u3 + nref + u4 + nst6 + nst7 + nst8 + u6 + up1 + up2 + up3 + up16 + up17 + up18 + home + refp + stpk1 + stpk2 + stpk3 + nrefp + nstpk6 + nstpk7 + nstpk8 + upp1 + upp2 + upp3 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}



	else if (totalRows == 2 && width <= 450 && width >= 351 && fix.value == "DECK") {
		lss = ref + u2 + stk1 + stk2 + u3 + nref + u4 + nst7 + nst8 + u6 + up1 + up2 + up17 + up18 + home + refp + stpk1 + stpk2 + nrefp + nstpk7 + nstpk8 + upp1 + upp2 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 1 && width <= 450 && width >= 351 && fix.value == "DECK") {
		lss = ref + u2 + stk1 + u3 + nref + u4 + nst8 + u6 + up1 + up18 + home + refp + stpk1 + nrefp + nstpk8 + upp1 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 0 && width <= 450 && width >= 351 && fix.value == "DECK") {
		lss = ref + u2 + u3 + nref + u4 + u5 + home + refp + nrefp + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	/////////////  260 - 350






	//  WALL PANNEL  ( 260 - 350)


	else if (totalRows == 8 && width <= 350 && width >= 255 && fix.value == "WALL") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + stm5 + stm6 + stm7 + stm8 + u3 + nref + u4 + nstm1 + nstm2 + nstm3 + nstm4 + nstm5 + nstm6 + nstm7 + nstm8 + u5 + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i8 + i11 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i28 + i31 + i32 + i33 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up8 + up11 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + stpm5 + stpm6 + stpm7 + stpm8 + nrefp + nstpm1 + nstpm2 + nstpm3 + nstpm4 + nstpm5 + nstpm6 + nstpm7 + nstpm8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip6 + ip7 + ip8 + ip11 + ip12 + ip13 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip26 + ip27 + ip28 + ip31 + ip32 + ip33 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp8 + upp11 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 7 && width <= 350 && width >= 255 && fix.value == "WALL") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + stm5 + stm6 + stm7 + u3 + nref + u4 + nstm2 + nstm3 + nstm4 + nstm5 + nstm6 + nstm7 + nstm8 + u5 + i1 + i2 + i3 + i4 + i5 + i6 + i7 + i12 + i13 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i26 + i27 + i32 + i33 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + stpm5 + stpm6 + stpm7 + nrefp + nstpm2 + nstpm3 + nstpm4 + nstpm5 + nstpm6 + nstpm7 + nstpm8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip6 + ip7 + ip12 + ip13 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip26 + ip27 + ip32 + ip33 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 6 && width <= 350 && width >= 255 && fix.value == "WALL") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + stm5 + stm6 + u3 + nref + u4 + nstm3 + nstm4 + nstm5 + nstm6 + nstm7 + nstm8 + u5 + i1 + i2 + i3 + i4 + i5 + i6 + i13 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i26 + i33 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + stpm5 + stpm6 + nrefp + nstpm3 + nstpm4 + nstpm5 + nstpm6 + nstpm7 + nstpm8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip6 + ip13 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip26 + ip33 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}

	else if (totalRows == 5 && width <= 350 && width >= 255 && fix.value == "WALL") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + stm5 + u3 + nref + u4 + nstm4 + nstm5 + nstm6 + nstm7 + nstm8 + u5 + i1 + i2 + i3 + i4 + i5 + i14 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i25 + i34 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up5 + up14 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + stpm5 + nrefp + nstpm4 + nstpm5 + nstpm6 + nstpm7 + nstpm8 + ip1 + ip2 + ip3 + ip4 + ip5 + ip14 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip25 + ip34 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp5 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 4 && width <= 350 && width >= 255 && fix.value == "WALL") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + u3 + nref + u4 + nstm5 + nstm6 + nstm7 + nstm8 + u5 + i1 + i2 + i3 + i4 + i15 + i16 + i17 + i18 + i21 + i22 + i23 + i24 + i35 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up4 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + nrefp + nstpm5 + nstpm6 + nstpm7 + nstpm8 + ip1 + ip2 + ip3 + ip4 + ip15 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip24 + ip35 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp4 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 3 && width <= 350 && width >= 255 && fix.value == "WALL") {
		lss = ref + u2 + stm1 + stm2 + stm3 + u3 + nref + u4 + nstm6 + nstm7 + nstm8 + u5 + i1 + i2 + i3 + i16 + i17 + i18 + i21 + i22 + i23 + i36 + i37 + i38 + u6 + up1 + up2 + up3 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + nrefp + nstpm6 + nstpm7 + nstpm8 + ip1 + ip2 + ip3 + ip16 + ip17 + ip18 + ip21 + ip22 + ip23 + ip36 + ip37 + ip38 + upp1 + upp2 + upp3 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}



	else if (totalRows == 2 && width <= 350 && width >= 255 && fix.value == "WALL") {
		lss = ref + u2 + stm1 + stm2 + u3 + nref + u4 + nstm7 + nstm8 + u5 + i1 + i2 + i17 + i18 + i21 + i22 + i37 + i38 + u6 + up1 + up2 + up17 + up18 + home + refp + stpm1 + stpm2 + nrefp + nstpm7 + nstpm8 + ip1 + ip2 + ip17 + ip18 + ip21 + ip22 + ip37 + ip38 + upp1 + upp2 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 1 && width <= 350 && width >= 255 && fix.value == "WALL") {
		lss = ref + u2 + stm1 + u3 + nref + u4 + nstm8 + u5 + i1 + i18 + i21 + i38 + u6 + up1 + up18 + home + refp + stpm1 + nrefp + nstpm8 + ip1 + ip18 + ip21 + ip38 + upp1 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 0 && width <= 350 && width >= 255 && fix.value == "WALL") {
		lss = ref + u2 + u3 + nref + u4 + u5 + home + refp + nrefp + homep;
		alert("Program Gentaed Succesfully");
		 
	}




	//  DECK PANNEL  ( 260 - 350)


	else if (totalRows == 8 && width <= 350 && width >= 255 && fix.value == "DECK") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + stm5 + stm6 + stm7 + stm8 + u3 + nref + u4 + nstm1 + nstm2 + nstm3 + nstm4 + nstm5 + nstm6 + nstm7 + nstm8 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up8 + up11 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + stpm5 + stpm6 + stpm7 + stpm8 + nrefp + nstpm1 + nstpm2 + nstpm3 + nstpm4 + nstpm5 + nstpm6 + nstpm7 + nstpm8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp8 + upp11 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 7 && width <= 350 && width >= 255 && fix.value == "DECK") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + stm5 + stm6 + stm7 + u3 + nref + u4 + nstm2 + nstm3 + nstm4 + nstm5 + nstm6 + nstm7 + nstm8 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up7 + up12 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + stpm5 + stpm6 + stpm7 + nrefp + nstpm2 + nstpm3 + nstpm4 + nstpm5 + nstpm6 + nstpm7 + nstpm8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp7 + upp12 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 6 && width <= 350 && width >= 255 && fix.value == "DECK") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + stm5 + stm6 + u3 + nref + u4 + nstm3 + nstm4 + nstm5 + nstm6 + nstm7 + nstm8 + u6 + up1 + up2 + up3 + up4 + up5 + up6 + up13 + up14 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + stpm5 + stpm6 + nrefp + nstpm3 + nstpm4 + nstpm5 + nstpm6 + nstpm7 + nstpm8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp6 + upp13 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}

	else if (totalRows == 5 && width <= 350 && width >= 255 && fix.value == "DECK") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + stm5 + u3 + nref + u4 + nstm4 + nstm5 + nstm6 + nstm7 + nstm8 + u6 + up1 + up2 + up3 + up4 + up5 + up14 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + stpm5 + nrefp + nstpm4 + nstpm5 + nstpm6 + nstpm7 + nstpm8 + upp1 + upp2 + upp3 + upp4 + upp5 + upp14 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 4 && width <= 350 && width >= 255 && fix.value == "DECK") {
		lss = ref + u2 + stm1 + stm2 + stm3 + stm4 + u3 + nref + u4 + nstm5 + nstm6 + nstm7 + nstm8 + u6 + up1 + up2 + up3 + up4 + up15 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + stpm4 + nrefp + nstpm5 + nstpm6 + nstpm7 + nstpm8 + upp1 + upp2 + upp3 + upp4 + upp15 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 3 && width <= 350 && width >= 255 && fix.value == "DECK") {
		lss = ref + u2 + stm1 + stm2 + stm3 + u3 + nref + u4 + nstm6 + nstm7 + nstm8 + u6 + up1 + up2 + up3 + up16 + up17 + up18 + home + refp + stpm1 + stpm2 + stpm3 + nrefp + nstpm6 + nstpm7 + nstpm8 + upp1 + upp2 + upp3 + upp16 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}



	else if (totalRows == 2 && width <= 350 && width >= 255 && fix.value == "DECK") {
		lss = ref + u2 + stm1 + stm2 + u3 + nref + u4 + nstm7 + nstm8 + u6 + up1 + up2 + up17 + up18 + home + refp + stpm1 + stpm2 + nrefp + nstpm7 + nstpm8 + upp1 + upp2 + upp17 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 1 && width <= 350 && width >= 255 && fix.value == "DECK") {
		lss = ref + u2 + stm1 + u3 + nref + u4 + nstm8 + u6 + up1 + up18 + home + refp + stpm1 + nrefp + nstpm8 + upp1 + upp18 + homep;
		alert("Program Gentaed Succesfully");
		 
	}


	else if (totalRows == 0 && width <= 350 && width >= 255 && fix.value == "DECK") {
		lss = ref + u2 + u3 + nref + u4 + u5 + home + refp + nrefp + homep;
		alert("Program Gentaed Succesfully");
		 
	}






	////////////////////



	else {
		alert("Condition Not Satisfied")
	}







}






async function selectFolder() {
    rootFolder = await window.showDirectoryPicker();
    alert("Folder Selected");
}




async function downloadSrcFile() {

    LS();
    condition();

    let pname = document.getElementById('nm').value;

    userInput = lss;

    if (!rootFolder) {
        alert("Please select save folder first.");
        return;
    }

    const today = new Date();

    const folderName =
        today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, '0') + "-" +
        String(today.getDate()).padStart(2, '0');

    const dateFolder = await rootFolder.getDirectoryHandle(
        folderName,
        { create: true }
    );

    const fileHandle = await dateFolder.getFileHandle(
        `${pname}.ls`,
        { create: true }
    );

    const writable = await fileHandle.createWritable();

    await writable.write(userInput);

    await writable.close();

    alert(`${pname}.ls saved successfully`);
}
