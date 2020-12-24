import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import "./login.css";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>

      <div className="container-forgot-password d-flex justify-content-center align-items-center">
        <div class="wrapper-forgot-password">
          <Card className="css-shadow">
            <Card.Body>
              <h2 className="text-center mb-4">איפוס סיסמה</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
              <Form.Label>אמייל</Form.Label>
                <Form.Group id="email" className="input-group mb-4">
                <span class="input-group-addon"><i class="im im-icon-Male"></i></span>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <div className="d-flex justify-content-center mb-4 mt-4">
                <Button disabled={loading} className="submit" type="submit">
איפוס סיסמה                </Button>
</div>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login" className="linka">הרשמה</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            צריכים חשבון <Link to="/signup" className="linka">הרשמה</Link>
          </div>
        </div>
      </div>
      <script> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
   </script> 
    </>
  );
}
