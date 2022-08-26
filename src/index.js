'use strict';

import "./assets/scss/styles.scss";
import "./assets/scss/header/header.scss";
import "./assets/scss/footer/footer.scss";
import "./components/slider/slider.scss";
import "./assets/scss/media.scss"

import Slider from "./components/slider/slider.js";

const newsSlider = new Slider("news-slider");

const newsSliderSlideLeftButton = document.querySelector(".news-arrow-left");
const newsSliderSlideRightButton = document.querySelector(".news-arrow-right");

newsSliderSlideLeftButton.addEventListener(
	"click",
	(e) => {
		newsSlider.slideLeft();
	});

newsSliderSlideRightButton.addEventListener(
	"click",
	(e) => {
		newsSlider.slideRight();
	});

function watchSliderState(state) {
	if (state.position == newsSlider.POSITION_START) {
		newsSliderSlideLeftButton.classList.remove("news__arrow-img--enabled");
		newsSliderSlideRightButton.classList.add("news__arrow-img--enabled");
	} else if (state.position == newsSlider.POSITION_END) {
		newsSliderSlideLeftButton.classList.add("news__arrow-img--enabled");
		newsSliderSlideRightButton.classList.remove("news__arrow-img--enabled");
	} else {
		newsSliderSlideLeftButton.classList.add("news__arrow-img--enabled");
		newsSliderSlideRightButton.classList.add("news__arrow-img--enabled");
	}
}

newsSlider.setCallback(watchSliderState);

