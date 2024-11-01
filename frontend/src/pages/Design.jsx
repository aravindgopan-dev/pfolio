import React, { useState } from 'react';
import Theme from '../utils/theme';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Basic from '../utils/Basic';
import Skill from '../utils/Skill';
import Projects from '../utils/Projects';
function Design() {
    const [basicDetails, setBasicDetails] = useState({
        name: 'Aravind Gopan',
        position: 'software engineer',
        description: 'Welcome to my Node.js portfolio! Explore my projects showcasing expertise in backend development. From web apps to APIs, I deliver efficient solutions with Node.js, Express.js, MongoDB, and more. Lets connect to discuss collaborations and opportunities for innovation in the digital world',
        linkedIn: 'https://www.linkedin.com/in/aravind-gopan-1a3361204/',
        instagram: 'https://www.instagram.com/_aravind_gopan_',
        resume: 'https://www.linkedin.com/in/aravind-gopan-1a3361204/',
        email:"",
        phone:''
    });
    const [projects, setProjects] = useState([
        {
            projectName: "Portfolio Website",
            projectDescription: "A personal portfolio website to showcase my projects and skills.",
            githubLink: "https://github.com/aravindgopan/portfolio",
            demoLink: "https://aravindgopan.com"
        },
        {
            projectName: "Task Manager",
            projectDescription: "A web application for managing tasks with user authentication.",
            githubLink: "https://github.com/aravindgopan/task-manager",
            demoLink: "https://task-manager-app.com"
        },
        {
            projectName: "Weather App",
            projectDescription: "A simple weather application that fetches data from a weather API.",
            githubLink: "https://github.com/aravindgopan/weather-app",
            demoLink: "https://weather-app.com"
        }
    ]);
    const [currentProject, setCurrentProject] = useState({
        projectName: "",
        projectDescription: "",
        githubLink: "",
        demoLink: ""
    });
    const [skills, setSkills] = useState("");
    const [currentSkills, setCurrentSkills] = useState(["MongoDB",
        "Mongoose",
        "Express.js",
        "Node.js",
        "JavaScript",
        "React.js",
        "Redux",
        "RESTful API design",
        "GraphQL",
        "Authentication (JWT, OAuth)",
        "Middleware in Express",
        "HTML/CSS",
        "Tailwind CSS",
        "DaisyUI",
        "Axios for API calls",
        "Version control with Git",
        "Deployment (Heroku, Render.com)",
        "Docker (optional)",
        "Testing (Jest, Mocha)",
        "Basic understanding of TypeScript",
        "Agile methodologies"]);
    const [prev, setPreview] = useState(false)


    const handleBasicInputChange = (e) => {
        const { name, value } = e.target;
        setBasicDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        console.log(basicDetails); // This may not show the updated state immediately due to async setState
    };

    const handleProjectInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentProject((prevProject) => ({
            ...prevProject,
            [name]: value,
        }));

    };

    const handleSkillInputChange = (e) => {
        setSkills(e.target.value);
    };

    const addSkill = () => {
        if (skills.trim() !== "") {
            setCurrentSkills((prevSkills) => [...prevSkills, skills]);
            setSkills(""); // Clear input after adding
        }
    };

    const addProject = () => {
        if (currentProject.projectName.trim() !== "") {
            setProjects((prevProjects) => [...prevProjects, currentProject]);
            setCurrentProject({ projectName: "", projectDescription: "", githubLink: "", demoLink: "" }); // Clear input after adding
        }
    };
    const deleteProject =(delindex)=>{
        setProjects(projects.filter((project, index) => index !== delindex));
    }
    const deleteSkill=(deindex)=>{
        setCurrentSkills(currentSkills.filter((skill, index) => index !== deindex));
    }

    return (
        <div>
            <div className='w-full h-10 flex justify-between my-3 '>
                <Theme></Theme>
                <button className='bg-red-500 rounded-lg p-2'>generate link</button>
            </div>
            <div className='border mb-2'></div>
            <div className='flex h-screen'>

                <div className='w-1/2  lg:w-1/3 p-4 overflow-scroll'>


                    <label className="form-control w-full max-w-xs mx-auto border-2 border-accent-content rounded-lg p-3 my-2">
                        <div className="label">
                            <span className="label-text">What is your name?</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="name"
                            value={basicDetails.name}
                            onChange={handleBasicInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text">What is your position? Fullstack/Backend/...</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="position"
                            value={basicDetails.position}
                            onChange={handleBasicInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text">Give a short description of yourself</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="description"
                            value={basicDetails.description}
                            onChange={handleBasicInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full max-w-xs mx-auto border-2 border-accent-content rounded-lg p-3 my-2">
                    <div className="label">
                            <span className="label-text">Enter Email address</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="email"
                            value={basicDetails.email}
                            onChange={handleBasicInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text">Enter Phone Number </span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="phone"
                            value={basicDetails.phone}
                            onChange={handleBasicInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text">Enter LinkedIn URL</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="linkedIn"
                            value={basicDetails.linkedIn}
                            onChange={handleBasicInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text">Enter Instagram URL</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="instagram"
                            value={basicDetails.instagram}
                            onChange={handleBasicInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text">Enter your resume URL</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="resume"
                            value={basicDetails.resume}
                            onChange={handleBasicInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full max-w-xs mx-auto border-2 border-accent-content rounded-lg p-3 my-2">
                        <div className="label">
                            <span className="label-text">Enter your skills</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            value={skills}
                            onChange={handleSkillInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <button type="button" onClick={addSkill} className="btn my-1">Add</button>
                    </label>
                    <label className="form-control w-full max-w-xs mx-auto border-2 border-accent-content rounded-lg p-3 my-2">
                        <div className="label">
                            <span className="label-text">Enter your project name</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="projectName"
                            value={currentProject.projectName}
                            onChange={handleProjectInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text">Give a short description</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="projectDescription"
                            value={currentProject.projectDescription}
                            onChange={handleProjectInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text">Enter GitHub link</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="githubLink"
                            value={currentProject.githubLink}
                            onChange={handleProjectInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <div className="label">
                            <span className="label-text">Enter Demo link</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="demoLink"
                            value={currentProject.demoLink}
                            onChange={handleProjectInputChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <button type="button" onClick={addProject} className="btn my-1">Add</button>
                    </label>
                    

                </div>

                <div className='w-1/2 lg:w-2/3 border-2 border-accent-content rounded-3xl p-4 overflow-scroll mx-2'>
                    <Basic basicDetails={basicDetails}></Basic>
                    <Skill skill={currentSkills} onDelete={deleteSkill}></Skill>
                    <Projects project={projects}  onDelete={deleteProject}></Projects>
                </div>
            </div>
        </div>
    );
}

export default Design;
