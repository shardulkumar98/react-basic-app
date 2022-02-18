import React, { useState } from "react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import { Div, P, Form, Input, TextArea, Button } from "styles/pages/contact";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const formData = (data) => {
    setData(data);
  };

  return (
    <>
      <Navbar />
      <Div>
        <P>Contact Us</P>
        <Form onSubmit={handleSubmit(formData)}>
          <Input type="text" {...register("Name")} placeholder="Full Name" />
          <Input
            type="number"
            {...register("Mobile Number")}
            placeholder="Mobile Number"
            maxLength={"10"}
          />
          <Input type="number" {...register("Age")} placeholder="Age" />
          <Input type="text" {...register("Location")} placeholder="Location" />
          <TextArea
            name=""
            id=""
            cols="30"
            rows="10"
            {...register("Description")}
            placeholder="Description"
          ></TextArea>
          <Button type="submit">Send</Button>
        </Form>
        <p>{JSON.stringify(data)}</p>
      </Div>
      <Footer />
    </>
  );
};
export default Contact;
