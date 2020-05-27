import { FrontendBlockNode } from '../components/FrontendBlockNode/FrontendBlockNode';

export const frontendRendered = ( block ) => ( attributes, className ) => {
  return <FrontendBlockNode
    attributes={ attributes }
    className={ className }
    data-render={ block }
  />;
}
