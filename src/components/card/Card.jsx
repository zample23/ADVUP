import "./card.scss";

const Card = ({ project }) => {
  return (
    <a
      href="#!"
      className="project-card"
      data-main="mainOne"
      data-stat="statOne"
      key={project.id}
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
