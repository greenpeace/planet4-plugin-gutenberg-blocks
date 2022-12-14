import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const TextSidebarField = ({ value, setValue, label, type }) => (
  <TextControl
    label={label}
    type={type}
    value={value}
    onChange={setValue}
  />
);
