import React from 'react'

const Testimonials = () => {
  return (
    <>
    {/* <!-- Testimonials--> */}
            <section className="module parallax" data-background="assets/images/module-12.jpg" data-overlay="0.5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="space m-b-50"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="review-slides owl-carousel">
                                <div className="review">
                                    <div className="review-icons"><img src="assets/images/avatar/1.jpg" alt=""/>
                                    </div>
                                    <div className="review-content">
                                        <blockquote>
                                            <p>I don't work from drawings. I don't make sketches and drawings <br/> and color sketches into a final painting.</p>
                                            <footer className="blockquote-footer">Albert Einstein</footer>
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="review">
                                    <div className="review-icons"><img src="assets/images/avatar/1.jpg" alt=""/>
                                    </div>
                                    <div className="review-content">
                                        <blockquote>
                                            <p>To be yourself in a world that is constantly trying to make you <br/> something else is the greatest accomplishment.</p>
                                            <footer className="blockquote-footer">Ralph Waldo Emerson</footer>
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="review">
                                    <div className="review-icons"><img src="assets/images/avatar/1.jpg" alt=""/>
                                    </div>
                                    <div className="review-content">
                                        <blockquote>
                                            <p>Imperfection is beauty, madness is genius and it's better to be <br/> absolutely ridiculous than absolutely boring.</p>
                                            <footer className="blockquote-footer">Marilyn Monroe</footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="space m-b-50"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Testimonials end--> */}

    </>
  )
}

export default Testimonials
