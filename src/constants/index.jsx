import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


export const testimonials = 
  [
    {
      "user": "Amit Sharma",
      "company": "SkillUp Training Center",
      "image": user1,
      "text": "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
      "user": "Priya Patel",
      "company": "TechCraft Solutions",
      "image": user2,
      "text": "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
    },
    {
      "user": "Ravi Kumar",
      "company": "Delhi Public School",
      "image": user3,
      "text": "The training provided by the institute was exceptional. The instructors were knowledgeable and the curriculum was well-structured. Our students gained valuable skills that have significantly boosted their confidence.",
    },
    {
      "user": "Anuj Mehta",
      "company": "Bright Future Academy",
      "image": user4,
      "text": "Our partnership with Bright Future Academy has been incredibly beneficial. Their dedicated staff and comprehensive programs have greatly enhanced our educational offerings.",
    },
    {
      "user": "Rajesh Singh",
      "company": "Vocational Course Student",
      "image": user5,
      "text": "Enrolling in this vocational course was a fantastic decision. The practical skills and hands-on training I received have made a real difference in my career prospects.",
    },
    {
      "user": "Sneha Reddy",
      "company": "Vocational Course Student",
      "image": user6,
      "text": "The vocational program exceeded my expectations. The instructors were supportive, and the course content was both engaging and relevant. I feel well-prepared for the professional world.",
    },
  ]
  

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "AI Powered Career Guidance",
    description:
      "Our website features AI-powered career guidance, delivering tailored recommendations and insights to help you chart a precise and informed career path.",
  },
  {
    icon: <Fingerprint />,
    text: "Digital Skill Badges",
    description:
"Our website offers Digital Skill Badges, allowing you to showcase and verify your achievements and expertise in various fields with a recognized, shareable credential.",
  },  
  {
    icon: <ShieldHalf />,
    text: "Online Apprenticeship Platform",
    description:
      "Our website features an Online Apprenticeship Platform, connecting you with hands-on learning opportunities and real-world experience from top industry professionals.",
  },
  
  {
    icon: <BatteryCharging />,
    text: "Industry exposure",
    description:
      "Our website offers unparalleled industry exposure, giving you real-world experience and insights directly from leading professionals in your field.",
  },
  {
    icon: <PlugZap />,
    text: "Job Opportunities",
    description:
      "Our website connects you with a wealth of job opportunities, matching your skills and aspirations with roles from top employers.",
  },
  {
    icon: <GlobeLock />,
    text: "Institute Outreach",
    description:
      "Our website's Institute Outreach feature fosters strong connections with educational institutions, enabling collaborative training opportunities and enhanced learning experiences for students.",
  },
];

export const checklistItems =[
  {
    "title": "Engaging Seminars in Schools",
    "description": "Conduct informative and interactive seminars in schools to enhance student learning and provide valuable insights on educational topics."
  },
  {
    "title": "Workshops for Skill Development",
    "description": "Organize hands-on workshops in schools to develop practical skills and foster creativity among students through engaging activities."
  },
  {
    "title": "Outreach to Government Schools",
    "description": "Extend our educational programs to government schools, ensuring access to quality resources and training for all students."
  },
  {
    "title": "Reaching Schools in Villages",
    "description": "Implement outreach initiatives to bring educational resources and opportunities to schools in rural and remote areas, bridging the gap in access to quality education."
  }
];

export const pricingOptions = [
  {
    title: "AC Mechanic",
    price: "₹12-15k",
    features: [
      "Flexible working hours",
      "Hands on Teaching",
      "Conveyance Fee",
      "Course Certificate",
    ],
  },
  {
    "title": "Jewellery Designing",
    "price": "₹20-25k",
    "features": [
      "Creative Skill Development",
      "Hands-on Workshops",
      "Material Costs Included",
      "Course Certificate",
    ],
},

{
  "title": "Pet Grooming",
  "price": "₹15-18k",
  "features": [
    "Practical Training Sessions",
    "Flexible Schedule",
    "Grooming Tools Provided",
    "Course Certificate",
  ],
},
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Contact Form" },
  { href: "#", text: "Customer Support" },
  { href: "#", text: "Office Locations" },
  { href: "#", text: "Feedback" },
  { href: "#", text: "FAQs" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Seminars" },
  { href: "#", text: "Jobs" },
];
