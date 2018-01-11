			var start = new Date().getTime();
			
			
			function getRandomColor() {
				
				var letters = '0123456789ABCDEF';
				var color = '#';
				
				for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];
				}
				
				return color;
			}
			
			
			function makeShapeAppear() {
				
				if (Math.random() > 0.35) {
			
					document.getElementById("shape").style.borderRadius = "50%";
				}
				else {
				
					document.getElementById("shape").style.borderRadius = "0";
				}
				
				document.getElementById("shape").style.display = "block";
				
				document.getElementById("shape").style.top = Math.random() * 300 + "px";
				
				document.getElementById("shape").style.left = Math.random() * 300 + "px";
				
				document.getElementById("shape").style.width = 50 + Math.random() * 250 + "px";
				
				document.getElementById("shape").style.height = 50 + Math.random() * 250 + 
				"px";
				
				document.getElementById("shape").style.backgroundColor = getRandomColor();
				
				start = new Date().getTime();
			}
			
			
			function appearAfterDelay() {
			
				setTimeout(makeShapeAppear, Math.random() * 2000);
			}
			
			
			appearAfterDelay();
			
			
			document.getElementById("shape").onclick = function () {
			
				document.getElementById("shape").style.display = "none";
				
				var end = new Date().getTime();
				
				var timeTaken = (end - start) / 1000;
				
				document.getElementById("timeTaken").innerHTML = timeTaken + "s";
			
				appearAfterDelay();
			}