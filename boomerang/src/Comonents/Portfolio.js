import React from 'react'

const Portfolio = () => {
  return (
    <>
     {/* <!-- Portfolio--> */}
            <section className="module p-b-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <h1>Digital Design.</h1>
                            <p className="lead">See how your users experience your website in realtime or view trends to see any changes in performance over time.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="space" data-MY="40px"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="filters serif">
                                <li><a className="current" href="#" data-filter="*">All</a></li>
                                <li><a href="#" data-filter=".branding">Branding</a></li>
                                <li><a href="#" data-filter=".digital">Digital</a></li>
                                <li><a href="#" data-filter=".packaging">Packaging</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row row-portfolio" data-columns="3">
                        <div className="grid-sizer"></div>
                        <div className="portfolio-item branding">
                            <div className="portfolio-item-wrapper">
                                <div className="portfolio-item-img"><img src="assets/images/portfolio/1.jpg" alt=""/></div>
                                <div className="portfolio-item-caption">
                                    <h6 className="portfolio-item-title">Solave Cleanser</h6><span className="portfolio-item-subtitle serif">Digital</span>
                                </div><a className="portfolio-item-link" href="portfolio-single-1.html"></a>
                            </div>
                        </div>
                        <div className="portfolio-item digital">
                            <div className="portfolio-item-wrapper">
                                <div className="portfolio-item-img"><img src="assets/images/portfolio/4.jpg" alt=""/></div>
                                <div className="portfolio-item-caption">
                                    <h6 className="portfolio-item-title">Monochrome</h6><span className="portfolio-item-subtitle serif">Branding</span>
                                </div><a className="portfolio-item-link" href="portfolio-single-1.html"></a>
                            </div>
                        </div>
                        <div className="portfolio-item packaging">
                            <div className="portfolio-item-wrapper">
                                <div className="portfolio-item-img"><img src="assets/images/portfolio/3.jpg" alt=""/></div>
                                <div className="portfolio-item-caption">
                                    <h6 className="portfolio-item-title">Ellie Cashman</h6><span className="portfolio-item-subtitle serif">Packaging</span>
                                </div><a className="portfolio-item-link" href="portfolio-single-1.html"></a>
                            </div>
                        </div>
                        <div className="portfolio-item branding">
                            <div className="portfolio-item-wrapper">
                                <div className="portfolio-item-img"><img src="assets/images/portfolio/6.jpg" alt=""/></div>
                                <div className="portfolio-item-caption">
                                    <h6 className="portfolio-item-title">White Sleeve</h6><span className="portfolio-item-subtitle serif">Digital</span>
                                </div><a className="portfolio-item-link" href="portfolio-single-1.html"></a>
                            </div>
                        </div>
                        <div className="portfolio-item digital">
                            <div className="portfolio-item-wrapper">
                                <div className="portfolio-item-img"><img src="assets/images/portfolio/5.jpg" alt=""/></div>
                                <div className="portfolio-item-caption">
                                    <h6 className="portfolio-item-title">Classic Socks</h6><span className="portfolio-item-subtitle serif">Branding</span>
                                </div><a className="portfolio-item-link" href="portfolio-single-1.html"></a>
                            </div>
                        </div>
                        <div className="portfolio-item packaging">
                            <div className="portfolio-item-wrapper">
                                <div className="portfolio-item-img"><img src="assets/images/portfolio/2.jpg" alt=""/></div>
                                <div className="portfolio-item-caption">
                                    <h6 className="portfolio-item-title">Expirience</h6><span className="portfolio-item-subtitle serif">Packaging</span>
                                </div><a className="portfolio-item-link" href="portfolio-single-1.html"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Portfolio end--> */}
    </>
  )
}

export default Portfolio
