
document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 519,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`
			}
		}
	}).start()
		
})

const fadeBox = basicScroll.create({
	elem: document.querySelector('.fadeBox'),
	from: 'bottom-bottom',
	to: 'top-middle',
	inside: (instance, percentage, props) => console.log('fadeBox is animating'),
	outside: (instance, percentage, props) => console.log('fadeBox is not animating'),
	props: {
		'--o': {
			from: .01,
			to: .99
		}
	}
})


fadeBox.start()