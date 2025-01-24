import React, { useEffect, useState } from "react"

const Dashboard = () => {
    return (
        <>
        <div className="pt-[100px]">

            <div className="pl-24 pt-12">
                <p className="text-lg text-primary">Hello! I am</p>
                <h1 className="intro-title">Anowar Shakib</h1>
                <h3 className="intro-subtitle">Full Stack Developer</h3>
                <ul className="flex mb-6">
                    <li className="list-item">Web Developer</li>
                    <li className="list-item">Programmer</li>
                    <li className="list-item">Software Engineer</li>
                </ul>
                <div className="action">
                    <a
                        href="https://github.com/zonayedpca/zonayed.me/raw/master/src/data/file/MyResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Get Resume
                    </a>
                    <a href="#about" className="btn btn-outline">
                        About Me
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;
