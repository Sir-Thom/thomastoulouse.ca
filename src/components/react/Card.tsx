import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white mx-10 h-auto mt-10 dark:bg-dark-600 shadow-lg rounded-lg px-4 py-12 sm:w-full  md:w-64 lg:w-72 xl:w-96 ">
      <h2 className="text-xl  font-bold text-gray-900 dark:text-gray-100 mb-4 ">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-400 ">{description}</p>
    </div>
  );
};

export default Card;
