import "./App.css";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  const [isModal, setIsModal] = useState(false);

  const updateModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div>
      <Menu isOpen={isModal} width={"50%"} customBurgerIcon={false} right>
        <Form />
      </Menu>
      <Table updateModal={updateModal} />
    </div>
  );
}

export default App;
