import Breadcrumb from 'elements/Breadcrumb'
import React from 'react'
import Fade from 'react-reveal/Fade'


export default function PageDetailTitle( { data, breadcrumb } ) {
    return (
      <section className="container spacing-sm" style={{ marginBottom: "50px" }}>
        <Fade bottom>
          <div className="row align-items-center">
            <div className="col-12">
              <Breadcrumb data={breadcrumb} />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h1 className="h2" style={{ marginBottom: 0, fontWeight: 600 }}>{data.name}</h1>
              <span className="text-gray-500" style={{ fontWeight: 300 }}>
                  {data.city}, {data.country}
              </span>
            </div>
          </div>
        </Fade>
      </section>
    );
}
