
import "./NavigationButton.css"
import NavigationButton from "./NavigationButton"
let NavigationButtonContainer = function (props) {



    return <div>
        <div className="navBar">
            <div className="navB">
                {props?.children}
                <div className="buttonContainer">
                    {props?.sectionNames?.map(name => (<NavigationButton name={name}></NavigationButton>))}
                </div>
            </div>
        </div>
    </div>

}
export default NavigationButtonContainer;