"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const data = signIn("credentials", body);
      // console.log(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      onSubmit={handleSubmit(onSubmit)}
      className=" grid h-[calc(100vh_-_60px)] place-items-center"
    >
      <form className="flex flex-col justify-center gap-4 min-w-[350px]">
        <h1 className="text-2xl text-center font-semibold">로그인</h1>
        <Input
          id="email"
          label="이메일"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="비밀번호"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Button label="로그인" />
        <div className=" text-end">
          <p className=" text-gray-400">
            아직 계정이 없으신가요?{" "}
            <Link
              href="/auth/register"
              className=" text-black underline hover:text-greenAurora"
            >
              회원가입
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
