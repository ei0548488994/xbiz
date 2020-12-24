import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import './login.css';
//import firebase from "firebase";
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  /*let uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };*/
  
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <Container className="d-flex align-items-center justify-content-center"
               style={{ minHeight: "100vh" }}>
    <div className="w-100" 
         style={{ maxWidth: "400px" }}>
      <Card className="css-shadow">
        <Card.Body>
          <h2 className="css-text text-center mb-4">כניסה</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Label>אמייל</Form.Label>
            <Form.Group id="email" className="input-group">
              <span class="input-group-addon"><i class="im im-icon-Male"></i></span>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Label>סיסמה</Form.Label>
            <Form.Group id="password" className="input-group">
            <span class="input-group-addon"><i class="im im-icon-Lock-2"></i></span>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <div className="d-flex justify-content-end">
            <Button disabled={loading} className="submit" type="submit">
כניסה            </Button></div>
            {/*<br/>
            <StyledFirebaseAuth 
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            type="submit"/>*/}
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password" className="linka">שכחת סיסמה?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4 text">
        צריכים חשבון? <Link to="/signup" className="linka">הרשמה</Link>
      </div>
    </div> 
    </Container>
    <script> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
   </script> </>
  )
}