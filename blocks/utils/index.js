/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'

/**
 * getSiteUrl from API root
 * @returns {string} siteurl
 */
export function getSiteUrl() {
	return wpApiSettings.root.replace( '/wp-json/', '' );
}

/**
 * Convert forms object in option
 *
 * @since 2.7.0
 *
 * @param {object} forms
 *
 * @return {[]}
 */
export function getFormOptions( forms ) {
	let formOptions = [];

	if ( forms ) {
		formOptions = forms.map(
			( { id, title: { rendered: title } } ) => {
				return {
					value: id,
<<<<<<< HEAD
					label: title === '' ? `${ id } : ${ __( 'No form title', 'give' ) }` : title,
=======
					label: title === '' ? `${ id } : ${ __( 'No form title' ) }` : title,
>>>>>>> old-giv-plugin
				};
			}
		);
	}

	// Add Default option
<<<<<<< HEAD
	formOptions.unshift( { value: '0', label: __( '-- Select Form --', 'give' ) } );
=======
	formOptions.unshift( { value: '0', label: __( '-- Select Form --' ) } );
>>>>>>> old-giv-plugin

	return formOptions;
}

/**
 * Returns whether or not the given form uses the legacy form template.
 *
 * Note: if selected form has legacy form template or empty (old forms) then it will return true otherwise false.
 *
 * @since 2.7.0
 *
 * @param {object} forms
 * @param {number} SelectedFormId
 *
 * @return {boolean}
 */
export function isLegacyForm( forms, SelectedFormId ) {
	if ( forms ) {
		const data = forms.find( form => parseInt( form.id ) === parseInt( SelectedFormId ) );

		return data && ( ! data.formTemplate || data.formTemplate === 'legacy' );
	}

	return false;
}
