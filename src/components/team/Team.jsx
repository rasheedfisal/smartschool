import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import Awrapper from "../about/Awrapper";
import "../about/about.css";
import AnimatedPage from "../common/AnimatedPage";

const Team = () => {
  return (
    <AnimatedPage>
      <Back title="Team" />
      <section className="team padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </AnimatedPage>
  );
};

export default Team;
