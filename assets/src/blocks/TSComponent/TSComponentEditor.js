import {
  TextControl,
} from '@wordpress/components';

/*
TODO:
- Type this component
- Change to TSX because it's rendering TSX code

interface IProps {
  isSelected: boolean;
  title?: string; 
  subtitle?: string;
  message?: string;
}

const TSComponentFrontend: Component<IProps> = ({ title, subtitle, message }) => {
*/

// import { getSubtitle } from './TSComponentScripts';
// interface IProps {
//   isSelected: boolean;
//   title?: string;
//   subtitle?: string;
//   message?: string;
// }

export const TSComponentEditor = ({ isSelected, title, message }) => {
  return (
    <div>
      <div>
        <TextControl
          label='Label'
          placeholder='Title'
          type="text"
          value={title}
          onChange={value => {}}
        />
      </div>
      {`Is selected: ${isSelected}`}
      Subtitle.
      <p>{ message }</p>
    </div>
  )
};
