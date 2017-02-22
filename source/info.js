// region import

import fs from 'fs'

// endregion

// region routes

export default () => ({
	dependencies: ['web-api'],
	name: 'web-ui',
	routes: [
		['get', 'bundle.js', [], {
			status: 200,
			body: fs.readFileSync(`${__dirname}/client/bundle.js`),
			headers: {
				'Content-Type': 'application/javascript; charset-utf-8'
			}
		}],
		['get', 'images/logo.png', [], {
			status: 200,
			body: fs.readFileSync(`${__dirname}/images/logo.png`),
			headers: {
				'Content-Type': 'image/png'
			}
		}],
		['get', 'images/logo.svg', [], {
			status: 200,
			body: fs.readFileSync(`${__dirname}/images/logo.svg`),
			headers: {
				'Content-Type': 'image/svg+xml; charset-utf-8'
			}
		}],
		['get', '*', [], {
			status: 200,
			body: fs.readFileSync(`${__dirname}/client/index.html`),
			headers: {
				'Content-Type': 'text/html; charset=utf-8'
			}
		}]
	]
})

// endregion
