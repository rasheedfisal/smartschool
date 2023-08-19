import React from "react";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import "./price.css";
import Faq from "./Faq";
import AnimatedPage from "../common/AnimatedPage";

const Pricing = () => {
  return (
    <AnimatedPage>
      <Back title="Choose The Right Plan" />
      <section className="price padding">
        <div className="container grid">
          <PriceCard />
        </div>
      </section>
      <Faq />
    </AnimatedPage>
  );
};

export default Pricing;
