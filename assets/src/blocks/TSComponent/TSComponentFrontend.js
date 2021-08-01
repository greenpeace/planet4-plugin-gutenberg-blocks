/*
TODO:
- Type this component
- Change to TSX because it's rendering TSX code

interface IProps {
  title: string; 
  subtitle: string;
  message: string;
}

const TSComponentFrontend: Component<IProps> = ({ title, subtitle, message }) => {
*/

export const TSComponentFrontend = ({ title, subtitle, message }) => {
  return (
    <div>
      <h1>{ title }</h1>
      <h2>{ subtitle }</h2>
      <p>{ message }</p>
    </div>
  )
};
