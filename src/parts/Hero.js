import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/ic-cities.svg'
import IconTraveler from 'assets/images/icons/ic-traveler.svg'
import IconTreasure from 'assets/images/icons/ic-treasure.svg'

import Button from 'elements/Button'
import numberFormat from 'utils/numberFormat'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop = 30,
            behavior: "smooth"
        })
    }


    return (
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto pr-5 hero" style={{ width: 550 }}>
            <h1 className="font-weight-bold mb-2">
              Forget busy Work, <br></br> Start next Vacation
            </h1>
            <p className="mb-4 font-weight-light text-gray-500 w-75">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
            <Button className="btn px-5 mb-2" isPrimary hasShadow onClick={showMostPicked}>
              Show me Now
            </Button>

            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col-auto" style={{ marginRight: 30 }}>
                <img width="32" height="32" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)} <span className="text-gray-500 font-li">Travelers</span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 30 }}>
                <img width="32" height="32" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)} <span className="text-gray-500 font-li">Treasures</span>
                </h6>
              </div>
              <div className="col-auto">
                <img width="32" height="32" src={IconCities} alt={`${props.data.cities} Cities`} />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)} <span className="text-gray-500 font-li">Cities</span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5 pt-5">
            <div style={{ width: 510, height: 441 }}>
              <img src={ImageHero} alt="Building with pool and sea" className="img-fluid position-absolute" style={{ margin: "-30px 0 0 -30px", maxWidth: 478, zIndex: 1 }} />
              <img src={ImageHeroFrame} alt="Building with pool and sea frame" className="img-fluid position-absolute" style={{ margin: "0 -15px -15px 0", maxWidth: 472 }} />
            </div>
          </div>
        </div>
      </section>
    );
}
