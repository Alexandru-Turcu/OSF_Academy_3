import React from "react"


const ContactPage = () => {
    return(
      <div>
      <h1>CONTACT PAGE </h1>
      <button onClick={() => React.props.history.push("./contact")}>ContactPage</button>
    </div>
    )
  };
  
export default ContactPage