import { meta, shopify, starbucks, tesla, timhortons, restraunt } from "../assets/images";
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
    game
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
    }
];

export const experiences = [
    {
        title: "Front Counter Associate",
        company_name: "Tim Horton's",
        icon: restraunt,
        iconBg: "#accbe1",
        date: "November 2022 to December 2023",
        points: [                        
            "Managed front counter operations, efficiently handling an average of 150 orders daily, encompassing both online and in-person transactions.",
            "Provided exceptional customer service, addressing an average of 30 inquiries daily and processing over 200 transactions per shift.",
            "Demonstrated strong multitasking abilities by balancing various tasks, including order processing, handling an average of 50 customer interactions per day, and maintaining cleanliness standards.",
        ],
    },    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sukhmancs',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'http://www.linkedin.com/in/singh-sukhmanjeet',
    }
];

export const projects = [
    {
        iconUrl: chatbot,
        theme: 'btn-back-red',
        name: 'SmallGPT',
        description: 'Created the SmallGPT Chatbot, employing the Project Gutenberg Book Corpus for training purposes.',
        link: 'https://github.com/sukhmancs/TextWizards/blob/main/smallGPT_pg_book_corpus_encoder_decoder_with_attention.ipynb',
    },
    {
        iconUrl: translation,
        theme: 'btn-back-green',
        name: 'Machine Translation from French to English',
        description: 'Engineered an advanced French-to-English machine translation system using encoder-decoder architecture with attention mechanism.',
        link: 'https://github.com/sukhmancs/TextWizards/blob/main/translation_encoder_decoder_attention_french_english.ipynb',
    },
    {
        iconUrl: game,
        theme: 'btn-back-blue',
        name: 'Unity 3d Game',
        description: 'Contributed significantly to the development of an immersive Unity 3D game, demonstrating proficiency in game design, graphics, and user interaction.',
        link: 'https://drive.google.com/file/d/1w1MJTiSUrRJvLIgaivQi0-Awl5c8-FEw/view?usp=sharing',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-pink',
        name: '3d Portfolio Website',
        description: 'Developed a dynamic portfolio website using React, React-three-fiber, three.js, Tailwind CSS, Vite, HTML, CSS, and JavaScript, showcasing proficiency in both frontend and backend web development.',
        link: 'https://github.com/sukhmancs/3dPortfolioWebsite',
    },
    {
        iconUrl: nix,
        theme: 'btn-back-black',
        name: 'NixOS Deployment Scripts',
        description: 'Leveraged the power of Nix language with flakes enabled to create a robust and modular system configuration for NixOS. The use of flakes allows for reproducibility and declarative package management, ensuring a consistent and easily shareable configuration.',
        link: 'https://github.com/sukhmancs/nixos-config',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Pop a Balloon',
        description: 'Crafted an entertaining balloon-popping game using the dynamic capabilities of JavaScript. The game invites players to burst balloons with a simple click, demonstrating the power of web technologies in delivering interactive and engaging user experiences. With a clean and responsive design, the project showcases the seamless integration of HTML, CSS, and JavaScript to create a fun and accessible game for users of all ages.',
        link: 'https://sukhmancs.github.io/a4/index.html',
    }
];