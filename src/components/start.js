const Startscreen = ({ sample }) => {
    console.log(sample);
          return (
              <video className="videoTag" autoPlay loop muted>
                <source src={sample} type="video/mp4" />
              </video>
          );
        };

export default Startscreen;