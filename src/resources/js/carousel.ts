import type { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/types/modules';
import { initSwiper } from '@/js/swiper.ts';

const SWIPER_OPTIONS: Record<string, SwiperOptions> = {
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

function getSwiperOptions(name: string) {
  return {
    ...SWIPER_OPTIONS[name],
  };
}

export function initCarousel(element: HTMLElement) {
  initSwiper(element, getSwiperOptions(element.dataset.carouselName ?? 'default'));
}
