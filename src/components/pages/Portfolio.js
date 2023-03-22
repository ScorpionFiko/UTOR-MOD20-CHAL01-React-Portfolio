import React from 'react';
import project_data from "../../project_data";
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';


export default function Portfolio() {
    return (
        <article>
            <aside>
                <h2>portfolio</h2>
            </aside>
            <section className="content justify-space-between" id="portfolio">
                {
                    project_data.map((project, index) => {
                        console.log(`"${project.src}"`)
                        return (
                            <section className="work ">

                                <img src={require('../../images/sm-profile.jpg')} alt={project.alt} />
                                <section className="label">
                                    <h5>{project.name}</h5>
                                </section>
                                <section className="overlay d-flex justify-content-center align-items-center">
                                    <ul className="nav flex-row justify-content-center align-items-center">
                                        <li className="nav-item m-2">
                                            <a className="nav-link" href={project.href}><TbWorldWww size={70} /></a>
                                        </li>
                                        <li className="nav-item m-2">
                                            <a className="nav-link" href={project.github}><FaGithub size={70} /></a>
                                        </li>
                                    </ul>
                                </section>
                            </section>)
                    })
                }

            </section>
        </article>
    );
}
