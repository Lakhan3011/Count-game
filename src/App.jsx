import { createContext, useContext, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import "./App.css";
import { Button, Card, Typography } from "@mui/material";

function App() {
  return (
    <RecoilRoot>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 500, pading: 20 }}>
          <Typography variant={"h5"}>Welcome to the Counter game</Typography>
          <br />
          <br />
          <Buttons></Buttons>
          <Counter></Counter>
        </Card>
      </div>
    </RecoilRoot>
  );
}
function Buttons() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase></Increase>
      <Decrease></Decrease>
    </div>
  );
}
function Increase() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount + 1);
        }}
      >
        Increase Counter
      </Button>
    </div>
  );
}
function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount - 1);
        }}
      >
        Decrease Counter
      </Button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(countState);
  return (
    <div>
      <Typography textAlign={"center"}>{count}</Typography>
    </div>
  );
}

export default App;

const countState = atom({
  key: "countState",
  default: 0,
});
