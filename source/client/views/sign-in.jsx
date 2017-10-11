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
			<Header actions={actions} model={model}/>
		</div>
		<div class="hero-body">
			<div class="container has-text-centered">
				{model.session.error &&
					<div class="message is-warning">
						<div class="message-header">Could not sign in.</div>
						<div class="message-body">{model.session.error}</div>
					</div>
				}
				<div style={{maxWidth: '512px', margin: '0 auto'}}>
					<p class="control has-icon">
						<input
							class="input"
							onInput={e => actions.session.input.name(e.target.value)}
							onKeyUp={e => e.keyCode === 13 && actions.session.signIn()}
							placeholder="Username"
							type="text"
							value={model.session.input.name}
						/>
						<span class="icon is-small">
							<i class="fa fa-user"></i>
						</span>
					</p>
					<p class="control has-icon">
						<input
							class="input"
							onInput={e => actions.session.input.password(e.target.value)}
							onKeyUp={e => e.keyCode === 13 && actions.session.signIn()}
							placeholder="Password"
							type="password"
							value={model.session.input.password}
						/>
						<span class="icon is-small">
							<i class="fa fa-lock"></i>
						</span>
					</p>
					<p class="control">
						<button onclick={actions.session.signIn} class="button is-success">
							Sign in
						</button>
					</p>
				</div>
			</div>
		</div>
		<div class="hero-foot">
			<Footer actions={actions} model={model}/>
		</div>
	</section>
// endregion
