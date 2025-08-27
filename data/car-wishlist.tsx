export const CAR_WISHLIST = [
  {
    name: 'Porsche 911 GT3 RS',
    boldText: <p className="text-black opacity-10 italic text-[175px]">GT3 RS</p>,
    boldTextPosition: 'top-2/5 -translate-y-1/2 left-1/2 -translate-x-1/2 leading-[150px]',
    variant: 'porsche',
    image: '/911gt3rsmodel.png',
    backgroundImage: '/911gt3rs.jpg',
    price: '₹3,50,00,000',
    priceClassName: 'text-white font-bold text-[40px] absolute right-10 bottom-10',
    description: (
      <p className="text-center flex items-center max-w-[800px] place-self-center justify-center text-black">
        You may not have one in your garage, but you probably have one parked in your mind.
      </p>
    ),
    descriptionClassName: 'font-bold text-6xl text-center w-screen absolute top-10'
    // 'font-black max-w-[600px] absolute top-1/8 left-1/2 -translate-x-1/2 text-6xl text-center'
  },
  {
    name: 'BMW M2',
    boldText: 'M2',
    image: '/bmwm2model.png',
    backgroundImage: '/bmwm2.jpg',
    price: '₹1,03,00,000',
    description: "Drift it, like it's hot."
  },
  {
    name: 'Skyline GTR34',
    boldText: (
      <p className="text-white text-[325px] font-black">
        R<span className="text-red-700">34</span>
      </p>
    ),
    boldTextPosition: 'top-0 right-0 leading-[250px] text-white',
    variant: 'trippy',
    image: '/r34model.png',
    imageTransition: {
      duration: 0.3,
      ease: 'easeInOut'
    },
    backgroundImage: '/r34.jpg',
    price: <p className="text-white text-[125px] font-black">スカイライン</p>,
    priceClassName: 'absolute bottom-0 leading-[125px] left-0 text-white',
    description: "If one day speed kills me, don't cry because I was smiling.",
    descriptionClassName: 'font-bold text-xl text-left w-[300px] absolute left-4 top-4 text-white'
  }
];
