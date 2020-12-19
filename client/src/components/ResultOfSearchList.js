import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import ResultSearckListFirst from './ResultSearckListFirst';
import ResoltSearckListSecond from './ResultSearckListSecond'
function ResultOfSearchList(props) {
    const [whatToShow, setWhatToShow] = useState(1)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-6">
                        <div className="layout-switcher">
                            <a
                                className="grid" onClick={() => { setWhatToShow(1) }} ><i className="fa fa-th" /></a>
                            <a onClick={() => { setWhatToShow(0) }} ><i className="fa fa-align-justify" /></a>
                        </div>
                    </div>
                    {/* <ResultSearckListFirst/> */}
                    {/* <ResoltSearckListSecond/> */}
                    { whatToShow ? <ResultSearckListFirst /> : <ResoltSearckListSecond />}

                </div>
            </div>
        </>
    )
}
export default withRouter(ResultOfSearchList)
