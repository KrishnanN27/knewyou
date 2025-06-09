import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode,faChartBar,faCopy,faMarker,faUserGear,faCoins } from "@fortawesome/free-solid-svg-icons";

export default function Services() {

        const faLaptopCodeIcon=<FontAwesomeIcon icon={faLaptopCode}/>
        const faChartBarIcon=<FontAwesomeIcon icon={faChartBar}/>
        const faCopyIcon=<FontAwesomeIcon icon={faCopy}/>
        const faMarkerIcon=<FontAwesomeIcon icon={faMarker}/>
        const faUserGearIcon=<FontAwesomeIcon icon={faUserGear}/>
        const faCoinsIcon=<FontAwesomeIcon icon={faCoins}/>
  return (
   <>
    <div id="services">
        <div className="container">
                <div className="title_headling">
                        <h3> What's Services We  are offering to Our Customers.</h3>
                        <p>From strategic planning to branding and seamless integration, we provide expert services to help businesses thrive and grow.</p>
                </div>
                <div className="service_wrapper">
                        <div className="service_box">
                                <div className="service_icon blue_icon">{faLaptopCodeIcon}
                                </div>
                                <h4 className="number">01</h4>
                                <div className="service_content">
                                        <h5>Cloud Computing</h5>
                                        <p>Leverage secure, scalable, and efficient cloud infrastructure to streamline operations, enhance accessibility, and optimize performance. From data storage to seamless integration, our cloud solutions ensure flexibility and reliability for your growing business.</p>
                                        <a href="/" className="read">Read more</a>
                                </div>
                        </div>

                        <div className="service_box">
                                <div className="service_icon ">{faChartBarIcon}
                                </div>
                                <h4 className="number">02</h4>
                                <div className="service_content">
                                        <h5>Business Strategy </h5>
                                        <p>Unlock growth opportunities with data-driven strategies tailored to your goals. From market analysis to competitive positioning, we provide actionable insights to help your business thrive and stay ahead of the competition which is very innovative.</p>
                                        <a href="/" className="read">Read more</a>
                                </div>
                        </div>

                        <div className="service_box">
                                <div className="service_icon green_icon">{faCopyIcon}
                                </div>
                                <h4 className="number">03</h4>
                                <div className="service_content">
                                        <h5>Reports Analysis</h5>
                                        <p>Unlock the power of data-driven decision-making with in-depth report analysis. From financial metrics to market trends, we provide clear, accurate, and insightful reports that help businesses optimize strategies and drive success.</p>
                                        <a href="/" className="read">Read more</a>
                                </div>
                        </div>

                        <div className="service_box">
                                <div className="service_icon ">{faMarkerIcon}
                                </div>
                                <h4 className="number">04</h4>
                                <div className="service_content">
                                        <h5>Decision Maker</h5>
                                        <p>Enhance your business strategy with precise decision-making frameworks backed by analytics, market insights, and expert guidance. We help you navigate challenges and make informed choices that drive growth and success.</p>
                                        <a href="/" className="read">Read more</a>
                                </div>
                        </div>

                        <div className="service_box">
                                <div className="service_icon green_icon">{faUserGearIcon}
                                </div>
                                <h4 className="number">05</h4>
                                <div className="service_content">
                                        <h5>Customer Oriented</h5>
                                        <p>We prioritize your customers' needs by crafting personalized strategies that enhance engagement, satisfaction, and loyalty. Our solutions ensure seamless experiences, driving long-term success for your business and will always with you.</p>
                                        <a href="/" className="read">Read more</a>
                                </div>
                        </div>

                        <div className="service_box">
                                <div className="service_icon blue_icon">{faCoinsIcon}
                                </div>
                                <h4 className="number">06</h4>
                                <div className="service_content">
                                        <h5>Solution Focused</h5>
                                        <p>We prioritize effective problem-solving and goal-oriented approaches to tackle business challenges. By focusing on innovative solutions, we help you achieve sustainable growth, operational efficiency, expert guidance  and long-term success.</p>
                                        <a href="/" className="read">Read more</a>
                                </div>
                        </div>
                </div>
        </div>
    </div>
   </>
  )
}
