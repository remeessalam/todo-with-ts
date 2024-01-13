import { ReactsetState } from "../utils/helper";

type inputType = {
  type: "color" | "text" | "checkbox";
  text: string;
  setText: ReactsetState<string>;
};
const Input = ({ type, text, setText }: inputType) => {
  return (
    <input
      className="w-full p-2 mb-2 rounded"
      type={type}
      value={text}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setText(e.target.value)
      }
    />
  );
};

export default Input;
