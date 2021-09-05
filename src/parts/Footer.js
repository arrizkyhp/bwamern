import React from 'react'
import IconText from 'parts/IconText'
import Button from 'elements/Button';

export default function Footer() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <IconText />
              <p className="brand-tagline">We kaboom your beauty holiday instantly and memoriable</p>
            </div>
            <div className="col-3 offset-1">
              <h6 className="mt-2">For Beginners</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    New Account
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/properties">
                    Start Booking a Room
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/use-payments">
                    Room Payments
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h6 className="mt-2">Explore Us</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/about">
                    About
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/privacy">
                    Privacy & Policy
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/terms">
                    Terms & Conditions
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-2 offset-1">
              <h6 className="mt-2">Getting Touch</h6>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="mailto:support@staycation.id" isExternal>
                    support@staycation.id
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="tel:+62122081997" isExternal>
                    021-2208-1997
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>Terms & Conditions</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              <span>Copyright 2021 All rights reserved Staycation</span>
            </div>
          </div>
        </div>
      </footer>
    );
}
