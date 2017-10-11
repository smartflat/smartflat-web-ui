// region import
import {app, Router} from 'hyperapp'

// internal
import actions from './app/actions'
import hooks from './app/hooks'
import model from './app/model'
import subscriptions from './app/subscriptions'
import view from './views'

// styles
import './styles/global.sass'
// endregion

// region app
window.addEventListener('load', () => app({
	actions,
	hooks,
	model,
	plugins: [Router],
	subscriptions,
	view
}))
// endregion
