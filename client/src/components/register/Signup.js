import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './login.css';

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  let flag=false;
  async function handleSubmit(e) {
    e.preventDefault()
//debugger;
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value);
      flag=true;
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }
  if(flag){

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
          <Form.Label>שם משתמש (אמייל)</Form.Label>
            <Form.Group id="email"  className="input-group">
              <span class="input-group-addon"><i class="im im-icon-Male"></i></span>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Label>סיסמה</Form.Label>
            <Form.Group id="password" className="input-group"> 
            <span class="input-group-addon"><i class="im im-icon-Lock-2"></i></span>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Label>אימות סיסמה</Form.Label>
            <Form.Group id="password-confirm" className="input-group">
            <span class="input-group-addon"><i class="im im-icon-Lock-2"></i></span>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <div className="d-flex justify-content-center mb-4 mt-4">
            <Button disabled={loading} className="submit" type="submit">
הרשמה            </Button>
</div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      כבר יש לך חשבון? <Link to="/login" className="linka">כניסה</Link>
      </div>
    </div>  
    </Container>
    <script> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
   </script> 
    </>
  )
}