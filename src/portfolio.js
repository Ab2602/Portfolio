/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhinav Tripathi",
  title: "Hi all, I'm Abhinav",
  subTitle: emoji(
    "DevOps Engineer with production experience on AWS and GCP 🚀 Specialized in container orchestration (K8s, EKS, GKE), infrastructure as code (Terraform), and CI/CD (Jenkins, GitLab). Delivered 60–70% faster deployment and monitoring setup."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
  showTerminal: true // Show terminal intro
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ab2602",
  linkedin: "https://www.linkedin.com/in/abhinavtripathi-gtx",
  gmail: "abhitrip2002@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DevOps Engineer specializing in cloud infrastructure, container orchestration, and CI/CD pipelines",
  skills: [
    "Design and deploy scalable Kubernetes clusters on AWS (EKS) and GCP (GKE) with production-ready configurations",
    "Build Infrastructure as Code (IaC) solutions using Terraform for automated cloud resource provisioning",
    "Implement CI/CD pipelines with Jenkins and GitLab CI to achieve 60-70% faster deployment cycles",
    "Set up comprehensive monitoring and observability stacks with Prometheus, Grafana, and Datadog",
    "Manage containerized applications with Docker and orchestrate workloads using Kubernetes operators",
    "Automate infrastructure lifecycle management and enforce security best practices with RBAC and short-lived credentials"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "go",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "prometheus",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "grafana",
      fontAwesomeClassname: "fas fa-chart-bar"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajasthan Technical University",
      logo: require("./assets/images/rtuLogo.jpg"),
      subHeader: "Bachelor's of Technology in Computer Science",
      duration: "2020 - 2024",
      desc: "CGPA - 9.71",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "The Creative Brain Academy",
      logo: require("./assets/images/schoolLogo.png"),
      subHeader: "Senior Secondary",
      duration: "2019 - 2020",
      desc: "Percentage - 93.40",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "AppPerfect Corporation",
      companylogo: require("./assets/images/appPerfectLogo.ico"),
      companyBannerColor: "rgb(255, 165, 41)", // #ffa529 - matches App Perfect brand
      date: "September 2025 – Present",
      location: "Udaipur",
      desc: "DevOps Engineer specializing in Kubernetes, cloud infrastructure, and CI/CD automation.",
      descBullets: [
        "Built and operated HPC Kubernetes workloads with Slurm/Slurm Operator across AWS and GCP; enabled reliable job scheduling and resource isolation for high-compute workloads.",
        "Deployed and maintained 3+ production clusters (EKS, GKE) via Terraform; automated full provisioning and lifecycle in GitLab CI.",
        "Shipped a reusable observability module (Prometheus, Grafana, Loki) in Terraform for AWS, GCP, and OCI, cutting net new cluster monitoring setup by 60%.",
        "Cut deployment time by 70% with Jenkins and K8s on AWS; enabled horizontal scaling for 5+ microservices.",
        "Eliminated long-lived cloud credentials by integrating Teleport with GitLab CI (short-lived access); strengthened compliance and rotation.",
        "Reduced mean time to detect production failures by 70% using Datadog dashboards and APM traces."
      ]
    },
    {
      role: "Software Developer",
      company: "Secure Meters Ltd",
      companylogo: require("./assets/images/secureLogo.jpg"),
      date: "January 2024 – September 2025",
      location: "Udaipur",
      desc: "Software Developer focused on building scalable applications and implementing CI/CD practices.",
      descBullets: [
        "Designed and shipped a centralized SSO server for 4+ internal applications, enabling single sign-on and stronger access control.",
        "Migrated a legacy Windows app to a .NET Core async background service; reduced maintenance overhead and improved scalability.",
        "Drove CI/CD with Jenkins: unit tests and coverage gates on every commit; stable releases for 2+ product lines."
      ]
    },
    {
      role: "Research Intern",
      company: "Indian Institute of Technology Hyderabad",
      companylogo: require("./assets/images/iitLogo.jpg"),
      date: "June 2023 – August 2023",
      location: "Hyderabad",
      desc: "Research Intern working on blockchain consensus algorithms and distributed systems.",
      descBullets: [
        "Researched consensus algorithms and their impact on blockchain security and scalability; published findings in a team report.",
        "Streamlined contract creation and management in Sawtooth Hyperledger using Rust; achieved 30% faster turnaround."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/semseat.webp"),
      projectName: "SemsEat",
      projectDesc: "A dynamic food ordering platform for corporate meeting rooms, facilitating seamless ordering and delivery logistics.",
      // footerLink: [
      //   {
      //     name: "Source Code",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/spark.jpg"),
      projectName: "Sparktrip",
      projectDesc: " Empowered users to effortlessly browse, book, and evaluate hotels based on ratings, prices etc.",
      // footerLink: [
      //   {
      //     name: "Source Code",
      //     url: "https://github.com/Ab2602/Sparktrip"
      //   }
      // ]
    },
    {
      image: require("./assets/images/curenimal.webp"),
      projectName: "Curenimal",
      projectDesc: "Animal healthcare platform, offering immediate first-aid suggestions for various injuries.",
      // footerLink: [
      //   {
      //     name: "Source Code",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.geeksforgeeks.org/how-to-set-start-value-as-0-in-chartjs/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
      title: "How to Set Start Value as “0” in Chart.js ?",
      description:
        "In this article, we are going to discuss how can we set 0 as a start value for any of the axes. we need to set 0 as a start value for a chart in Chart.js."
    },
    {
      url: "https://www.geeksforgeeks.org/emberjs-object-model/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
      title: "EmberJS Object Model",
      description:
        "Ember.js is an open-source JavaScript framework for building web applications, and it follows the Model-View-Controller (MVC) architectural pattern."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7229932989",
  email_address: "abhinav.tripathi.work.mail@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
