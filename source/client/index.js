// region import

import {app, router} from 'hyperapp'

// internal

import effects from './app/effects'
import hooks from './app/hooks'
import model from './app/model'
import subscriptions from './app/subscriptions'
import reducers from './app/reducers'
import view from './views'

// styles

import './styles/global.sass'

// endregion

// region app

window.addEventListener('load', () => app({
	effects,
	hooks,
	model,
	subscriptions,
	reducers,
	router,
	view
}))

// endregion
