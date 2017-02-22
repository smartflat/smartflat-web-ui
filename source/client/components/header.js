// region import

import {h} from 'hyperapp'

// endregion

// region Header

export default () =>
	<header class="nav">
		<div class="container">
			<div class="nav-left">
				<a href="/m/web-ui/" class="nav-item">
					<img src="/m/web-ui/images/logo.svg" style={{
						height: '48px',
						width: '48px'
					}}/>
					SmartFlat
				</a>
			</div>
			<span class="nav-toggle">
				<span></span>
				<span></span>
				<span></span>
			</span>
			<div class="nav-right nav-menu">
				<span class="nav-item">
					<a href="/m/web-ui/sign-in" class="button">
						<span class="icon">
							<i class="fa fa-sign-in"></i>
						</span>
						<span>Sign in</span>
					</a>
				</span>
			</div>
		</div>
	</header>

// endregion
