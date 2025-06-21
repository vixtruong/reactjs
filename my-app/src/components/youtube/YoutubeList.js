import YoutubeItem from "./YoutubeItem";
import { YoutubeData } from "../../data";

const YoutubeList = (props) => {
  return (
    <div>
      {props.children}
      {YoutubeData.map((item) => {
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            footer={`Day la footer ${item.id}`}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
