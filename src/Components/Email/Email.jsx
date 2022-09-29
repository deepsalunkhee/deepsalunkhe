import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Email() {
  return (

    
    <Form  action="https://formsubmit.co/eade1045b3ae50fb40dd58b4ec9613df" method='POST'>
        <h3>Contact</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" /> 
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type='text' placeholder="Message" name="message" />
      </Form.Group>
     
      <Button variant="primary" type="submit"  className='btn btn-warning'>
       Send
      </Button>
    </Form>
  );
}

export default Email;