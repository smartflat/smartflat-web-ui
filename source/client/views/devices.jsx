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
			{model.tiles.map(tiles => <Tiles isAncestor tiles={tiles}/>)}
		</section>
	</div>
// endregion

// region Tiles
const tileClass = ({color, isAncestor, tiles, vertical, width}) => {
	const classes = ['tile']

	if (!tiles)
		classes.push('is-child')

	if (color)
		classes.push('notification', `is-${color}`)

	if (isAncestor)
		classes.push(`is-ancestor`)

	if (tiles && tiles.length && !tiles[0].tiles)
		classes.push('is-parent')

	if (vertical)
		classes.push('is-vertical')

	if (width)
		classes.push(`is-${width}`)

	return classes.join(' ')
}
const Tiles = ({tiles: {color, content, tiles, title, vertical, width}, isAncestor}) =>
	<div class={tileClass({color, isAncestor, tiles, vertical, width})}>
		{tiles && tiles.map(tiles => <Tiles tiles={tiles}/>)}
		{Boolean(title) && <p class="title">{title}</p>}
		{Boolean(content) && <p class="subtitle">{content}</p>}
	</div>
// endregion
