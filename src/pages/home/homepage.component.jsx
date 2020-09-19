import React from 'react';
import importAll from "../../helpers/import-manager.js";
import MenuItem from "../../components/menu-item/menu-item.component";
import './homepage.styles.scss';

class HomePage extends React.Component {
    constructor() {
      super();
      const images = importAll(
        require.context("../../components/img", false, /\.(png|jpe?g|svg)$/)
      );
  
      this.state = {
        sections: [
          {
            title: "product_1",
            imageUrl: images["slide_1.png"],
            id: 1,
            linkUrl: "",
          },
          {
            title: "product_2",
            imageUrl: images["slide_2.png"],
            id: 2,
            linkUrl: "",
          },
          {
            title: "product_3",
            imageUrl: images["slide_3.png"],
            id: 3,
            linkUrl: "",
          },
        ],
      };
    }
    render() {
      return (
        <div className="directory-menu">
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))}
        </div>
      );
    }
  }
  
  export default HomePage;
  