// region import

import {h} from 'hyperapp'

// Components

import Header from '../components/header'
import Footer from '../components/footer'

// endregion

// region ViewDevices

export default (model, actions) =>
	<div>
		<Header actions={actions} model={model}/>
		<section class="container">
			<div class="tile is-ancestor">
				<div class="tile is-vertical is-8">
					<div class="tile">
						<div class="tile is-parent is-vertical">
							<article class="tile is-child notification is-primary">
								<p class="title">Vertical...</p>
								<p class="subtitle">Top tile</p>
							</article>
							<article class="tile is-child notification is-warning">
								<p class="title">...tiles</p>
								<p class="subtitle">Bottom tile</p>
							</article>
						</div>
						<div class="tile is-parent">
							<article class="tile is-child notification is-info">
								<p class="title">Middle tile</p>
								<p class="subtitle">With an image</p>
							</article>
						</div>
					</div>
					<div class="tile is-parent">
						<article class="tile is-child notification is-danger">
							<p class="title">Wide tile</p>
							<p class="subtitle">Aligned with the right tile</p>
							<div class="content">
								content
							</div>
						</article>
					</div>
				</div>
				<div class="tile is-parent">
					<article class="tile is-child notification is-success">
						<div class="content">
							<p class="title">Tall tile</p>
							<p class="subtitle">With even more content</p>
							<div class="content">
								content
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	</div>

// endregion
