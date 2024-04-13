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
    name:"Online Aadhaar Portal Virtusa(Apr 2023 - Jul 2023)",
    desc:"Responsible for handling and Management,integrating frontend components and implementing authentication Spring Boot.",
    img: "\eservice.jpg",
    links:"https://www.linkedin.com/in/saikrishnasangu/details/experience/",
  },

  {
    name:"Protecting Patient Privacy in an e-Healthcare Environment: The DSAS Solution",
    desc:"A Java Application which uses JSoup to scrape the names and prices of products from E-Commerce websites like EBay ,Amazon & Shopclues and displays them so the user can compare.",
    img: "https://github.com/saikrishnasangu/portfolio-react/blob/master/public/Screenshot%202024-04-13%20191654.png",
    links:"https://github.com/saikrishnasangu/Protecting-Patient-Privacy-The-DSAS-Solution-in-e-Healthcare",
  },
  // {
  //   name:"CodePen Clone",
  //   desc:"A simple CodePen clone using React and CodeMirror(a text editor component of JavaScript) demonstrating basic understanding of state, props, hooks and react components",
  //   img: "https://github.com/SOUJANYASENGUPTA/portfolio/blob/main/public/Codepen.jpg?raw=true",
  //   links:"https://soujanyasengupta.github.io/codepenClone/",
  // },
  
  // {
  //   name:"Pedestrian Crossing System for Visually Impaired",
  //   desc:"Utilizes TCS230 Color sensor along with HC 05 bluetooth module and Arduino Uno R3 to transmit the detected traffic light color.",
  //   img:"https://github.com/SOUJANYASENGUPTA/portfolio/blob/main/public/ped.png?raw=true",
  //   links:"https://drive.google.com/file/d/1jX4DnKKVCSHvW1gxxnlFWsd3CIYa4Y1G/view?usp=drive_link",
  // },

  
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
