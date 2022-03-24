const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const rides = [
  {
    id: 1,
    name: 'Afterburn',
    location: 'Carowinds',
    height: '113 ft',
    type: 'Steel',
    design: 'Inverted',
    speed: '62 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F7p3skwxq4s531.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 2,
    name: 'Carolina Cyclone',
    location: 'Carowinds',
    height: '95 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '41 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fcarolina-cyclone.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 3,
    name: 'Carolina Goldrusher',
    location: 'Carowinds',
    height: '43 ft',
    type: 'Steel',
    design: 'Hybrid',
    speed: '30 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6j54UFJciTY%2Fmaxresdefault.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 4,
    name: 'Copperhead Strike',
    location: 'Carowinds',
    height: '82 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '50 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2019%2F03%2FCopperheadStrikeMediaDay016.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 5,
    name: 'The Flying Cobras',
    location: 'Carowinds',
    height: '116.5 ft',
    type: 'Steel',
    design: 'Shuttle',
    speed: '47 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCyx9rk-WgAAVKn5.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 6,
    name: 'Fury 325',
    location: 'Carowinds',
    height: '325 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '95 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fv7fjwiioffi31.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 7,
    name: 'Hurler',
    location: 'Carowinds',
    height: '83 ft',
    type: 'Wood',
    design: 'Triple Out and Back',
    speed: '50 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2018%2F04%2FCarowinds-Spring029.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 8,
    name: 'Intimidator',
    location: 'Carowinds',
    height: '232 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '75 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.intamin.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fintimidator-305-03-1170x658.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 9,
    name: 'Kiddy Hawk',
    location: 'Carowinds',
    height: '48.6 ft',
    type: 'Steel',
    design: 'Inverted',
    speed: '26 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coastergallery.com%2F2002%2FFlyingAce07.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 10,
    name: 'Nighthawk',
    location: 'Carowinds',
    height: '115 ft',
    type: 'Steel',
    design: 'Flying',
    speed: '51 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faf%2F9d%2F7a%2Faf9d7a1011add516223b0c2b5ec2d265.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 11,
    name: 'Ricochet',
    location: 'Carowinds',
    height: '45.9 ft',
    type: 'Wild Mouse',
    speed: '28 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2015%2F07%2Fricochet.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 12,
    name: 'Vortex',
    location: 'Carowinds',
    height: '90 ft',
    type: 'Stand Up',
    speed: '50 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coastergallery.com%2F2002%2FVortex1.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 13,
    name: 'Woodstock Express',
    location: 'Carowinds',
    height: '40 ft',
    type: 'Wood',
    design: 'Family',
    speed: '36 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.tucoaster.com%2Fcarowinds_woodstock_express_1.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 14,
    name: 'Batman The Ride',
    location: 'Six Flags Great Adventure',
    height: '105 ft',
    type: 'Steel',
    design: 'Inverted',
    speed: '50 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.backpackertravel.org%2Fwp-content%2Fuploads%2F2016%2F01%2FBatman-the-ride.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 15,
    name: 'Dark Knight',
    location: 'Six Flags Great Adventure',
    height: '45 ft',
    type: 'Steel',
    design: 'Wild Mouse',
    speed: '30 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbnail.pa-community.com%2F7c%2F5d%2F6cf7303bd3aa0684ea8fc7d0422c%2Fc69422ee56e60eff33fb407942c45a51.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 16,
    name: 'El Toro',
    location: 'Six Flags Great Adventure',
    height: '181 ft',
    type: 'Wood',
    design: 'Out and Back',
    speed: '70 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FuVqno8cr5flZQmRdjICskzjwPX0%3D%2F2756x2250%2Ffilters%3Afill(auto%2C1)%2FElToro-59722ed8af5d3a00112e8697.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 17,
    name: 'Green Lantern',
    location: 'Six Flags Great Adventure',
    height: '154 ft',
    type: 'Steel',
    design: 'Stand Up',
    speed: '63 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoasterforce.com%2Fdev%2Fwp-content%2Fuploads%2F2016%2F11%2FGreenLanternSixFlagsGreatAdventure2.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 18,
    name: 'Harley Quinn Crazy Train',
    location: 'Six Flags Great Adventure',
    height: '26.3 ft',
    type: 'Steel',
    design: 'Double Figure Eight',
    speed: '22.4 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.greatadventurehistory.com%2FGATripReports%2F2016%2F2016_04_16%2F2016_04_16_IMG_1577%2520copy.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 19,
    name: 'Jersey Devil Coaster',
    location: 'Six Flags Great Adventure',
    height: '130 ft',
    type: 'Steel',
    design: 'Single Rail',
    speed: '58 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.greatadventurehistory.com%2FGATripReports%2F2016%2F2016_04_16%2F2016_04_16_IMG_1577%2520copy.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 20,
    name: 'Joker',
    location: 'Six Flags Great Adventure',
    height: '120 ft',
    type: 'Steel',
    design: 'Wing',
    speed: '38 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sixflags.com%2Fsites%2Fdefault%2Ffiles%2F2017_sfne_thejoker_gallery.png&f=1&nofb=1',
    review: ''
  },

  {
    id: 21,
    name: 'Kingda Ka',
    location: 'Six Flags Great Adventure',
    height: '456 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '128 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbpc.h-cdn.co%2Fassets%2F17%2F21%2F1495654295-kingda-ka-roller-coaster.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 22,
    name: 'Medusa',
    location: 'Six Flags Great Adventure',
    height: '142 ft',
    type: 'Steel',
    design: 'Floorless',
    speed: '61 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.themeparkreview.com%2Fphotos%2Ftodo%2Fsfgreatadventure%2Fmedusa4.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 23,
    name: 'Nitro',
    location: 'Six Flags Great Adventure',
    height: '230 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '80 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.silive.com%2Fresizer%2FoKtAPJQvUlHOmJRyYkaEkcJp87w%3D%2F1280x0%2Fsmart%2Farc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com%2Fpublic%2FIO27LFZ4GJA65PAN2Y34RV7E4M.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 24,
    name: 'Runaway Mine Train',
    location: 'Six Flags Great Adventure',
    height: '60 ft',
    type: 'Steel',
    design: 'Thrill',
    speed: '38 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FEv8s7czoh0E%2Fmaxresdefault.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 25,
    name: 'Superman Ultimate Flight',
    location: 'Six Flags Great Adventure',
    height: '106 ft',
    type: 'Steel',
    design: 'Flying',
    speed: '51 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FYsjx4J0FxLurb-GOwPyToGBkQzo%3D%2F811x563%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fsupermanultimateflightnew-5c2c394cc9e77c0001269673.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 26,
    name: 'Corkscrew',
    location: 'Valleyfair!',
    height: '85 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '50 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2ESN5KZD8tg%2Fmaxresdefault.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 27,
    name: 'Cosmic Coaster',
    location: 'Valleyfair!',
    height: '14 ft',
    type: 'Steel',
    design: 'Single Helix',
    speed: '15 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8rRY2u7PegI%2Fmaxresdefault.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 28,
    name: 'Excalibur',
    location: 'Valleyfair!',
    height: '100 ft',
    type: 'Steel',
    design: 'Hybrid',
    speed: '54.5 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F95%2F69%2Fb0%2F9569b049925441181e5bf991e5414537.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 29,
    name: 'High Roller',
    location: 'Valleyfair!',
    height: '70 ft',
    type: 'Wood',
    design: 'Extreme',
    speed: '50 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20121211193639%2Fcoasterpedia%2Fimages%2F3%2F3f%2FHigh_Roller_(Valleyfair).jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 30,
    name: 'Mad Mouse',
    location: 'Valleyfair!',
    height: '50 ft',
    type: 'Steel',
    design: 'Wild Mouse',
    speed: '30 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoasterforce.com%2Fdev%2Fwp-content%2Fuploads%2F2016%2F11%2FMadMouseValleyfair.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 31,
    name: 'Renegade',
    location: 'Valleyfair!',
    height: '97.5 ft',
    type: 'Wood',
    design: 'Extreme',
    speed: '51.3 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fs7ftQ-Pzxog%2Fmaxresdefault.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 32,
    name: 'Steel Venom',
    location: 'Valleyfair!',
    height: '185 ft',
    type: 'Steel',
    design: 'Inverted',
    speed: '68 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F53%2F61%2Ffb%2F5361fbbfb9a50bcf8eadc4bdc9ee8e17.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 33,
    name: 'Wild Thing',
    location: 'Valleyfair!',
    height: '207 ft',
    type: 'Steel',
    design: 'Out and Back',
    speed: '74 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdEUW5z3eWL0%2Fmaxresdefault.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 34,
    name: 'Blue Streak',
    location: 'Cedar Point',
    height: '78 ft',
    type: 'Wood',
    design: 'Thrill',
    speed: '40 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnq3EY55nK6M%2Fmaxresdefault.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 35,
    name: 'Cedar Creek Mine Ride',
    location: 'Cedar Point',
    height: '48 ft',
    type: 'Steel',
    design: 'Thrill',
    speed: '42 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoasterbuzz.com%2FCoasterPhoto%2FCoasterPrimaryPhoto%2F31&f=1&nofb=1',
    review: ''
  },

  {
    id: 36,
    name: 'Corkscrew',
    location: 'Cedar Point',
    height: '48 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '48 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F4b%2FCorkscrew_(Cedar_Point)_01.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 37,
    name: 'GateKeeper',
    location: 'Cedar Point',
    height: '170 ft',
    type: 'Steel',
    design: 'Wing',
    speed: '67 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDcJk3GabVek%2Fmaxresdefault.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 38,
    name: 'Gemini',
    location: 'Cedar Point',
    height: '125.3 ft',
    type: 'Steel',
    design: 'Twin',
    speed: '60 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F87%2F34%2F89%2F87348936f7027e90924e31ea093bcea2.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 39,
    name: 'Iron Dragon',
    location: 'Cedar Point',
    height: '76 ft',
    type: 'Steel',
    design: 'Suspended',
    speed: '40 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoasterforce.com%2Fdev%2Fwp-content%2Fuploads%2F2016%2F10%2FIronDragonCedarPoint-2.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 40,
    name: 'Magnum XL-200',
    location: 'Cedar Point',
    height: '205 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '72 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FeHssJxm.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 41,
    name: 'Maverick',
    location: 'Cedar Point',
    height: '105 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '70 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F5h9xri8apsx41.jpg%3Fauto%3Dwebp%26s%3Db06b7ba2f0b40f1bff7d179cdb51d750a1e49ed9&f=1&nofb=1',
    review: ''
  },

  {
    id: 42,
    name: 'Millenium Force',
    location: 'Cedar Point',
    height: '310 ft',
    type: 'Steel',
    design: 'Extreme',
    speed: '93 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette4.wikia.nocookie.net%2Fcoaster%2Fimages%2Fd%2Fdd%2FMillennium_Force1.jpg%2Frevision%2Flatest%3Fcb%3D20131126213811&f=1&nofb=1',
    review: ''
  },

  {
    id: 43,
    name: 'Raptor',
    location: 'Cedar Point',
    height: '137 ft',
    type: 'Steel',
    design: 'Inverted',
    speed: '57 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fakns-images.eonline.com%2Feol_images%2FEntire_Site%2F2015714%2Frs_1024x459-150814104857-raptor-roller-coaster-cedar-point.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 44,
    name: 'Rougarou',
    location: 'Cedar Point',
    height: '145 ft',
    type: 'Steel',
    design: 'Floorless',
    speed: '60 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fp3JKpz03v1M%2Fmaxresdefault.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 45,
    name: 'Steel Vengeance',
    location: 'Cedar Point',
    height: '205 ft',
    type: 'Steel',
    design: 'Hybrid',
    speed: '74 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2Fpresto%2F2019%2F08%2F16%2FUSAT%2Fbaad61a7-ea8c-4596-bac0-069f76e6882c-photo.jpeg%3Fwidth%3D3200%26height%3D1800%26fit%3Dcrop&f=1&nofb=1',
    review: ''
  },

  {
    id: 46,
    name: 'Valravn',
    location: 'Cedar Point',
    height: '223 ft',
    type: 'Steel',
    design: 'Floorless',
    speed: '75 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2015%2F09%2Fvalravn-cedar-point-3.jpg&f=1&nofb=1',
    review: ''
  },

  {
    id: 47,
    name: 'Woodstock Express',
    location: 'Cedar Point',
    height: '42.7 ft',
    type: 'Steel',
    design: 'Family',
    speed: '28.5 mph',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fea%2F84%2Ff1%2Fea84f1347f26aa8faa03a6382dfdeb20--camp-snoopy-cedar-point.jpg&f=1&nofb=1',
    review: ''
  }
]
