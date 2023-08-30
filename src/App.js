import { useEffect } from "react";
import Table from "./component/Table/index";
import Axios from "axios";
import Button from "@mui/material/Button";

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await Axios.get("https://randomuser.me/api");
    const finalData = result.data.results?.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    localStorage.setItem("data", JSON.stringify(finalData));
  };

  return (
    <div>
      <Table />
      <Button
        style={{ marginTop: "1rem", float: "right", marginRight: "1rem" }}
        variant="contained"
        onClick={() => fetchData()}
      >
        Refresh
      </Button>
    </div>
  );
}

export default App;
