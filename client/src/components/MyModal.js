import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import LogIn from './LogIn'
import Register from './Register'

export default function MyModal(props) {
    const [whatToShow, setWhatToShow] = useState('0')
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div id="sign-in-dialog" className="zoom-anim-dialog">
                        <div className="small-dialog-header">
                            <h3>כניסה</h3>
                        </div>
                        <div className="sign-in-form style-1">
                            <ul className="tabs-nav">
                                <li className><a href="#tab1" onClick={() => { setWhatToShow(!whatToShow) }}>כניסה</a></li>
                                <li><a href="#tab2" onClick={() => { setWhatToShow(!whatToShow) }} > הרשמה</a></li>
                            </ul>
                            {
                                whatToShow ? <LogIn /> : <Register />
                            }
                        </div>
                    </div>

                </Modal.Body>
                <Button onClick={props.onHide}>Close</Button>
            </Modal>

        </>
    )
}
