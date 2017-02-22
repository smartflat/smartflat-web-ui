// region import

import {h} from 'hyperapp'

// components

import Header from '../components/header'
import Footer from '../components/footer'

// style

import './sign-in.sass'

// endregion

// region ViewMain

export default (model, actions) =>
	<section class="hero is-fullheight">
		<div class="hero-head">
			<Header/>
		</div>
		<div class="hero-body">
			<div class="container has-text-centered">
				<div style={{maxWidth: '512px', margin: '0 auto'}}>
					<p class="control has-icon">
						<input class="input" type="text" placeholder="Username"/>
						<span class="icon is-small">
							<i class="fa fa-user"></i>
						</span>
					</p>
					<p class="control has-icon">
					<input class="input" type="password" placeholder="Password"/>
						<span class="icon is-small">
							<i class="fa fa-lock"></i>
						</span>
					</p>
					<p class="control">
						<button onclick={actions.signIn} class="button is-success">
							Sign in
						</button>
					</p>
				</div>
			</div>
		</div>
		<div class="hero-foot">
			<Footer/>
		</div>
	</section>

// endregion
