import {
  meta,
  shopify,
  starbucks,
  tesla,
  timhortons,
  restraunt,
  shield,
  security,
  assembly,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  mssql,
  mysql,
  nix,
  tensorflow,
  pytorch,
  python,
  java,
  php,
  blender,
  bootstrap,
  cplusplus,
  csharp,
  microsoftsqlserver,
  chatbot,
  translation,
  discord,
  portfolio,
  game,
  wordpress,
  machine,
  instagram,
  cloudbrain,
  it_assistant,
  help_desk,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: mssql,
    name: "MSSQL",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: tensorflow,
    name: "TensorFlow",
    type: "Backend",
  },
  {
    imageUrl: pytorch,
    name: "PyTorch",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: cplusplus,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: csharp,
    name: "C#",
    type: "Backend",
  },
  {
    imageUrl: blender,
    name: "Blender",
    type: "Backend",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: nix,
    name: "NixOS",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: wordpress,
    name: "Wordpress",
    type: "Frontend",
  },
  {
    imageUrl: assembly,
    name: "Assembly",
    type: "Backend",
  },
];

export const experiences = [
  //  {
  //    title: "Cyber Security Member",
  //    company_name: "Mohawk College",
  //    icon: security,
  //    iconBg: "#accbe1",
  //    date: "November 2022 to Current",
  //    points: [
  //      "Contributed as an active member, collaborating with the team to establish and optimize processes for efficient operations.",
  //      "Organized and participated in knowledge-sharing sessions, fostering engagement with an average attendance of 20 members per session.",
  //      "Stayed abreast of emerging cybersecurity technologies, tools, and methodologies throughcontinuous research.",
  //    ],
  //  },
  //  {
  //    title: "Machine Operator",
  //    company_name: "Hunter Amenities",
  //    icon: machine, // replace with the appropriate icon
  //    iconBg: "#accbe1",
  //    date: "May 2023 to Februrary 2024",
  //    points: [
  //      "Showcased enhanced communication by providing well-detailed reports to warehouse supervisors and co-workers that helped contribute to a cohesive work environment.",
  //      "Successfully managed customer returns and proactively verified customer orders/invoices.",
  //      "Oversaw product quality and managed production.",
  //      "Handled shift reports and quality assurance.",
  //    ],
  //  },
  //  {
  //    title: "Front Counter Associate",
  //    company_name: "Tim Horton's",
  //    icon: restraunt,
  //    iconBg: "#accbe1",
  //    date: "November 2022 to September 2023",
  //    points: [
  //      "Managed front counter operations, efficiently handling an average of 150 orders daily, encompassing both online and in-person transactions.",
  //      "Provided exceptional customer service, addressing an average of 30 inquiries daily and processing over 200 transactions per shift.",
  //      "Demonstrated strong multitasking abilities by balancing various tasks, including order processing, handling an average of 50 customer interactions per day, and maintaining cleanliness standards.",
  //    ],
  //  },
  {
    title: "Service Desk Technician",
    company_name: "City of Hamilton",
    icon: help_desk,
    iconBg: "#accbe1",
    date: "September 2024 to December 2024",
    points: [      
    "Resolved technical issues in Windows, including account lockouts and password resets.",
    "Documented system failures and network issues, using Ivanti ticketing system for incident tracking.",
    "Created and maintained technical documentation in OneNote, providing users with clear guidelines on system usage, troubleshooting steps, and security best practices.",
    "Leveraged knowledge in Active Directory, Cisco Webex, DNS, WINS, SCCM, and Ivanti to troubleshoot and resolve complex IT issues."
    ],
  },
  {
    title: "IT Helpdesk Technician",
    company_name: "National Steel Car LTD",
    icon: help_desk,
    iconBg: "#accbe1",
    date: "January 2024 to September 2024",
    points: [
      "Provided technical support for Windows-based systems, troubleshooting hardware, software, and network issues.",
      "Diagnosed and resolved connectivity issues for on-premise network infrastructure and VPN access.",
      "Assisted with configuring and deploying company workstations, ensuring proper security protocols.",
      "Leveraged knowledge in Microsoft Service Management Console, Exchange Online, and remote support tools to troubleshoot and resolve technical issues.",
    ],
  },
  {
    title: "Research Student",
    company_name: "Mohawk College",
    icon: summiz,
    iconBg: "#accbe1",
    date: "January 2023 to December 2023",
    points: [      
      "Researched and implemented Large Language Model (LLM) integration to enhance TEMI's conversational capabilities.",
      "Analyzed existing speech interaction limitations in TEMI and designed a solution for handling open-ended queries.",
      "Evaluated LLM platforms such as ChatGPT and Copilot, comparing latency, response quality, and real-time performance.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/sukhmancs",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "http://www.linkedin.com/in/singh-sukhmanjeet",
  },
];

export const projects = [
  {
    iconUrl: chatbot,
    theme: "btn-back-red",
    name: "SmallGPT",
    description:
      "Created the SmallGPT Chatbot, employing the Project Gutenberg Book Corpus for training purposes.",
    link: "https://github.com/sukhmancs/TextWizards/blob/main/smallGPT_pg_book_corpus_encoder_decoder_with_attention.ipynb",
  },
  {
    iconUrl: cloudbrain,
    theme: "btn-back-green",
    name: "Llama360",
    description: "Advanced next-word prediction model based on LLaMA-7B.",
    link: "https://github.com/sukhmancs/amber-train?tab=readme-ov-file",
  },
  {
    iconUrl: game,
    theme: "btn-back-blue",
    name: "Unity 3D Game",
    description:
      "Contributed significantly to the development of an immersive Unity 3D game, demonstrating proficiency in game design, graphics, and user interaction.",
    link: "https://github.com/sukhmancs/bladborne",
  },
  {
    iconUrl: portfolio,
    theme: "btn-back-pink",
    name: "3d Portfolio Website",
    description:
      "Developed a dynamic portfolio website using React, React-three-fiber, three.js, Tailwind CSS, Vite, HTML, CSS, and JavaScript, showcasing proficiency in both frontend and backend web development.",
    link: "https://github.com/sukhmancs/3dPortfolioWebsite",
  },
  {
    iconUrl: instagram,
    theme: "btn-back-black",
    name: "Instagram Clone",
    description:
      "Developed an Instagram clone leveraging React Native, Firebase, Radis, and Expo for seamless cross-platform app functionality.",
    link: "https://github.com/sukhmancs/react-native-instagram-clone/tree/master",
  },
  {
    iconUrl: wordpress,
    theme: "btn-back-yellow",
    name: "NordOS",
    description:
      "Declarative configurations for my NordOS setup, written in Nix language. This setup includes system configurations, and environment optimizations tailored for seamless development workflows.",
    link: "https://github.com/sukhmancs/nixos-configs",
  },
];
