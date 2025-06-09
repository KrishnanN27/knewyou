import React from 'react';
import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime,faChartPie,faTruckFast,faUserClock,faHouseLaptop,faPhone} from "@fortawesome/free-solid-svg-icons";
import AboutImage from '../../assets/about/about_img.jpg';

export default function About() {
 //icons
 const faBusinessIcon=<FontAwesomeIcon icon={faBusinessTime}/>
 const faChartPieIcon=<FontAwesomeIcon icon={faChartPie}/>
 const faTruckFastIcon=<FontAwesomeIcon icon={faTruckFast}/>
 const faUserClockIcon=<FontAwesomeIcon icon={faUserClock}/>
 const faHouseLaptopcon=<FontAwesomeIcon icon={faHouseLaptop}/>
 const faPhoneIcon=<FontAwesomeIcon icon={faPhone}/>


  return (
   <>
   <section id="about">
        <div class="container">
                <div className="title_headling">
                        <h3>We Provides Shortage Remarkable Ideas!</h3>
                        <p>We craft innovative strategies to overcome shortages and drive success. Whether you're looking for fresh ideas or expert guidance, we've got you covered—because your business deserves the best!</p>
                </div>
                <div className="about_box_wrapper">
                        <div className="about_box">
                                <div className="about_icon">
                                        {faBusinessIcon}
                                </div>
                                <div className="about_content">
                                        <h5>Development</h5>
                                        <p>We create innovative and scalable solutions tailored to your business needs,ensuring seamless functionality and efficiency.</p>
                                </div>
                        </div>
                        <div className="about_box">
                                <div className="about_icon green_icon">
                                        {faChartPieIcon}
                                </div>
                                <div className="about_content">
                                        <h5>Integration</h5>
                                        <p>Effortlessly connect systems, tools, and technologies to streamline operations, enhance productivity, and drive growth.</p>
                                </div>
                        </div>
                        <div className="about_box">
                                <div className="about_icon blue_icon">
                                        {faTruckFastIcon}
                                </div>
                                <div className="about_content">
                                        <h5>Branding</h5>
                                        <p>Build a powerful brand identity with strategic positioning, compelling visuals, and impactful messaging that leaves a lasting impression</p>
                                </div>
                        </div>
                </div>

                <div className="about_box_details">
                        <div className="about_col">
                                <div className="about_image">
                                        <img src={AboutImage} alt="about"/>
                                </div>
                                <div className="img_info_box">
                                        <h6 className="img_info_title">GET A PRICE QUOTE TODAY!</h6>
                                        <p>Receive a transparent and tailored pricing estimate that fits your needs. No delays, no hidden fees—just a straightforward quote to help you make informed decisions.</p>
                                        <a href="/">{faPhoneIcon}<span>
                                                +91-6206710113</span></a>
                                </div>
                        </div>

                        <div className="about_col more_space">
                                <h3>We have business skills that will icrease your earnings</h3>
                                <p>We provide strategic insights and innovative solutions to help you scale your business, optimize operations, and boost profitability. With the right skills and smart execution, financial growth is within your reach!</p>

                                <div className="grid_info">
                                        <div className="icon">{faUserClockIcon}</div>
                                        <div className="detail">
                                                <h4>Start Your own business in minutes</h4>
                                                <p>Starting your own business has never been easier! With expert guidance, strategic planning, and innovative solutions, you can set up, scale, and grow your venture effortlessly. Your success starts today</p>
                                        </div>
                                </div>

                                
                                <div className="grid_info">
                                        <div className="icon green_icon">{faHouseLaptopcon}</div>
                                        <div className="detail">
                                                <h4>Open a business account online</h4>
                                                <p>Set up your business banking in minutes with a seamless online process. Manage finances efficiently, access key services, and unlock growth opportunities—all from the comfort of your device!</p>
                                        </div>
                                </div>
                        </div>
                </div>

        </div>
   </section>
   </>
  )
}
