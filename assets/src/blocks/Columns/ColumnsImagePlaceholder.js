import {ImagePlaceholderIcon} from '../../components/ImagePlaceholderIcon';

export const ColumnsImagePlaceholder = ({width, height}) => (
  <div className="columns-image-placeholder" style={{height, width}}>
    <ImagePlaceholderIcon width={20} height={20} fill={'#ffffff'} />
  </div>
);
