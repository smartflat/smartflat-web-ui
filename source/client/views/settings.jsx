// region import

import {h} from 'hyperapp'

// Components

import Header from '../components/header'
import Footer from '../components/footer'

// endregion

// region ViewSettings

export default (model, actions) =>
	<div>
		<Header actions={actions} model={model}/>
		<div class="container">
			<div class="columns">
				<div class="column is-one-quarter">
					<aside class="menu">
						<p class="menu-label">
							General
						</p>
						<ul class="menu-list">
							<li><a class="is-active">Server</a></li>
						</ul>
						<p class="menu-label">
							Devices
						</p>
						<ul class="menu-list">
							<li><a>Add Device</a></li>
							<li><a>Show Devices</a></li>
						</ul>
						<p class="menu-label">
							Users
						</p>
						<ul class="menu-list">
							<li><a>Users</a></li>
							<li><a>Manage Users</a></li>
						</ul>
						<p class="menu-label">
							Modules
						</p>
						<ul class="menu-list">
							<li><a>Installed</a></li>
						</ul>
					</aside>
				</div>
				<div class="column">
					<label class="label">Name</label>
					<p class="control">
						<input
							class="input"
							placeholder="Text input"
							type="text"
						/>
					</p>
				</div>
			</div>
		</div>
	</div>

// endregion
