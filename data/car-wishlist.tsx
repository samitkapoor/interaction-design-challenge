export const CAR_WISHLIST = [
  {
    cardImageClassName: 'scale-125',
    name: 'Porsche 911',
    boldText: <p className="text-white blur-sm opacity-40 font-black">911</p>,
    boldTextPosition: 'top-40 w-full text-center text-white font-black leading-[230px]',
    imageTransition: {
      duration: 0.3,
      ease: 'easeInOut'
    },
    image: '/911model.webp',
    backgroundImage: '/911.webp',
    description: (
      <p>It's a little too small to get laid in, but you get laid the minute you get out</p>
    ),
    descriptionClassName:
      'absolute bottom-10 place-self-center text-black text-center max-w-[700px] font-black text-4xl text-black'
  },
  {
    name: 'BMW M2',
    boldText: (
      <p
        style={{
          textShadow:
            '-7px 0 0px rgba(255, 255, 255, 0.8),-14px 0 0px rgba(255, 255, 255, 0.6),-21px 0 0px rgba(255, 255, 255, 0.4),-28px 0 0px rgba(255, 255, 255, 0.2)'
        }}
        className="text-white text-[325px] font-black"
      >
        BMW M
        <span
          style={{
            textShadow:
              '-7px 0 0px rgba(255, 0, 0, 0.8),-14px 0 0px rgba(255, 0, 0, 0.6),-21px 0 0px rgba(255, 0, 0, 0.4),-28px 0 0px rgba(255, 0, 0, 0.2),-35px 0 0px rgba(255, 0, 0, 0.2)'
          }}
          className="text-[#ff0000]"
        >
          2
        </span>
      </p>
    ),
    boldTextPosition: 'top-10 w-full text-center text-white font-black leading-[230px]',
    imageTransition: {
      duration: 0.3,
      ease: 'easeInOut'
    },
    image: '/bmwm2model.webp',
    backgroundImage: '/bmwm2.webp',
    variant: 'trippy-reverse',
    description: (
      <p
        style={{
          textShadow:
            '-7px 0 0px rgba(255, 255, 255, 0.8),-14px 0 0px rgba(255, 255, 255, 0.6),-21px 0 0px rgba(255, 255, 255, 0.4)'
        }}
      >
        Drift it, like it's hot.
      </p>
    ),
    descriptionClassName:
      'absolute bottom-0 left-0 w-full text-center font-black text-[120px] text-white uppercase'
  },
  {
    cardImageClassName: 'scale-90 pb-4',
    name: 'Skyline GTR34',
    boldText: (
      <p className="text-white text-[150px] font-black">
        R<span className="text-[#ff0000]">34</span>
      </p>
    ),
    boldTextPosition: 'top-0 right-0 leading-[135px] text-white',
    variant: 'trippy',
    image: '/r34model.webp',
    imageTransition: {
      duration: 0.3,
      ease: 'easeInOut'
    },
    backgroundImage: '/r34.webp',
    price: <p className="text-white text-[105px] font-black">スカイライン</p>,
    priceClassName: 'absolute bottom-0 leading-[105px] left-0 text-white',
    description: "If one day speed kills me, don't cry because I was smiling.",
    descriptionClassName:
      'font-bold text-xl text-right w-[300px] absolute right-4 bottom-4 text-white'
  },
  {
    cardImageClassName: 'scale-125',
    name: 'Mclaren P1',
    boldText: <p className="text-white font-black">P1</p>,
    boldTextPosition: 'top-40 w-full text-center text-white font-black leading-[230px]',
    imageTransition: {
      duration: 0.3,
      ease: 'easeInOut'
    },
    image: '/mclarenmodel.png',
    backgroundImage: '/mclaren.jpg'
  }
];
