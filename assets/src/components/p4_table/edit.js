/**
 * This file is a copy of the table block edit.js (https://github.com/WordPress/gutenberg/blob/f3c538578aa818e76dbe09445d0fb1678166086d/packages/block-library/src/table/edit.js), with customize changes.
 * Customize changes(PLANET-5058) :
 *  - Added custom background colors for header, odd/even rows and footer.
 *  - Added translation domain (planet4-blocks-backend) for strings.
 */

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@hooks';
import {
	InspectorControls,
	BlockControls,
	RichText,
	PanelColorSettings,
	createCustomColorsHOC,
	BlockIcon,
	AlignmentToolbar,
	useBlockProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	Button,
	DropdownMenu,
	PanelBody,
	Placeholder,
	TextControl,
	ToggleControl,
	ToolbarGroup,
	ToolbarItem,
} from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import {
	createTable,
	updateSelectedCell,
	getCellAttribute,
	insertRow,
	deleteRow,
	insertColumn,
	deleteColumn,
	toggleSection,
	isEmptyTableSection,
} from './state';

const BACKGROUND_COLORS = [
	{
		color: '#f5f7f8',
    name: __('Grey'),
    slug: 'grey'
	},
	{
		color: '#eafee7',
    name: __('Green'),
    slug: 'green'
	},
	{
		color: '#e7f5fe',
    name: __('Blue'),
    slug: 'blue'
	}
];

const ALIGNMENT_CONTROLS = [
	{
		icon: "editor-alignleft",
		title: __( 'Align column left' ),
		align: 'left',
	},
	{
		icon: "editor-aligncenter",
		title: __( 'Align column center' ),
		align: 'center',
	},
	{
		icon: "editor-alignright",
		title: __( 'Align column right' ),
		align: 'right',
	},
];

const withCustomBackgroundColors = createCustomColorsHOC( BACKGROUND_COLORS );

const cellAriaLabel = {
	head: __( 'Header cell text' ),
	body: __( 'Body cell text' ),
	foot: __( 'Footer cell text' ),
};

const placeholder = {
	head: __( 'Header label' ),
	foot: __( 'Footer label' ),
};

function TSection( { name, ...props } ) {
	const TagName = `t${ name }`;
	return <TagName { ...props } />;
}

function TableEdit( {
	attributes,
	backgroundColor,
	setBackgroundColor,
	setAttributes,
	insertBlocksAfter,
	isSelected,
} ) {
	const { hasFixedLayout, caption, head, foot } = attributes;
	const [ initialRowCount, setInitialRowCount ] = useState( 2 );
	const [ initialColumnCount, setInitialColumnCount ] = useState( 2 );
	const [ selectedCell, setSelectedCell ] = useState();

	/**
	 * Updates the initial column count used for table creation.
	 *
	 * @param {number} count New initial column count.
	 */
	function onChangeInitialColumnCount( count ) {
		setInitialColumnCount( count );
	}

	/**
	 * Updates the initial row count used for table creation.
	 *
	 * @param {number} count New initial row count.
	 */
	function onChangeInitialRowCount( count ) {
		setInitialRowCount( count );
	}

	/**
	 * Creates a table based on dimensions in local state.
	 *
	 * @param {Object} event Form submit event.
	 */
	function onCreateTable( event ) {
		event.preventDefault();

		setAttributes(
			createTable( {
				rowCount: parseInt( initialRowCount, 10 ) || 2,
				columnCount: parseInt( initialColumnCount, 10 ) || 2,
			} )
		);
	}

	/**
	 * Toggles whether the table has a fixed layout or not.
	 */
	function onChangeFixedLayout() {
		setAttributes( { hasFixedLayout: ! hasFixedLayout } );
	}

	/**
	 * Changes the content of the currently selected cell.
	 *
	 * @param {Array} content A RichText content value.
	 */
	function onChange( content ) {
		if ( ! selectedCell ) {
			return;
		}

		setAttributes(
			updateSelectedCell(
				attributes,
				selectedCell,
				( cellAttributes ) => ( {
					...cellAttributes,
					content,
				} )
			)
		);
	}

	/**
	 * Align text within the a column.
	 *
	 * @param {string} align The new alignment to apply to the column.
	 */
	function onChangeColumnAlignment( align ) {
		if ( ! selectedCell ) {
			return;
		}

		// Convert the cell selection to a column selection so that alignment
		// is applied to the entire column.
		const columnSelection = {
			type: 'column',
			columnIndex: selectedCell.columnIndex,
		};

		const newAttributes = updateSelectedCell(
			attributes,
			columnSelection,
			( cellAttributes ) => ( {
				...cellAttributes,
				align,
			} )
		);
		setAttributes( newAttributes );
	}

	/**
	 * Get the alignment of the currently selected cell.
	 *
	 * @return {string} The new alignment to apply to the column.
	 */
	function getCellAlignment() {
		if ( ! selectedCell ) {
			return;
		}

		return getCellAttribute( attributes, selectedCell, 'align' );
	}

	/**
	 * Add or remove a `head` table section.
	 */
	function onToggleHeaderSection() {
		setAttributes( toggleSection( attributes, 'head' ) );
	}

	/**
	 * Add or remove a `foot` table section.
	 */
	function onToggleFooterSection() {
		setAttributes( toggleSection( attributes, 'foot' ) );
	}

	/**
	 * Inserts a row at the currently selected row index, plus `delta`.
	 *
	 * @param {number} delta Offset for selected row index at which to insert.
	 */
	function onInsertRow( delta ) {
		if ( ! selectedCell ) {
			return;
		}

		const { sectionName, rowIndex } = selectedCell;
		const newRowIndex = rowIndex + delta;

		setAttributes(
			insertRow( attributes, {
				sectionName,
				rowIndex: newRowIndex,
			} )
		);
		// Select the first cell of the new row
		setSelectedCell( {
			sectionName,
			rowIndex: newRowIndex,
			columnIndex: 0,
			type: 'cell',
		} );
	}

	/**
	 * Inserts a row before the currently selected row.
	 */
	function onInsertRowBefore() {
		onInsertRow( 0 );
	}

	/**
	 * Inserts a row after the currently selected row.
	 */
	function onInsertRowAfter() {
		onInsertRow( 1 );
	}

	/**
	 * Deletes the currently selected row.
	 */
	function onDeleteRow() {
		if ( ! selectedCell ) {
			return;
		}

		const { sectionName, rowIndex } = selectedCell;

		setSelectedCell();
		setAttributes( deleteRow( attributes, { sectionName, rowIndex } ) );
	}

	/**
	 * Inserts a column at the currently selected column index, plus `delta`.
	 *
	 * @param {number} delta Offset for selected column index at which to insert.
	 */
	function onInsertColumn( delta = 0 ) {
		if ( ! selectedCell ) {
			return;
		}

		const { columnIndex } = selectedCell;
		const newColumnIndex = columnIndex + delta;

		setAttributes(
			insertColumn( attributes, {
				columnIndex: newColumnIndex,
			} )
		);
		// Select the first cell of the new column
		setSelectedCell( {
			rowIndex: 0,
			columnIndex: newColumnIndex,
			type: 'cell',
		} );
	}

	/**
	 * Inserts a column before the currently selected column.
	 */
	function onInsertColumnBefore() {
		onInsertColumn( 0 );
	}

	/**
	 * Inserts a column after the currently selected column.
	 */
	function onInsertColumnAfter() {
		onInsertColumn( 1 );
	}

	/**
	 * Deletes the currently selected column.
	 */
	function onDeleteColumn() {
		if ( ! selectedCell ) {
			return;
		}

		const { sectionName, columnIndex } = selectedCell;

		setSelectedCell();
		setAttributes(
			deleteColumn( attributes, { sectionName, columnIndex } )
		);
	}

	useEffect( () => {
		if ( ! isSelected ) {
			setSelectedCell();
		}
	}, [ isSelected ] );

	const sections = [ 'head', 'body', 'foot' ].filter(
		( name ) => ! isEmptyTableSection( attributes[ name ] )
	);

	const tableControls = [
		{
			icon: "table-row-before",
			title: __( 'Insert row before' ),
			isDisabled: ! selectedCell,
			onClick: onInsertRowBefore,
		},
		{
			icon: "table-row-after",
			title: __( 'Insert row after' ),
			isDisabled: ! selectedCell,
			onClick: onInsertRowAfter,
		},
		{
			icon: "table-row-delete",
			title: __( 'Delete row' ),
			isDisabled: ! selectedCell,
			onClick: onDeleteRow,
		},
		{
			icon: "table-col-before",
			title: __( 'Insert column before' ),
			isDisabled: ! selectedCell,
			onClick: onInsertColumnBefore,
		},
		{
			icon: "table-col-after",
			title: __( 'Insert column after' ),
			isDisabled: ! selectedCell,
			onClick: onInsertColumnAfter,
		},
		{
			icon: "table-col-delete",
			title: __( 'Delete column' ),
			isDisabled: ! selectedCell,
			onClick: onDeleteColumn,
		},
	];

	const renderedSections = [ 'head', 'body', 'foot' ].map( ( name ) => (
		<TSection name={ name } key={ name }>
			{ attributes[ name ].map( ( { cells }, rowIndex ) => (
				<tr key={ rowIndex }>
					{ cells.map(
						(
							{ content, tag: CellTag, scope, align },
							columnIndex
						) => (
							<RichText
								tagName={ CellTag }
								key={ columnIndex }
								className={ classnames(
									{
										[ `has-text-align-${ align }` ]: align,
									},
									'wp-block-table__cell-content'
								) }
								scope={ CellTag === 'th' ? scope : undefined }
								value={ content }
								onChange={ onChange }
								unstableOnFocus={ () => {
									setSelectedCell( {
										sectionName: name,
										rowIndex,
										columnIndex,
										type: 'cell',
									} );
								} }
								aria-label={ cellAriaLabel[ name ] }
								placeholder={ placeholder[ name ] }
							/>
						)
					) }
				</tr>
			) ) }
		</TSection>
	) );

	const isEmpty = ! sections.length;

	return (
		<figure { ...useBlockProps() }>
			{ ! isEmpty && (
				<BlockControls>
					<ToolbarGroup>
						<ToolbarItem>
							{ ( toggleProps ) => (
								<DropdownMenu
									hasArrowIndicator
									icon="editor-table"
									toggleProps={ toggleProps }
									label={ __( 'Edit table' ) }
									controls={ tableControls }
								/>
							) }
						</ToolbarItem>
					</ToolbarGroup>
					<AlignmentToolbar
						label={ __( 'Change column alignment' ) }
						alignmentControls={ ALIGNMENT_CONTROLS }
						value={ getCellAlignment() }
						onChange={ ( nextAlign ) =>
							onChangeColumnAlignment( nextAlign )
						}
					/>
				</BlockControls>
			) }
			{ ! isEmpty && (
				<InspectorControls>
					<PanelBody
						title={ __( 'Table settings' ) }
						className="blocks-table-settings"
					>
						<ToggleControl
							label={ __( 'Fixed width table cells' ) }
							checked={ !! hasFixedLayout }
							onChange={ onChangeFixedLayout }
						/>
						<ToggleControl
							label={ __( 'Header section' ) }
							checked={ !! ( head && head.length ) }
							onChange={ onToggleHeaderSection }
						/>
						<ToggleControl
							label={ __( 'Footer section' ) }
							checked={ !! ( foot && foot.length ) }
							onChange={ onToggleFooterSection }
						/>
					</PanelBody>
					<PanelColorSettings
						title={ __( 'Color settings' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __( 'Background color' ),
								disableCustomColors: true,
								colors: BACKGROUND_COLORS,
							},
						] }
					/>
				</InspectorControls>
			) }
			{ ! isEmpty && (
				<table
					className={ classnames( backgroundColor.class, {
						'has-fixed-layout': hasFixedLayout,
						'has-background': !! backgroundColor.color,
					} ) }
				>
					{ renderedSections }
				</table>
			) }
			{ ! isEmpty && (
				<RichText
					tagName="figcaption"
					aria-label={ __( 'Table caption text' ) }
					placeholder={ __( 'Write caption…' ) }
					value={ caption }
					onChange={ ( value ) =>
						setAttributes( { caption: value } )
					}
					// Deselect the selected table cell when the caption is focused.
					unstableOnFocus={ () => setSelectedCell() }
					__unstableOnSplitAtEnd={ () =>
						insertBlocksAfter( createBlock( 'core/paragraph' ) )
					}
				/>
			) }
			{ isEmpty && (
				<Placeholder
					label={ __( 'Table' ) }
					icon={ <BlockIcon icon="editor-table" showColors /> }
					instructions={ __( 'Insert a table for sharing data.' ) }
				>
					<form
						className="blocks-table__placeholder-form"
						onSubmit={ onCreateTable }
					>
						<TextControl
							type="number"
							label={ __( 'Column count' ) }
							value={ initialColumnCount }
							onChange={ onChangeInitialColumnCount }
							min="1"
							className="blocks-table__placeholder-input"
						/>
						<TextControl
							type="number"
							label={ __( 'Row count' ) }
							value={ initialRowCount }
							onChange={ onChangeInitialRowCount }
							min="1"
							className="blocks-table__placeholder-input"
						/>
						<Button
							className="blocks-table__placeholder-button"
							isPrimary
							type="submit"
						>
							{ __( 'Create Table' ) }
						</Button>
					</form>
				</Placeholder>
			) }
		</figure>
	);
}

export default withCustomBackgroundColors( 'backgroundColor' )( TableEdit );
