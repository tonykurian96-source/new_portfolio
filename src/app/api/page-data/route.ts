import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Python Full Stack Developer Intern — SMEC Labs",
        location: "Kerala, India",
        startYear: "Jun 2025",
        endYear: "Jan 2026",
        bulletPoints: [
            "Built and optimized backend modules using Python and Django supporting multiple application features.",
            "Developed and connected 5+ REST API endpoints enabling communication between frontend and backend systems.",
            "Resolved application bugs and improved system stability during development cycles.",
            "Collaborated with a development team using Git version control and agile workflows."
        ]
    },
]

const educationData = [
    {
        date: "2022 – 2025",
        title: "Bachelor of Computer Applications (BCA)",
        subtitle: "Mahatma Gandhi University, Kottayam"
    }
];

const certificationsData = [
    {
        date: "Dec 2024 – Mar 2025",
        title: "Python Internship",
        subtitle: "LCC Computer Education — Hands-on industry exposure"
    },
    {
        date: "Jun 2025 – Jan 2026",
        title: "Python Full Stack Development Course",
        subtitle: "SMEC Technologies, Kaloor, Kochi"
    },
    {
        date: "Mar 2026",
        title: "AWS Technical Essentials",
        subtitle: "Amazon Web Services (AWS)"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Stock Helper", url: "#" },
        { name: "Paper Trading Simulator", url: "#" },
    ],
    sideProjects: [
        { name: "Men's Store — E-commerce", url: "#" },
        { name: "REST API with FastAPI", comingSoon: true },
        { name: "React Dashboard", comingSoon: true },
        { name: "Portfolio Website", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        certificationsData,
        projectOverview
    });
};