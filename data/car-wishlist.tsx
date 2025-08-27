export const CAR_WISHLIST = [
  // {
  //   name: 'Porsche 911 GT3 RS',
  //   boldText: <p className="text-black opacity-10 italic text-[175px]">GT3 RS</p>,
  //   boldTextPosition: 'top-2/5 -translate-y-1/2 left-1/2 -translate-x-1/2 leading-[150px]',
  //   variant: 'porsche',
  //   image: '/911gt3rsmodel.png',
  //   backgroundImage: '/911gt3rs.jpg',
  //   price: '₹3,50,00,000',
  //   priceClassName: 'text-white font-bold text-[40px] absolute right-10 bottom-10',
  //   description: (
  //     <p className="text-center flex items-center max-w-[800px] place-self-center justify-center text-black">
  //       You may not have one in your garage, but you probably have one parked in your mind.
  //     </p>
  //   ),
  //   descriptionClassName: 'font-bold text-6xl text-center w-screen absolute top-10'
  // },
  // {
  //   name: 'Porsche 918 Spyder',
  //   boldText: (
  //     <p
  //       style={{
  //         textShadow:
  //           '-7px 0 0px rgba(255, 255, 255, 0.8),-14px 0 0px rgba(255, 255, 255, 0.6),-21px 0 0px rgba(255, 255, 255, 0.4),-28px 0 0px rgba(255, 255, 255, 0.2)'
  //       }}
  //       className="text-white text-[325px] font-black"
  //     >
  //       918
  //     </p>
  //   ),
  //   boldTextPosition: 'top-10 w-full text-center text-white font-black leading-[230px]',
  //   imageTransition: {
  //     duration: 0.3,
  //     ease: 'easeInOut'
  //   },
  //   image: '/porsche918model.png',
  //   backgroundImage: '/porsche918.webp',
  //   description: (
  //     <p>
  //       Possibly the most
  //       <br /> complete hypercar
  //       <br />
  //       there's ever been
  //     </p>
  //   ),
  //   descriptionClassName: 'absolute bottom-10 right-10 font-semibold text-black text-right text-5xl'
  // },
  {
    name: 'Porsche 911',
    boldText: <p className="text-white opacity-40 font-black">911</p>,
    boldTextPosition: 'top-40 blur-sm w-full text-center text-white font-black leading-[230px]',
    imageTransition: {
      duration: 0.3,
      ease: 'easeInOut'
    },
    image: '/911model.png',
    backgroundImage: '/911.jpg',
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
    image: '/bmwm2model.png',
    backgroundImage: '/bmwm2.jpg',
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
    name: 'Skyline GTR34',
    boldText: (
      <p
        style={{
          textShadow:
            '0 7px 0px rgba(255, 255, 255, 0.8),0 14px 0px rgba(255, 255, 255, 0.6),0 21px 0px rgba(255, 255, 255, 0.4),0 28px 0px rgba(255, 255, 255, 0.2)'
        }}
        className="text-white text-[325px] font-black"
      >
        R
        <span
          style={{
            textShadow:
              '0 7px 0px rgba(255, 0, 0, 0.8),0 14px 0px rgba(255, 0, 0, 0.6),0 21px 0px rgba(255, 0, 0, 0.4),0 28px 0px rgba(255, 0, 0, 0.2)'
          }}
          className="text-[#ff0000]"
        >
          34
        </span>
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
