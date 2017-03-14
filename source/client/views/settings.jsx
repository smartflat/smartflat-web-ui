// region import

import {h} from 'hyperapp'

// Components

import Header from '../components/header'
import Footer from '../components/footer'

// endregion

// region ViewMain

export default (model, actions) =>
	<div>
		<Header actions={actions} model={model}/>
		<div class="container">
			<div class="columns" style={{margin: 0}}>
				<div class="is-one-quarter">
					<aside class="menu">
						<p class="menu-label">
							General
						</p>
						<ul class="menu-list">
							<li><a class="is-active">Information</a></li>
							<li><a>Customers</a></li>
						</ul>
						<p class="menu-label">
							Administration
						</p>
						<ul class="menu-list">
							<li><a>Users</a></li>
							<li>
								<a>Manage Users</a>
								<ul>
									<li><a>Members</a></li>
									<li><a>Plugins</a></li>
									<li><a>Add a member</a></li>
								</ul>
							</li>
							<li><a>Invitations</a></li>
							<li><a>Cloud Storage Environment Settings</a></li>
							<li><a>Authentication</a></li>
						</ul>
						<p class="menu-label">
							Modules
						</p>
						<ul class="menu-list">
							<li><a>Installed</a></li>
							<li><a>Transfers</a></li>
							<li><a>Balance</a></li>
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
