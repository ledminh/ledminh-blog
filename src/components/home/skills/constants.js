import htmlImage from "./imgs/html.png";
import cssImage from "./imgs/css.png";
import jsImage from "./imgs/javascript.png";
import reactImage from "./imgs/react.png";
import javaImage from "./imgs/java.jpg";
import cppImage from "./imgs/C++.png";
import mongoDBImage from "./imgs/mongoDB.jpg";
import nodeJSImage from "./imgs/nodejs.png";
import mySQLImage from "./imgs/MySQL.png";
import scalaImage from "./imgs/scala.jpg";
import verilogImage from "./imgs/verilog.png";
import assemblyImage from "./imgs/assembly.png";
import everythingImage from "./imgs/everything.png";

export const SkillsSet = [
    {
        title: "Things I'm comfortable with",
        skills: [
            {
                name: "HTML",
                description: "I use most of the common tags (like div, p, h1...h6, span,"
                                + "section, article) frequently. I know enough of event listenners "
                                + "to make the web interactive. However, I think I should study more "
                                + "deeply about the DOM to actually know how the web works.",
                img: htmlImage
            }, 
            {
                name: "CSS",
                description: "I know enough CSS to decorate a website, add animation, and make it responsive. "
                                + "I just learned about grid and flex recently but I think they are the best things "
                                + "invented in CSS so far. With them, I can organize the web the way I want much easier "
                                + "than before. The other thing I find interesting is mobile first principle. It's very simple "
                                + "yet very effective to make a responsive website. Now I just love to make website as much responsive "
                                + "as possible.",
                img: cssImage
            }, 
            {
                name: "Javascript",
                description: "When I started learning Javascript at home, all I knew was Object Oriented Programming which I had learned at school."
                            + " That was why Javascript was a whole new experience for me back then. I couldn't get my mind around why people could "
                            + "code something that was not a class or does not belong to a class, why they left their functions all over the place like that. "
                            + "But then, as time go by, it started to make sense and I love the idea of pure function. No more surprise, no more bugs "
                            + " that I couldn't figure out where. Then, a few years later, I learned functional programming at school and had more knowledge on "
                            + "thunk and saga which had been mysteries to me before. I wouldn't say I know everything about Javascript, but I'm comfortable with it. "
                            + "I can make it do what I want most of the time.",
                img: jsImage
            }, 
            {
                name: "React",
                description: "React is my main focus right now. I started learning React in 2017, when there was only React class," 
                            + " no function, no fragment, no hook. Then, I was busy with school and forgot about it. It was until June 2021 that "
                            + "I came back to React. There were too much change (and all for the better). It even has useReducer that was very similar "
                            + "to Redux before. I decided to stick with it for awhile. My most recent project on React is the blog that you can see in the "
                            + "Project section below.",
                img: reactImage
            }]
    },

    {
        title: "Things I will be comfortable with after a few review sessions",
        skills: [
            {
                name: "Java",
                description: "Java is the second programming language that I learned (only after C++). I'd already known a little bit about OOP "
                                + " before taking Java course at school. "
                            + "However, Java took OOP to the whole new level in which everything is object. I have built many things on Java but then lost them after "
                            + "formatting the hard drive (I didn't know about Github back then.) Because of Java, I found it ridiculous to leave everything out there without "
                            + " any class when studying Javascript. I continued to use Java in some of my important classes at school like Algorithm and Object Oriented Design."
                            + " So, even though it has been a long time I haven't coded anything in Java but I think I would be very comfortable with it only after a few day of reviewing." ,
                img: javaImage
            
            }, 
            {
                name: "C++",
                description: "C++ is the first programming language that I learned at home, even before I took any programming course at school. "
                                + " Then, I was occupied with homework. I got back to it when taking Data Structure class in college. The second time I was with it was "
                                + " when I took Game Intro course and then Intro to Graphic course. In the latter, I developed a graphic app which is one of the projects that make "
                                + "me proudest. You can see it in the Project section below.",
                img: cppImage
            }, 
            {
                name: "mongoDB",
                description: "I don't play much with mongoDB. I tried to setup and then create a database once. I did some experiments on the database, things like filter, "
                            + " add, delete, insert ... But I believe I would be comfortable with it only after some short reviewing sessions. The reason is that I already know "
                            + "database fundamental when taking class on database at school. Moreover, because I use javascript most of the time, json is very familiar to me now",
                img: mongoDBImage
            
            }, 
            {
                name: "Nodejs",
                description: "To be honest, I haven't use Nodejs much. In 2017, I did some reading and experimenting on Nodejs. It was not much, mostly on ExpressJS and some basic "
                                + "things like GET, POST, route, response etc.. However, in case there's a job requirement, I think I can be good at it after some reviewing sessons because "
                                + "I understand quite a bit about the fundamental on server programming.",
                img: nodeJSImage
            
            }]
    },

    {
        title: "Things I learned at school and don't mind doing it for the job",
        skills: [
            {
                name: "MySQL",
                description: "I knew a bit about MySQL long before I came to the U.S. (in 2001, I think) "
                                +  "Back then, I managed an online forum written in PHP (Invision Power Board). "
                                + "Part of my responsibilities was to update and backup data that was stored in mySQL database. "
                                + "I didn't know anything about programming back then. Fortunately, the query language of mySQL is "
                                + "declarative, thus it is easy to understand. It was until 2019 when I took database class at school "
                                + " in which there's MySQL in the curriculum, I started to understand what I was doing 20 years ago. "
                                + "I don't mind learning it more if there's requirement for my job.",
                img: mySQLImage
            
            }, 
            {
                name: "Scala",
                description: "I learned Scala in Programming Paradigms course at school. The professor used Scala to demonstrate how functional programming works"
                            + " He even made us to use Scala to build a whole new functional programming language, which was really cool. I think if I know Javascript, I can "
                            + "do Scala. They're not that much different.",
                img: scalaImage
            }, 
            {
                name: "Verilog",
                description: "I know, it is far-fetched. Not many programmers use Assembly, let alone Verilog. Not to mention that it isa hardware description language used " 
                                + " to model electronic systems. But in Computer Architecture class, the professor had us to implement a Computer System at gate level "
                                + "using Verilog and it was really cool. So, I just put it out here to say that I'm also open to a verilog job opportunity.",
                img: verilogImage
            }, 
            {
                name: "Assembly",
                description: "I learned Assembly in college. There's not much to talk about but I think I can manage well if I was given enough time to get familiar with it.",
                img: assemblyImage
            
            }]
    },

    {
        title: "Things I want to learn given the chance",
        skills: [
            {
                name: "anything related to programming",
                description: "When I said anything, I mean it. I love programming and I'm willing to do anything related to programming if I have chance. If there is something "
                                + "I don't know, I can always learn it. I'm not afraid of learning new thing.",
                img: everythingImage
            }]
    },

]