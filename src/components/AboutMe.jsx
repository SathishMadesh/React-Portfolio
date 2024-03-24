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
                                <p>Hi! I'm Sathish, a web developer. Ever since my college days, I've been intrigued by web development and have always been curious about how websites function. After completing my degree, I decided to pursue a career in web development. I began by enrolling in online courses to enhance my skills, and I'm pleased to say that I've been able to acquire a lot of knowledge through these courses.However, I've realized that the field of web development is constantly evolving, with new technologies emerging every day. Therefore, I'm eager to continue learning and staying updated with the latest advancements. Keeping up with these new technologies will not only help me stay relevant in the industry but also allow me to develop innovative and efficient solutions for web development projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
