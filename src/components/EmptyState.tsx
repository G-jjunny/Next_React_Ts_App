import React from "react";
import Heading from "./Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState = ({
  title = "일치하는게 없습니다.",
  subtitle = "일부 필터를 변경하거나 제거해 보십시오.",
  showReset,
}: EmptyStateProps) => {
  return (
    <div className=" h-[60vh] flex flex-col gap-2 justify-content items-center">
      <Heading center title={title} subtitle={subtitle} />
    </div>
  );
};

export default EmptyState;
