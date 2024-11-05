import { Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import { initSwiper } from '@/js/swiper.ts';

const data = { a: 123 };

/* eslint-disable no-console */
console.log(data.a);

const CAROUSEL_OPTIONS: Record<string, SwiperOptions> = {
  default: {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    pagination: {
      clickable: true,
    },
  },
};
function getCarouselOptions(name: string) {
  return {
    ...CAROUSEL_OPTIONS[name],
  };
}

const carouselElements = document.querySelectorAll<HTMLElement>('.js-carousel');
for (const carouselElement of carouselElements) {
  initSwiper(carouselElement, getCarouselOptions(carouselElement.dataset.carouselName ?? 'default'));
}
