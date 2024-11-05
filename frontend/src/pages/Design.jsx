import React, { useEffect, useState } from 'react';
import Theme from '../utils/theme';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Basic from '../utils/Basic';
import Skill from '../utils/Skill';
import axios from 'axios';
import Projects from '../utils/Projects';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../utils/Navbar';
function Design() {

    const [preview, serpreview] = useState(false)
    const [basicDetails, setBasicDetails] = useState({
        name: '',
        position: '',
        description: '',
        linkedIn: '',
        instagram: '',
        resume: '',
        email: '',
        phone: ''
    });

    const [projects, setProjects] = useState([]);

    const [currentProject, setCurrentProject] = useState({
        projectName: '',
        projectDescription: '',
        githubLink: '',
        demoLink: ''
    });

    const [skills, setSkills] = useState('');

    const [currentSkills, setCurrentSkills] = useState([]);



    const handleBasicInputChange = (e) => {
        const { name, value } = e.target;
        setBasicDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
        console.log(basicDetails); // This may not show the updated state immediately due to async setState
    };
    const isAuth = useSelector((state) => state.user);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/api/v1/details/data`, { name: isAuth.user });
                setBasicDetails(response.data.details.basicDetails)
                setProjects(response.data.details.projects)
                setCurrentSkills(response.data.details.currentSkills)
                // setBasicDetails(response.data.basicDetails) // Update state with fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (isAuth.user) { // Only fetch data if isAuth.user is defined
            fetchData();
        }
    }, [isAuth.user]);

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
    const deleteProject = (delindex) => {
        setProjects(projects.filter((project, index) => index !== delindex));
    }
    const deleteSkill = (deindex) => {
        setCurrentSkills(currentSkills.filter((skill, index) => index !== deindex));
    }


    const [redirectPath, setRedirectPath] = useState(null);
    const sendDetails = async () => {
        const data = {
            basicDetails, // Ensure these variables are defined
            projects,
            currentSkills
        };

        try {
            const response = await axios.post('/api/v1/details', data);
            setRedirectPath(`/${response.data.user.name}`); // Use backticks for template literals

        } catch (error) {
            console.error('Error sending data:', error);
        }
    };
    if (redirectPath) {
        return <Navigate to={redirectPath} />; // Conditional navigation
    }

    if (preview == true) {
        return (
            <div>

                <Basic basicDetails={basicDetails}></Basic>
                <Skill skill={currentSkills} onDelete={deleteSkill}></Skill>
                <Projects project={projects} onDelete={deleteProject}></Projects>
            </div>
        )
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-full h-10 flex justify-between my-3 '>
                <Theme></Theme>
                <button className='bg-red-500 rounded-lg p-2' onClick={() => sendDetails()}>generate link</button>
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
                    <Projects project={projects} onDelete={deleteProject}></Projects>
                </div>
            </div>
        </div>
    );
}

export default Design;
