import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import resumeFile from "../../downloads/StefanMarinov-Resume.pdf";
import skills_data from "../../skills_data";

export default function Resume() {
  return (
    <section>
      <article>
        <aside>
          <h2>Resume</h2>
        </aside>

        <section className="content justify-content-between" id="info">
          <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-8 col-sm-11">
          <a className="nav-link" href={resumeFile} target="_blank" rel="noopener noreferrer">Resume Download<FaRegFilePdf size={30} /></a>

          </div>
       
        </section>
      </article>
      <article>
        <aside>
          <h2>skills</h2>
        </aside>

        <section className="content justify-content-center align-items-start" id="info">
        
          {
            skills_data.map((skill) => {
              return (
                <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-8 col-sm-11 card bg-light m-2 " key={skill.id}>
                  <div class="card-body">
                    <h5 class="card-title">{skill.category}</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    {
                      skill.skills.map((item) => {
                        return <li class="list-group-item">{item}</li>
                      })
                    }
                  </ul>
                </div>
              );
            })
          }

        </section>
      </article>
    </section>
  );
}
