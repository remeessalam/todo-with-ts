type Buttontype = {
  children: JSX.Element | string;
  classname?: string;
  onClick?: () => void;
};
const Button = ({ children, classname, onClick }: Buttontype) => {
  return (
    <button type="submit" className={classname} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
