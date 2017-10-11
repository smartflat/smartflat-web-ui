// region import

import request from 'superagent'

// endregion

export default {
	// region session
	session: {
		check: async (model, _, actions) => {
			try {
				const response = await request
					.get('/m/web-api/v1/session')
				actions.session.set({
					error: '',
					input: {
						name: '',
						password: ''
					},
					name: response.body.name,
					ready: true
				})
				if (model.router.matched === '/m/web-ui/sign-in')
					actions.router.go('/m/web-ui/')
			} catch (error) {
				console.info('not signed in')
			}
		},
		input: {
			password: ({session}, password) => ({
				session: {
					...session,
					input: {
						...session.input,
						password
					}
				}
			}),
			name: ({session}, name) => ({
				session: {
					...session,
					input: {
						...session.input,
						name
					}
				}
			})
		},
		signIn: async (model, data, actions) => {
			const {password, name} = model.session.input
			try {
				const response = await request
					.post('/m/web-api/v1/session')
					.send({password, name})
				actions.session.set({
					error: '',
					input: {
						name: '',
						password: ''
					},
					name,
					ready: true
				})
				actions.router.go('/m/web-ui/devices')
			} catch (error) {
				actions.session.set({
					error: 'Could Not Sign In'
				})
			}
		},
		signOut: async (model, data, actions) => {
			try {
				const response = await request
					.delete('/m/web-api/v1/session')
				actions.session.set({
					error: '',
					input: {
						name: '',
						password: ''
					},
					name: '',
					ready: false
				})
				actions.router.go('/m/web-ui/sign-in')
			} catch (error) {
				actions.session.set({
					error: 'Could Not Sign Out'
				})
			}
		},
		set: ({session}, data) => ({
			session: {
				...session,
				...data
			}
		})
	},
	// endregion

	// region ui
	ui: {
		toggleMenu: model => ({
			ui: {
				...model.ui,
				toggleMenu: !model.ui.toggleMenu
			}
		})
	}
	// endregion
}
