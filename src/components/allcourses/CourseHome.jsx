import React from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import AnimatedPage from "../common/AnimatedPage";

const CourseHome = () => {
  return (
    <AnimatedPage>
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />
    </AnimatedPage>
  );
};

export default CourseHome;
