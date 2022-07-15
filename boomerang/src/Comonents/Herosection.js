import React from 'react'

const Herosection = () => {
  return (
    <>
    
       {/* <!-- Wrapper--> */}
        {/* < className="wrapper"> */}
            {/* <!-- Hero--> */}
            <section className="module-cover parallax text-center fullscreen" data-background="assets/images/module-2.jpg" data-overlay="0.6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="m-b-20"><strong>Your customers will love you <br/> one minute from now.</strong></h1>
                            <p className="m-b-40">See how your users experience your website in realtime or view  <br/> trends to see any changes in performance over time.</p>
                            <p><a className="btn btn-lg btn-circle btn-brand" href="#">Get Started</a><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Hero end--> */}

    </>
  )
}

export default Herosection
