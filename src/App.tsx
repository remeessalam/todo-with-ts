import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import ItemList from "./components/ItemList";
import { type todolist } from "./utils/helper";

function App() {
  const [text, setText] = useState<string>("");
  const [listitems, setListItems] = useState<todolist[]>([]);
  const handileSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setListItems((prev) => [
      ...prev,
      { id: Date.now().toString(), title: text },
    ]);
    setText("");
  };

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center w-80">
        <div className="w-full">
          <h1 className="font-extrabold text-black-400  bg-gray-500 ">
            TODO-APP
          </h1>
          <form className="my-2" onSubmit={handileSubmit}>
            <Input type="text" text={text} setText={setText} />
            <Button classname="w-full  bg-gray-500 py-2 font-semibold rounded">
              Add
            </Button>
          </form>
          <div className="w-full h-[200px] overflow-y-scroll flex flex-col gap-1 no-scrollbar">
            <ItemList listitems={listitems} setListItems={setListItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
