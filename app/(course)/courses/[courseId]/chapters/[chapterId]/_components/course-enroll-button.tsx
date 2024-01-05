"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

type CourseEnrollButtonProps = {
  price: number;
  courseId: string;
};

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/courses/${courseId}/checkout`);

      window.location.assign(response.data.url);
    } catch {
      toast.error("Something went wrong.");
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      aria-disabled={isLoading}
      className="w-full md:w-auto"
      size="sm"
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};
