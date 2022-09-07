'use strict';

import "./assets/scss/styles.scss";
import "./assets/scss/header/header.scss";
import "./assets/scss/main/main.scss";
import "./assets/scss/footer/footer.scss";
import "./components/slider/slider.scss";
import "./assets/scss/media.scss";

import { MEDIA_MAX_WIDTH_688, MEDIA_MAX_WIDTH_996 } from "./media.js";

import Slider from "./components/slider/slider.js";

// Slider block
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

// MainMenu block
const mainMenuButton = document.querySelector(".menu-btn");
const displayMenu = () => {
	const mainMenu = document.querySelector(".menu");
	const minimized = mainMenu.classList.contains("menu--minimized");
	if (!minimized) {
		mainMenu.classList.add("menu--minimized");
		setTimeout(() => mainMenu.classList.add("menu--hidden"), 300);
	} else {
		mainMenu.classList.remove("menu--minimized");
		setTimeout(() => mainMenu.classList.remove("menu--hidden"), 50);
	}
};
mainMenuButton.addEventListener("click", displayMenu);

if (MEDIA_MAX_WIDTH_688) {
	displayMenu();

	const headerRightBlock = document.querySelector(".header__right-block");
	const headerPhones = headerRightBlock.querySelector(".header__phones");
	headerRightBlock.insertBefore(mainMenuButton, headerPhones);
} else if (MEDIA_MAX_WIDTH_996) {
	displayMenu();
}

