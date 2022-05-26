import { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { createUser } from '../../firebase-service';

const UserDataForm = (props: any) => {
  const [validated, setValidated] = useState(false);

  const submitFormHandler = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as any;
    if (form.checkValidity()) {
      const isUserAdded = await createUser({
        id: form.nameId.value,
        email: form.emailInput.value,
        name: form.nameInput.value,
      });
      if (isUserAdded) {
        toast.success('User created successfuly');
        resetForm(form);
      } else {
        toast.error('User ID already exists');
      }
    } else {
      
      setValidated(true);
    }
  };

  const resetForm = (form: any) => {
    form.nameId.value = '';
    form.emailInput.value = '';
    form.nameInput.value = '';
    setValidated(false);
  };

  return (
    <Form noValidate validated={validated} onSubmit={submitFormHandler}>
      <Form.Group className="mb-3 position-relative" controlId="nameId">
        <Form.Label>ID</Form.Label>
        <Form.Control required type="number" />
        <Form.Control.Feedback type="invalid" tooltip>
          Please provide this field
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 position-relative" controlId="emailInput">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="name@example.com" />
        <Form.Control.Feedback type="invalid" tooltip>
          Please provide a valid email. with '@' included
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 position-relative" controlId="nameInput">
        <Form.Label>Full Name</Form.Label>
        <Form.Control required type="text" />
        <Form.Control.Feedback type="invalid" tooltip>
          Please provide this field
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserDataForm;
