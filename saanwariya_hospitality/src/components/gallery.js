import PropTypes from "prop-types";
import React, { Component } from "react";
import "../styles/main_styles.css";
import "../styles/responsive.css";
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
        src: require("../images/1_01.jpg"),
        thumbnail: require("../images/3_01.jpg"),
        caption:
          "The tent section consisting of more than a dozen tents spread over 15000 sq ft, makes it an ideal camping place for small as well as large groups.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_02.jpg"),
        thumbnail: require("../images/3_02.jpg"),
        caption:
          "The open sky dining section which gives us the most beautiful view to behold, the starlit sky",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_03.jpg"),
        thumbnail: require("../images/3_03.jpg"),
        caption:
          "The Bhunga or traditional cottage that is unique to the region of Kutch, gives you the authentic desert experience with a thatched roof, yet is loaded with modern amenities at the Kutch Resort to ensure a comfortable and luxurious stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_04.jpg"),
        thumbnail: require("../images/3_04.jpg"),
        caption:
          "Saanwariya Hospitality's Kutch Resort is spread over 1.75 acres of land, comprising of tent and cottage accomodations for an authentic desert experience, closest to the White Rann or the salt desert which is only 7 kms away.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_05.jpg"),
        thumbnail: require("../images/3_05.jpg"),
        caption:
          "Saanwariya Hospitality's Kutch Resort is spread over 1.75 acres of land, comprising of tent and cottage accomodations for an authentic desert experience, closest to the White Rann or the salt desert which is only 7 kms away.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_06.jpg"),
        thumbnail: require("../images/3_06.jpg"),
        caption:
          "The picturesque beauty of the sunsets viewed from Saanwariya Hospitality's Kutch Resort is every photographer and nature lover's delight!",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_07.jpg"),
        thumbnail: require("../images/3_07.jpg"),
        caption:
          "The desert moon makes the ambience serene and ignites passion in our hearts, just like a lovers' touch.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_08.jpg"),
        thumbnail: require("../images/3_08.jpg"),
        caption:
          "The deity garden that is inhabited by the presiding deity of Saanwariya Hospitality's Kutch Resort, Sri Krishna or Saanwariya, meaning the one who has a black complexion.",

        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_09.jpg"),
        thumbnail: require("../images/3_09.jpg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_10.jpg"),
        thumbnail: require("../images/3_10.jpg"),
        caption:
          "The deity garden that is inhabited by the presiding deity of Saanwariya Hospitality's Kutch Resort, Sri Krishna or Saanwariya, meaning the one who has a black complexion.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_11.jpg"),
        thumbnail: require("../images/3_11.jpg"),
        caption:
          "The open sky dining section which gives us the most beautiful view to behold, the starlit sky",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_12.jpg"),
        thumbnail: require("../images/3_12.jpg"),
        caption:
          "The Bhunga or traditional cottage that is unique to the region of Kutch, gives you the authentic desert experience with a thatched roof, yet is loaded with modern amenities at the Kutch Resort to ensure a comfortable and luxurious stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_13.jpg"),
        thumbnail: require("../images/3_13.jpg"),
        caption:
          "Saanwariya Hospitality's Kutch Resort is spread over 1.75 acres of land, comprising of tent and cottage accomodations for an authentic desert experience, closest to the White Rann or the salt desert which is only 7 kms away.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_14.jpg"),
        thumbnail: require("../images/3_14.jpg"),
        caption:
          "Saanwariya Hospitality's Kutch Resort is spread over 1.75 acres of land, comprising of tent and cottage accomodations for an authentic desert experience, closest to the White Rann or the salt desert which is only 7 kms away.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_15.jpg"),
        thumbnail: require("../images/3_15.jpg"),
        caption:
          "The picturesque beauty of the sunsets viewed from Saanwariya Hospitality's Kutch Resort is every photographer and nature lover's delight!",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_16.jpg"),
        thumbnail: require("../images/3_16.jpg"),
        caption:
          "The desert moon makes the ambience serene and ignites passion in our hearts, just like a lovers' touch.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_17.jpg"),
        thumbnail: require("../images/3_17.jpg"),
        caption:
          "The tent section consisting of more than a dozen tents spread over 15000 sq ft, makes it an ideal camping place for small as well as large groups.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_18.jpg"),
        thumbnail: require("../images/3_18.jpg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_19.jpg"),
        thumbnail: require("../images/3_19.jpg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_20.jpg"),
        thumbnail: require("../images/3_20.jpg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_21.jpg"),
        thumbnail: require("../images/3_21.jpg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_22.jpg"),
        thumbnail: require("../images/3_22.jpg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_23.jpg"),
        thumbnail: require("../images/3_23.jpg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: require("../images/1_24.jpg"),
        thumbnail: require("../images/3_24.jpg"),
        caption:
          "The Bhunga section spread over 12000 sq ft is specifically designed for those wanting a peaceful family vacation with complete privacy and the most comfortable desert stay.",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      }
    ];
    return (
      <div>
        <div className="home" className="gallaryMarginTop" />
        <div className="container">
          <div className="row">
            <div className="col">
              <GalImages images={IMAGES} />
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "2em" }} />
      </div>
    );
  }
}

export default Gallery;
