"use client";
import Button from "@/components/Button";
import { categories } from "@/components/categories/Categories";
import CategoryInput from "@/components/categories/CategoryInput";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ImageUpload from "@/components/ImageUpload";
// import ImageUpload from "@/components/ImageUpload";
import Input from "@/components/Input";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ProductUploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      latitude: 33.5563,
      longitude: 126.79581,
      imageSrc: "",
      price: 1,
    },
  });

  const imageSrc = watch("imageSrc");
  const category = watch("category");
  const latitude = watch("latitude");
  const longitude = watch("longitude");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value);
  };

  // 카카오맵 컴포넌트를 csr방식으로 불러옴
  const KakaoMap = dynamic(() => import("../../../components/KakaoMap"), {
    ssr: false,
  });

  //  상품 생성 버튼
  const onSubmit: SubmitHandler<FieldValues> = (data) => {};
  return (
    <Container>
      <div className=" max-w-screen-lg mx-auto">
        <form
          className=" flex flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading title="Product Upload" subtitle="upload your product" />

          <ImageUpload
            onChange={(value) => setCustomValue("imageSrc", value)}
            value={imageSrc}
          />
          <Input
            id="title"
            label="Title"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="description"
            label="Description"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <Input
            id="price"
            label="Price"
            formatPrice
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <hr />
          <div className=" grid grid-cols-1 py-2 md:grid-cols-2 xl:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
            {/* category */}
            {categories.map((item) => (
              <div key={item.label} className=" col-span-1">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.path}
                  label={item.label}
                  icon={item.icon}
                  path={item.path}
                />
              </div>
            ))}
          </div>
          <hr />
          {/* kakaoMap */}
          <KakaoMap
            setCustomValue={setCustomValue}
            latitude={latitude}
            longitude={longitude}
          />
          <Button label="상품 생성하기" />
        </form>
      </div>
    </Container>
  );
};

export default ProductUploadPage;
