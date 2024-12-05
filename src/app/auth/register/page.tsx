"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (body) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/register", body);
      console.log(data);
      router.push("/auth/login");
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
        <h1 className="text-2xl text-center font-semibold">회원가입</h1>
        <Input
          id="email"
          label="이메일"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="name"
          label="이름"
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
        <Button label="회원가입" />
        <div className=" text-end">
          <p className=" text-gray-400">
            이미 계정이 있으신가요?{" "}
            <Link
              href="/auth/login"
              className=" text-black underline hover:text-greenAurora"
            >
              로그인하기
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
