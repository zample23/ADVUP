// import { useSwiperSlide } from "swiper/react";
// import { Controller } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import "./card.scss";
// import { useSwiper } from "swiper/react";

const Card = ({ project }) => {
  //   const swiper = useSwiper();
  //   const swiperSlide = useSwiperSlide();
  //   console.log(Controller);
  return (
    <a
      href="#main"
      className="project-card"
      data-main="mainOne"
      data-stat="statOne"
      key={project.id}
      onClick={() => {}}
    >
      <div className="project-card__head">
        <h4 className="project-card__name">{project.title}</h4>
        <div className="project-card__description">{project.cardDesc}</div>
      </div>
      <div className="project-card__image">
        <img
          src={require(`./../../img/${project.cardImage}`)}
          alt={`Project ${project.id}`}
        />
      </div>
    </a>
  );
};

export default Card;
