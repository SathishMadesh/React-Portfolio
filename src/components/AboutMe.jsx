import React from 'react';

function AboutMe() {
    return (
        <section className="about-section pt-5 pb-5 bg-dark text-light" id="about">
            <div className="container">
                <div className="row">
                    <div className="image-section col-md-6" >
                        <div className="my-image-section" data-aos="fade-up-right" data-aos-duration="1000">
                            <img src="images\my_img(1).jpg" alt="My-Image" className="img-fluid" style={{ height: '100%', width: 'auto' }} />
                        </div>
                    </div>
                    <div className="content-section col-md-6" >
                        <div className="about-content-box" data-aos="fade-up-left" data-aos-duration="1000">
                            <div className="about-content-title" >About Me</div>
                            <div className="about-content" data-aos="fade-up-left" data-aos-duration="1000">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis sed distinctio quisquam at hic consectetur exercitationem architecto labore nobis soluta eligendi dolorum ut, delectus tenetur, molestias dolorem, natus rem repudiandae sint. Sed culpa est, nemo iure accusamus, fugiat unde natus, deleniti quae id harum ipsa consequuntur a porro maxime nisi quo magni et ducimus. Aperiam, debitis nostrum. Vel eligendi quam placeat sapiente eveniet autem error hic necessitatibus, recusandae inventore obcaecati, ipsa consectetur a adipisci provident aliquid quos voluptas corporis alias dolorum distinctio corrupti magni. Optio iusto provident accusantium debitis fuga quis aliquam, consequatur eveniet nobis error explicabo natus cum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
