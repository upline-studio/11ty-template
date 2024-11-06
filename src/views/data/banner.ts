type Picture = {
  src: string
  type?: {
    webp?: {
      desktop: string
      mobile: string
    }
    jpeg: {
      desktop: string
      mobile: string
    }
  }
  width: number
  height: number
  alt: string
};

type Figure = {
  picture: Picture
  title: string
};

export const picture: Picture = {
  src: 'https://picsum.photos/id/1/600/300',
  type: {
    webp: {
      desktop: 'https://picsum.photos/seed/desktop/600/300.webp, https://picsum.photos/seed/desktop/1200/600.webp 2x',
      mobile:
        'https://picsum.photos/seed/mobile/600/300.webp, https://picsum.photos/seed/mobile/1200/600.webp 2x',
    },
    jpeg: {
      desktop: 'https://picsum.photos/seed/desktop/600/300.jpg, https://picsum.photos/seed/desktop/1200/600.jpg 2x',
      mobile:
        'https://picsum.photos/seed/mobile/600/300.jpg, https://picsum.photos/seed/mobile/1200/600.jpg 2x',
    },
  },
  width: 600,
  height: 300,
  alt: '',
};

export const figure: Figure = {
  picture,
  title: 'Заголовок для банера',
};
