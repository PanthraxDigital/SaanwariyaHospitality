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
        src: "https://farm2.staticflickr.com/1971/31775362338_cbb88dfa03_b.jpg",
        thumbnail:
          "https://farm2.staticflickr.com/1958/30774434987_7f7e29cd1e_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1928/45597314672_224f2d13ac_b.jpg",
        thumbnail:
          "https://farm2.staticflickr.com/1927/44800788875_296bb4a1de_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1938/45597316882_9bd6237a40_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4899/44800789305_5b539d818f_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1976/44922849514_2218634bd2_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4846/44800789915_6050db7780_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1960/45597321632_6c5fb6cbed_b.jpg",
        thumbnail:
          "https://farm2.staticflickr.com/1978/44800790345_2aea415899_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1937/44922854294_d596aef0b7_b.jpg",
        thumbnail:
          "https://farm2.staticflickr.com/1955/44800790765_f0ee7e5148_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1905/44922857284_c118dcbf36_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4863/44800790885_4ea2ccc15e_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1906/45597325382_60ea96848c_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4872/44800791095_ea605a56ac_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1974/45597326232_2a0d2ed944_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4868/44800791285_c75a457fe8_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1910/44922859614_332fc9774e_b.jpg",
        thumbnail:
          "https://farm2.staticflickr.com/1921/44990140314_8529dd8d43_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1978/44733573345_329f356c1a_b.jpg",
        thumbnail:
          "https://farm2.staticflickr.com/1946/44800791795_346b784f55_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1955/31775381588_d48a30458c_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4882/44800792715_996d209788_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1908/45597331022_c4c582e5e1_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4828/44800787655_a10b315c95_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1936/31775383488_ed70dce47a_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4839/44800794065_70aabc78df_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1902/31775384148_0a46cc8059_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4819/44990143154_f1cde470ba_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1957/31775384958_8f80eeb9d1_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4812/30774443357_7987a60401_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1916/31775382688_f26b3c22f9_b.jpg",
        thumbnail:
          "https://farm5.staticflickr.com/4907/44800793475_940ff562fb_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1934/43829573190_9f9a107900_b.jpg",
        thumbnail:
          "https://farm2.staticflickr.com/1945/44990141514_e04696d4eb_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1931/43829571510_756d86f3f6_b.jpg",
        thumbnail:
          "https://farm2.staticflickr.com/1958/44990140874_2826f25edd_m.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 200
      },
      {
        src: "https://farm2.staticflickr.com/1968/45597329702_31dd5fa754_b.jpg",
        thumbnail:
          "https://farm2.staticflickr.com/1948/44990140574_ff1b409c02_m.jpg",
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
