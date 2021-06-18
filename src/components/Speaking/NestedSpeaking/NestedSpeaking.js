import React from 'react';
import './NestedSpeaking.css';
import $ from 'jquery';

function NestedSpeaking(props) {
    const fancyboxFunc = () => {
        $('.nestedSpeaking .fancyboxWrap').fadeIn();
        $('body').css({'overflow': 'hidden'});
    }
    const closeFunc = () => {
        $('.nestedSpeaking .fancyboxWrap').fadeOut();
        $('body').css({'overflow': 'auto'});
    }
    
    return (
        <div className="nestedSpeaking">
            <section className="nestedSpeakingSection">
                <div className="container">
                    <div className="title">
                        <p>CELT English A1</p>
                    </div>
                    <div className="col">
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                        <div className="childCol">
                            <p>A Unit 1A <i className="fas fa-ellipsis-v" onClick={fancyboxFunc}></i></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="fancyboxWrap">
                <div className="fancyboxChild">
                    <p className="title">Speakings</p>
                    <div className="col">
                        <div className="unitTitle">
                            <p>Title:</p>
                            <p>A1 Unit 1A</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="questionsTitle">
                            <p>Questions:</p>
                            <p>Talk about your neighborhood and your neighbors</p>
                        </div>
                    </div>
                    <div className="col">
                        <ul>
                            <li>Is your neighborhood nice?</li>
                            <li>Is your neighborhood nice?</li>
                            <li>Is your neighborhood nice?</li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="recordWrap">
                            <select>
                                <option>Record</option>
                            </select>
                            <i className="fas fa-microphone"></i>
                        </div>
                    </div>
                    <div className="col">
                        <audio controls>
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    <div className="col">
                        <div className="btnWrap">
                            <button onClick={closeFunc}>CLOSE</button>
                            <button>DELETE RECORDING</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NestedSpeaking;