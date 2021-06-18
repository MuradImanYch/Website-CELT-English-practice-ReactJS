import React, {useState} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import './Home.css';
import $ from 'jquery';

function Home(props) {
    const[viewAll1Toggle, setViewAll1Toggle] = useState(false); // view all 1 toggle hooks
    const viewAll1ToggleFunc = () => {
        setViewAll1Toggle(!viewAll1Toggle);
        if(!viewAll1Toggle) {
            $('.colChildWrapElem').eq(0).animate({'height': '200px'});
        }
        else {
            $('.colChildWrapElem').eq(0).animate({'height': '100px'});
        }
    }

    const[viewAll2Toggle, setViewAll2Toggle] = useState(false); // view all 2 toggle hooks
    const viewAll2ToggleFunc = () => {
        setViewAll2Toggle(!viewAll2Toggle);
        if(!viewAll2Toggle) {
            $('.colChildWrapElem').eq(1).animate({'height': '200px'});
        }
        else {
            $('.colChildWrapElem').eq(1).animate({'height': '100px'});
        }
    }

    const[viewAll3Toggle, setViewAll3Toggle] = useState(false); // view all 3 toggle hooks
    const viewAll3ToggleFunc = () => {
        setViewAll3Toggle(!viewAll3Toggle);
        if(!viewAll3Toggle) {
            $('.colChildWrapElem').eq(2).animate({'height': '300px'});
        }
        else {
            $('.colChildWrapElem').eq(2).animate({'height': '100px'});
        }
    }

    return (
        <div>
            <BrowserRouter>
            {/*------Section1------*/}
            <section className="section1">
                <div className="col">
                    <div className="colChildWrap">
                        <h4 className="title">HomeWork TODO</h4>
                        <div className="colChildWrapElem">
                            <div className="hw1">
                                <Link  to="#" className="elemLink">HW U4 L3</Link>
                                <p className="elemChild">CELT English A2</p>
                            </div>
                            <div className="hw2">
                                <Link  to="#" className="elemLink">HW U2 L3</Link>
                                <p className="elemChild">CELT English A2</p>
                            </div>
                            <div className="hw1">
                                <Link  to="#" className="elemLink">HW U4 L3</Link>
                                <p className="elemChild">CELT English A2</p>
                            </div>
                            <div className="hw2">
                                <Link  to="#" className="elemLink">HW U4 L3</Link>
                                <p className="elemChild">CELT English A2</p>
                            </div>
                        </div>
                        <p className="viewAllBtn" onClick={viewAll1ToggleFunc}>View All</p>
                    </div>
                    <div className="colChildWrap">
                    <h4 className="title">Essay Reviews</h4>
                        <div className="colChildWrapElem">
                            <div className="essaysCol">
                                <input type="checkbox" id="essay1Cb" name="essay1Cb" /><label htmlFor="essay1Cb">B1 UNIT 3A</label>
                            </div>
                            <div className="essaysCol">
                                <input type="checkbox" id="essay2Cb" name="essay2Cb" /><label htmlFor="essay2Cb">B1 + UNIT 1A</label>
                            </div>
                            <div className="essaysCol">
                                <input type="checkbox" id="essay2Cb" name="essay2Cb" /><label htmlFor="essay2Cb">B1 + UNIT 1A</label>
                            </div>
                            <div className="essaysCol">
                                <input type="checkbox" id="essay2Cb" name="essay2Cb" /><label htmlFor="essay2Cb">B1 + UNIT 1A</label>
                            </div>
                        </div>
                        <p className="viewAllBtn" onClick={viewAll2ToggleFunc}>View All</p>
                    </div>
                    <div className="colChildWrap">
                    <h4 className="title">Speaking Reviews</h4>
                        <div className="colChildWrapElem">
                            <div className="speakingsCol">
                                <div className="userImg">MI</div> <span className="speakingUnits">B2 UNIT 4A</span>
                            </div>
                            <div className="speakingsCol">
                                <div className="userImg">MI</div> <span className="speakingUnits">B2 UNIT 9B</span>
                            </div>
                            <div className="speakingsCol">
                                <div className="userImg">MI</div> <span className="speakingUnits">B2 UNIT 10B</span>
                            </div>
                            <div className="speakingsCol"> {/*---Bu göstərmir nəsə----((...*/}
                                <div className="userImg">MI</div> <span className="speakingUnits">B2 End Of Course</span>
                            </div>
                        </div>
                        <p className="viewAllBtn" onClick={viewAll3ToggleFunc}>View All</p>
                    </div>
                </div>
            </section>

            {/*-------Section2------*/}
            <section className="section2">
                <div className="col">
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-calendar"></i></div>
                        <button className="btn">My Check-In</button>
                    </div>
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-university"></i></div>
                        <button className="btn">Take an Exam</button>
                    </div>
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-poll"></i></div>
                        <button className="btn">Exam Results</button>
                    </div>
                </div>
                <div className="col">
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-book-open"></i></div>
                        <button className="btn">Classes</button>
                    </div>
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-university"></i></div>
                        <button className="btn">Home Work</button>
                    </div>
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-edit"></i></div>
                        <button className="btn">HW Result</button>
                    </div>
                </div>
                <div className="col">
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-file-pdf"></i></div>
                        <button className="btn">Resources</button>
                    </div>
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-microphone"></i></div>
                        <button className="btn">Speakings</button>
                    </div>
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-star"></i></div>
                        <button className="btn">Speaking Reviews</button>
                    </div>
                </div>
                <div className="col">
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-headphones"></i></div>
                        <button className="btn">Listings</button>
                    </div>
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-file-pdf"></i></div>
                        <button className="btn">Essays</button>
                    </div>
                    <div className="colChildWrap">
                        <div className="icoDiv"><i className="fas fa-star"></i></div>
                        <button className="btn">Essay Reviews</button>
                    </div>
                </div>
            </section>
            </BrowserRouter>
        </div>
    );
}

export default Home;