import "./education.scss";
import { motion } from "framer-motion";
const history=[
    {
        name: "B.Tech in CSE (2019-2023)",
        body: "Graduated from Guru Nanak Institutions Technical Campus specialising in Computer Science and Engineering with a CGPA of 7.54.",
    },
    {
        name:"XII (2019)",
        body:"Passed with 92% from TSBIE Board."
    },
    {
        name:"X (2017)",
        body:"Passed with a CGPA of 9.5 from TS SSC"
    }
]
const Education=()=>{
    return(
        <div className="education">
            <motion.div className="textContainer" initial={{opacity:0,y:300}} whileInView={{opacity:1,y:0}} transition={{delay:1,duration:1,staggerChildren:0.1}}>
                <motion.h1>
                    Education
                </motion.h1>
                <motion.h2>
                I pursued a Bachelor of Technology <b>(BTech) in Computer Science and Engineering</b> from 2019 to 2023, achieving a <b>CGPA of 7.54</b>. Prior to this, I completed my senior secondary education at Narayana Junior College, securing <b>a grade of 92%</b>. And I completed my secondary education at Akshara High School, securing <b>a CGPA of 9.5</b>.  Throughout my academic journey, I actively participated in various extracurricular activities, and served as <b>Event Coordinator for fests</b> at my college. I have also completed an <b>internship in Java Full Stack Web Development & successfully played an integral part in developing a project based on Protecting Patient Privacy</b>, and simultaneously secured the <b>OCJA SE8 Certification</b> 
                </motion.h2>
            </motion.div>
    <motion.div className="timelineContainer" initial={{opacity:0,y:-100}} whileInView={{opacity:1,y:10}} transition={{delay:1,duration:1,staggerChildren:0.1}}>
    <motion.div className="timelineColumn">
    <motion.div class="timeline">
    <motion.div class="outer">
    {
    history.map(history=>(
     <motion.div class="card" key={history}>
      <motion.div class="info" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:3,duration:1}}>
        <h3 class="title">{history.name}</h3>
        <p>{history.body}</p>
      </motion.div>
    </motion.div>
          ))
    }   
    </motion.div>
   </motion.div>
  </motion.div>
  </motion.div>          
 </div>
);
};
export default Education;
