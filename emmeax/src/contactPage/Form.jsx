import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Form = () => {
  return (
    <main className=" text-[#151E99] py-16 flex flex-col lg:flex-row items-start justify-between px-10 lg:px-32 gap-16">
      {/* Left Section: Form */}
      <form className="flex-1 space-y-8">
        {[
          { label: "Name", placeholder: "Type your full name" },
          { label: "Email", placeholder: "example@gmail.com" },
          { label: "Project Type", placeholder: "Choose from a list here" },
          { label: "Message", placeholder: "Please type your project description" },
        ].map((field, index) => (
          <div key={index}>
            <label className="flex items-center gap-2 text-sm font-medium">
              <span className="flex items-center justify-center w-8 h-8 border-2 border-[#151E99] text-[#151E99] rounded-[12px]">
                {index + 1}
              </span>
              {field.label}
            </label>
            {field.label === "Project Type" ? (
              <select className="w-full mt-2 p-4 border-b border-[#D3D3D3] bg-transparent text-[#151E99] rounded-lg focus:outline-none focus:border-[#151E99]">
                <option value="">{field.placeholder}</option>
                <option value="Graphics Design">Graphics design</option>
                <option value="Video Design">Video design</option>
                <option value="Brand Identity">Brand Identity</option>
              </select>
            ) : (
              <input
                type="text"
                placeholder={field.placeholder}
                className="w-full mt-2 p-4 border-b border-[#D3D3D3] bg-transparent text-[#151E99] rounded-lg focus:outline-none focus:border-[#151E99]"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-8 py-3 bg-[#151E99] text-white rounded-xm hover:bg-opacity-90 transition-all duration-300"
        >
          Send Message <MdArrowOutward />
        </button>
      </form>

      {/* Right Section: Contact Info */}
      <aside className="flex-1 space-y-6">
        {[
          { title: "CALL US", text: "(123) 456-7890" },
          { title: "Email", text: "contact@4kstudios.com" },
          { title: "ADDRESS", text: "123 Creative Blvd\nDesign City, USA" },
        ].map((item, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm whitespace-pre-line text-[#848282]">{item.text}</p>
          </div>
        ))}
      </aside>
    </main>
  );
};

export default Form;