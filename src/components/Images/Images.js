import "./Images.css";
import Card from "../Card/Card";

function Images({ obj, setCurr, setModal }) {
  return (
    <div className="wrapper">
      <div className="images_container">
        {obj.map((item, index) => (
          <Card
            key={index}
            item={item}
            index={index}
            setCurr={setCurr}
            setModal={setModal}
          />
        ))}
      </div>
    </div>
  );
}

export default Images;
