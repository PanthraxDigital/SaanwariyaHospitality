import React from 'react'
import '../styles/bootstrap4/bootstrap.min.css'
import '../styles/main_styles.css'

const Search = () => (
  <div className="search">
    {/* <!-- Search Contents --> */}
    <div className="container fill_height">
      {/* <!-- Search Panel --> */}

      <div className="search_panel active">
        <form
          action="#"
          id="search_form_1"
          className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start"
        >
          <div className="search_item">
            <div>phone number</div>
            <input
              type="text"
              placeholder="+00-000-000-0000"
              className="destination search_input"
              required="required"
            />
          </div>
          <div className="search_item">
            <div>check in</div>
            <input
              type="text"
              className="check_in search_input"
              placeholder="YYYY-MM-DD"
            />
          </div>
          <div className="search_item">
            <div>check out</div>
            <input
              type="text"
              className="check_out search_input"
              placeholder="YYYY-MM-DD"
            />
          </div>
          <div className="search_item">
            <div>adults</div>
            <select
              name="adults"
              id="adults_1"
              className="dropdown_item_select search_input"
            >
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
          </div>
          <div className="search_item">
            <div>children</div>
            <select
              name="children"
              id="children_1"
              className="dropdown_item_select search_input"
            >
              <option>00</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
          </div>
          <button className="button search_button">
            Book Now<span />
            <span />
            <span />
          </button>
        </form>
      </div>
    </div>
  </div>
)

export default Search
