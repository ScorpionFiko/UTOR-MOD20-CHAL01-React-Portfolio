import React from 'react';
import project_data from "../../project_data";
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
const images = require.context('../../images', true);


export default function Portfolio() {
    return (
        <article>
            <aside>
                <h2>portfolio</h2>
            </aside>
            <section className="content justify-space-between" id="portfolio">
                {
                    project_data.map((project, index) => {
                        return (
                            <section className="work " key={project.id}>

                                <img src={images(`./${project.src}`)} alt={project.alt} />
                                <section className="label">
                                    <h5>{project.name}</h5>
                                </section>
                                <section className="overlay d-flex justify-content-center align-items-center">
                                    <ul className="nav flex-row justify-content-center align-items-center">
                                        <li className="nav-item m-2">
                                            <a className="nav-link" href={project.href} target="_blank"><TbWorldWww size={70} /></a>
                                        </li>
                                        <li className="nav-item m-2">
                                            <a className="nav-link" href={project.github} target="_blank"><FaGithub size={70} /></a>
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
