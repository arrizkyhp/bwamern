import Button from 'elements/Button'
import React from 'react'

export default function Categories({ data }) {
    return data.map( (category, index1) => {
        return <section className="container" key={`category-${index1}`}>
            <h4 className="mb-3 font-weight-medium">
                {category.name}
            </h4>
            <div className="container-grid">
                {
                    category.items.length === 0 ? <div className="row">
                        <div className="col-auto align-items-center">
                            <p>There is no property at this category</p>
                        </div>
                    </div> : category.items.map ( (item, index2) => {
                        return (
                          <div className="item column-3 row-1" key={`category-${index1}-item-${index2}`}>
                            <div className="card">
                              {item.isPopular && (
                                <div className="tag">
                                  <p>
                                    Popular <span className="font-weight-light">Choice</span>
                                  </p>
                                </div>
                              )}
                              <figure className="img-wrapper" style={{ width: "100%" }}>
                                  <img src={item.imageUrl} alt={item.name} className="img-cover" />
                              </figure>
                              <div className="meta-wrapper">
                                  <Button type="link" href={`/properties/${item._id}`} className="stretched-link d-block text-gray-800">
                                        <h5 className="h4">{item.name}</h5>
                                  </Button>
                                  <span className="text-gray-500">
                                      {item.city}, {item.country}
                                  </span>
                              </div>
                            </div>
                          </div>
                        );
                    } )
                }
            </div>
        </section>
    } )
}
