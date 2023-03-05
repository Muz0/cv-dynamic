const jobs = [
  {
    title: "ENGROUP LLC",
    position: "Junior IT Specialist",
    responsibilities: [
      "Install and set up computer systems at various locations.",
      "Design and install networks and video surveillance systems.",
      "Perform basic hardware diagnostics and assess repair profitability.",
      "Manage Teltonika GPS systems.",
    ],
    date: "November 2022 - Nowadays",
  },
  {
    title: "Crazy Inn",
    position: "Technical Support/Marketing Tools Manager",
    responsibilities: [
      "Provide technical support for smooth workflow at multiple locations. ",
      "Manage small networks and video registration systems in public places.",
      "Deploy network marketing tools and report issues to developers for debugging.",
    ],
    date: "August - November 2022",
  },
  {
    title: "AIESEC in Azerbaijan",
    position: "International Relations Manager",
    responsibilities: [
      "Manage international development through partnerships with committees in Europe and Asia. ",
      "Conduct market research to meet market demand and manage project lists.",
      "Ensure exchange standards are met through working with the local committee's executive board.",
    ],
    date: "February 2022 - August 2022",
  },
  {
    title: "Azerbaijan Chemical Society",
    position: "Graphic Designer",
    responsibilities: [
      "Design posters and logos for events and seminars using Canva or Photoshop, with research on the needs of each promotion company.",
      "Utilize various promotion channels to reach the target audience effectively.",
    ],
    date: "December 2021 - February 2022",
  },
];

let counter = 0;

for (const job of jobs) {
  const hr = document.createElement("hr");
  
  const title = document.createElement("h2");
  title.setAttribute("id", `title-${counter}`);
  title.classList.add("title");
  title.innerHTML = job.title;

  const position = document.createElement("h3");
  position.setAttribute("id", `position-${counter}`);
  position.classList.add("position");
  position.innerHTML = job.position;

  const ResDateDiv=document.createElement("div");
  ResDateDiv.classList.add("fix-resp-date");
  const responsibilities = document.createElement("ul");
  responsibilities.setAttribute("id", `responsibilities-${counter}`);
  for (const responsibility of job.responsibilities) {
    const li = document.createElement("li");
    li.innerHTML = responsibility;
    responsibilities.appendChild(li);
  }
  
  ResDateDiv.appendChild(responsibilities);
  const dateP = document.createElement("p");
  dateP.classList = "job-date";
  dateP.innerHTML = job.date;
  ResDateDiv.appendChild(dateP);

  const jobDescription = document.createElement("div");
  jobDescription.setAttribute("id", `job-description-${counter}`);
  jobDescription.classList.add("work-experience");
  jobDescription.appendChild(title);  
  jobDescription.appendChild(position);
  jobDescription.appendChild(ResDateDiv);
  // jobDescription.appendChild(dateP);

  const workExperience = document.createElement("div");
  workExperience.setAttribute("id", `work-experience-${counter}`);
  workExperience.appendChild(hr)
  workExperience.appendChild(jobDescription);
  document.getElementById("jobs").appendChild(workExperience);

  counter++;
}

