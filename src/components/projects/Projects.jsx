import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// import "swiper/swiper-bundle.css";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import projects from '../../data/projects-info';
import Card from '../card/Card';
import Button from '../button/Button';
import './projects.scss';

import iconFire from './../../img/icon_fire.png';

const Projects = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="projects" id="anchorprojects">
      <div className="container">
        <h2 className="projects__title" id="main">
          Наші кейси
        </h2>
        <div className="projects__grid">
          <Swiper
            spaceBetween={100}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {projects.map((project) => {
              return (
                <SwiperSlide key={project.id}>
                  <div className="projects__wrapper">
                    <div className="project-main">
                      <div className="project-main__image">
                        <img
                          src={require(`./../../img/${project.image}`)}
                          alt="Main"
                        />
                      </div>
                      <ul className="project-main__tags">
                        {project.tags.map((tag) => {
                          return (
                            <li className="project-main__tag" key={tag.id}>
                              {tag.tag === 'icon_fire.png' ? (
                                <img src={iconFire} alt="Fire" />
                              ) : (
                                tag.tag
                              )}
                            </li>
                          );
                        })}
                      </ul>
                      <h2 className="project-main__name">{project.title}</h2>
                      <p className="project-main__description">
                        {project.desc}
                      </p>

                      <Button href={project.link} />
                    </div>
                    <div className="project-stats first-project" id="statOne">
                      <div className="project-stats__stat">
                        <h3 className="project-stats__name">
                          Кількість переглядів
                        </h3>
                        <span className="project-stats__number">
                          {project.stats.coverage}
                        </span>
                      </div>

                      <div className="project-stats__stat">
                        <h3 className="project-stats__name">Лайків</h3>
                        <span className="project-stats__number">
                          {project.stats.likes}
                        </span>
                      </div>

                      <div className="project-stats__stat">
                        <h3 className="project-stats__name">Охоплення</h3>
                        <span className="project-stats__number">
                          {project.stats.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="projects-cards">
            <Swiper
              onSwiper={setThumbsSwiper}
              slidesPerView={4}
              spaceBetween={10}
            >
              {projects.map((project) => {
                return (
                  <SwiperSlide key={project.id}>
                    <Card project={project} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
