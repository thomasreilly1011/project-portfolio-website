let inputData = {
    /* Home Page Content */
    "full_name":"Thomas Reilly",
    "sub_title":"Computer Science Student And Aspiring Software Engineer",
    "github_link":"https://github.com/thomasreilly1011",
    "linked_in_link":"https://www.linkedin.com/in/thomas-reilly-590513171/",
    "twitter_link":"https://twitter.com/ThomasEdreilly",

    /* About Section */
    "profile_pic_url":"images/me.png",
    "about_me_paragraph":"Hi, I'm Thomas Reilly. I am a twenty year old Computer Science student living in Dublin, Ireland. I am largely interested in pursuing a career as a Software/Web engineer, however, I am always open to new experiences. I built this website so you can learn about me, my skills as a software engineer and also, to showcase a regularly updated portfolio of my work. I am currently seeking an internship for my 3rd year work placement module.",
    
    /* CV Details */
    "education":[
        {
            "type":"BSc Computer Science",
            "school":"University College Dublin",
            "start_date":"Sept 2018",
            "end_date":"Present",
            "description":"I am currently in my Second year of Computer Science in UCD and I expect to graduate in May of 2022. Through my course I have developed many skills as a software developer, most notably in the design of algorithms and data structures, use of both functional and object oriented programming, aswell as various other software engineering techniques. I am also active in extra-curricualr activites attending and co-organising tech events with UCD Netsoc."
        }
    ],
    "work":[
        {
            "workplace":"Software Engineering Projects",
            "description":"As part of our studies in UCD we are tasked with Software Engineering projects which we perform both individually and in groups. Through these projects we are exposed to some real-world project management techinques including, effective use of version control with git, agile software-development techniques, and a range of testing methodologies. Most importantly, I have experience working in a team environment and I have a strong understanding of what it takes to work effectively in a team with regard to, communication, organisation and colaboration."
        },
        {
            "workplace":"Part-Time Work",
            "address":"Amber Springs Hotel, Gorey, Co. Wexford",
            "start_date":"December 2018",
            "end_date":"Present",
            "description":"I have been working as a waiter at the Amber Springs hotel since December 2018. During my time here I have served in their 4 resturaunts aswell as in weddings and other functions. Working in a busy service environment has taught me the importance of communication and leadership in the workplace. "
        }
    ],
    "skills_paragraph":"I am always equipping myself with the latest technologies out there. Through my studies in UCD I have become particularly familiar with C/C++ and Java, using them to develop algorithms and data structures as well as larger scale software engineering projects. In my spare time I am always exposing myself to new programming languages and frameworks. Most notably in the creation of Web Applications with React and Node JS. I also have basic experience with Python having used it to write basic scripts and also in experimenting with machine learning.",

    "interests":["I have been playing music since the age of six, and have taken part in several orchestral and traditional music groups performing in national and international festivals.",
        "I have a strong interest in Irish culture and history. I am currently taking a series of structured electives in Irish History during my studies at UCD.",
        "I am also active in other UCD clubs and societies, attending speeches, debates and more recently UCD canoe club."],

    /* Values to be displayed on Skills Bar Chart */
    "skills": [
        {type: "Java", level: 90},
        {type: "Python", level: 50},
        {type: "Node.js", level: 70},
        {type: "React.js", level: 40},
        {type: "C/C++", level: 80},
    ],

    /* Content to be displayed in Portfolio Section */
    "portfolio":[
        {
            title:"Scrabble Game",
            body:["Built as my Stage 2 Software Engineering Project, this is a fully functional Scrabble Game built for Desktop with Java and JavaFX.", "The game features an easy to use user interface, aswell as an AI programmed Bot that you can play against. The game follows the Golden Scrabble rules with a built-in Dictionary for word challenges.", ],
            imgurl:["images/scrabble-project.jpg"],
            githuburl:"https://github.com/UCD-COMP20050/Christian-Coders",
        },
        {
            title:"Messaging App",
            body:["A web based messaging app built with Node.js as part of an online Node.js course.", "The app has a simple front end that allows you to select a name and join a chat room. Once in a chat room, you can send messages to other users in the same room as well as send your current location.", "The app makes use of Node's asynchronous capabilities and the socket.io library to provide real-time messaging and location retrieval."],
            imgurl: ["images/chat-app-project.png", "images/chat-app-project-2.png"],
            githuburl:"https://github.com/thomasreilly1011/node-messaging-app",
            websiteurl:"http://boytime-messaging-app.herokuapp.com/"
        },
        {
            title:"Personal Website",
            body:["You're look at it! My personal website built with React.js and React Bootstrap. The website features an easily modifiable config file that allows me to easily update the website with new information over time.", "Not only this, but the website is completely customisable and can be made your own by adding your own data. A guide on how to do this can be found on the github page below."],
            imgurl:["images/personal-web.png"],
            githuburl:"",
            websiteurl:""
        },
        {
            title:"Unix Programming Portfolio",
            body:["An array of programs built especiall for unix systems as part of my Unix Programming class in UCD.", "Included is, a 'head' mimic program, a bash shell mimic, a multithreaded program for computing matrix multiplicaton, a bash script for oragnising a project file structure and a python script for analysing apache log files. More detail on each can be found in the github repository below."],
            imgurl:["images/unix-graphic.png"],
            githuburl:"",
            websiteurl:""
        },
        {
            title:"Algorithms Portfolio",
            body:["A series of Algorithms designed and built in Java as part of my Algorithms class in UCD.", "This repository contains a range of sorting algorithms, pattern-search algorithms and compression algorithms.", "Featured also is a fully functional compression suite based off huffman encoding. The entire portfolio aswell as guide on how to use it can be found on the github page below."],
            imgurl:["images/comparison.png"],
            githuburl:"",
            websiteurl:""
        },
        {
            title:"Data Structures Portfolio",
            body:["A collection of Data Structures designed and built in Java as part of my Databases class in UCD.", "Included is a series of data strucutes ranging from simple linked lists, to hashmaps and balanced binary search trees.", "The data structures were built with object oriented programming in mind, each of them occupy their own class and work in a heirarchy sharing code with super classes and adhering to Interfaces."],
            imgurl:["images/node-graphic.png"],
            githuburl:"google.ie",
            websiteurl:""
        },
    ],

    /* Contact Details */
    email_address:"thomas.edreilly@gmail.com",
}


export default inputData;