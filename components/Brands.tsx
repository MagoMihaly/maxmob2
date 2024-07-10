"use client";

import React from "react";
import { brands } from "@/data";

const Brands = () => {
  return (
    <section className="py-20">
      <h1 className="heading">
        Brands
        <span className="text-purple"> work with</span>
      </h1>

      <div className="flex flex-col items-center mt-10">
        <div className="flex flex-wrap justify-center items-baseline gap-4 md:gap-16 max-lg:mt-10">
          {brands.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex flex-col items-center md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
                <span className= "text-lg mt-2">
                  {company.name}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
