const db = require('../db')
const { Ride, Location } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const location1 = await new Location({
    name: 'Carowinds',
    address: 'Charlotte, North Carolina'
  })
  location1.save()

  const location2 = await new Location({
    name: 'Six Flags Great Adventure',
    address: 'Jackson, New Jersey'
  })
  location2.save()

  const location3 = await new Location({
    name: 'Valleyfair!',
    address: 'Shakopee, Minnesota'
  })
  location3.save()

  const location4 = await new Location({
    name: 'Cedar Point',
    address: 'Sandusky, Ohio'
  })
  location4.save()

  const rides = [
    {
      name: 'Afterburn',
      type: 'Steel',
      design: 'Inverted',
      location: location1._id,
      height: '113 ft',
      speed: '62 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F7p3skwxq4s531.jpg&f=1&nofb=1'
      // review: 'hello'
    },

    {
      name: 'Carolina Cyclone',
      type: 'Steel',
      design: 'Extreme',
      location: location1._id,
      height: '95 ft',
      speed: '41 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fcarolina-cyclone.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Carolina Goldrusher',
      type: 'Steel',
      design: 'Hybrid',
      location: location1._id,
      height: '43 ft',
      speed: '30 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F6j54UFJciTY%2Fmaxresdefault.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Copperhead Strike',
      type: 'Steel',
      design: 'Extreme',
      location: location1._id,
      height: '82 ft',
      speed: '50 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2019%2F03%2FCopperheadStrikeMediaDay016.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'The Flying Cobras',
      type: 'Steel',
      design: 'Shuttle',
      location: location1._id,
      height: '116.5 ft',
      speed: '47 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FCyx9rk-WgAAVKn5.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Fury 325',
      type: 'Steel',
      design: 'Extreme',
      location: location1._id,
      height: '325 ft',
      speed: '95 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fv7fjwiioffi31.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Hurler',
      type: 'Wood',
      design: 'Triple Out and Back',
      location: location1._id,
      height: '83 ft',
      speed: '50 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2018%2F04%2FCarowinds-Spring029.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Intimidator',
      type: 'Steel',
      design: 'Extreme',
      location: location1._id,
      height: '232 ft',
      speed: '75 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.intamin.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fintimidator-305-03-1170x658.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Kiddy Hawk',
      type: 'Steel',
      design: 'Inverted',
      location: location1._id,
      height: '48.6 ft',
      speed: '26 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coastergallery.com%2F2002%2FFlyingAce07.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Nighthawk',
      type: 'Steel',
      design: 'Flying',
      location: location1._id,
      height: '115 ft',
      speed: '51 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Faf%2F9d%2F7a%2Faf9d7a1011add516223b0c2b5ec2d265.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Ricochet',
      type: 'Wild Mouse',
      design: 'Sit Down',
      location: location1._id,
      height: '45.9 ft',
      speed: '28 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2015%2F07%2Fricochet.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Vortex',
      type: 'Stand Up',
      design: 'Stand Up',
      location: location1._id,
      height: '90 ft',
      speed: '50 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coastergallery.com%2F2002%2FVortex1.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Woodstock Express',
      type: 'Wood',
      design: 'Family',
      location: location1._id,
      height: '40 ft',
      speed: '36 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.tucoaster.com%2Fcarowinds_woodstock_express_1.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Batman The Ride',
      type: 'Steel',
      design: 'Inverted',
      location: location2._id,
      height: '105 ft',
      speed: '50 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.backpackertravel.org%2Fwp-content%2Fuploads%2F2016%2F01%2FBatman-the-ride.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Dark Knight',
      type: 'Steel',
      design: 'Wild Mouse',
      location: location2._id,
      height: '45 ft',
      speed: '30 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbnail.pa-community.com%2F7c%2F5d%2F6cf7303bd3aa0684ea8fc7d0422c%2Fc69422ee56e60eff33fb407942c45a51.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'El Toro',
      type: 'Wood',
      design: 'Out and Back',
      location: location2._id,
      height: '181 ft',
      speed: '70 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FuVqno8cr5flZQmRdjICskzjwPX0%3D%2F2756x2250%2Ffilters%3Afill(auto%2C1)%2FElToro-59722ed8af5d3a00112e8697.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Green Lantern',
      type: 'Steel',
      design: 'Stand Up',
      location: location2._id,
      height: '154 ft',
      speed: '63 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoasterforce.com%2Fdev%2Fwp-content%2Fuploads%2F2016%2F11%2FGreenLanternSixFlagsGreatAdventure2.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Harley Quinn Crazy Train',
      type: 'Steel',
      design: 'Double Figure Eight',
      location: location2._id,
      height: '26.3 ft',
      speed: '22.4 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.greatadventurehistory.com%2FGATripReports%2F2016%2F2016_04_16%2F2016_04_16_IMG_1577%2520copy.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Jersey Devil Coaster',
      type: 'Steel',
      design: 'Single Rail',
      location: location2._id,
      height: '130 ft',
      speed: '58 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.greatadventurehistory.com%2FGATripReports%2F2016%2F2016_04_16%2F2016_04_16_IMG_1577%2520copy.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Joker',
      type: 'Steel',
      design: 'Wing',
      location: location2._id,
      height: '120 ft',
      speed: '38 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sixflags.com%2Fsites%2Fdefault%2Ffiles%2F2017_sfne_thejoker_gallery.png&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Kingda Ka',
      type: 'Steel',
      design: 'Extreme',
      location: location2._id,
      height: '456 ft',
      speed: '128 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbpc.h-cdn.co%2Fassets%2F17%2F21%2F1495654295-kingda-ka-roller-coaster.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Medusa',
      type: 'Steel',
      design: 'Floorless',
      location: location2._id,
      height: '142 ft',
      speed: '61 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.themeparkreview.com%2Fphotos%2Ftodo%2Fsfgreatadventure%2Fmedusa4.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Nitro',
      type: 'Steel',
      design: 'Extreme',
      location: location2._id,
      height: '230 ft',
      speed: '80 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.silive.com%2Fresizer%2FoKtAPJQvUlHOmJRyYkaEkcJp87w%3D%2F1280x0%2Fsmart%2Farc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com%2Fpublic%2FIO27LFZ4GJA65PAN2Y34RV7E4M.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Runaway Mine Train',
      type: 'Steel',
      design: 'Thrill',
      location: location2._id,
      height: '60 ft',
      speed: '38 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FEv8s7czoh0E%2Fmaxresdefault.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Superman Ultimate Flight',
      type: 'Steel',
      design: 'Flying',
      location: location2._id,
      height: '106 ft',
      speed: '51 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FYsjx4J0FxLurb-GOwPyToGBkQzo%3D%2F811x563%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fsupermanultimateflightnew-5c2c394cc9e77c0001269673.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Corkscrew',
      type: 'Steel',
      design: 'Extreme',
      location: location3._id,
      height: '85 ft',
      speed: '50 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F2ESN5KZD8tg%2Fmaxresdefault.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Cosmic Coaster',
      type: 'Steel',
      design: 'Single Helix',
      location: location3._id,
      height: '14 ft',
      speed: '15 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8rRY2u7PegI%2Fmaxresdefault.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Excalibur',
      type: 'Steel',
      design: 'Hybrid',
      location: location3._id,
      height: '100 ft',
      speed: '54.5 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F95%2F69%2Fb0%2F9569b049925441181e5bf991e5414537.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'High Roller',
      type: 'Wood',
      design: 'Extreme',
      location: location3._id,
      height: '70 ft',
      speed: '50 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20121211193639%2Fcoasterpedia%2Fimages%2F3%2F3f%2FHigh_Roller_(Valleyfair).jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Mad Mouse',
      type: 'Steel',
      design: 'Wild Mouse',
      location: location3._id,
      height: '50 ft',
      speed: '30 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoasterforce.com%2Fdev%2Fwp-content%2Fuploads%2F2016%2F11%2FMadMouseValleyfair.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Renegade',
      type: 'Wood',
      design: 'Extreme',
      location: location3._id,
      height: '97.5 ft',
      speed: '51.3 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fs7ftQ-Pzxog%2Fmaxresdefault.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Steel Venom',
      type: 'Steel',
      design: 'Inverted',
      location: location3._id,
      height: '185 ft',
      speed: '68 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F53%2F61%2Ffb%2F5361fbbfb9a50bcf8eadc4bdc9ee8e17.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Wild Thing',
      type: 'Steel',
      design: 'Out and Back',
      location: location3._id,
      height: '207 ft',
      speed: '74 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FdEUW5z3eWL0%2Fmaxresdefault.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Blue Streak',
      type: 'Wood',
      design: 'Thrill',
      location: location4._id,
      height: '78 ft',
      speed: '40 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fnq3EY55nK6M%2Fmaxresdefault.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Cedar Creek Mine Ride',
      type: 'Steel',
      design: 'Thrill',
      location: location4._id,
      height: '48 ft',
      speed: '42 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoasterbuzz.com%2FCoasterPhoto%2FCoasterPrimaryPhoto%2F31&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Corkscrew',
      type: 'Steel',
      design: 'Extreme',
      location: location4._id,
      height: '48 ft',
      speed: '48 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F4b%2FCorkscrew_(Cedar_Point)_01.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'GateKeeper',
      type: 'Steel',
      design: 'Wing',
      location: location4._id,
      height: '170 ft',
      speed: '67 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDcJk3GabVek%2Fmaxresdefault.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Gemini',
      type: 'Steel',
      design: 'Twin',
      location: location4._id,
      height: '125.3 ft',
      speed: '60 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F87%2F34%2F89%2F87348936f7027e90924e31ea093bcea2.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Iron Dragon',
      type: 'Steel',
      design: 'Suspended',
      location: location4._id,
      height: '76 ft',
      speed: '40 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoasterforce.com%2Fdev%2Fwp-content%2Fuploads%2F2016%2F10%2FIronDragonCedarPoint-2.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Magnum XL-200',
      type: 'Steel',
      design: 'Extreme',
      location: location4._id,
      height: '205 ft',
      speed: '72 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FeHssJxm.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Maverick',
      type: 'Steel',
      design: 'Extreme',
      location: location4._id,
      height: '105 ft',
      speed: '70 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F5h9xri8apsx41.jpg%3Fauto%3Dwebp%26s%3Db06b7ba2f0b40f1bff7d179cdb51d750a1e49ed9&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Millenium Force',
      type: 'Steel',
      design: 'Extreme',
      location: location4._id,
      height: '310 ft',
      speed: '93 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette4.wikia.nocookie.net%2Fcoaster%2Fimages%2Fd%2Fdd%2FMillennium_Force1.jpg%2Frevision%2Flatest%3Fcb%3D20131126213811&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Raptor',
      type: 'Steel',
      design: 'Inverted',
      location: location4._id,
      height: '137 ft',
      speed: '57 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fakns-images.eonline.com%2Feol_images%2FEntire_Site%2F2015714%2Frs_1024x459-150814104857-raptor-roller-coaster-cedar-point.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Rougarou',
      type: 'Steel',
      design: 'Floorless',
      location: location4._id,
      height: '145 ft',
      speed: '60 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fp3JKpz03v1M%2Fmaxresdefault.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Steel Vengeance',
      type: 'Steel',
      design: 'Hybrid',
      location: location4._id,
      height: '205 ft',
      speed: '74 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2Fpresto%2F2019%2F08%2F16%2FUSAT%2Fbaad61a7-ea8c-4596-bac0-069f76e6882c-photo.jpeg%3Fwidth%3D3200%26height%3D1800%26fit%3Dcrop&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Valravn',
      type: 'Steel',
      design: 'Floorless',
      location: location4._id,
      height: '223 ft',
      speed: '75 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coaster101.com%2Fwp-content%2Fuploads%2F2015%2F09%2Fvalravn-cedar-point-3.jpg&f=1&nofb=1'
      // review: ''
    },

    {
      name: 'Woodstock Express',
      type: 'Steel',
      design: 'Family',
      location: location4._id,
      height: '42.7 ft',
      speed: '28.5 mph',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2Fea%2F84%2Ff1%2Fea84f1347f26aa8faa03a6382dfdeb20--camp-snoopy-cedar-point.jpg&f=1&nofb=1'
      // review: ''
    }
  ]

  await Ride.insertMany(rides)
  console.log('Created rides!')
}

const run = async () => {
  await main()
  db.close()
}

run()
