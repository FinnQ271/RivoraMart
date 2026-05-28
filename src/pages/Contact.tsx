function Contact () {
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
      <a className="text-muted text-decoration-none pointer-events-none" href="#">Contact</a>
    </div>
  </nav>
  {/* end breadcrumbs */}
  <div className="contact-section">
    <section className="py-5 bg-gray-100 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-4">
            <div className="contact-adress-section p-4">
              <ul className="list-unstyled">
                <li className="d-flex mb-3">
                  <div className="me-3">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div>
                    <h3 className="h5">Address</h3>
                    <p className="text-muted"> 123 Main Street<br />London, 45Y 73J<br /><strong>United Kingdom</strong></p>
                  </div>
                </li>
                <li className="d-flex mb-3">
                  <div className="me-3">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <h3 className="h5">Call center</h3>
                    <ul className="list-unstyled text-muted">
                      <li>+33 555 444 333</li>
                      <li>+33 555 444 333</li>
                    </ul>
                  </div>
                </li>
                <li className="d-flex">
                  <div className="me-3">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div>
                    <h3 className="h5">Electronic support</h3>
                    <ul className="list-unstyled text-muted">
                      <li>support@example.com</li>
                      <li>hr@example.com</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-adress-section p-4">
              <form className="form" id="contact-form" method="post">
                <div className="controls">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label visually-hidden" htmlFor="name">Your firstname <span className="text-danger">*</span></label>
                        <input className="form-control bg-light border-0 py-2" type="text" name="name" id="name" placeholder="Enter your firstname"  />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label visually-hidden" htmlFor="surname">Your lastname <span className="text-danger">*</span></label>
                        <input className="form-control bg-light border-0 py-2" type="text" name="surname" id="surname" placeholder="Enter your  lastname"  />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label visually-hidden" htmlFor="email">Your email <span className="text-danger">*</span></label>
                    <input className="form-control bg-light border-0 py-2" type="email" name="email" id="email" placeholder="Enter your  email"  />
                  </div>
                  <div className="mb-4">
                    <label className="form-label visually-hidden" htmlFor="message">Your message for us <span className="text-danger">*</span></label>
                    <textarea className="form-control bg-light border-0 py-2" rows={4} name="message" id="message" placeholder="Enter your message"  defaultValue={""} />
                  </div>
                  <button className="btn btn-primary" type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="google-map mt-5">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5444741.537530338!2d25.901276460527843!3d48.21499022363922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2sUkraine!5e0!3m2!1sen!2sin!4v1708712811331!5m2!1sen!2sin" width="100%" height={600} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div>
</div>

        </>
    )
}

export default Contact;