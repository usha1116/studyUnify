import React, { useState, useEffect } from "react";
import Rolecardinitial from "../component/Rolecardinitial";
import Rolecardhover from "../component/Rolecardhover";
import Features from "./Features";
import { useLocation } from "react-router-dom";

const roles = [
  {
    title: "Student",
    attributes: [
      "Curious",
      "Hardworking",
      "Adaptable",
      "Test",
      "Fees",
      "Marks",
      "Library",
      "Video",
      "Lecture",
    ],
  },
  {
    title: "Teacher",
    attributes: [
      "Test",
      "Fees",
      "Knowledgeable",
      "Marks",
      "Supportive",
      "Library",
      "Innovative",
      "Video",
      "Lecture",
    ],
  },
  {
    title: "Manager",
    attributes: [
      "Leader",
      "Strategic",
      "Adaptable",
      "Test",
      "Fees",
      "Marks",
      "Library",
      "Video",
      "Lecture",
    ],
  },
  {
    title: "Admin",
    attributes: [
      "Organized",
      "Responsible",
      "Adaptable",
      "Test",
      "Fees",
      "Marks",
      "Library",
      "Video",
      "Lecture",
    ],
  },
];

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [hoveredRole, setHoveredRole] = useState(null);
  const [clipPath, setClipPath] = useState("inset(0% 0% 0% 0%)");
  const [featuresClip, setFeaturesClip] = useState("inset(0% 0% 100% 0%)");
  const [selectRoleClip,setSelectRoleClip]= useState("inset(0% 0% 0% 0%)");
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
  
      // 🟢 Hide "StudyUnify" smoothly
      const progressStudyUnify = Math.min(scrollY / (windowHeight * 0.7), 1) * 100;
      setClipPath(`inset(0% 0% ${progressStudyUnify}% 0%)`);
  
      // 🟠 Hide the WHOLE "Select a Role" **including the role cards**
      const roleStartHiding = windowHeight * 1.2; // Adjust timing
      const progressSelectRole = Math.max(
        0,
        Math.min((scrollY - roleStartHiding) / (windowHeight * 0.8), 1) * 100
      );
      setSelectRoleClip(`inset(0% 0% ${progressSelectRole}% 0%)`);
  
      // 🔴 Features should ONLY appear once "Select a Role" is fully hidden
      const featuresStart = windowHeight * 2; // Delay Features appearing
      const progressFeatures = Math.max(
        0,
        Math.min((scrollY - featuresStart) / (windowHeight * 0.7), 1) * 100
      );
      setFeaturesClip(`inset(0% 0% ${100 - progressFeatures}% 0%)`);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <>
      <div className="min-h-screen bg-black text-white relative">
        <div
          className="h-screen flex justify-center items-center fixed top-0 left-0 w-full transition-all duration-600 ease-out"
          style={{ clipPath }}
        
        >
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-transparent uppercase tracking-widest text-center"
            style={{ WebkitTextStroke: "1.25px rgba(255, 255, 255, 0.7)" }}
          >
            StudyUnify
          </h1>
        </div>
        {/* <div className="min-h-screen"></div> */}
      </div>

<div
  className="relative overflow-hidden flex flex-col items-center justify-center bg-black text-white transition-all duration-700 ease-out"
  style={{ clipPath: selectRoleClip }}
>
  {/* Title */}
  <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
    Select a Role
  </h1>

  {/* Role Cards */}
  <div className="flex flex-col items-center justify-center bg-black text-white py-11">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-50 md:gap-30 sm:gap-20">
      {!hoveredRole &&
        roles.map((role, index) => (
          <Rolecardinitial
            key={index}
            title={role.title}
            setHovered={setHoveredRole}
            index={index}
          />
        ))}
    </div>

    {/* Hovered Role Display */}
    {hoveredRole && (
      <div className="relative w-full flex justify-center items-center h-70">
        {roles.map(
          (role, index) =>
            role.title === hoveredRole && (
              <Rolecardhover
                key={index}
                title={role.title}
                attributes={role.attributes}
                setHovered={setHoveredRole}
                index={index}
              />
            )
        )}
      </div>
    )}
  </div>
</div>

   
 <div className="relative min-h-screen bg-black text-white flex justify-center items-center" >
        <div
          className="absolute top-0 left-0 w-full  transition-all duration-600 ease-out"
          style={{featuresClip }}
        >
          <Features />      
        </div>
      </div>

    </>
  );
};

export default Home;