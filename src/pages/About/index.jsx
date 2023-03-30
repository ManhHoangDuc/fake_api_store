import React from 'react';
import './index.scss';
import img1 from '../../../src/assets/about/1.jpg';
import img2 from '../../../src/assets/about/2.jpg';
import img3 from '../../../src/assets/about/3.jpg';

function About(props) {
    return (
        <div className="about">
            <div className="container">
                <div className="about__content">
                    <div className="about__container text-center">
                        <h1 className="about__title ">Quality, not quantity</h1>
                        <br />
                        <p className="about__slogan">
                            We have made quality our habit. It’s not something that we just strive for – we live by this
                            principle every day.
                        </p>
                    </div>
                    <div className="about__preview">
                        <div className="about__img">
                            <img src={img1} alt="img" />
                        </div>
                        <div className="about__img">
                            <img src={img2} alt="img2" />
                        </div>
                        <div className="about__img">
                            <img src={img3} alt="img3" />
                        </div>
                    </div>
                    <div className="about__container">
                        <p className=" about__letter">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Nullam non nisi est sit amet. Vel eros donec ac odio tempor. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Vitae ultricies leo integer malesuada nunc vel. Laoreet non curabitur gravida arcu. Dictum sit amet justo donec enim. Sed arcu non odio euismod lacinia at quis risus. Mauris rhoncus aenean vel elit scelerisque mauris. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Sem viverra aliquet eget sit amet tellus cras adipiscing. Aliquam etiam erat velit scelerisque in dictum non.
                        </p>
                        <p className="about__author">WITH LOVE, YOUR FRIEND</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
