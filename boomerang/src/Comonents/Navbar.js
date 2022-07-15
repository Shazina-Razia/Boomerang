import React from 'react'
const Navbar = () => {
  return (
    <>
    {/* <!-- Preloader--> */}
        <div className="page-loader">
            <div className="page-loader-inner">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div>
        {/* <!-- Preloader end--> */}

        {/* <!-- Header--> */}
        <header className="header header-transparent">
            <div className="container-fluid">
                {/* <!-- Brand--> */}
                <div className="inner-header"><a className="inner-brand" href="index.html">Boomerang</a></div>
                {/* <!-- Navigation--> */}
                <div className="inner-navigation collapse">
                    <div className="inner-nav">
                        <ul>
                            <li className="menu-item-has-children menu-item-has-mega-menu"><a href="#"><span className="menu-item-span">Home</span></a>
                                <div className="mega-menu">
                                    <ul className="sub-menu mega-menu-row" data-background="assets/images/menu-3.jpg">
                                        {/* <!-- Column 1--> */}
                                        <li className="menu-item-has-children mega-menu-col"><a href="#">Multi Page</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Parallax</a></li>
                                                <li><a href="index-3.html">Slider - Fade</a></li>
                                                <li><a href="index-2.html">Slider - Slide</a></li>
                                                <li><a href="index-7.html">Gradient Style 1</a></li>
                                                <li><a href="index-8.html">Gradient Style 2</a></li>
                                                <li><a href="index-6.html">Local Video</a></li>
                                                <li><a href="index-5.html">Vimeo Video</a></li>
                                                <li><a href="index-4.html">Youtube Video</a></li>
                                            </ul>
                                        </li>
                                        {/* <!-- Column 2--> */}
                                        <li className="menu-item-has-children mega-menu-col"><a href="#">One Page</a>
                                            <ul className="sub-menu">
                                                <li><a href="op-index.html">Parallax</a></li>
                                                <li><a href="op-index-3.html">Slider - Fade</a></li>
                                                <li><a href="op-index-2.html">Slider - Slide</a></li>
                                                <li><a href="op-index-7.html">Gradient Style 1</a></li>
                                                <li><a href="op-index-8.html">Gradient Style 2</a></li>
                                                <li><a href="op-index-6.html">Local Video</a></li>
                                                <li><a href="op-index-5.html">Vimeo Video</a></li>
                                                <li><a href="op-index-4.html">Youtube Video</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-item-has-children menu-item-has-mega-menu"><a href="#"><span className="menu-item-span">Pages</span></a>
                                <div className="mega-menu">
                                    <ul className="sub-menu mega-menu-row" data-background="assets/images/menu-1.jpg">
                                        {/* <!-- Column 1--> */}
                                        <li className="menu-item-has-children mega-menu-col"><a href="#">Pages 1</a>
                                            <ul className="sub-menu">
                                                <li><a href="about-1.html">About Us 1</a></li>
                                                <li><a href="about-2.html">About Us 2</a></li>
                                                <li><a href="services-1.html">Services 1</a></li>
                                                <li><a href="services-2.html">Services 2</a></li>
                                                <li><a href="timeline.html">Timeline</a></li>
                                                <li><a href="pricing-1.html">Pricing</a></li>
                                                <li><a href="faqs.html">FAQs</a></li>
                                            </ul>
                                        </li>
                                        {/* <!-- Column 2--> */}
                                        <li className="menu-item-has-children mega-menu-col"><a href="#">Pages 2</a>
                                            <ul className="sub-menu">
                                                <li><a href="sign-in.html">Sign in</a></li>
                                                <li><a href="sign-up.html">Sign Up</a></li>
                                                <li><a href="recover-password.html">Password</a></li>
                                                <li><a href="contact-3.html">Contact</a></li>
                                                <li><a href="contact-2.html">Map Contact</a></li>
                                                <li><a href="contact-1.html">Image Contact</a></li>
                                                <li><a href="invoice.html">Invoice</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="menu-item-has-children"><a href="#"><span className="menu-item-span">Portfolio</span></a>
                                <ul className="sub-menu">
                                    <li><a href="portfolio-7.html">Carousel</a></li>
                                    <li className="menu-item-has-children"><a href="#">Wide</a>
                                        <ul className="sub-menu">
                                            <li><a href="portfolio-1.html">5 Columns</a></li>
                                            <li><a href="portfolio-2.html">4 Columns</a></li>
                                            <li><a href="portfolio-3.html">3 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Boxed</a>
                                        <ul className="sub-menu">
                                            <li><a href="portfolio-4.html">4 Columns</a></li>
                                            <li><a href="portfolio-5.html">3 Columns</a></li>
                                            <li><a href="portfolio-6.html">2 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Single</a>
                                        <ul className="sub-menu">
                                            <li><a href="portfolio-single-1.html">Sidebar Stack</a></li>
                                            <li><a href="portfolio-single-2.html">Sidebar Slides</a></li>
                                            <li><a href="portfolio-single-3.html">Sidebar Gallery</a></li>
                                            <li><a href="portfolio-single-4.html">Centered Stack</a></li>
                                            <li><a href="portfolio-single-5.html">Centered Slides</a></li>
                                            <li><a href="portfolio-single-6.html">Centered Gallery</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#"><span className="menu-item-span">Blog</span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children"><a href="#">Classic</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-1.html">Right Sidebar</a></li>
                                            <li><a href="blog-2.html">Left Sidebar</a></li>
                                            <li><a href="blog-3.html">No Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Masonry</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-4.html">Right Sidebar</a></li>
                                            <li><a href="blog-5.html">Left Sidebar</a></li>
                                            <li><a href="blog-6.html">No Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Side Image</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-7.html">Right Sidebar</a></li>
                                            <li><a href="blog-8.html">Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Single Post</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-single-1.html">Right Sidebar</a></li>
                                            <li><a href="blog-single-2.html">Left Sidebar</a></li>
                                            <li><a href="blog-single-3.html">No Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#"><span className="menu-item-span">Shop</span></a>
                                <ul className="sub-menu">
                                    <li><a href="shop-grid-1.html">Shop 2 Columns</a></li>
                                    <li><a href="shop-grid-2.html">Shop 3 Columns</a></li>
                                    <li><a href="shop-grid-3.html">Shop 4 Columns</a></li>
                                    <li><a href="shop-single-1.html">Single Product</a></li>
                                    <li><a href="shop-checkout.html">Checkout</a></li>
                                    <li><a href="shop-cart-1.html">Cart</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children menu-item-has-mega-menu"><a href="#"><span className="menu-item-span">Components</span></a>
                                <div className="mega-menu">
                                    <ul className="sub-menu mega-menu-row" data-background="assets/images/menu-2.jpg">
                                        {/* <!-- Column 1--> */}
                                        <li className="menu-item-has-children mega-menu-col"><a href="#">Group 1</a>
                                            <ul className="sub-menu">
                                                <li><a href="components-alerts.html"><i className="fas fa-exclamation-triangle"></i> Alerts</a></li>
                                                <li><a href="components-accordion.html"><i className="fas fa-plus-square"></i> Accordion</a></li>
                                                <li><a href="components-buttons.html"><i className="fas fa-link"></i> Buttons</a></li>
                                                <li><a href="components-clients.html"><i className="fab fa-amazon"></i> Clients</a></li>
                                                <li><a href="components-counters.html"><i className="fas fa-superscript"></i> Counters</a></li>
                                                <li><a href="components-maps.html"><i className="fas fa-map"></i> Google Maps</a></li>
                                                <li><a href="components-grid.html"><i className="fas fa-th"></i> Grid</a></li>
                                                <li><a href="components-hero.html"><i className="fas fa-object-ungroup"></i> Hero</a></li>
                                                <li><a href="components-iconbox.html"><i className="fas fa-bold"></i> IсonBox</a></li>
                                            </ul>
                                        </li>
                                        {/* <!-- Column 2--> */}
                                        <li className="menu-item-has-children mega-menu-col"><a href="#">Group 2</a>
                                            <ul className="sub-menu">
                                                <li><a href="components-forms.html"><i className="fas fa-align-justify"></i> Inputs</a></li>
                                                <li><a href="components-modal.html"><i className="fas fa-plus-square"></i> Modal</a></li>
                                                <li><a href="components-pie.html"><i className="fas fa-chart-pie"></i> Pie charts</a></li>
                                                <li><a href="components-pricing.html"><i className="fas fa-dollar-sign"></i> Pricing Tables</a></li>
                                                <li><a href="components-progress.html"><i className="fas fa-tasks"></i> Progress Bars</a></li>
                                                <li><a href="components-sections.html"><i className="fas fa-object-ungroup"></i> Sections</a></li>
                                                <li><a href="components-sliders.html"><i className="fas fa-images"></i> Sliders</a></li>
                                                <li><a href="components-tabs.html"><i className="fas fa-columns"></i> Tabs</a></li>
                                                <li><a href="components-team.html"><i className="far fa-user-circle"></i> Team</a></li>
                                            </ul>
                                        </li>
                                        {/* <!-- Column 3--> */}
                                        <li className="menu-item-has-children mega-menu-col"><a href="#">Group 3</a>
                                            <ul className="sub-menu">
                                                <li><a href="components-testimonials.html"><i className="fas fa-quote-right"></i> Testimonials</a></li>
                                                <li><a href="components-tooltips.html"><i className="far fa-question-circle"></i> Tooltips</a></li>
                                                <li><a href="components-typography.html"><i className="fas fa-font"></i> Typography</a></li>
                                                <li><a href="components-video.html"><i className="fab fa-youtube"></i> Video</a></li>
                                                <li><a href="documentation.html"><i className="fas fa-info-circle"></i> Documentation</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="start.html"><span className="menu-item-span">Demos</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="extra-nav">
                    <ul>
                        <li><a className="top-bar-cart" href="shop-cart-1.html"><span className="menu-item-span"><i className="ti-shopping-cart"></i><span>3</span></span></a></li>
                        <li><a className="off-canvas-open" href="#"><span className="menu-item-span"><i className="ti-menu"></i></span></a></li>
                        <li className="nav-toggle"><a href="#" data-toggle="collapse" data-target=".inner-navigation"><span className="menu-item-span"><i className="ti-menu"></i></span></a></li>
                    </ul>
                </div>
            </div>
        </header>
        {/* <!-- Header end--> */}
    </>
  )
}

export default Navbar
