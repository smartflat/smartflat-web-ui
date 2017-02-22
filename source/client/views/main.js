// region import

import {h} from 'hyperapp'

// Components

import Header from '../components/header'
import Footer from '../components/footer'

// endregion

// region ViewMain

export default () =>
	<section class="hero is-fullheight">
		<div class="hero-head">
			<Header/>
		</div>
		<div class="hero-body">
			<div class="container has-text-centered">
				<h1 class="title">
					SmartFlat
				</h1>
				<h2 class="subtitle">
					Customizable. Modular. Smart.
				</h2>
			</div>
		</div>
		<div class="hero-foot">
			<Footer/>
		</div>
	</section>

// endregion
