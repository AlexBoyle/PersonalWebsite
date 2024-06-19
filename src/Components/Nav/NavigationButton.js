import React from "react";
import scrollTo from "../../Utilities/scrollTo"
import "./NavigationButton.css"
let NavigationButton = function (props) {


    let onClick = React.useCallback(() => {
        scrollTo(props.name)
    }, [props.name])

    return <div className="NavigationButton" onClick={onClick}>
        >&nbsp;{ props.name}
    </div>
}
export default NavigationButton;