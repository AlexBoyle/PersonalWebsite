
import "./NavigationButton.css"
import NavigationButton from "./NavigationButton"
let NavigationButtonContainer = function (props) {



    return <>
        <div className="navBar">
            {props?.sectionNames?.map(name => (<NavigationButton name={name}></NavigationButton>))}
        </div>
    </>

}
export default NavigationButtonContainer;