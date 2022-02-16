import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  Head,
  Input,
  Button,
  MainContatiner,
  Form,
  Para,
} from "styles/login/login";

const schema = yup
  .object({
    Email: yup
      .string()
      .matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "enter valid email")
      .required("Email is mandatory"),
    Password: yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Uppercase, Lowecase, Special Character, Numeric"
      )
      .required("Password is mandatory"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MainContatiner>
      <Container>
        <Head>Log in your account</Head>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("Email")} placeholder="Email" />
          <Para>{errors.Email?.message}</Para>
          <Input {...register("Password")} placeholder="Password" />
          <Para>{errors.Password?.message}</Para>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </MainContatiner>
  );
};
export default Login;
