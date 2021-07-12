(()=>{

	var turn_no = 1
	var provinces = {
		"Ruyalar": 0,
		"Teclandec": 0,
		"Celandec": 2,
		"Dornayar": 2,
		"Idrelec": [2, 3],
		"Aurannar": 4
	}

	var seasonLut = [
		"Winter",
		"Autumn",
		"Summer",
		"Spring"
	]

	var offset = (turn_no-1) % 4

	var selector = document.getElementById("location_select")
	selector.onchange = (event) => {
		var province = event.target.value

		var result = document.getElementById("result")

		if(province === "Idrelec"){
			var [part1, part2] = provinces[province]
			var season1 = seasonLut[(part1 + offset) % 4]
			var season2 = seasonLut[(part2 + offset) % 4]

			result.textContent = season1 + " for Naexi, Llorra, Phyrra regions.\n"
			result.textContent += season2 + " for Zaleria, Merlara, Tanulia, Sumina regions"
			
		}
		else {
			var pos = provinces[province]
			var season = seasonLut[(pos + offset) % 4]
			result.textContent = season 

		}
		
	}
	selector.value = ""
})()
