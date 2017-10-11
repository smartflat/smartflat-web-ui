export default {
	session: {
		error: '',
		input: {
			name: '',
			password: ''
		},
		ready: false
	},
	ui: {
		toggleMenu: false
	},
	tiles: [{
		tiles: [{
			width: 8,
			vertical: true,
			tiles: [{
				tiles: [{
					vertical: true,
					tiles: [{
						color: 'primary',
						title: 'Vertical...',
						content: 'Top tile'
					}, {
						color: 'warning',
						title: '...tiles',
						content: 'Bottom tile'
					}]
				}, {
					tiles: [{
						color: 'info',
						title: 'Middle tile',
						content: 'with an image'
					}]
				}]
			}, {
				tiles: [{
					color: 'danger',
					title: 'Wide tile',
					content: 'Aligned with the right side'
				}]
			}]
		}, {
			tiles: [{
				color: 'success',
				title: 'Tall tile',
				content: 'content'
			}]
		}]
	}]
}
