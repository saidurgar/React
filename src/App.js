import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Section from "./Components/Section";


let SectionData = [
    {
        title: "Skills",
        description: "A versatile and seasoned Full Stack Developer with over 5 years of comprehensive experience in software development. Proficient in MERN (MongoDB, Express. js, React. js, Node.js) Stack and equipped with knowledge of Python Django and Ruby on Rails. Demonstrates robust understanding of data structures, underpinning a firm foundation in problem-solving. Additionally skilled in artificial intelligence and machine learning, reflecting a broad understanding of current and emerging technologies. Known for writing clean, maintainable code and ability to design, develop, and deploy complex web applications. Excels in dynamic, high-pressure environments, leveraging a solution-oriented mindset and team collaboration. Strives to create user-centric solutions that drive efficiency and improve the overall user experience."

    },
    {
        title: "Qualifications",
        description: "An accomplished Full Stack Developer and seasoned instructor with a B. Tech in Computer Science from SRM University. With over 5 years of experience at tech giants like Amazon and Microsoft, my portfolio includes projects across sectors such as edtech, e-commerce, and collaborative software like Teams. I've excelled in leadership roles, managing multiple teams and projects, and demonstrated my proficiency in AI and Machine Learning through professional training. Beyond practical work, I've enriched the tech community by teaching over 10,000 students, imparting knowledge and nurturing future talent. My strong foundation in Data Structures and Algorithms aids in effective problem-solving and crafting efficient solutions. Adept at working with agile methodologies, version control systems, and test-driven development, I have consistently delivered high-quality software while meeting strict deadlines. This blend of experience, technical skills, leadership, and teaching represents a unique combination, making me well-equipped to tackle complex challenges and drive innovation in any tech-driven role."
    },
    {
        title: "Projects",
        description: "As a seasoned Full Stack Developer, I have an expansive portfolio of diverse projects spanning various sectors. I've been instrumental in developing a number of successful e-commerce applications, employing technologies like MERN Stack, Python Django, and Ruby on Rails to deliver seamless, user-friendly experiences. At Microsoft, I made significant contributions to the evolution of Microsoft Teams, enhancing its functionality and user experience, and hence, facilitating efficient remote collaboration for millions of users globally. This project required deep proficiency in a range of programming languages and a keen understanding of the needs of a diverse user base. Additionally, I developed an innovative software solution as an alternative to Google Meets, demonstrating my ability to craft comparable tech products from scratch while adhering to top industry standards. This project exhibited my skills in ideation, design, and full-cycle development, as well as my understanding of the intricacies of video conferencing software. Beyond development, I've provided strategic tech guidance to startups, helping to establish their tech teams and laying down a robust foundation for their future growth. This role required not just technical expertise, but also leadership, communication skills, and a deep understanding of the tech industry. Overall, my project experiences demonstrate a solid mix of technical prowess, creativity, leadership, and a strong drive to deliver high-quality software solutions."
    }

]

const App = () => {

     
    return(
        <div>
            <Navbar/>
            <AboutMe/>
            {
              SectionData.map((data)=>(
                    <Section 
                       title = {data.title}
                       description = {data.description}
                    />
              ))
           }


        </div>
    )
}

export default App;