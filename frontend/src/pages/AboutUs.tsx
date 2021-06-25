import { Box } from '@chakra-ui/layout'
import {Input, Flex, Heading} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
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
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';


function AboutUs() {
    
    const [showFirstElement, setShowFirstElement] = useState(false);
    const [showSecondElement, setShowSecondElement] = useState(false);
    const [showThirdElement, setShowThirdElement] = useState(false);
    const [setActive1, setActiveState1 ] = useState("");
    const [rotate1, setRotate1 ] = useState("arrow-icon");
    const [setActive2, setActiveState2 ] = useState("");
    const [rotate2, setRotate2 ] = useState("arrow-icon");
    const [setActive3, setActiveState3 ] = useState("");
    const [rotate3, setRotate3 ] = useState("arrow-icon");

    const toggleFirstElement = () => {
        setShowFirstElement(!showFirstElement);
        setActiveState1(setActive1 === "" ? "active1" : "");
        setRotate1(setActive1 === "active1" ? "arrow-icon" : "arrow-icon rotate");
    }
    const toggleSecondElement = () => {
        setShowSecondElement(!showSecondElement);
        setActiveState2(setActive2 === "" ? "active2" : "");
        setRotate2(setActive2 === "active2" ? "arrow-icon" : "arrow-icon rotate");
    }
    const toggleThirdElement = () => {
        setShowThirdElement(!showThirdElement);
        setActiveState3(setActive3 === "" ? "active3" : "");
        setRotate3(setActive3 === "active3" ? "arrow-icon" : "arrow-icon rotate");
    }

    // if (showFirstElement){
    //     return <i className="bx bx-chevron-down icon-show"></i>
    // } else return <i className="bx bx-chevron-up icon-close"></i>

    return (
            <div className="AboutUs">
            <body className="body">
            
                <section id="hero" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                                <h1>Credit Score</h1>
                                <h2>FREE and easy way to check your credit score.</h2>
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
                            <p>Our website is a free and fast way for checking credit score. And we'll point out what are the factors that affect your score. About security and privacy:
                            </p>
                            <br />
                            <ul>
                            <li><i className="ri-check-double-line"></i>+ We'll notify you if your SSN is found on other websites.</li>
                            <li><i className="ri-check-double-line"></i>+ Our customer infomation is never sold to third parties.</li>
                            <li><i className="ri-check-double-line"></i>+ 128-bit encryption for data protection.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                            Lenders use credit scores to decide how likely it is you will repay your debts on time. Consequently, knowing what is your credit scores and what affects them can help you when you're getting ready to apply for new credit.
                            
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
                            <h3><strong>Frequently asked questions.</strong></h3>
                            <br />
                            </div>

                            <div className="accordion-list">
                            <ul>
                                <li>
                                <a onClick={toggleFirstElement} className={`first ques ${setActive1}`} ><span >01</span> What affect your credit score ?<i className={`bx bx-chevron-down icon-close ${rotate1}`}></i></a>
                                <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                    <MDBCollapse show={showFirstElement}>
                                        There are serveral common factors that affect your credit score which are payment history, credit usage, length of credit history, recent activity and types of account.
                                    </MDBCollapse>
                                </div>
                                </li>

                                <li>
                                <a onClick={toggleSecondElement} className={`second ques ${setActive2}`} ><span>02</span> Why you need a good creadit score ? <i className={`bx bx-chevron-down icon-close ${rotate2}`}></i></a>
                                <div id="accordion-list-2" className="collapse show" data-bs-parent=".accordion-list">
                                    <MDBCollapse show={showSecondElement}>
                                    In general, having good credit can make achieving your financial and personal goals easier. It could be the difference between qualifying or being denied for an important loan. Therefore, credit scores are a tool that lenders use to make lending decisions.
                                    </MDBCollapse>
                                </div>
                                </li>

                                <li>
                                <a onClick={toggleThirdElement} className={`third ques ${setActive3}`} ><span>03</span> How to improve your credit score ? <i className={`bx bx-chevron-down icon-close ${rotate3}`}></i></a>
                                <div id="accordion-list-3" className="collapse show" data-bs-parent=".accordion-list">
                                    <MDBCollapse show={showThirdElement}>
                                    To improve your credit scores, focus on the underlying factors that affect your scores. At a high level, the basic steps you need to take are fairly straightforward. Specifically, make at least your minimum payment and make all debt payments on time, since even a single late payment can hurt your credit scores and it'll stay on your credit report for up to seven years.
                                    </MDBCollapse>
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
                                    <h3>Technology</h3>
                                    <p className="fst-italic">
                                    Our model based on 5 main factors that affect customer's credit score. From that point, we ensure that our result get the highest accuracy.
                                    </p>

                                    <div className="skills-content">

                                    <div className="progress">
                                        <span className="skill">Payment History <i className="val">35%</i></span>
                                        <div className="progress-bar-wrap">
                                        <div className="progress-bar1" role="progressbar" ></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">Amount Owned <i className="val">30%</i></span>
                                        <div className="progress-bar-wrap">
                                        <div className="progress-bar2" role="progressbar" ></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">Credit History <i className="val">15%</i></span>
                                        <div className="progress-bar-wrap">
                                        <div className="progress-bar3" role="progressbar"></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">Credit Mix <i className="val">10%</i></span>
                                        <div className="progress-bar-wrap">
                                        <div className="progress-bar4" role="progressbar" ></div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">New Credit <i className="val">10%</i></span>
                                        <div className="progress-bar-wrap">
                                        <div className="progress-bar5" role="progressbar"></div>
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
                        <h2 style={{color:"#196b69"}}>Team</h2>
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
                                    <h4>Duy Vu</h4>
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
                    <h2 style={{color:"#196b69"}}>Contact</h2>
                    </div>

                    <div className="row">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>702 Nguyen Van Linh Street, Ho Chi Minh city, Viet Nam.</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+84 935353535</p>
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
                            <h3>RMIT</h3>
                            <p>
                            702 Nguyen Van Linh Street <br/>
                            Ho Chi Minh city,<br/>
                            Viet Nam. <br/><br/>
                            <strong>Phone:</strong> +84 935353535<br/>
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
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Mobile Development</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Data Analytics</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Machine Learning</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Cloud & Security</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4 style={{color:"white"}}>Our Social Networks</h4>
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


                </footer>
                {/* End Footer */}
                

            </body>
        </div>
    )
}

export default AboutUs
