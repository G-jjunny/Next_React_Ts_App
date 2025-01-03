import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import React from "react";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload = ({ onChange, value }: ImageUploadProps) => {
  const handleUpload = (result: any) => {
    console.log(result);
    console.log(result.info.secure_url);
    onChange(result.info.secure_url);
  };

  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  return (
    <CldUploadWidget
      onSuccess={(result) => {
        handleUpload(result);
        console.log(result);
      }}
      uploadPreset={uploadPreset}
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            className=" relative flex flex-col items-center justify-center gap-4 p-20 transition border-2 
            border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-300"
            onClick={() => open?.()}
          >
            <TbPhotoPlus size={50} />
            {value && (
              // value 값이 있을때 이미지를 렌더링
              <div className=" absolute inset-0 w-full h-full">
                <Image fill style={{ objectFit: "cover" }} src={value} alt="" />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
