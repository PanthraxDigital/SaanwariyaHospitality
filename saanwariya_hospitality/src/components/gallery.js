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
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail:
          "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
          { value: "Ocean", title: "Ocean" },
          { value: "People", title: "People" }
        ],
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail:
          "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
      }
    ];
    return <GalImages images={IMAGES} />;
  }
}

// Gallery.displayName = "Gallery";
// Gallery.propTypes = {
//   heading: PropTypes.string,
//   images: PropTypes.array,
//   showThumbnails: PropTypes.bool,
//   subheading: PropTypes.string
// };

// const gutter = {
//   small: 2,
//   large: 4
// };
// const classes = StyleSheet.create({
//   gallery: {
//     marginRight: -gutter.small,
//     overflow: "hidden",

//     "@media (min-width: 500px)": {
//       marginRight: -gutter.large
//     }
//   },

//   // anchor
//   thumbnail: {
//     boxSizing: "border-box",
//     display: "block",
//     float: "left",
//     lineHeight: 0,
//     paddingRight: gutter.small,
//     paddingBottom: gutter.small,
//     overflow: "hidden",

//     "@media (min-width: 500px)": {
//       paddingRight: gutter.large,
//       paddingBottom: gutter.large
//     }
//   },

//   // orientation
//   landscape: {
//     width: "30%"
//   },
//   square: {
//     paddingBottom: 0,
//     width: "40%",

//     "@media (min-width: 500px)": {
//       paddingBottom: 0
//     }
//   },

//   // actual <img />
//   source: {
//     border: 0,
//     display: "block",
//     height: "auto",
//     maxWidth: "100%",
//     width: "auto"
//   }
// });

//   renderGallery() {
//     const { images } = this.props;

//     if (!images) return;

//     const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
//       return (
//         <a
//           href={obj.src}
//           className={css(classes.thumbnail, classes[obj.orientation])}
//           key={i}
//           onClick={e => this.openLightbox(i, e)}
//         >
//           <img src={obj.thumbnail} className={css(classes.source)} />
//         </a>
//       );
//     });

//     return <div className={css(classes.gallery)}>{gallery}</div>;
//   }

export default Gallery;
