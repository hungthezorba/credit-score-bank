import { Box } from '@chakra-ui/layout'
import React from 'react'
import {Input, Flex, Heading} from '@chakra-ui/react';
import {useEffect} from 'react';
import hero from '../assets/img/hero-img.png';
import whyus from '../assets/img/why-us.png';
import skills from '../assets/img/skills.png';
import duy from '../assets/img/duy.jpg';
import huy from '../assets/img/huy.jpg';
import thao from '../assets/img/thao.jpg';
import minh from '../assets/img/minh.jpg';
import dat from '../assets/img/dat.jpg';
import hung from '../assets/img/hung.jpg';
import thien  from '../assets/img/thien.jpg';
import '../assets/css/style.css';
import '../assets/vendor/bootstrap/css/bootstrap.css';
// import '../assets/js/main.js';
// import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';

function AboutUs() {

    return (
            <div className="AboutUs">
            <body className="body">
            
                <section id="hero" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                                <h1>Credit Score</h1>
                                <h2>Making financial loan process faster and simpler </h2>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img" >
                                <img src={hero} className="img-fluid animated" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <div id="main">
                    {/* About us */}
                    <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                        <h2>About Us</h2>
                        </div>

                        <div className="row content">
                        <div className="col-lg-6">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                            <ul>
                            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                            <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <a href="#" className="btn-learn-more">Learn More</a>
                        </div>
                        </div>

                    </div>
                    </section>
                    {/* End About Us */}

                    {/* Why us */}
                    <section id="why-us" className="why-us section-bg">
                    <div className="container-fluid" data-aos="fade-up">

                        <div className="row">

                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                            <div className="content">
                            <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                            </div>

                            <div className="accordion-list">
                            <ul>
                                <li>
                                <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                    <p>
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                </div>
                                </li>

                                <li>
                                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="accordion-list-2" className="collapse show" data-bs-parent=".accordion-list">
                                    <p>
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                    </p>
                                </div>
                                </li>

                                <li>
                                <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                <div id="accordion-list-3" className="collapse show" data-bs-parent=".accordion-list">
                                    <p>
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                    </p>
                                </div>
                                </li>

                            </ul>
                            </div>

                        </div>
                        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: `url(${whyus})`}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        
                        </div>

                    </div>
                    </section>
                    {/* End Why us */}

                    {/* Apply ML */}
                    <section id="skills" className="skills">
                        <div className="container" data-aos="fade-up">

                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                                    <img src={skills} className="img-fluid" alt="" />
                                </div>

                                <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                                    <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                                    <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                    </p>

                                    <div className="skills-content">

                                    <div className="progress">
                                        <span className="skill">HTML <i className="val">100%</i></span>
                                        <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">CSS <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">JavaScript <i className="val">75%</i></span>
                                        <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">Photoshop <i className="val">55%</i></span>
                                        <div className="progress-bar-wrap">
                                        <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
                {/* End Apply ML */}
                    
                {/* Our team */}
                <section id="team" className="team section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                        <h2>Team</h2>
                        </div>

                        <div className="row">

                            <div className="col-lg-6">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                <div className="pic"><img src={duy} className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Duy Vo</h4>
                                    <span>Front-end Developer, Leader</span>
                                    <p>Index of A in [A,Y,D,N] is 0, but with Duy, it is 1.</p>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                                <div className="pic"><img src={huy} className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Huy Vu</h4>
                                    <span>Business </span>
                                    <p>hm ..............</p>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                                <div className="pic"><img src={minh} className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Minh Nguyen</h4>
                                    <span>Back-end Developer</span>
                                    <p>Nothing is too difficult to learn.</p>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div className="pic"><img src={thao} className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Thao Vu</h4>
                                    <span>Business</span>
                                    <p>Many people often get confusued about my age.</p>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div className="pic"><img src={dat} className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Dat Ngo</h4>
                                    <span>Data engineer</span>
                                    <p>I do not feel lonely because ML is my love.</p>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div className="pic"><img src={hung} className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Hung Nguyen</h4>
                                    <span>Front-end Developer</span>
                                    <p>My friends say that I'm strong, not because I have six-pack, but cuz I often carry them.</p>
                                </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div className="pic"><img src={thien} className="img-fluid" alt=""/></div>
                                <div className="member-info">
                                    <h4>Thien Nguyen</h4>
                                    <span>Front-end Developer</span>
                                    <p>Make life a ride.</p>
                                </div>
                                </div>
                            </div>

                        

                        </div>

                    </div>
                </section>
                {/* End Our Team */}

                {/* Contact */}
                <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+1 5589 55488 55s</p>
                        </div>

                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6">
                            <label >Your Name</label>
                            <input type="text" name="name" className="form-control" id="name" required />
                            </div>
                            <div className="form-group col-md-6">
                            <label >Your Email</label>
                            <input type="email" className="form-control" name="email" id="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label >Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" required />
                        </div>
                        <div className="form-group">
                            <label >Message</label>
                            <textarea className="form-control" name="message" rows={10} required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                    </div>

                </div>
                </section>
                {/* Encontact */}

                {/* Footer */}
               
                <footer id="footer">

                    

                    <div className="footer-top">
                    <div className="container">
                        <div className="row">

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Arsha</h3>
                            <p>
                            A108 Adam Street <br/>
                            New York, NY 535022<br/>
                            United States <br/><br/>
                            <strong>Phone:</strong> +1 5589 55488 55<br/>
                            <strong>Email:</strong> info@example.com<br/>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                            <div className="social-links mt-3">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>

                    <div className="container footer-bottom clearfix">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
                    </div>
                    
                    </div>
                </footer>
                {/* End Footer */}
                

            </body>
        </div>
    )
}

export default AboutUs
