const Button = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="project-main__button button"
    >
      Детальніше
    </a>
  );
};

export default Button;
