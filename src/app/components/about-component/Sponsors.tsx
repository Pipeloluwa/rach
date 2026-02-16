import Image from "next/image";
import React from "react";

export const Sponsors = () => {
    const sponsors = [
        {
            name: "HI Logo",
            src: "/sponsors/HI LOGO 2.png",
        },
        {
            name: "Value 360",
            src: "/sponsors/siedihub-logo.jpeg",
        },
        {
            name: "SiediHub",
            src: "/sponsors/SiediHub.png",
        }
    ];

    return (
        <section className="w-full py-16 bg-white/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our Partners & Sponsors
                    </h2>
                    <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                        >
                            <Image
                                src={sponsor.src}
                                alt={sponsor.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 192px, 256px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
