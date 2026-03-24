import { Github } from "lucide-react";
import Link from "next/link";

const Projects = () => {
    const projectsData = [
        {
            title: "Stock Helper",
            subtitle: "Stock Market Analysis Platform",
            github: "https://github.com/tonykurian96-source/Stock-Helper-Stock-Market-Analysis-Platform", 
            bulletPoints: [
                "Built a web application using Python and Django to analyze and monitor real-time stock market data.",
                "Incorporated external financial APIs to retrieve live stock prices and historical market information.",
                "Improved database query performance through indexing and optimization, reducing response time by approximately 20%.",
                "Applied authentication and role-based access control to securely manage user accounts."
            ]
        },
        {
            title: "Men’s Store",
            subtitle: "E-commerce Web Application",
            github: "https://github.com/tonykurian96-source/Men-s-Store-E-commerce-Web-Application-", 
            bulletPoints: [
                "Engineered an e-commerce platform supporting product catalog management, shopping cart functionality, and order processing.",
                "Structured backend database models and application logic using Django and MongoDB.",
                "Enhanced checkout workflow through dynamic cart functionality.",
                "Designed responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript."
            ]
        },
        {
            title: "Paper Trading Simulator",
            subtitle: "Full Stack Web Application",
            github: "https://github.com/tonykurian96-source/trading-simulator", 
            bulletPoints: [
                "Built a full-stack paper trading application that allows users to practice stock trading with virtual funds and real-time market data.",
                "Developed REST APIs using FastAPI and SQLAlchemy to manage portfolios, trades, and transaction history.",
                "Leveraged external APIs to fetch live stock prices and chart data.",
                "Designed a MySQL database schema to track users, holdings, and trading activity.",
                "Created a React-based dashboard to display stock charts and portfolio performance."
            ]
        }
    ];

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-col gap-5">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Projects</p>
                        </div>
                    </div>
                    <div className="border-t border-primary/10">
                        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
                            {projectsData?.map((value, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                                    >
                                        <div className="flex flex-wrap gap-5 items-center justify-between">
                                            <div className="flex flex-col gap-1">
                                                <h5 className="text-xl font-semibold">{value.title}</h5>
                                                <p className="text-sm text-primary">{value.subtitle}</p>
                                            </div>
                                            <Link 
                                                href={value.github} 
                                                target="_blank" 
                                                className="flex items-center gap-2 border border-primary/10 hover:bg-primary/5 transition-colors rounded-lg py-2 px-4 group"
                                            >
                                                <Github className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                                                <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">GitHub</span>
                                            </Link>
                                        </div>
                                        <ul className="flex flex-col gap-2">
                                            {value.bulletPoints.map((point, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-base font-normal text-secondary"
                                                >
                                                    <span className="w-2.5 h-2.5 text-secondary">•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
