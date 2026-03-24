import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Stock Helper – Stock Market Analysis Platform",
        description: "Built a web application using Python and Django to analyze and monitor real-time stock market data. Integrated external financial APIs, improved database query performance by ~20% via indexing, and implemented authentication with role-based access control.",
        roles: ["Python", "Django", "REST APIs", "PostgreSQL"],
        image: "/images/feature-work/feature-img-1.png"
    },
    {
        title: "Paper Trading Simulator – Full Stack Web Application",
        description: "A full-stack paper trading app allowing users to practice stock trading with virtual funds and real-time market data. Built REST APIs with FastAPI and SQLAlchemy, designed MySQL schema, and created a React dashboard for stock charts and portfolio performance.",
        roles: ["FastAPI", "React", "MySQL", "SQLAlchemy"],
        image: "/images/feature-work/feature-img-2.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};