// import React from 'react'
// import { IconType } from "react-icons";

// type Props ={
//     role:String;
//     Icon:IconType;
//     date?:string
// };

// const ResumeCard = ({Icon, role, date}: Props) => {
//   return (
//     <div className='mb-6'>
//       <div className='flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md'>
//       <div className='sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-col'>
//         <Icon className='sm:w-8 sm:h-8 w-6 h-6 text-white'/>

//       </div>
//       <div className='flex-1'>
//         {date && (
//             <h1 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold'>{date}</h1>
//         )}
//         <h1 className='text-gray-200 text-xl sm:text-2xl font-semibold'>{role}</h1>
//         <p className='text-gray-300 text-sm sm:text-base pt-3'>Developed responsive web interfaces using React.js, Next.js, and Tailwind CSS. Collaborated with team members to build user-friendly and high-performance applications.</p>
//       </div>

//       </div>
//     </div>
//   )
// }

// export default ResumeCard


import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
};

const ResumeCard = ({ Icon, role, date }: Props) => {
//   const descriptions: { [key: string]: string } = {
//     "Full-Stack Developer":
//       "Built scalable web applications using React, Next.js, Node.js, Express, and MongoDB while ensuring high performance and responsiveness.",

//     "Front-End Developer":
//       "Developed responsive and interactive user interfaces using React.js, Next.js, Tailwind CSS, and modern frontend technologies.",

//     "UI/UX Designer":
//       "Designed intuitive user experiences, wireframes, and visually appealing interfaces focused on usability and accessibility.",

//     "Web Developer":
//       "Created dynamic and responsive websites with modern frameworks while optimizing performance and user experience.",

//     "Bachelor of Technology":
//       "Pursuing B.Tech in Computer Science and Engineering with a focus on Data Structures, Algorithms, Web Development, and Software Engineering.",

//     "Higher Secondary Education":
//       "Completed higher secondary education with a strong foundation in Mathematics, Physics, and Computer Science.",

//     "Secondary Education":
//       "Completed secondary education while building a strong academic foundation and interest in technology."
//   };

const descriptions: { [key: string]: string } = {
  "Full-Stack Developer":
    "Built scalable web applications using React, Next.js, Node.js, Express, and MongoDB while ensuring high performance and responsiveness.",

  "Front-End Developer":
    "Developed responsive and interactive user interfaces using React.js, Next.js, Tailwind CSS, and modern frontend technologies.",

  "Backend Developer":
    "Designed and developed secure server-side applications, REST APIs, and database solutions for scalable web applications.",

  "Pranveer Singh Institute of Technology":
    "Pursuing Bachelor of Technology in Computer Science and Engineering, developing expertise in Data Structures, Algorithms, Web Development, Database Management Systems, and Software Engineering [CGPA - 8.7].",

  "Intermediate":
    "Completed higher secondary education with a strong academic foundation in Physics, Chemistry, Mathematics, and Computer Science [CGPA - 7.9].",

  "High School":
    "Completed secondary education with excellent academic performance while building analytical, problem-solving, and technical skills [CGPA - 9.4]."
};

  return (
    <div className="mb-6">
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
        
        <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center">
          <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
        </div>

        <div className="flex-1">
          {date && (
            <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold">
              {date}
            </h1>
          )}

          <h1 className="text-gray-200 text-xl sm:text-2xl font-semibold">
            {role}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base pt-3">
            {descriptions[role] || "Professional experience and achievements related to this role."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;