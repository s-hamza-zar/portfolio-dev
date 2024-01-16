"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "DigitalOcean Cloudways Product",
    description:
      "Stack used: React, Redux tool kit, tailwind and Micro-frontend",
    image: "/images/projects/project-1.jpg",
    websiteUrl:
      "https://drive.google.com/file/d/1UfJHjqOwcoZcVHNh4-wQya_pT4ml_YSu/view",
    githubUrl: "/",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "Stack used:Dotnet/C# (Desktop App)",
    image: "/images/projects/project-2.jpg",
    websiteUrl:
      "https://drive.google.com/file/d/1a4mWPu9DdcOcl8-0kv7iRt99Ia1LBYim/view",
    githubUrl: "https://github.com/s-hamza-zar/EmployeeManagementSystem",
    tag: ["All", "Desktop"],
  },
  {
    id: 3,
    title: "Bindia.dk | A Food Ordering Website",
    description: "Stack used: Html, Scss, JavaScript",
    image: "/images/projects/project-3.jpg",
    websiteUrl: "https://www.bindia.dk/en",
    githubUrl: "/",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "An Ecommerce Store",
    description: "Stack used: React, Scss, JavaScript",
    image: "/images/projects/project-4.jpg",
    websiteUrl: "https://organic-store-henna.vercel.app/",
    githubUrl: "https://github.com/s-hamza-zar/Organic-Ecom-site",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "KeyView.ai",
    description: "Stack used: React, Scss, Ant Design, Ai, Django",
    image: "/images/projects/project-5.svg",
    websiteUrl: "https://keyview.ai/",
    githubUrl: "/",
    tag: ["All", "Web"],
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/project-1.jpg",
  //   websiteUrl: "",
  //   githubUrl: "",
  //   tag: ["All", "Web"],
  // },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section className="mt-20" id="#projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Desktop"
          onClick={handleTagChange}
          isSelected={tag == "Desktop"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            websiteUrl={project.websiteUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
