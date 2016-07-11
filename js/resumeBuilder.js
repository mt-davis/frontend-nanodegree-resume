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
       for (var i in bio.skills){
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
       }
    }
};


// work 
var work = {
    "jobs" : [
      {
        "employer": "Bridges... A Community Support",
        "title": "Director of IT",
        "dates": "2011-Present",
        "location": "Milford, CT",
        "description": "Designs and implements key software solutions for business development, including the private LaaS cloud environment for three collaborating mental health organizations. Developed and deployed custom (IaaS) private cloud environment for EHR at RackSpace.com as Principal Architect. Designed and implemented a web-based clinical intake application using Ruby on Rails to track potential clients/patients on Heroku PaaS."
      },
      //second job
      {
        "employer":"Community Health Services, Inc",
        "title": "Director of Management Information Technology",
        "dates": "October 2004-October 2011",
        "location": "Hartford, CT",
        "description": "Led the vision and initiatives of the IT team to add value to the business in line with the organization’s mission statement. Sought and established relationships with external businesses and IT leaders to strategize the most effective IT plans. Supervised the core operations and development functions of IT, including vender relations, department budgeting, and HR."
      }
    ]
};

//displaying employment information
work.display = function()
{
    for(var job in work.jobs) {
         $("#workExperience").append(HTMLworkStart);
         var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
         var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
//education
var education = {
    "schools" : [
       {
        "name" : "Charter Oak State College",
        "dates" : "2016-Present",
        "location" : "New Britain, CT",
        "degree" : "Bachelors Of Information Technology",
        "majors" : ["Information Technology"]
       },
       {
        "name" : "American InterContinental University",
        "dates" : "2008-2009",
        "location" :"Schaumburg, Illinois",
        "degree" : "Associate of Art in Business Administration and Information Technolog",
        "majors" : ["Business Administration and Information Technology"]
       },
       ],
     
    
   "onlineCourses" : [
       { "school": "Udacity",
			"title": "Front-End Web Developer Nanodegree",
			"completed": "In Progress",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{ "school": "Coursera",
			"title": "Johns Hopkins University The Data Scientist’s Toolbox",
			"completed": "March 2015",
			"url": "https://www.coursera.org/account/accomplishments/verify/CUUPTLWYS3"
		},
		{ "school": "Coursera",
			"title": "Yonsei University Big Data, Cloud Computing, & CDN Emerging Technologies",
			"completed": "July 2015",
			"url": "https://www.coursera.org/account/accomplishments/verify/YEKWLFWZ5VNX"
		},
		{ "school": "Coursera",
			"title": "University of Alberta Introduction to Software Product Management",
			"completed": "January 2016",
			"url": "https://www.coursera.org/account/accomplishments/verify/J9FZ2LWCGUBS"
		},	
		{ "school": "Coursera",
			"title": "University of Alberta Software Processes and Agile Practices",
			"completed": "Febuary 2016",
			"url": "https://www.coursera.org/account/accomplishments/verify/M578VRNL8U32"
		},
		{ "school": "edX",
			"title": "MIT edX Professional Certificate for Startup Success",
			"completed": "Febuary 2016",
			"url": "https://courses.edx.org/certificates/a2ba0430dfcf4b37a309a436b5e2382c"
		}
	]
};
//displaying education infformation
education.display = function () {
    'use strict';
    var formattedHtml, edu;
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        // start the HTML
        $("#education").append("<div id=\"education-foldable-content\"></div>");
        for (edu in education.schools) {
            if (education.schools.hasOwnProperty(edu)) {
                $("#education-foldable-content").append(HTMLschoolStart);
                formattedHtml = HTMLschoolName.replace("%data%", education.schools[edu].name);
                $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].location));
                $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].major));
            }
        }
        // start the HTML
        $(".education-entry:last").append(HTMLonlineClasses);
        for (edu in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(edu)) {
                formattedHtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
                $(".education-entry:last").append(formattedHtml);
                $(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[edu].school));
                $(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[edu].completed));
            }
        }
    }
};

var projects = {
    "projects" : [
     {
         "title" : "Photo App Front-End in Bootstrap",
         "datesWorked" : "2015-Present",
         "description" : "Photo App Front-End in Bootstrap.",
         "images" : ["images/project-2.png"],
         "url"  : "https://github.com/mt-davis/photo-demo"
    },
    {
         "title" : "Clinical Application",
         "datesWorked" : "2015-Present",
         "description" : "This project was to hold the clinical information of clients.",
         "images" : ["images/intake.jpg"],
         "url"  : "https://github.com/mt-davis/intakelog"
    },
     {
         "title" : "Yelper",
         "datesWorked" : "2015-Present",
         "description" : "Yelp Like Website for Restaurant Reviews using Ruby on Rails.",
         "images" : ["images/project-1.jpg"],
         "url"  : "https://github.com/mt-davis/yelpdemo"
    },
    {
         "title" : "Google Mapper",
         "datesWorked" : "2016-Present",
         "description" : "An app to map out the location of users by the address field using google maps API",
         "images" : ["images/project-3.png"],
         "url"  : "https://github.com/mt-davis/google-mapper"
    }
    ]
};

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
};


//online.display = function ()
//{
// $'education').append.(HTMLonlineClasses);
//};


bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);