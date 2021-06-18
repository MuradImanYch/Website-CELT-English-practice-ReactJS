import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './Speaking.css';
import $ from 'jquery';

import NestedSpeaking from './NestedSpeaking/NestedSpeaking.js';

function Speaking() {

    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/speaking/main" component={SpeakingMain} />
                <Route path="/speaking/nested" component={NestedSpeaking} />
            </Switch>
            </BrowserRouter>
        </div>
    )
} 

export default Speaking;

function SpeakingMain(props) {

    return (
        <div className="speakings">
            <section className="speakingsSection">
                <div className="container">
                    <div className="title">Speakings</div>
                    <div className="col">
                        <div className="childElem">
                            <div className="elemImg">
                                <p>General English</p>
                            </div>
                            <Link to="/speaking/nested" className="childElemTitle">CELT English A1</Link>
                        </div>
                        <div className="childElem">
                            <div className="elemImg">
                                <p>General English</p>
                            </div>
                            <Link to="/speaking/nested" className="childElemTitle">CELT English A1</Link>
                        </div>
                        <div className="childElem">
                            <div className="elemImg">
                                <p>General English</p>
                            </div>
                            <Link to="/speaking/nested" className="childElemTitle">CELT English A1</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="childElem">
                            <div className="elemImg">
                                <p>General English</p>
                            </div>
                            <Link to="/speaking/nested" className="childElemTitle">CELT English A1</Link>
                        </div>
                        <div className="childElem">
                            <div className="elemImg">
                                <p>General English</p>
                            </div>
                            <Link to="/speaking/nested" className="childElemTitle">CELT English A1</Link>
                        </div>
                        <div className="childElem">
                            <div className="elemImg">
                                <p>General English</p>
                            </div>
                            <Link to="/speaking/nested" className="childElemTitle">CELT English A1</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="childElem">
                            <div className="elemImg ielts">
                                <p>General English</p>
                            </div>
                            <Link to="/speaking/nested" className="childElemTitle">CELT English A1</Link>
                        </div>
                        <div className="childElem sat">
                            <div className="elemImg">
                                <p>General English</p>
                            </div>
                            <Link to="/speaking/nested" className="childElemTitle">CELT English A1</Link>
                        </div>
                        <div className="childElem sat">
                            <div className="elemImg">
                                <p>General English</p>
                            </div>
                            <Link to="/speaking/nested" className="childElemTitle">CELT English A1</Link>
                        </div>
                    </div>
                    </div>            
            </section>
        </div>
    );
}