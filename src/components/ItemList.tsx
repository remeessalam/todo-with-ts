import { ReactsetState, todolist } from "../utils/helper";
import Button from "./Button";
type itemListType = {
  listitems: todolist[];
  setListItems: ReactsetState<todolist[]>;
};
const ItemList = ({ listitems, setListItems }: itemListType) => {
  const handileDelete = (id: string) => {
    setListItems((prev) => prev.filter((data) => data.id != id));
  };
  return listitems.map((data) => {
    return (
      <div
        key={data.id}
        className="w-full border-[1px] border-gray-500 flex justify-between px-2 py-1 rounded"
      >
        <h1 className="text-white">{data.title} </h1>
        <Button onClick={() => handileDelete(data.id)}>
          <svg
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6667 7.41667L15.0104 15.9479C14.8635 17.8582 13.2705 19.3333 11.3546 19.3333H7.14545C5.22948 19.3333 3.63653 17.8582 3.48958 15.9479L2.83333 7.41667M17.5 5.58333C15.1186 4.42281 12.2875 3.75 9.25 3.75C6.21249 3.75 3.38142 4.42281 1 5.58333M7.41667 3.75V2.83333C7.41667 1.82081 8.23748 1 9.25 1C10.2625 1 11.0833 1.82081 11.0833 2.83333V3.75M7.41667 9.25V14.75M11.0833 9.25V14.75"
              stroke="#FF3333"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </Button>
      </div>
    );
  });
};

export default ItemList;
