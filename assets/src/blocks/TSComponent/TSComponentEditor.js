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

export const TSComponentEditor = ({ isSelected, title, subtitle, message }) => {

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
      <h2>{ subtitle }</h2>
      <p>{ message }</p>
    </div>
  )
};
