import React from 'react';
import './Results.css';
import $ from 'jquery';


function Results(props) {

    return (
        <div className="results">
            <section className="resultSection">
                <div className="container">
                    <h3>Exam Results</h3>
                    <div id="searchInpWrap">
                        <input type="text" placeholder="Search" />
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="table">
                         <div className="col">
                            <p>Name</p>
                            <p>Date</p>
                            <p>Result</p>
                            <p>Points</p>
                            <p>Classes</p>
                            <p>Time</p>
                            <p>ACTIONS</p>
                         </div>
                         <div className="col">
                            <p>B1 + END OF COURSE A</p>
                            <p>19/05/2021</p>
                            <p className="failed"><span>Failed</span></p>
                            <p>30</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                         <div className="col">
                            <p>A Unit 1A</p>
                            <p>19/05/2021</p>
                            <p className="passed"><span>Passed</span></p>
                            <p>100</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                         <div className="col">
                            <p>B1 + END OF COURSE A</p>
                            <p>19/05/2021</p>
                            <p className="failed"><span>Failed</span></p>
                            <p>30</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                         <div className="col">
                            <p>A Unit 1A</p>
                            <p>19/05/2021</p>
                            <p className="passed"><span>Passed</span></p>
                            <p>100</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                         <div className="col">
                            <p>B1 + END OF COURSE A</p>
                            <p>19/05/2021</p>
                            <p className="failed"><span>Failed</span></p>
                            <p>30</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                         <div className="col">
                            <p>A Unit 1A</p>
                            <p>19/05/2021</p>
                            <p className="passed"><span>Passed</span></p>
                            <p>100</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                         <div className="col">
                            <p>B1 + END OF COURSE A</p>
                            <p>19/05/2021</p>
                            <p className="failed"><span>Failed</span></p>
                            <p>30</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                         <div className="col">
                            <p>A Unit 1A</p>
                            <p>19/05/2021</p>
                            <p className="passed"><span>Passed</span></p>
                            <p>100</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                         <div className="col">
                            <p>B1 + END OF COURSE A</p>
                            <p>19/05/2021</p>
                            <p className="failed"><span>Failed</span></p>
                            <p>30</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                         <div className="col">
                            <p>A Unit 1A</p>
                            <p>19/05/2021</p>
                            <p className="passed"><span>Passed</span></p>
                            <p>100</p>
                            <p>CELT English B1+</p>
                            <p><span>6</span>min</p>
                            <p><i className="fas fa-eye"></i></p>
                         </div>
                    </div>
                    <div className="pagination">
                        <p>1 to 12 of 12</p><div className="btnWrap"><button><i className="fas fa-chevron-left"></i></button><div className="paginationNum">1</div><button><i className="fas fa-chevron-right"></i></button></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Results;