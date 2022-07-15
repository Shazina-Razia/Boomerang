import React from 'react'

const Clients = () => {
  return (
    <>
    {/* <!-- Clients--> */}
            <section className="module bg-gray p-t-0 p-b-40">
                <div className="container">
                    <div className="space" data-MY="-60px"></div>
                    <div className="row">
                        <div className="col-md-4 pricing-wrapper">
                            <div className="pricing-header">
                                <div className="pricing-icon"><i className="ti-slice"></i></div>
                                <div className="pricing-title">Starter</div>
                            </div>
                            <div className="pricing-price">Free
                            </div>
                            <div className="pricing-body">
                                <p>Map where your photos<br/>were taken and discover local<br/>points of interest.</p>
                            </div>
                            <div className="pricing-footer"><a className="btn btn-circle btn-brand" href="#">Download</a></div>
                        </div>
                        <div className="col-md-4 pricing-wrapper pricing-popular">
                            <div className="pricing-header">
                                <div className="pricing-icon"><i className="ti-pin-alt"></i></div>
                                <div className="pricing-title">Standard</div>
                            </div>
                            <div className="pricing-price"><span>$</span>45
                            </div>
                            <div className="pricing-body">
                                <p>Map where your photos<br/>were taken and discover local<br/>points of interest.</p>
                            </div>
                            <div className="pricing-footer"><a className="btn btn-circle btn-brand" href="#">Download</a></div>
                        </div>
                        <div className="col-md-4 pricing-wrapper pricing-popular">
                            <div className="pricing-header">
                                <div className="pricing-icon"><i className="ti-marker-alt"></i></div>
                                <div className="pricing-title">Professional</div>
                            </div>
                            <div className="pricing-price"><span>$</span>69
                            </div>
                            <div className="pricing-body">
                                <p>Map where your photos<br/>were taken and discover local<br/>points of interest.</p>
                            </div>
                            <div className="pricing-footer"><a className="btn btn-circle btn-brand" href="#">Download</a></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <div className="owl-carousel clients-carousel">
                                <div className="client"><img src="assets/images/clients/1.png" alt=""/></div>
                                <div className="client"><img src="assets/images/clients/2.png" alt=""/></div>
                                <div className="client"><img src="assets/images/clients/3.png" alt=""/></div>
                                <div className="client"><img src="assets/images/clients/4.png" alt=""/></div>
                                <div className="client"><img src="assets/images/clients/5.png" alt=""/></div>
                                <div className="client"><img src="assets/images/clients/6.png" alt=""/></div>
                                <div className="client"><img src="assets/images/clients/7.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Clients end--> */}

    </>
  )
}

export default Clients
