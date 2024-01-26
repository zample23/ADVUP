import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import { useSwiper } from "swiper/react";

// import { useState } from "react";

import projects from "../../data/projects-info";
import Card from "../card/Card";
import Button from "../button/Button";
import "./projects.scss";

// import mainImage1 from "./../../img/projects_main_image.png";
// import mainImage2 from "./../../img/projects_main_image_2.jpg";
// import mainImage3 from "./../../img/projects_main_image_3.jpg";
// import mainImage4 from "./../../img/projects_main_image_4.png";
import iconFire from "./../../img/icon_fire.png";

const Projects = () => {
  // const swiper = useSwiper();
  // console.log(swiper);
  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects__title" id="main">
          Наші кейси
        </h2>
        <div className="projects__grid">
          {/* <div className="swiper my-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="projects__wrapper">
                  <div
                    className="project-main need-hidden first-project"
                    id="mainOne"
                  >
                    <div className="project-main__image">
                      <img src={mainImage1} alt="Main" />
                    </div>
                    <ul className="project-main__tags">
                      <li className="project-main__tag">
                        <img src={iconFire} alt="Fire" />
                      </li>
                      <li className="project-main__tag">Ігри</li>
                      <li className="project-main__tag">Frogwares</li>
                    </ul>
                    <h2 className="project-main__name">The Sinking City</h2>
                    <p className="project-main__description">
                      Різноманітний та багатий досвід консультації з
                      професіоналами з IT відіграє важливу роль у формуванні
                      всебічно збалансованих нововведень. Значимість цих проблем
                      настільки очевидна, що нова модель є організаційною.
                    </p>
                    <button className="project-main__button button">
                      Детальніше
                    </button>
                  </div>
                  <div
                    className="project-stats need-hidden first-project"
                    id="statOne"
                  >
                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">
                        Кількість переглядів
                      </h3>
                      <span className="project-stats__number">20.000+</span>
                    </div>

                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">Лайків</h3>
                      <span className="project-stats__number">12.341</span>
                    </div>

                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">Охоплення</h3>
                      <span className="project-stats__number">19.801</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="projects__wrapper ">
                  <div className="project-main need-hidden hidden" id="mainTwo">
                    <div className="project-main__image">
                      <img src={mainImage2} alt="Казино Stake x Drake" />
                    </div>
                    <ul className="project-main__tags">
                      <li className="project-main__tag">Азарт</li>
                      <li className="project-main__tag">Реп</li>
                      <li className="project-main__tag">Реклама</li>
                    </ul>
                    <h2 className="project-main__name">Stake x Drake</h2>
                    <p className="project-main__description">
                      Різноманітний та багатий досвід консультації з
                      професіоналами з IT відіграє важливу роль у формуванні
                      всебічно збалансованих нововведень. Значимість цих проблем
                      настільки очевидна, що нова модель є організаційною.
                    </p>
                    <button className="project-main__button button">
                      Детальніше
                    </button>
                  </div>
                  <div
                    className="project-stats need-hidden hidden"
                    id="statTwo"
                  >
                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">
                        Кількість переглядів
                      </h3>
                      <span className="project-stats__number">15.345</span>
                    </div>

                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">Лайків</h3>
                      <span className="project-stats__number">9.781</span>
                    </div>

                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">Охоплення</h3>
                      <span className="project-stats__number">18.920</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="projects__wrapper ">
                  <div
                    className="project-main need-hidden hidden"
                    id="mainThree"
                  >
                    <div className="project-main__image">
                      <img src={mainImage3} alt="Игровой проект Free Fire" />
                    </div>
                    <ul className="project-main__tags">
                      <li className="project-main__tag">Кіберспорт</li>
                      <li className="project-main__tag">Трансляції</li>
                    </ul>
                    <h2 className="project-main__name">Maincast</h2>
                    <p className="project-main__description">
                      Різноманітний та багатий досвід консультації з
                      професіоналами з IT відіграє важливу роль у формуванні
                      всебічно збалансованих нововведень. Значимість цих проблем
                      настільки очевидна, що нова модель є організаційною.
                    </p>
                    <button className="project-main__button button">
                      Детальніше
                    </button>
                  </div>
                  <div
                    className="project-stats need-hidden hidden"
                    id="statThree"
                  >
                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">
                        Кількість переглядів
                      </h3>
                      <span className="project-stats__number">17.989</span>
                    </div>

                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">Лайків</h3>
                      <span className="project-stats__number">11.203</span>
                    </div>

                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">Охоплення</h3>
                      <span className="project-stats__number">16.546</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="projects__wrapper ">
                  <div
                    className="project-main need-hidden hidden"
                    id="mainFour"
                  >
                    <div className="project-main__image">
                      <img src={mainImage4} alt="MainImage" />
                    </div>
                    <ul className="project-main__tags">
                      <li className="project-main__tag">Ігровий бренд</li>
                      <li className="project-main__tag">True gaming</li>
                    </ul>
                    <h2 className="project-main__name">MSI True Gaming</h2>
                    <p className="project-main__description">
                      Різноманітний та багатий досвід консультації з
                      професіоналами з IT відіграє важливу роль у формуванні
                      всебічно збалансованих нововведень. Значимість цих проблем
                      настільки очевидна, що нова модель є організаційною.
                    </p>
                    <button className="project-main__button button">
                      Детальніше
                    </button>
                  </div>
                  <div
                    className="project-stats need-hidden hidden"
                    id="statFour"
                  >
                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">
                        Кількість переглядів
                      </h3>
                      <span className="project-stats__number">7.402</span>
                    </div>

                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">Лайків</h3>
                      <span className="project-stats__number">2.100</span>
                    </div>

                    <div className="project-stats__stat">
                      <h3 className="project-stats__name">Охоплення</h3>
                      <span className="project-stats__number">11.213</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
          <div className="projects-cards">
            <a
              href="#main"
              className="project-card"
              data-main="mainOne"
              data-stat="statOne"
            >
              <div className="project-card__head">
                <h4 className="project-card__name">The Sinking City</h4>
                <div className="project-card__description">
                  Комп'ютерна гра в жанрі action-adventure
                </div>
              </div>
              <div className="project-card__image">
                <img src={project1} alt="Project 1" />
              </div>
            </a>

            <a
              href="#main"
              className="project-card"
              data-main="mainTwo"
              data-stat="statTwo"
            >
              <div className="project-card__head">
                <h4 className="project-card__name">Stake x Drake</h4>
                <div className="project-card__description">
                  Відчуйте неперевершене криптоказино та спорт
                </div>
              </div>
              <div className="project-card__image">
                <img src={project2} alt="Project 2" />
              </div>
            </a>

            <a
              href="#main"
              className="project-card"
              data-main="mainThree"
              data-stat="statThree"
            >
              <div className="project-card__head">
                <h4 className="project-card__name">Maincast</h4>
                <div className="project-card__description">
                  Одна з провідних кіберспортивних компаній Європи
                </div>
              </div>
              <div className="project-card__image">
                <img src={project3} alt="Project 3" />
              </div>
            </a>

            <a
              href="#main"
              className="project-card"
              data-main="mainFour"
              data-stat="statFour"
            >
              <div className="project-card__head">
                <h4 className="project-card__name">MSI True Gaming</h4>
                <div className="project-card__description">
                  Експерт у створенні потужних ігрових пристроїв
                </div>
              </div>
              <div className="project-card__image">
                <img src={project4} alt="Project 4" />
              </div>
            </a>
          </div> */}

          <Swiper spaceBetween={100}>
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
                              {tag.tag === "icon_fire.png" ? (
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
                      {/* <button className="project-main__button button">
                  Детальніше
                </button> */}
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
            {projects.map((project) => {
              return (
                // <a
                //   href="#main"
                //   className="project-card"
                //   data-main="mainOne"
                //   data-stat="statOne"
                //   key={project.id}
                //   onClick={() => {
                //     setData({
                //       ...data,
                //       id: project.id,
                //       image: project.image,
                //       tags: project.tags,
                //       title: project.title,
                //       desc: project.desc,
                //       stats: project.stats,
                //       link: project.link,
                //     });
                //   }}
                // >
                //   <div className="project-card__head">
                //     <h4 className="project-card__name">{project.title}</h4>
                //     <div className="project-card__description">
                //       {project.cardDesc}
                //     </div>
                //   </div>
                //   <div className="project-card__image">
                //     {/* <img
                //       src={`./../../img/${project.cardImage}`}
                //       alt="Project 1"
                //     /> */}
                //     <img
                //       src={require(`./../../img/${project.cardImage}`)}
                //       alt={`Project ${project.id}`}
                //     />
                //   </div>
                // </a>
                <Card project={project} key={project.id} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
