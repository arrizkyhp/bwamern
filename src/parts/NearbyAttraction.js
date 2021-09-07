import Button from "elements/Button";
import React from "react";

import Fade from "react-reveal/Fade";


export default function NearbyAttraction({ data }) {
    return data.map( (attraction, index1) => {
        return (
          <section className="container" key={`attraction=${index1}`}>
            <Fade bottom>
              <h4 className="mb-3 font-weight-">{attraction.name}</h4>

              <div className="container-grid">
                {attraction.items.length === 0 ? (
                  <div className="row">
                    <div className="col-auto align-items-center">
                      <p>There is no nearby attraction yet</p>
                    </div>
                  </div>
                ) : (
                  attraction.items.map((item, index2) => {
                    return (
                      <div className="item column-3 row-1" key={`attraction-${index2}-item-${index2}`}>
                        <Fade bottom delay={300 * index2}>
                          <div className="card">
                            <figure className="img-wrapper" style={{ width: "100%" }}>
                              <img src={item.imageUrl} alt={item.name} className="img-cover" />
                            </figure>
                            <div className="meta-wrapper">
                              <Button type="link" href={`/attraction/${item._id}`} className="stretched-link d-block text-gray-800">
                                <h5 className="h4">{item.name}</h5>
                              </Button>
                              <span className="text-gray-500">{item.type}</span>
                            </div>
                          </div>
                        </Fade>
                      </div>
                    );
                  })
                )}
              </div>
            </Fade>
          </section>
        );
    } )
}
