// region import

import request from 'superagent'

// endregion

// region effects

export default {
	signIn: async (model, actions) => {
		try {
			const response = await request.get('/api/web/account')
			console.log(response)
		} catch (error) {
			console.error(error)
		}
	}
}

// endregion
