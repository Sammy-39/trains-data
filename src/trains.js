import { useEffect, useState } from "react";
import { getTrainsApiCall } from "./utils";

const Trains = ({ handleLogout }) => {
  const [trainsData, setTrainsData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    handleGetTrains();
  }, []);

  const handleGetTrains = async () => {
    setErrorMessage("");
    const data = await getTrainsApiCall();
    if (data.result) {
      setTrainsData(data.result);
    } else {
      setErrorMessage("Error: Failed fetch trains details");
    }
  };

  return (
    <div className="trains">
      <button className="logout-btn" onClick={handleLogout}>
        {" "}
        Logout{" "}
      </button>
      {trainsData &&
        trainsData.map((data, i) => (
          <div className="train-card" key={data.number}>
            <p> Name: {data.name} </p>
            <p> Number: {data.number} </p>
            <p> Type: {data.type} </p>
          </div>
        ))}
      {!trainsData && !errorMessage && <p> No Data Available </p>}
      {errorMessage && <p className="error"> {errorMessage} </p>}
    </div>
  );
};

export default Trains;
