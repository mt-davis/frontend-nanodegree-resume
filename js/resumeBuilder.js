var bio = {
    "name" : "Marquese Davis",
    "role" : "Ruby on Rails and Front-End Developer",
    "contacts" : {
        "mobile" : "203-589-xxxx",
        "email" : "maquese.davis@gmail.com",
        "github" : "mt-davis",
        "twitter" : "@mtdavis00",
        "location" : "Bridgeport, CT"
    },
    "welcomeMessage": "I love coding and helping as many people to learn how to code.",
     "skills" :  ["HTML5","CSS3","JavaScript","Bootstrap","Ruby on Rails", "jQuery","AWS", "Heroku"],
     "biopic" : "images/fry.jpg"
};
var work = {
    "jobs" : [
      {
        "employer": "Bridges... A Community Support",
        "title": "Director of IT",
        "dates": "2011-Present",
        "location": "Milford, CT",
        "description": "Lead Software developer and IT leader for organzation"
      }
    ]
};
var education = {
    "schools" : [
       {
        "name" : "Charter Oak State College",
        "dates" : "2016-Present",
        "location" : "New Britain, CT",
        "degree" : "Bachelors Of Information Technology",
        "majors" : ["Information Technology"]
       }
    ],
   "onlineCourses" : [
        {
           "title" : "Front End Nanodegree",
           "School" : "Udacity",
           "date" : "Ongoing",
           "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
           "title" : "Software Product Management",
           "School" : "Coursera",
           "date" : "Ongoing",
           "url" : "https://www.coursera.org/"
        }
   ]
};

var projects = {
    "projects" : [
    {
         "title" : "Clinical Application",
         "dates" : "2015",
         "description" : "This project was to hold the clinical information of clients.",
         "images" : ["images/inake.jpg"],
         "link"  : "https://github.com/mt-davis/intakelog"
    }
    ]
};


bio.display = function()
{
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts, #footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts, #footerContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts, #footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedLocation);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);
    if (bio.skills.length > 0)
    {
       $("#header").append(HTMLskillsStart);
       for(var i in bio.skills){
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
       }
    }
};


bio.display();