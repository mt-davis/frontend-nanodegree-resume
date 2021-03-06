var bio = { //displying bio information
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
     "biopic" : "images/profile.jpg"
};

//displying bio information
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
       for (var i = 0; i < bio.skills.length; i++){
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
       }
    }
};

//displaying education information
var education = {
   "schools" : [  
{       
   "name":"Charter Oak State College",
   "location":"New Britain, CT",
   "degree":"Bachelors Of Information Technology",
   "majors": ["Information Technology"],
   "dates":"2016-Present",
   "url":"http://www.charteroak.edu"
},
{
   "name":"American InterContinental University",
   "location":"Schaumburg, Illinois",
   "degree":["Associate of Art in Business Administration and Information Technolog"],
   "majors":"Business Administration and Information Technology",
   "dates":"2008-2009",
   "url":"http://www.aiuniv.edu/"
}],


"onlineCourses":[  
{  
   "school":"Udacity",
   "title":"Front-End Web Developer Nanodegree",
   "dates":"In Progress",
   "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
},
{  
   "school":"Coursera",
   "title":"Johns Hopkins University The Data Scientist’s Toolbox",
   "url":"https://www.coursera.org/account/accomplishments/verify/CUUPTLWYS3",
   "dates":"March 2015"
   
},
{  
   "school":"Coursera",
   "title":"Yonsei University Big Data, Cloud Computing, & CDN Emerging Technologies",
   "url":"https://www.coursera.org/account/accomplishments/verify/YEKWLFWZ5VNX",
   "dates":"July 2015"
   
},
{  
   "school":"Coursera",
   "title":"University of Alberta Introduction to Software Product Management",
   "url":"https://www.coursera.org/account/accomplishments/verify/J9FZ2LWCGUBS",
   "dates":"January 2016"
   
},
{  
   "school":"Coursera",
   "title":"University of Alberta Software Processes and Agile Practices",
   "url":"https://www.coursera.org/account/accomplishments/verify/M578VRNL8U32",
   "dates":"Febuary 2016"
   
},
{  
   "school":"edX",
   "title":"MIT edX Professional Certificate for Startup Success",
   "url":"https://courses.edx.org/certificates/a2ba0430dfcf4b37a309a436b5e2382c",
   "dates":"Febuary 2016"
}
	]
};

//displaying education information
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedNameLink = formattedName.replace("#", education.schools[i].url);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var educationSchools = formattedNameLink + formattedDegree + formattedDates + formattedLocation + formattedMajor;
        $(".education-entry:last").append(educationSchools);
    }
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].schools);
        var formattedTitleLink = formattedTitle.replace("#", education.onlineCourses[i].url);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        var formattedURLLink = formattedURL.replace("#", education.onlineCourses[i].url);
        var educationOnline = formattedTitleLink + formattedSchool + formattedDates + formattedURLLink;
        $(".education-entry:last").append(educationOnline);
    }
};
// displying work information 
var work = {
    'jobs': [{
            'employer': 'Bridges... A Community Support',
            'title': 'Director of IT Software Developer',
            'dates': '2011-Present',
            'location': 'Milford, CT',
            'description': 'Designed and implemented key software solutions using Ruby on Rail, HTML and CSS3 for a non-profit mental health organizations that employed 160 + employees. Developed and deployed custom (IaaS) private cloud environment for EHR at RackSpace.com as Principal Architect. This saved the orginzation over $500,000 in datcenter construction and $90,000 yearly for three collaborating mental health organizations that employed 400 + employees. Designed and implemented a web-based clinical intake application using Ruby on Rails to track over 500 + clients on Heroku PaaS. Used JSON and other API’s to gather data for applications.'
        },
        //second job
        {
            'employer': 'Community Health Services, Inc',
            'title': 'Director of Management Information Technology',
            'dates': 'October 2004-October 2011',
            'location': 'Hartford, CT',
            'description': 'Led the vision and initiatives of the IT team to add value to the business in line with the organization’s mission statement. Sought and established relationships with external businesses and IT leaders to strategize the most effective IT plans. Supervised the core operations and development functions of IT, including vender relations, department budgeting, and HR.'
        }
    ]
};

     
work.display = function(){
  $("#workExperience").append(HTMLworkStart);
  //if(this.jobs.length > 0){
   // for(job in this.jobs){
   for (var i = 0; i < work.jobs.length; i++) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
      var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
      var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedDescription);
    //}
  }
};

//displaying project information
var projects ={  
   "projects":[  
      {  
         "title":"Photo App Front-End in Bootstrap",
         "dates":"2015-Present",
         "description":"Photo App Front-End in Bootstrap.",
         "images":[  
            "images/project-2.png"
         ],
         "url":"https://github.com/mt-davis/photo-demo"
      },
      {  
         "title":"Clinical Application",
         "dates":"2015-Present",
         "description":"This project was to hold the clinical information of clients.",
         "images":[  
            "images/intake.jpg"
         ],
         "url":"https://github.com/mt-davis/intakelog"
      },
      {  
         "title":"Yelper",
         "dates":"2015-Present",
         "description":"Yelp Like Website for Restaurant Reviews using Ruby on Rails.",
         "images":[  
            "images/project-1.jpg"
         ],
         "url":"https://github.com/mt-davis/yelpdemo"
      },
      {  
         "title":"Google Mapper",
         "dates":"2016-Present",
         "description":"An app to map out the location of users by the address field using google maps API",
         "images":[  
            "images/project-3.png"
         ],
         "url":"https://github.com/mt-davis/google-mapper"
      }
   ]
};

//displaying project information
projects.display = function(){
    for (var i = 0; i < projects.projects.length; i++) {
  $('#projects').append(HTMLprojectStart);
  //if(this.projects.length > 0){
    //for(project in this.projects){
      var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
      var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);
      $(".project:last").attr("href",projects.projects[i].url);

      for(image in projects.projects[i].images){
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
   // }
  }
};

bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);