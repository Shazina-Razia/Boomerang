import React from 'react'

const Counter = () => {
  return (
   <>
    {/* <!-- Counters--> */}
            <section className="module bg-gray p-b-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="counter">
                                <div className="counter-icon"><span className="icon-energy icons"></span></div>
                                <div className="counter-number">
                                    <h6><strong className="counter-timer" data-from="0" data-to="1538">0</strong></h6>
                                </div>
                                <div className="counter-title">Happy Clients</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter">
                                <div className="counter-icon"><span className="icon-game-controller icons"></span></div>
                                <div className="counter-number">
                                    <h6><strong className="counter-timer" data-from="0" data-to="2124">0</strong></h6>
                                </div>
                                <div className="counter-title">Total downloads</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter">
                                <div className="counter-icon"><span className="icon-fire icons"></span></div>
                                <div className="counter-number">
                                    <h6><strong className="counter-timer" data-from="0" data-to="3128">0</strong></h6>
                                </div>
                                <div className="counter-title">Awards Won</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter">
                                <div className="counter-icon"><span className="icon-diamond icons"></span></div>
                                <div className="counter-number">
                                    <h6><strong className="counter-timer" data-from="0" data-to="9534">0</strong></h6>
                                </div>
                                <div className="counter-title">Theme Users</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Counters end--> */}

   </>
  )
}

export default Counter
