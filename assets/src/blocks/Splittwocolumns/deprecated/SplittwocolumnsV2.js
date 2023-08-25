import {attributes, BLOCK_NAME} from '../SplittwocolumnsBlock';
import {frontendRendered} from '../../frontendRendered';

export const splitTwoColumnsV2 = {
  attributes,
  save: frontendRendered(BLOCK_NAME),
};
