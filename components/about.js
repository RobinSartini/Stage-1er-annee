import React from "react"
import Image from "next/image"
import pro from "../public/pro.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-slate-50 lg:text-5xl dark:text-dark">
                        I am 
                    </h1>
                    <h1 className="text-2xl font-bold text-slate-50 lg:text-5xl dark:text-dark">
                        a PhotoGrapher
                    </h1>
                    <div className="mt-6 text-slate-50 dark:text-dark">
                        <p className="mb-4">
                        Kheireddine 
                        <p className="mb-4">
                        Je m'appelle Kheireddine, j'ai 22 ans, étudiant et passionné par le voyage et la photographie.
Ma passion est née d’un instant magique : un coucher de soleil se reflétant sur les eaux du Rhône. Depuis, j’ai à cœur de partager ma vision unique du monde à travers l’objectif de mon appareil photo, que ce soit à Lyon ou lors de mes aventures aux quatre coins du globe.
                        </p></p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-3 lg:px-1 mb-3">
                    <Image
                        src={pro}
                        alt="Profile"
                        priority={true}
                        width={425}
                        height={650}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}
export default About;
