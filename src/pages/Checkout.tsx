import { useState } from "react"

type CheckoutProps = {
  navigate: (page: string) => void
}

function Checkout ({ navigate }: CheckoutProps) {
  const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
    return(
        <>
        <div>
  {/* Menu Section */}
  <div className="container-fluid mt-2 mt-sm-2 mt-md-2 mt-lg-4">
    <div className="d-block d-sm-block d-md-block d-lg-flex">
      <div className="container-left">
        <div className="category-menu" style={{display: 'none'}}>
          <div className="menu-title d-none d-sm-none d-md-none d-lg-block"><i className="fas fa-bars mr-2" />Jewelry Collections</div>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="more-menu">Accessory Types</a>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="more-menu">Chokers</a>
                  <ul className="list-unstyled">
                    <li><a href="#">Gold Choker</a></li>
                    <li><a href="#">Silver Choker</a></li>
                  </ul>
                </li>
                <li><a href="#">Pendants</a></li>
                <li><a href="#">Chains</a></li>
                <li><a href="#">Collar Necklaces</a></li>
              </ul>
            </li>
            <li><a href="#">Pearls</a></li>
            <li><a href="#">Silver Pieces</a></li>
            <li>
              <a href="#" className="more-menu">Chain Jewelry</a>
              <ul className="list-unstyled">
                <li><a href="#">Pendants</a></li>
                <li><a href="#">Bracelets</a></li>
                <li><a href="#">Belly Chains</a></li>
                <li><a href="#">Nose Rings</a></li>
              </ul>
            </li>
            <li><a href="#">Cufflinks</a></li>
            <li><a href="#">Black Cardamom Jewelry</a></li>
            <li><a href="#">Fancy Earrings</a></li>
            <li><a href="#">Platinum Pieces</a></li>
            <li><a href="#">Gold Items</a></li>
            <li><a href="#">Toe Rings</a></li>
            <li><a href="#">Featured Items</a></li>
          </ul>
        </div>
      </div>
      <div className="container-right" />
    </div>
  </div>
  {/* /Menu Section End */}
  {/* breadcrumbs */}
  <nav className="container mt-4 mt-sm-4 mt-md-4 mt-lg-3 d-flex flex-wrap align-items-center gap-2 px-3">
    <div className="d-flex align-items-center gap-2">
      <a href="index.html">
        <svg className="text-primary" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
          <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
        </svg>
      </a>
      <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-muted ml-2" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
    <div className="d-flex align-items-center gap-2 ml-1">
      <a className="text-muted text-decoration-none pointer-events-none" href="#">Checkout</a>
    </div>
  </nav>
  {/* end breadcrumbs */}
  <section className="checkout-section">
    <div className="container mt-50 px-4">
      <form action="#">
        <div className="row mt-50">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="title-2 mb-4">Billing Details</h4>
                <div className="checkout-info">
                  <h6>Personal Information</h6>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-name gs_input_area">
                      <input
  type="text"
  name="gs_name"
  placeholder="First Name:"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-name gs_input_area">
                        <input type="text" name="gs_lastname" placeholder="Last Name:" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-email gs_input_area">
                      <input
  type="email"
  name="gs_email"
  placeholder="Email Address:"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-phone gs_input_area">
                      <input
  type="text"
  name="gs_phone"
  placeholder="Phone Number:"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-website gs_input_area">
                        <input type="text" name="gs_company" placeholder="Company Name (optional):" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-website gs_input_area">
                        <input type="text" name="gs_phone" placeholder="Company Address (optional):" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 mb-4">
                      <h6>Country</h6>
                      <div className="input-item gs_input_area">
                        <select>
                          <option value="">Select your Country</option>
                          <option>United Kingdom (UK)</option>
                          <option>United States (US)</option>
                          <option>Bangladesh</option>
                          <option>Select Country</option>
                          <option>Australia</option>
                          <option>Canada</option>
                          <option>China</option>
                          <option>Morocco</option>
                          <option>Saudi Arabia</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <h6>Address</h6>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="input-item gs_input_area">
                            <input type="text" placeholder="House Number and Street Name:" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="input-item gs_input_area">
                            <input type="text" placeholder="Apartment, unit etc. (optional):" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h6>Town / City</h6>
                      <div className="input-item gs_input_area">
                        <input type="text" placeholder="City:" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h6>State </h6>
                      <div className="input-item gs_input_area">
                        <input type="text" placeholder="State:" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h6>Zip</h6>
                      <div className="input-item gs_input_area">
                        <input type="text" placeholder="Zip Code:" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group d-flex align-items-center justify-content-between px-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue=""id="sameShippingAddress" required />
                  <label className="form-check-label form-label" htmlFor="sameShippingAddress">
                    The shipping address is the same as the billing address.
                  </label>
                </div>
              </div>
              <div className="col-lg-12 shipping-details">
                <h4 className="title-2 mb-4">Shipping Details</h4>
                <div className="checkout-info">
                  <h6>Personal Information</h6>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-name gs_input_area">
                        <input type="text" name="gs_name" placeholder="First Name:" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-name gs_input_area">
                        <input type="text" name="gs_lastname" placeholder="Last Name:" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-email gs_input_area">
                        <input type="email" name="gs_email" placeholder="Email Address:" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-phone gs_input_area">
                        <input type="text" name="gs_phone" placeholder="Phone Number:" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-website gs_input_area">
                        <input type="text" name="gs_company" placeholder="Company Name (optional):" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="input-item input-item-website gs_input_area">
                        <input type="text" name="gs_phone" placeholder="Company Address (optional):" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 mb-4">
                      <h6>Country</h6>
                      <div className="input-item gs_input_area w-100">
                        <select>
                          <option value="">Select your Country</option>
                          <option>United Kingdom (UK)</option>
                          <option>United States (US)</option>
                          <option>Bangladesh</option>
                          <option>Select Country</option>
                          <option>Australia</option>
                          <option>Canada</option>
                          <option>China</option>
                          <option>Morocco</option>
                          <option>Saudi Arabia</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <h6>Address</h6>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="input-item gs_input_area">
                            <input type="text" placeholder="House Number and Street Name:" />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="input-item gs_input_area">
                            <input type="text" placeholder="Apartment, unit etc. (optional):" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h6>Town / City</h6>
                      <div className="input-item gs_input_area">
                        <input type="text" placeholder="City:" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h6>State </h6>
                      <div className="input-item gs_input_area">
                        <input type="text" placeholder="State:" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <h6>Zip</h6>
                      <div className="input-item gs_input_area">
                        <input type="text" placeholder="Zip Code:" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h6>Order Notes (optional)</h6>
              <div className="input-item input-item-textarea gs_input_area">
                <textarea name="gs_message" rows={4} placeholder="Notes about your order, e.g. Special notes for Delivery:" required defaultValue={""} />
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <div className="card bg-white">
              <div className="card-header bg-white px-4">
                <h2>Your Order</h2>
              </div>
              <div className="card-body p-0">
                <div className="d-flex justify-content-between px-4 py-3">
                  <span className="p-summary-price">Subtotal</span>
                  <span className="p-summary-title">$100</span>
                </div>
                <div className="d-flex justify-content-between  border-t">
                  <span className="p-summary-title">Delivery Charges</span>
                  <span className="p-summary-price">$40</span>
                </div>
                <div className="d-flex justify-content-between mt-2 border-t">
                  <span className="p-summary-total-title">Total Amount</span>
                  <span className="p-summary-total-price">$140</span>
                </div>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header bg-white px-4">
                <h2>Payment Method</h2>
              </div>
              <div className="border-top border-width-3 border-color-1 pt-3 mb-3">
                {/* Basics Accordion */}
                {/* Card */}
                <div className="accordion" id="basicsAccordion1">
                  <div className="border-bottom border-color-1 border-dotted-bottom">
                    <div className="p-3" id="basicsHeadingFour">
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="FourstylishRadio1" name="stylishRadio" />
                        <label className="custom-control-label form-label" htmlFor="FourstylishRadio1" data-bs-toggle="collapse" data-bs-target="#basicsCollapseOne" aria-expanded="true" aria-controls="basicsCollapseOne">
                          Direct bank transfer
                        </label>
                      </div>
                    </div>
                    <div id="basicsCollapseOne" className="accordion-collapse collapse" aria-labelledby="basicsHeadingFour" data-bs-parent="#basicsAccordion1">
                      <div className="px-4 py-2">
                        Make your payment directly into our bank account. Please use
                        your Order ID as the payment reference. Your order will not be
                        shipped until the funds have cleared in our account.
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="accordion" id="basicsAccordion2">
                  <div className="border-bottom border-color-1 border-dotted-bottom">
                    <div className="p-3" id="basicsHeadingFour">
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="FourstylishRadio2" name="stylishRadio" />
                        <label className="custom-control-label form-label" htmlFor="FourstylishRadio2" data-bs-toggle="collapse" data-bs-target="#basicsCollapseTwo" aria-expanded="true" aria-controls="basicsCollapseTwo">
                          Check payments
                        </label>
                      </div>
                    </div>
                    <div id="basicsCollapseTwo" className="accordion-collapse collapse" aria-labelledby="basicsHeadingFour" data-bs-parent="#basicsAccordion2">
                      <div className="px-4 py-2">
                        Please send a check to Store Name, Store Street, Store Town,
                        Store State / County, Store Postcode.
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="accordion" id="basicsAccordion3">
                  <div className="border-bottom border-color-1 border-dotted-bottom">
                    <div className="p-3" id="basicsHeadingFour">
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="FourstylishRadio3" name="stylishRadio" />
                        <label className="custom-control-label form-label" htmlFor="FourstylishRadio3" data-bs-toggle="collapse" data-bs-target="#basicsCollapseThree" aria-expanded="true" aria-controls="basicsCollapseThree">
                          Cash on delivery
                        </label>
                      </div>
                    </div>
                    <div id="basicsCollapseThree" className="accordion-collapse collapse" aria-labelledby="basicsHeadingFour" data-bs-parent="#basicsAccordion3">
                      <div className="px-4 py-2">
                        Pay with cash upon delivery.
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* Card */}
                <div className="accordion" id="basicsAccordion4">
                  <div className="border-bottom border-color-1 border-dotted-bottom">
                    <div className="p-3" id="basicsHeadingFour">
                      <div className="custom-control custom-radio">
                        <input type="radio" className="custom-control-input" id="FourstylishRadio4" name="stylishRadio" />
                        <label className="custom-control-label form-label" htmlFor="FourstylishRadio4" data-bs-toggle="collapse" data-bs-target="#basicsCollapseFour" aria-expanded="true" aria-controls="basicsCollapseFour">
                          PayPal <a href="#" className="text-blue">What is PayPal?</a>
                        </label>
                      </div>
                    </div>
                    <div id="basicsCollapseFour" className="accordion-collapse collapse" aria-labelledby="basicsHeadingFour" data-bs-parent="#basicsAccordion4">
                      <div className="px-4 py-2">
                        Pay via PayPal; you can pay with your credit card if you don’t
                        have a PayPal account.
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Card */}
                {/* End Basics Accordion */}
              </div>
              <div className="form-group d-flex align-items-center justify-content-between px-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck10" required data-msg="Please agree terms and conditions." data-error-class="u-has-error" data-success-class="u-has-success" />
                  <label className="form-check-label form-label" htmlFor="defaultCheck10">
                    I have read and agree to the website <a href="#" className="text-blue">terms
                      and conditions </a>
                    <span className="text-danger">*</span>
                  </label>
                </div>
              </div>
              <div className="checkout-btn mx-3 my-4">
  <button
    type="button"
    className="btn btn-primary btn-lg w-100"
    onClick={() => {
      localStorage.setItem(
        "orderInfo",
        JSON.stringify({
          name,
          email,
          phone,
        })
      )
    
      navigate("thank-you")
    }}
  >
    Place Order
  </button>
</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</div>

        </>
    )
}

export default Checkout;