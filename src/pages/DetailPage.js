import Header from 'parts/Header'
import PageDetailTitle from 'parts/DetailPages/PageDetailTitle'
import React, { Component } from 'react'

import ItemDetails from "json/itemDetails.json"
import FeatureImage from 'parts/DetailPages/FeatureImage';
import PageDetailDescription from 'parts/DetailPages/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import NearbyAttraction from 'parts/NearbyAttraction';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeatureImage data={ItemDetails.imageUrls} />
        <section className="container">
            <div className="row">
                <div className="col-7 pr-5">
                    <PageDetailDescription data={ItemDetails} />
                </div>
                <div className="col-5">
                    <BookingForm itemDetails={ItemDetails} />
                </div>
            </div>
        </section>
        <NearbyAttraction data={ItemDetails.activities} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

