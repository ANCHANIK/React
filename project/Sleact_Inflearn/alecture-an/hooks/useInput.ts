import { useCallback, useState } from "react";

// email, nickname 중복으로 인해 custom hooks 제작
// const useInput = (initialData: any) => {
const useInput = <T= any>(initialData: T) => {
  // TS가 인라인 콜백함수는 매개변수를 추론해 준다.
  //<T=any> : 제네릭 타입

  const [value, setValue] = useState(initialData);
  const handler = useCallback((e) => {
    setValue(e.target.value)
  },[]);

  return [  value, setValue, handler ];
}

export default useInput;