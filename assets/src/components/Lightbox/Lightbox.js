import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Lightbox = ({ images }) => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
		height: 30,
		background: '#ff0000',
    cursor: 'pointer',
};

const indicatorStyles = {
    background: '#ff0000',
    width: 8,
    height: 8,
    display: 'inline-block',
    margin: '0 8px',
};

return <Carousel
	swipeable={true}
	infiniteLoop={true}
	showThumbs={false}
	emulateTouch={true}
	renderArrowPrev={(onClickHandler, hasPrev, label) =>
		hasPrev && (
			<button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
				-
			</button>
		)
	}
	renderArrowNext={(onClickHandler, hasNext, label) =>
		hasNext && (
			<button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
				+
			</button>
		)
	}
	renderIndicator={(onClickHandler, isSelected, index, label) => {
		if (isSelected) {
			return (
				<li
					style={{ ...indicatorStyles, background: '#000' }}
					aria-label={`Selected: ${label} ${index + 1}`}
					title={`Selected: ${label} ${index + 1}`}
				/>
			);
		}
		return (
			<li
				style={indicatorStyles}
				onClick={onClickHandler}
				onKeyDown={onClickHandler}
				value={index}
				key={index}
				role="button"
				tabIndex={0}
				title={`${label} ${index + 1}`}
				aria-label={`${label} ${index + 1}`}
			/>
		);
	}}>
	{images.map(image => (
		<div key={ image.image_src }>
			<img
				src={ image.image_src }
				style={{ objectPosition: image.focus_image }}
			/>
			<p className="legend">{ image.alt_text }</p>
		</div>
	))}
  </Carousel>;
};
