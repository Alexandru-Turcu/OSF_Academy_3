import React from "react";
import importAll from "../../helpers/import-manager.js";

import MenuItem from "../menu-item/menu-item.component";
import "./directory-styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    const images = importAll(
      require.context("../img", false, /\.(png|jpe?g|svg)$/)
    );

    this.state = {
      sections: [
        {
          title: "product_1",
          imageUrl: images["1.jpg"],
          id: 1,
          linkUrl: "",
        },
        {
          title: "product_2",
          imageUrl: images["5.jpg"],
          id: 2,
          linkUrl: "",
        },
        {
          title: "product_3",
          imageUrl: images["3.jpg"],
          id: 3,
          linkUrl: "",
        },
        {
          title: "black",
          imageUrl: images["4.jpg"],
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "green",
          imageUrl: images["2.jpg"],
          size: "large",
          id: 5,
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

export default Directory;
