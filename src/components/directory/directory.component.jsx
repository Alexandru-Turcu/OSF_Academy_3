import React from "react";
import importAll from "../../helpers/import-manager.js";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    const images = importAll(
      require.context("../images", false, /\.(png|jpe?g|svg)$/)
    );

    this.state = {
      sections: [
        {
          title: "product_1",
          imageUrl: images["1.jpg"],
          id: 1,
        },
        {
          title: "product_2",
          imageUrl: images["5.jpg"],
          id: 2,
        },
        {
          title: "product_3",
          imageUrl: images["3.jpg"],
          id: 3,
        },
        {
          title: "female",
          imageUrl: images["4.jpg"],
          size: "large",
          id: 4,
        },
        {
          title: "male",
          imageUrl: images["2.jpg"],
          size: "large",
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
