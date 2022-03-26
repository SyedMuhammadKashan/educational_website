
import React ,{useState,createContext} from 'react';

export const Mycontext=createContext();

export const InfoProviderfun=(props)=>{
    
      const [info, setinfo] = useState([
        {
          parafirst:
            "We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone",
          paraimg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2xOG8v5y0Wj1kCHzbZxmFwTySomkwXHuKGdMs6lMksXp00AiNEw4GR3Mx-JiKYx7Mmg&usqp=CAU",
        },

        {
          studentTitle: "Students says about us",
          studentDescription:
            "Online education enables the teacher and the student to set their own learning pace, and there’s the added flexibility of setting a schedule that fits everyone’s agenda. As a result, using an online educational platform allows for a better balance of work and studies",
          studentImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrRo3dUu-eFqCepVPMEiCyUSr2qb4HNKNoQ&usqp=CAU",
        },
        {
          cid: 1,
          cname: "Php",
          cdescp: "PHP for Beginners : Learn PHP Programming From Scratch!",
        },
        {
          cid: 2,
          cname: "NodejsExpress",
          cdescp:
            "Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)",
        },
        {
          cid: 3,
          cname: "ReactJs",
          cdescp:
            "React training program and after you have finished it, you will be ready to be productive in React",
        },
        {
          cid: 4,
          cname: "MySql",
          cdescp:
            "Learn the Basics of Managing Data with SQL - Basics, Transactions, Views, Pages and Stored Procedures",
        },
        {
          cid: 5,
          cname: "Flutter",
          cdescp: "The Complete 2022 Flutter Development Bootcamp with Dart",
        },
        {
          cid: 6,
          cname: "Bootstrap5",
          cdescp: "Front-End Web UI Frameworks and Tools with Bootstrap 5",
        },
      ]);              
    
           
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return(
        <div>
            <Mycontext.Provider  value={[info,setinfo]}>
           {props.children}
           </Mycontext.Provider>
        </div>
    )
}
