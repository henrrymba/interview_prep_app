import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-6 max-w-lg">
                    <h2>Prepárate para una entrevista técnica con el poder de la IA</h2>
                    <p className="text-lg">Práctica preguntas reales de una entrevista técnica y recibe feedback instantáneamente</p>

                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Empezar una entrevista</Link>
                    </Button>
                </div>

                <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden"/>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Tus Entrevistas</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Hacer entrevista</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}

                    {/*<p>Todavía no tienes entrevistas disponibles</p>*/}
                </div>
            </section>
        </>
    )
}
export default Page
