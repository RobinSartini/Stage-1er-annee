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
                        Kheireddine 22 ans étudiant et passionné de voyage et de photographie .
                        <p className="mb-4">
                            Passion qui met venu en voyant un couché de soleil reflété sur le Rhône.
                            Depuis je veux partagé aux autres la manière dont je vois le monde et ca via les photos que je fais a lyon et pendant mes voayges au tour du globe !
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