import React from "react";
import ListAmenities from "../content/ListOfAmenities.json";

class Amenities extends React.Component {
  render() {
    return (
      <div className="trending">
        <div className="container">
          <div className="row">
            <div className="col text-center">
            <h2 className="intro_title text-center" >Services & Amenities</h2>
            </div>
          </div>
          <div className="row trending_container">
            {ListAmenities.map(data => (
              <div className="col-lg-3 col-sm-6">
                <div className="trending_item clearfix">
                  <div className="trending_image">
                    <img
                      src={`${data.imageUrl}`}
                      
                    />
                  </div>
                  <div className="trending_content">
                    <div className="trending_title">
                      <a href="#">{data.title}</a>
                    </div>
                    <div className="trending_price">{data.timing}</div>
                    {/* <div className="trending_location">madrid, spain</div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Amenities;
