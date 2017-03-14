// region import

import {h} from 'hyperapp'

// Components

import Header from '../components/header'
import Footer from '../components/footer'

// endregion

// region ViewMain

export default (model, actions) =>
	<section class="hero is-fullheight">
		<div class="hero-head">
			<Header actions={actions} model={model}/>
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
			<nav class="tabs is-centered">
				<ul>
					<li><a>Modifiers</a></li>
					<li><a>Grid</a></li>
					<li><a>Elements</a></li>
					<li><a>Components</a></li>
					<li><a href="https://github.com/smartflat/smartflat-web-ui"><span class="icon"><i class="fa fa-github"/></span>Source Code</a></li>
				</ul>
			</nav>
		</div>
	</section>

// endregion
