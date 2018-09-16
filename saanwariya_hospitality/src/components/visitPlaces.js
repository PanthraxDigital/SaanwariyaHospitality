import React from 'react'
import Link from 'react-router'
import Slider from 'react-slick'
import '../styles/main_styles.css'
import '../styles/responsive.css'
import '../styles/bootstrap4/bootstrap.min.css'

export default ({ data }) => {
  if (data != undefined) {
    const post = data.markdownRemark
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 3000,
      autoplay: true,
      centerMode: true,
      easing: 'linear',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows : false
          },
        },
      ],
    }

    const imgCardStyle = {
      marginTop: '27px',
      padding: '10px',
    }

    // const visitTitle = {
    //   marginTop: '200px',
    // }

    return (
      <div className="container">
        <div>
          <div className="row">
            <div className="col">
              <h1 className="visitTitle">{post.frontmatter.title}</h1>
            </div>
          </div>
          <div style={{ background: '#fa9e1b' }}>
            <Slider {...settings}>
              <card>
                <img
                  className="img-responsive"
                  src={'http://rannutsav.com/images/zoom/1.jpg'}
                  style={imgCardStyle}
                />
              </card>
              <card>
                <img
                  className="img-responsive"
                  src={'http://rannutsav.com/images/zoom/2.jpg'}
                  style={imgCardStyle}
                />
              </card>
              <card>
                <img
                  className="img-responsive"
                  src={'http://rannutsav.com/images/zoom/3.jpg'}
                  style={imgCardStyle}
                />
              </card>
              <card>
                <img
                  className="img-responsive"
                  src={'http://rannutsav.com/images/zoom/4.jpg'}
                  style={imgCardStyle}
                />
              </card>
              <card>
                <img
                  src={'http://rannutsav.com/images/zoom/5.jpg'}
                  style={imgCardStyle}
                />
              </card>
            </Slider>
          </div>
          <div style={{ marginTop: '25px', color: 'black' }}>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
              className="formattedmd"
            />
          </div>
          <Link to="/">Back to Home</Link>
          <br />
          <br />
        </div>
      </div>
    )
  } else {
    return null
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
