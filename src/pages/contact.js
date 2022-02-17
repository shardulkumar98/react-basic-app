import React from "react";
import Navbar from "components/navbar";
import Footer from "components/footer";
import { Div, P, Form, Input, TextArea, Button } from "styles/pages/contact";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Navbar />
      <Div>
        <P>Contact Us</P>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" {...register("name")} placeholder="Full Name" />
          <Input type="text" {...register("mob")} placeholder="Mobile Number" />
          <Input type="number" {...register("age")} placeholder="Age" />
          <Input type="text" {...register("location")} placeholder="Location" />
          <TextArea
            name=""
            id=""
            cols="30"
            rows="10"
            {...register("desc")}
            placeholder="Description"
          ></TextArea>
          <Button type="submit">Send</Button>
        </Form>
      </Div>
      <Footer />
    </>
  );
};
export default Contact;
