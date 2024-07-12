"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { partsList } from "@/data";

export function PartsContainer() {
  return (
    <section className="m-auto flex flex-wrap justify-evenly max-w-7xl rounded-3xl">
      {/* background grid */}
      <div className="w-full min-h-96 absolute">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-80 "
        />
      </div>

      {partsList.map((card, i) => (
        <div key={i} className="flex flex-wrap items-center">
          <CardContainer className="flex flex-wrap gap-2">
            <CardBody className="relative group/card h-auto hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] rounded-lg border bg-[#10132E]">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-white p-2"
              >
                {card.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-1 dark:text-neutral-300 p-2"
              >
                {card.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-5">
                <Image
                  src={card.img}
                  height="180"
                  width="180"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      ))}
    </section>
  );
}
