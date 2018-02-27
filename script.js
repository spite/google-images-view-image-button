window.addEventListener('load', () => {

	const nodes = document.querySelectorAll('.irc_but_r tr');

	for (const node of nodes) {

		const td = document.createElement('td');
		td.innerHTML = '<a><span>View Image</span></a>';
		node.appendChild(td);

		td.addEventListener('click', async e => {

			const img = td.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.irc_mi');

			if (img) {

				const downloadBtn = document.createElement( 'a' );
				document.body.appendChild(downloadBtn);
				//downloadBtn.setAttribute( 'download', img.src );
				downloadBtn.setAttribute( 'target', '_blank' );
				downloadBtn.setAttribute( 'href', img.src );
				downloadBtn.click();
				document.body.removeChild(downloadBtn);

				e.preventDefault();
				e.stopPropagation();
				return false;
			}

		});
	}

})
