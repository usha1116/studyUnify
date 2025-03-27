import React from "react";
import Featurecard from "../component/Featurecard";
import { motion } from "framer-motion";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineTeam, AiOutlineClockCircle } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiDockTop, BiComment } from "react-icons/bi";
import { LuChartBar } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    scale: 0.8,
    x: index % 2 === 0 ? -80 : 80, // Alternate left and right animation
  }),
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Features = () => {
  const featuresData = [
    {
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&auto=format&fit=crop&q=60",
      icon: <AiOutlineTeam className="text-white" />,
      title: "Attendance Management",
      description:
        "Say goodbye to manual roll calls! Automated tracking sends instant notifications for absences.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=500&auto=format&fit=crop&q=60",
      icon: <CiCalendar className="text-white" />,
      title: "Test Scheduling",
      description:
        "Plan and organize tests effortlessly with automated reminders for students and teachers.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=500&auto=format&fit=crop&q=60",
      icon: <AiOutlineClockCircle className="text-white" />,
      title: "Lecture Scheduling",
      description:
        "Create and manage class timetables with ease. Handle room changes seamlessly.",
    },
    {
      image: "https://media.istockphoto.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork.jpg",
      icon: <IoIosNotificationsOutline className="text-white" />,
      title: "Communication System",
      description:
        "Instantly send important announcements & updates to students and parents.",
    },
    {
      image:"https://media.istockphoto.com/id/1490134485/photo/woman-going-over-her-finances.jpg",
      icon: <BiDockTop className="text-white" />,
      title: "Fee Management",
      description:
        "Automate fee collection with timely reminders and detailed payment tracking.",
    },
    {
      image:
        "https://media.istockphoto.com/id/932506530/photo/midsection-of-business-colleagues-working-at-office.jpg",
      icon: <LuChartBar className="text-white" />,
      title: "Progress Reports",
      description:  "Generate comprehensive performance reports with detailed analytics.",
    },
    {
      image: "",
      icon: <GoTrophy className="text-white" />,
      title: "Top Performers",
      description: "Recognize and showcase high-achieving students with an automated ranking system.",
    },
    {
      image: "",
      icon: <BiComment className="text-white" />,
      title: "Parent Communication",
      description: "Enable direct messaging between teachers and parents for better collaboration.",
    },
  ];

  return (
    <div className="bg-black min-h-screen pt-10 pb-20">
    
      <motion.h1
        className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        
      >
        Our Powerful Features
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-5 mt-5 px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            <Featurecard {...feature} index={index} /> {/* ✅ Pass `index` properly */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
