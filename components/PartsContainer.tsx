"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import fekalkatresz from "@/public/fekalkatresz.png"

export function PartsContainer() {
  return (
    <CardContainer className="flex flex-col gap-4 ">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-lg border bg-[#10132E]">
        <CardItem translateZ="50" className="text-2xl font-bold text-white p-2">
          Brake parts
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 p-2"
        >
          From screw to brake disc
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={fekalkatresz}
            height="300"
            width="300"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
