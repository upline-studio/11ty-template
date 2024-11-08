import { initCarousel } from '@/js/carousel.ts';

const data = { a: 123 };

/* eslint-disable no-console */
console.log(data.a);

const carouselElements = document.querySelectorAll<HTMLElement>('.js-carousel');
for (const carouselElement of carouselElements) {
  initCarousel(carouselElement);
}
