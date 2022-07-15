import React from 'react'

const Post = () => {
  return (
   <>
   {/* <!-- Posts--> */}
            <section className="module">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <h1>Latest articles.</h1>
                            <p className="lead">See how your users experience your website in realtime or view trends to see any changes in performance over time.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="space" data-MY="60px"></div>
                        </div>
                    </div>
                    <div className="row row-post-masonry">
                        <div className="col-md-4 post-item">
                            {/* <!-- Post--> */}
                            <article className="post">
                                <div className="post-preview"><a href="#"><img src="assets/images/blog/1.jpg" alt=""/></a></div>
                                <div className="post-wrapper">
                                    <div className="post-header">
                                        <h2 className="post-title"><a href="blog-single.html">Bluetooth Speaker</a></h2>
                                    </div>
                                    <div className="post-content">
                                        <p>See how your users experience your website in realtime or view trends to see any changes in performance over time.</p>
                                        <p><a href="#">Read more</a></p>
                                    </div>
                                </div>
                            </article>
                            {/* <!-- Post end--> */}
                        </div>
                        <div className="col-md-4 post-item">
                            {/* <!-- Post--> */}
                            <article className="post">
                                <div className="post-preview"><a href="#"><img src="assets/images/blog/3.jpg" alt=""/></a></div>
                                <div className="post-wrapper">
                                    <div className="post-header">
                                        <h2 className="post-title"><a href="blog-single.html">Minimalist Chandelier</a></h2>
                                    </div>
                                    <div className="post-content">
                                        <p>See how your users experience your website in realtime or view trends to see any changes in performance over time.</p>
                                        <p><a href="#">Read more</a></p>
                                    </div>
                                </div>
                            </article>
                            {/* <!-- Post end--> */}
                        </div>
                        <div className="col-md-4 post-item">
                            {/* <!-- Post--> */}
                            <article className="post">
                                <div className="post-preview"><a href="#"><img src="assets/images/blog/5.jpg" alt=""/></a></div>
                                <div className="post-wrapper">
                                    <div className="post-header">
                                        <h2 className="post-title"><a href="blog-single.html">Standard Shape</a></h2>
                                    </div>
                                    <div className="post-content">
                                        <p>See how your users experience your website in realtime or view trends to see any changes in performance over time.</p>
                                        <p><a href="#">Read more</a></p>
                                    </div>
                                </div>
                            </article>
                            {/* <!-- Post end--> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Posts end--> */}

   </>
  )
}

export default Post
