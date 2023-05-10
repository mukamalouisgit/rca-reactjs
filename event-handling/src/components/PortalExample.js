import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const PortalChild = (props) => {
    return (
        <div>
            <p>
                This PortalChild component is portaled from the PortalExample component.
            </p>
        </div>
    );
};

const PortalExample = (props) => {
    return (
        <Fragment>
            <h2>Portal Component Example</h2>
            {ReactDOM.createPortal(
                <PortalChild />,
                document.getElementById("root")
            )}
        </Fragment>
    );
};

export default PortalExample;