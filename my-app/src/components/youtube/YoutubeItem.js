const YoutubeItem = (props) => {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">{props.footer}</div>
    </div>
  );
};

export default YoutubeItem;
