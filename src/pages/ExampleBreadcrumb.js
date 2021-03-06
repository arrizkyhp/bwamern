import React, { Component } from "react";

import Breadcrumb from "elements/Breadcrumb";

export default class ExampleBreadcrumb extends Component {
    render() {
         const breadcrumb = [
           { pageTitle: "Home", pageHref: "" },
           { pageTitle: "House Details", pageHref: "" },
         ];

        return (
            <div className="container">
                <div
                    className="row align-items-center justify-content-center"
                    style={{ height: "100vh" }}
                >
                    <div className="col-a">
                        <Breadcrumb data={breadcrumb} />
                    </div>
                </div>
            </div>
        )
    }
}
