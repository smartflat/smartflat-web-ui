// region import

import {h} from 'hyperapp'

// endregion

// region isActive

const isActive = (model, route) => model.router.match === route
	? 'is-active is-tab nav-item'
	: 'is-tab nav-item'

// endregion

// region Header

// TODO https://github.com/hyperapp/hyperapp/issues/160
export default ({actions, model}) =>
	<header class="nav">
		<div class="container">
			<div class="nav-left">
				<a href="/m/web-ui/" class={isActive(model, '/m/web-ui/')}>
					<img src="/m/web-ui/images/logo.svg" height="21" width="21"/>
					SmartFlat
				</a>
				{model.session.ready ?
					<a href="/m/web-ui/devices" class={isActive(model, '/m/web-ui/devices')}>
						<span class="icon">
							<i class="fa fa-lightbulb-o"></i>
						</span>
						<span>Devices</span>
					</a>
				: <div/>}
			</div>
			<span class="nav-toggle" onClick={actions.ui.toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</span>
			<div class={`nav-right nav-menu ${model.ui.toggleMenu ? 'is-active' : ''}`}>
				{model.session.ready ?
					<a href="/m/web-ui/settings" class={isActive(model, '/m/web-ui/settings')}>
						<span class="icon">
							<i class="fa fa-cog"></i>
						</span>
						<span>Settings</span>
					</a>
				: <div/>}
				{model.session.ready ?
					<span class="nav-item">
						<span onClick={actions.session.signOut} class="button">
							<span class="icon">
								<i class="fa fa-sign-out"></i>
							</span>
							<span>Sign out</span>
						</span>
					</span>
				: <div/>}
				{!model.session.ready ?
					<span class={isActive(model, '/m/web-ui/sign-in')}>
						<a href="/m/web-ui/sign-in" class="button">
							<span class="icon">
								<i class="fa fa-sign-in"></i>
							</span>
							<span>Sign in</span>
						</a>
					</span>
				: <div/>}
			</div>
		</div>
	</header>

// endregion
