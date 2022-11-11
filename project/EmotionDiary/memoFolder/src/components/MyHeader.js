const MyHeader = ({ headerText, leftchild, rightchild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftchild}</div>
      <div className="head_text">{headerText}</div>
      <div className="head_btn_right">{rightchild}</div>
    </header>
  );
};

export default MyHeader;
