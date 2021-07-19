/**
 * This file is copy of core button block color-edit.js (https://github.com/WordPress/gutenberg/blob/db6d666f3165e78a4dcf350c7ff7f6638e8439e0/packages/block-library/src/button/color-edit.js), with customize changes.
 * Customize changes(PLANET-4924) :
 *  - Added `p4_button_text_colors` and `p4_button_bg_colors` custom P4 button colors.
 *  - Remove the BorderPanel control(button borderRadius).
 *  - Remove the WidthPanel control(button width).
 */

/**
 * External dependencies
 */
import { pickBy, isEqual, isObject, identity, mapValues } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useState,
	useEffect,
	useRef,
	useMemo,
} from '@hooks';
import { Platform } from '@wordpress/element';
 
/**
 * Internal dependencies
 */
import {
	getColorObjectByColorValue,
	getColorObjectByAttributeValues,
	getGradientValueBySlug,
	getGradientSlugByValue,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	ContrastChecker,
	InspectorControls,
	__experimentalUseEditorFeature as useEditorFeature,
} from '@wordpress/block-editor';

const EMPTY_ARRAY = [];

const isWebPlatform = Platform.OS === 'web';

const P4_BUTTON_TEXT_COLORS = [
  { name: 'Grey 80%', slug: 'grey-80', color: '#020202' },
  { name: 'White', slug: 'white', color: '#ffffff' },
];

const P4_BUTTON_BG_COLORS = [
  { name: 'Orange', slug: 'orange', color: '#f36d3a' },
  { name: 'Aquamarine', slug: 'aquamarine', color: '#68dfde' },
  { name: 'White', slug: 'white', color: '#ffffff' },
];

function getComputedStyle( node ) {
	return node.ownerDocument.defaultView.getComputedStyle( node );
}

// The code in this file is copied entirely from the "color" and "style" support flags
// The flag can't be used at the moment because of the extra wrapper around
// the button block markup.

function getBlockDOMNode( clientId ) {
	return document.getElementById( 'block-' + clientId );
}

/**
 * Removed undefined values from nested object.
 *
 * @param {*} object
 * @return {*} Object cleaned from undefined values
 */
const cleanEmptyObject = ( object ) => {
	if ( ! isObject( object ) ) {
		return object;
	}
	const cleanedNestedObjects = pickBy(
		mapValues( object, cleanEmptyObject ),
		identity
	);
	return isEqual( cleanedNestedObjects, {} )
		? undefined
		: cleanedNestedObjects;
};

function ColorPanel( { settings, clientId, enableContrastChecking = true } ) {
	const [ detectedBackgroundColor, setDetectedBackgroundColor ] = useState();
	const [ detectedColor, setDetectedColor ] = useState();

	const title = isWebPlatform
		? __( 'Color settings' )
		: __( 'Color Settings' );

	useEffect( () => {
		if ( isWebPlatform && ! enableContrastChecking ) {
			return;
		}

		const colorsDetectionElement = getBlockDOMNode( clientId );
		if ( ! colorsDetectionElement ) {
			return;
		}
		setDetectedColor( getComputedStyle( colorsDetectionElement ).color );

		let backgroundColorNode = colorsDetectionElement;
		let backgroundColor = getComputedStyle( backgroundColorNode )
			.backgroundColor;
		while (
			backgroundColor === 'rgba(0, 0, 0, 0)' &&
			backgroundColorNode.parentNode &&
			backgroundColorNode.parentNode.nodeType ===
				backgroundColorNode.parentNode.ELEMENT_NODE
		) {
			backgroundColorNode = backgroundColorNode.parentNode;
			backgroundColor = getComputedStyle( backgroundColorNode )
				.backgroundColor;
		}

		setDetectedBackgroundColor( backgroundColor );
	} );

	return (
		<InspectorControls>
			<PanelColorGradientSettings
				title={ title }
				initialOpen={ false }
				settings={ settings }
			>
				{ isWebPlatform && enableContrastChecking && (
					<ContrastChecker
						backgroundColor={ detectedBackgroundColor }
						textColor={ detectedColor }
					/>
				) }
			</PanelColorGradientSettings>
		</InspectorControls>
	);
}

/**
 * Inspector control panel containing the color related configuration
 *
 * @param {Object} props
 *
 * @return {WPElement} Color edit element.
 */
function ColorEdit( props ) {
	const { attributes } = props;
	const colors = useEditorFeature( 'color.palette' ) || EMPTY_ARRAY;

	const gradients = useEditorFeature( 'color.gradients' ) || EMPTY_ARRAY;

	// Shouldn't be needed but right now the ColorGradientsPanel
	// can trigger both onChangeColor and onChangeBackground
	// synchronously causing our two callbacks to override changes
	// from each other.
	const localAttributes = useRef( attributes );
	useEffect( () => {
		localAttributes.current = attributes;
	}, [ attributes ] );

	const { style, textColor, backgroundColor, gradient } = attributes;
	let gradientValue;
	if ( gradient ) {
		gradientValue = getGradientValueBySlug( gradients, gradient );
	} else {
		gradientValue = style?.color?.gradient;
	}

	const onChangeColor = ( name ) => ( value ) => {
		const colorObject = getColorObjectByColorValue( colors, value );
		const attributeName = name + 'Color';
		const newStyle = {
			...localAttributes.current.style,
			color: {
				...localAttributes.current?.style?.color,
				[ name ]: colorObject?.slug ? undefined : value,
			},
		};

		const newNamedColor = colorObject?.slug ? colorObject.slug : undefined;
		const newAttributes = {
			style: cleanEmptyObject( newStyle ),
			[ attributeName ]: newNamedColor,
		};

		props.setAttributes( newAttributes );
		localAttributes.current = {
			...localAttributes.current,
			...newAttributes,
		};
	};

	const onChangeGradient = ( value ) => {
		const slug = getGradientSlugByValue( gradients, value );
		let newAttributes;
		if ( slug ) {
			const newStyle = {
				...localAttributes.current?.style,
				color: {
					...localAttributes.current?.style?.color,
					gradient: undefined,
				},
			};
			newAttributes = {
				style: cleanEmptyObject( newStyle ),
				gradient: slug,
			};
		} else {
			const newStyle = {
				...localAttributes.current?.style,
				color: {
					...localAttributes.current?.style?.color,
					gradient: value,
				},
			};
			newAttributes = {
				style: cleanEmptyObject( newStyle ),
				gradient: undefined,
			};
		}
		props.setAttributes( newAttributes );
		localAttributes.current = {
			...localAttributes.current,
			...newAttributes,
		};
	};

	const settings = useMemo( () => {
		return [
			{
				label: __( 'Text Color' ),
				onColorChange: onChangeColor( 'text' ),
				colorValue: getColorObjectByAttributeValues(
					P4_BUTTON_TEXT_COLORS,
					textColor,
					style?.color?.text
				).color,
				colors: P4_BUTTON_TEXT_COLORS,
			},
			{
				label: __( 'Background Color' ),
				onColorChange: onChangeColor( 'background' ),
				colorValue: getColorObjectByAttributeValues(
					P4_BUTTON_BG_COLORS,
					backgroundColor,
					style?.color?.background
				).color,
				gradientValue,
				onGradientChange: onChangeGradient,
				colors: P4_BUTTON_BG_COLORS,
			},
		];
	}, [
		colors,
		textColor,
		backgroundColor,
		gradientValue,
		style?.color?.text,
		style?.color?.background,
	] );

	return (
		<ColorPanel
			enableContrastChecking={ ! gradient && ! style?.color?.gradient }
			clientId={ props.clientId }
			settings={ settings }
		/>
	);
}

export default ColorEdit;
