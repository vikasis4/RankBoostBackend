import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "./secondsection.css";
import s1 from "./s1.jpg"
import s2 from "./s2.jpg"
import s3 from "./s3.jpg"
import s4 from "./s4.jpg"
import s5 from "./s5.jpg"
import s6 from "./s6.jpg"
import s7 from "./s7.jpg"
import s8 from "./s8.jpg"
import pricem from '../../svg/pricem.svg'
import secretm from '../../svg/secretm.svg'
import trophym from '../../svg/trophym.svg'
import physics from '../../svg/physics.svg'
import chemistry from '../../svg/chemistry.svg'
import maths from '../../svg/maths.svg'
import road from '../../svg/road.svg'
import mains from '../../svg/mains.svg'
import advances from '../../svg/advance.svg'
import anxiety from '../../svg/anxiety.svg'
import solutions from '../../svg/solutions.svg'
import depression from '../../svg/depression.svg'
import refers from './refers.jpg'



const SecondSection = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="secondsection-main">

                <div className="secondsection-main-third-in deactivate-dis">
                    <div className="secondsection-main-third-in-one">
                        <div>
                            <span>
                                600</span><span>+</span>
                        </div>
                        <h1>jee mains</h1>
                    </div>
                    <div className="secondsection-main-third-in-two">
                        <div>
                            <span>200</span><span>+</span>
                        </div>
                        <h1>jee advance</h1>
                    </div>
                    <div className="secondsection-main-third-in-three">
                        <div>
                            <span>2200</span><span>+</span>
                        </div>
                        <h1>students guided</h1>
                    </div>
                </div>
                <div className="secondsec-refral deactivate-dis">
                    <h1>Earn &#8377; 50 per referral</h1>
                    <span>Refer to your friends and when they will purchase the course, you will get 50rs for each refral</span><button onClick={() => { navigate('/refral') }}>Invite now</button>
                </div>
                <div className="activate-dis">
                <div className="secondsec-refral-mobile activate-dis">
                    <div className="secondsec-refral-img">
                        <img src={refers}></img>
                    </div>
                    <div className="secondsec-refral-txt">
                    <h1>Earn &#8377; 50 per referral</h1>
                    <h2>Refer to your friends and when they will purchase the course, you will get 50rs for each refral</h2>
                    <button onClick={() => { navigate('/refral') }}>Invite now</button>
                    </div>
                </div>
                </div>

                <div className="secondsection-reason">
                    <div className="reason reason1">
                        <img src={pricem}></img>
                        <h1>Lowest price <br />
                            <span>&#8377; 699</span><br />
                            Value for money
                        </h1>
                    </div>
                    <div className="reason reason2">
                        <img src={secretm}></img>
                        <h1>Secret to <br />
                            crack
                            JEE
                        </h1>
                    </div>
                    <div className="reason reason3">
                        <img src={trophym}></img>
                        <h1>Zero <br />to <br />
                            Hero
                            strategy
                        </h1>
                    </div>
                    <div className="reason reason4">
                        <img src={physics}></img>
                        <h1>Physics <br />
                            approach
                        </h1>
                    </div>
                    <div className="reason reason5">
                        <img src={chemistry}></img>
                        <h1>Chemistry <br />
                            approach
                        </h1>
                    </div>
                    <div className="reason reason6">
                        <img src={maths}></img>
                        <h1>Maths <br />
                            approach
                        </h1>
                    </div>
                    <div className="reason reason7">
                        <img src={road}></img>
                        <h1>Proper roadmap <br />

                        </h1>
                    </div>
                    <div className="reason reason8">
                        <img src={mains}></img>
                        <h1>Mains <br />
                            Strategy
                        </h1>
                    </div>
                    <div className="reason reason9">
                        <img src={advances}></img>
                        <h1>Advance <br />
                            Strategy
                        </h1>
                    </div>
                    <div className="reason reason10">
                        <img src={anxiety}></img>
                        <h1>Heal  <br />
                            Anxiety
                        </h1>
                    </div>
                    <div className="reason reason11">
                        <img src={depression}></img>
                        <h1>Heal  <br />
                            Depression
                        </h1>
                    </div>
                    <div className="reason reason12">
                        <img src={solutions}></img>
                        <h1>Solve
                            all<br />
                            comman problems
                        </h1>
                    </div>
                </div>

                <div className="secondsection-main-bottom">
                    <div className="secondsec-2">
                        <div className="secondsec-card">
                            <div className="secondsec-img-cont">
                                <img style={{ height: '16rem', width: '16rem' }} src={s1}></img>
                            </div>
                            <div className="secondsec-txtom">
                                <h1>rishab kumar</h1>
                                <h5 >iit kanpur</h5>
                            </div>
                        </div>
                        <div className="secondsec-card">
                            <div className="secondsec-img-cont">
                                <img style={{ height: '16rem', width: '16rem' }} src={s2}></img>
                            </div>
                            <div className="secondsec-txtom">
                                <h1>rishab prajapati</h1>
                                <h5>iit hyd</h5>
                            </div>
                        </div>
                        <div className="secondsec-card">
                            <div className="secondsec-img-cont">
                                <img style={{ height: '16rem', width: '16rem' }} src={s3}></img>
                            </div>
                            <div className="secondsec-txtom">
                                <h1>rahul kashyuap</h1>
                                <h5>nit rour</h5>
                            </div>
                        </div>
                        <div className="secondsec-card">
                            <div className="secondsec-img-cont">
                                <img style={{ height: '16rem', width: '16rem' }} src={s4}></img>
                            </div>
                            <div className="secondsec-txtom">
                                <h1>sandeep kumar</h1>
                                <h5>iit kanpur</h5>
                            </div>
                        </div>
                        <div className="secondsec-card">
                            <div className="secondsec-img-cont">
                                <img style={{ height: '16rem', width: '16rem' }} src={s5}></img>
                            </div>
                            <div className="secondsec-txtom">
                                <h1>akansha singh</h1>
                                <h5>iit bhu</h5>
                            </div>
                        </div>
                        <div className="secondsec-card">
                            <div className="secondsec-img-cont">
                                <img style={{ height: '16rem', width: '16rem' }} src={s6}></img>
                            </div>
                            <div className="secondsec-txtom">
                                <h1>anjali rathore</h1>
                                <h5 >iit kanpur</h5>
                            </div>
                        </div>
                        <div className="secondsec-card">
                            <div className="secondsec-img-cont">
                                <img style={{ height: '16rem', width: '16rem' }} src={s7}></img>
                            </div>
                            <div className="secondsec-txtom">
                                <h1>a saicharan</h1>
                                <h5>iit kanpur</h5>
                            </div>
                        </div>
                        <div className="secondsec-card">
                            <div className="secondsec-img-cont">
                                <img style={{ height: '16rem', width: '16rem' }} src={s8}></img>
                            </div>
                            <div className="secondsec-txtom">
                                <h1>aryan meena</h1>
                                <h5>iit bhu</h5>
                            </div>
                        </div>
                        <h1 className="deactivate-dis" style={{ fontFamily: "Dosis" }}>And many more...</h1>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SecondSection;