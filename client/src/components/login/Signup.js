import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import axios from 'axios';
import firebase from 'firebase'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const { currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("):הסיסמאות לא תואמות")
    }
      debugger;
    try {
      let url = 'http://localhost:3004/api';
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      console.log(currentUser.uid);
      
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        return axios({
          method: 'post',
          url: url + '/createUser',
          data:{currentUser:currentUser}
      }).then(response => {
          console.log("gfg",response)
          return response.data
      }).catch(o => { console.log(o); });
        // ...
      }).catch(function(error) {
        // Handle error
      });
      history.push("/")
    } catch {
      setError("):לא הצלחנו לייצר בשבילך את החשבון")
    }

    setLoading(false)
  }

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center"
                 style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card className="css-shadow">
        <Card.Body>
          <h2 className="css-text text-center mb-4">הרשמה</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>אימייל</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>סיסמא</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>אימות סיסמא</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button variant="danger" disabled={loading} className="w-100" type="submit">
              הרשמה
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        יש לך כבר חשבון? <Link to="/login">התחברות</Link>
      </div>
    </div>  
    </Container>
    </>
  )
}