import React from 'react';

export default function InterestsSection() {
    const interests = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            ),
            title: "Coding",
            description: "Passionate about writing clean, efficient code",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            ),
            title: "Web Development",
            description: "Creating responsive and user-friendly websites",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
            ),
            title: "Reading",
            description: "Expanding knowledge through books and articles",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                </svg>
            ),
            title: "Music",
            description: "Enjoying various genres of music",
        },
    ];

    return (
        <section className="py-20 bg-[#0a1120]">
            <div className="container mx-auto px-4">
                <h3 className="text-sm text-gray-400 mb-2">INTERESTS</h3>
                <h2 className="text-3xl font-bold mb-10">My Interests</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="bg-[#0f1a2b] border border-green-500/10 rounded-lg p-6 flex flex-col items-center text-center hover:border-green-500/30 transition-colors"
                        >
                            <div className="mb-4">{interest.icon}</div>
                            <h3 className="text-lg font-medium mb-2">{interest.title}</h3>
                            <p className="text-gray-400 text-sm">{interest.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}