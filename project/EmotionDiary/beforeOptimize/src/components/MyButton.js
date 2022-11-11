const MyButton = ({ type, text, onClick }) => {
  //type의 예외처리
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// MyButton default 값 설정
MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
