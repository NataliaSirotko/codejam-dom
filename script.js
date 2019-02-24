const messages = [
  "<b>Email tip of the day</b><br> 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  "<b>Email tip of the day</b><br> 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
  "<b>Email tip of the day</b><br> 3. Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore",
  "<b>Email tip of the day</b><br> 4. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesc",
  "<b>Email tip of the day</b><br> 5. Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo volup"
];

toLocal();
goTips();

function toLocal() {
	const checkbox = document.querySelector('.check');
	checkbox.addEventListener('click', setLocal);
	checkbox.addEventListener('keydown', setLocal);

	function setLocal() {
		if(checkbox.checked) {
    		localStorage.setItem('check', "true");
  		} else {
   			localStorage.setItem('check', "false");
   		}
   		/*checkbox.checked ? localStorage.setItem('check', "true") : localStorage.setItem('check', "false");*/
	}

	if (localStorage.getItem('check') == "true") {
		checkbox.setAttribute('checked','checked');
		hide();
		/*notif.setAttribute('hidden');*/
	}
}

function goTips() {
	const notif = document.querySelector('#notification');
	const content = document.querySelector('.notif_content');
	const prev = document.querySelector('.prev');
	const next = document.querySelector('.next');

	setTimeout(function() {
	   	notif.style.display = 'block';
	}, 5000);
	
	let i = 0;
	content.innerHTML = messages[i];
	next.addEventListener('click', goNext);
	next.addEventListener('keydown', goNext);

	function goNext() {
		i++;
		if (i == messages.length) {
			i = 0;
		}
		content.innerHTML = messages[i];
	}

	prev.addEventListener('click', goPrev);
	prev.addEventListener('keydown', goPrev);

	function goPrev() {
		i--;
		if (i == -1) {
			i = messages.length-1;
		}
		content.innerHTML = messages[i];
	}
	
	content.addEventListener('click', hide);
	content.addEventListener('keydown', hide);

	function hide() {
		notif.style.display = 'none';
	}	
}

