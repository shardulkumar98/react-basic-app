import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import usePost from "hooks/usePost";

import {
  Container,
  Head,
  Input,
  Button,
  MainContatiner,
  Form,
  Para,
} from "styles/pages/signup";

const SignUp = () => {
  const { mutateAsync } = usePost();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const goToSignIn = () => {
    navigate("/login");
  };

  const navigate = useNavigate();

  const formData = async (data) => {
    console.log("here");
    try {
      const response = await mutateAsync({
        url: "http://localhost:3000/signup",
        payload: data,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // axios
    //   .post("http://localhost:3000/signup", {
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     gender: data.gender,
    //     address: data.address,
    //     password: data.password,
    //     confirmpassword: data.confirmpassword,
    //   })
    //   .then(function (response) {
    //     navigate("/dashboard");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <MainContatiner>
      <Container>
        <Head>Create An Account</Head>
        <Form onSubmit={handleSubmit(formData)}>
          <Input {...register("name")} placeholder="Name" type="text" />
          <Para>{errors.name?.message}</Para>
          <Input {...register("email")} placeholder="Email" type="email" />
          <Para>{errors.email?.message}</Para>
          <Input
            {...register("phone")}
            placeholder="Mobile Number"
            type="number"
          />
          <Para>{errors.phone?.message}</Para>
          <Input {...register("gender")} placeholder="Gender" type="text" />
          <Para>{errors.gender?.message}</Para>
          <Input {...register("address")} placeholder="Address" type="text" />
          <Para>{errors.address?.message}</Para>
          <Input
            {...register("password")}
            placeholder="password"
            type="password"
          />
          <Para>{errors.password?.message}</Para>
          <Input
            {...register("confirmpassword")}
            placeholder="Confirm Password"
            type="password"
          />
          <Para>{errors.confirmpassword?.message}</Para>
          <Button type="submit">SignUp</Button>
        </Form>
        <div onClick={goToSignIn}>Sign in</div>
      </Container>
    </MainContatiner>
  );
};
export default SignUp;
