import React from "react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import { Div, P, Form, Input, TextArea, Button } from "styles/pages/contact";
const Contact = () => (
  <>
    <Navbar />

    <Div>
      <P>Contact Us</P>
      <Form>
        <Input type="text" placeholder="Full Name" required />
        <Input
          type="text"
          placeholder="Mobile Number"
          maxLength="10"
          required
        />
        <Input type="number" placeholder="Age" required />
        <Input type="text" placeholder="Location" required />
        <TextArea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          maxLength="999"
          required
        ></TextArea>
        <Button type="submit">Send</Button>
      </Form>
    </Div>
    <Footer />
  </>
);
export default Contact;
