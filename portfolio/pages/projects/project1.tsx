import React from "react";
import ProjectHead from "../../components/ProjectHead";
import SectionNode from "../../components/SectionNode";
import logo from "../../assets/png/botpress/botpressLogo.png";

const Project1 = () => {
  return (
    <div
      id="project1"
      className="w-[100vw] h-[100vh] p-8 py-56 col-start-1 col-span-1 row-start-3 row-span-1 relative flex flex-col items-center gap-56 scroll-align-start overflow-y-scroll"
    >
      <ProjectHead
        name="Botpress"
        image={logo}
        bgColor="bg-indigo-200"
        description="Job description. Talk about value I added to the company. Talk about projects and some other
stuff."
      />
      <SectionNode
        title="WOW"
        content="Omg this is so amazing!!!"
        image="https://i1.sndcdn.com/avatars-000669881501-bus2an-t500x500.jpg"
      />
      <SectionNode
        title="WOW"
        content="Oh my goodness I can't believe my eyes. This porfolio website is insane!! I want to hire this person STAT"
        image="https://i1.sndcdn.com/avatars-000669881501-bus2an-t500x500.jpg"
        flip
      />
    </div>
  );
};

export default Project1;
