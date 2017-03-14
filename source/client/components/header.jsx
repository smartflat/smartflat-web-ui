// region import

import {h} from 'hyperapp'

// endregion

// region Header

export default ({actions, model}) =>
	<header class="nav">
		<div class="container">
			<div class="nav-left">
				<a href="/m/web-ui/" class="nav-item">
					<img src="/m/web-ui/images/logo.svg"/>
					SmartFlat
				</a>
				{model.session.ready &&
					<a href="/m/web-ui/devices" class="nav-item">
						<span class="icon">
							<i class="fa fa-lightbulb-o"></i>
						</span>
						<span>Devices</span>
					</a>
				}
			</div>
			<span class="nav-toggle">
				<span></span>
				<span></span>
				<span></span>
			</span>
			<div class="nav-right nav-menu">
				{model.session.ready &&
					<span class="nav-item">
						<a href="/m/web-ui/settings" class="button">
							<span class="icon">
								<i class="fa fa-cogs"></i>
							</span>
							<span>Settings</span>
						</a>
					</span>
				}
				{!model.session.ready &&
					<span class="nav-item">
						<a href="/m/web-ui/sign-in" class="button">
							<span class="icon">
								<i class="fa fa-sign-in"></i>
							</span>
							<span>Sign in</span>
						</a>
					</span>
				}
			</div>
		</div>
	</header>

// endregion
