

const Imgsection = ({ imgSrc, description, link, pt }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div className="image img-section" style={{ paddingTop: pt }} onClick={handleClick}>
      <img src={imgSrc} alt={description}  />
      <div className="description">{description}</div>
    </div>
  );
};

export default Imgsection;
