import Cards from "../cards/cards"; 
import "./fpane.scss";
import { motion } from "framer-motion";

const features=[
  {
    name:"Oracle Certified Java Associate SE8 Certification",
    desc:"Successfully cleared Oracle Certified Java Associate SE8 examination on 16th December 2022. I qualified with a percentage of 78%.",
    img: "\eCertificate_img.jpg",
    links:"https://drive.google.com/file/d/17LvFM2wDHuuQA_yfjTfxRLoN0xQbRrlm/view?usp=sharing",
  },
  {
    name:"Online Aadhaar Portal Virtusa (Apr 2023 - Jul 2023)",
    desc:"Responsible for handling and managing, integrating frontend components using React.js, and implementing authentication using Spring Boot.",
    img: "\eservice.jpg",
    links:"https://www.linkedin.com/in/saikrishnasangu/details/experience/",
  },

  {
    name:"Protecting Patient Privacy: The DSAS Solution in an e-Healthcare ",
    desc:"A Java application implemented to securely check patient health status using e-Healthcare gadgets for enhanced data protection.",
    img: "\dsas.png",
    links:"https://github.com/saikrishnasangu/Protecting-Patient-Privacy-The-DSAS-Solution-in-e-Healthcare",
  },
  // {
  //   name:"CodePen Clone",
  //   desc:"A simple CodePen clone using React and CodeMirror(a text editor component of JavaScript) demonstrating basic understanding of state, props, hooks and react components",
  //   img: "https://github.com/SOUJANYASENGUPTA/portfolio/blob/main/public/Codepen.jpg?raw=true",
  //   links:"https://soujanyasengupta.github.io/codepenClone/",
  // },
  
  {
    name:"IRCTC - Railway Management API: Secure, Real-Time, and Role-Based Access",
    desc:"Built with Node.js, Express.js, MySQL, JWT, and bcrypt.js. Features user registration, login, train availability, seat booking, and admin controls. Secured with JWT & bcrypt.js.",
    img:"\irctctickebookingapi.jpg",
    links:"https://github.com/saikrishnasangu/IRCTC_Design.git",
  },

  
]
const variants={
  initial:{
      y: -500,
      opacity: 0
  },
  animate:{
      y:0,
      opacity:1,
      transition:{
        
          duration: 2,
          staggerChildren: 0.2,
      }
  },
};
const Featured= () =>{
  
  return(
    <section className="fpane" >
      
     <motion.div className="card-container" variants={variants}  initial="initial" whileInView="animate">
      
     {features.map((feature, index) => (
          <Cards
            key={index} // Ensure each child has a unique key
            name={feature.name}
            desc={feature.desc}
            img={feature.img}
            links={feature.links}
            custom={index}
          />
        ))}
     </motion.div>
     </section>
  );
}
export default Featured;
