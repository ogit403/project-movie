import React from "react";
import '../../../assets/scss/sass/Layouts/_carousel.scss';
import Slider from 'react-slick';
import slide1 from '../../../assets/img/carousel/1920x1080-4.png';
import slide2 from '../../../assets/img/carousel/1920wx1080h.jpg';
import slide3 from '../../../assets/img/carousel/1920x1080-3.png';
import slide4 from '../../../assets/img/carousel/1920x1080-36.jpg';

export default function Carousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
  return (
    <section className="carousel" style={{ overflow: "hidden" }}>
      <div className="carousel-group">
		<Slider dots={settings.dots} slidesToShow={settings.slidesToShow} slidesToScroll={settings.slidesToScroll}>
			<a className="items">
				<img src={slide1} alt="" />
			</a>
			<a className="items">
				<img src={slide2} alt="" />
			</a>
			<a className="items">
				<img src={slide3} alt="" />
			</a>
			<a className="items">
				<img src={slide4} alt="" />
			</a>
		</Slider>
      </div>
    </section>
  );
}
