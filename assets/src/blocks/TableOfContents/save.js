/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import TableOfContentsList from './list';
import { linearToNestedHeadingList } from './utils';

export default function save( { attributes: { headings = [] } } ) {
	if ( headings.length === 0 ) {
		return null;
	}
	return (
		<nav { ...useBlockProps.save() }>
			<ol>
				<TableOfContentsList
					nestedHeadingList={ linearToNestedHeadingList( headings ) }
				/>
			</ol>
		</nav>
	);
}
