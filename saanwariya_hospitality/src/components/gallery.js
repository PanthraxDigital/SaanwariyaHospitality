import PropTypes from "prop-types";
import React, { Component } from "react";
import { render } from "react-dom";
//import Lightbox from "react-images";
import GalImages from "react-grid-gallery";

class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;
    this.gotoNext();
  }

  render() {
    const IMAGES = [
      {
        src: require("../images/1.jpeg"),
        thumbnail: require("../images/1.jpeg"),
        caption:
          "The deity garden that is inhabited by the presiding deity of Saanwariya Hospitality's Kutch Resort, Sri Krishna or Saanwariya, meaning the one who has a black complexion.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/2.jpeg"),
        thumbnail: require("../images/2.jpeg"),
        caption:
          "The open sky dining section which gives us the most beautiful view to behold, the starlit sky",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/3.jpeg"),
        thumbnail: require("../images/3.jpeg"),
        caption:
          "The Bhunga or traditional cottage that is unique to the region of Kutch, gives you the authentic desert experience with a thatched roof, yet is loaded with modern amenities at the Kutch Resort to ensure a comfortable and luxurious stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/4.jpeg"),
        thumbnail: require("../images/4.jpeg"),
        caption:
          "Saanwariya Hospitality's Kutch Resort is spread over 1.75 acres of land, comprising of tent and cottage accomodations for an authentic desert experience, closest to the White Rann or the salt desert which is only 7 kms away.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/5.jpeg"),
        thumbnail: require("../images/5.jpeg"),
        caption:
          "Saanwariya Hospitality's Kutch Resort is spread over 1.75 acres of land, comprising of tent and cottage accomodations for an authentic desert experience, closest to the White Rann or the salt desert which is only 7 kms away.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/6.jpeg"),
        thumbnail: require("../images/6.jpeg"),
        caption:
          "The picturesque beauty of the sunsets viewed from Saanwariya Hospitality's Kutch Resort is every photographer and nature lover's delight!",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/7.jpeg"),
        thumbnail: require("../images/7.jpeg"),
        caption:
          "The desert moon makes the ambience serene and ignites passion in our hearts, just like a lovers' touch.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/8.jpeg"),
        thumbnail: require("../images/8.jpeg"),
        caption:
          "The tent section consisting of more than a dozen tents spread over 15000 sq ft, makes it an ideal camping place for small as well as large groups.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/11.jpeg"),
        thumbnail: require("../images/11.jpeg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/12.jpeg"),
        thumbnail: require("../images/12.jpeg"),
        caption:
          "The deity garden that is inhabited by the presiding deity of Saanwariya Hospitality's Kutch Resort, Sri Krishna or Saanwariya, meaning the one who has a black complexion.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/13.jpeg"),
        thumbnail: require("../images/13.jpeg"),
        caption:
          "The open sky dining section which gives us the most beautiful view to behold, the starlit sky",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/14.jpeg"),
        thumbnail: require("../images/14.jpeg"),
        caption:
          "The Bhunga or traditional cottage that is unique to the region of Kutch, gives you the authentic desert experience with a thatched roof, yet is loaded with modern amenities at the Kutch Resort to ensure a comfortable and luxurious stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/15.jpeg"),
        thumbnail: require("../images/15.jpeg"),
        caption:
          "Saanwariya Hospitality's Kutch Resort is spread over 1.75 acres of land, comprising of tent and cottage accomodations for an authentic desert experience, closest to the White Rann or the salt desert which is only 7 kms away.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/16.jpeg"),
        thumbnail: require("../images/16.jpeg"),
        caption:
          "Saanwariya Hospitality's Kutch Resort is spread over 1.75 acres of land, comprising of tent and cottage accomodations for an authentic desert experience, closest to the White Rann or the salt desert which is only 7 kms away.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/17.jpeg"),
        thumbnail: require("../images/17.jpeg"),
        caption:
          "The picturesque beauty of the sunsets viewed from Saanwariya Hospitality's Kutch Resort is every photographer and nature lover's delight!",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/18.jpeg"),
        thumbnail: require("../images/18.jpeg"),
        caption:
          "The desert moon makes the ambience serene and ignites passion in our hearts, just like a lovers' touch.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/19.jpeg"),
        thumbnail: require("../images/19.jpeg"),
        caption:
          "The tent section consisting of more than a dozen tents spread over 15000 sq ft, makes it an ideal camping place for small as well as large groups.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/20.jpeg"),
        thumbnail: require("../images/20.jpeg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      },
      {
        src: require("../images/21.jpeg"),
        thumbnail: require("../images/21.jpeg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      }
    ];
    return (
      <div>
        <div className="home" style={{ height: "13em" }} />
        <div className="container">
          <div className="row">
            <div className="col" style={{ marginBottom: "4em" }}>
              <GalImages images={IMAGES} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
