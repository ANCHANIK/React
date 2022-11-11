import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();

  // img 초기세팅
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  // date 날짜 셋팅 (getTime() -> yyyy.mm.dd)
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  // 상세페이지 이동 navi button
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  // 수정페이지 이동 navi button
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        {" "}
        <MyButton onClick={goEdit} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
