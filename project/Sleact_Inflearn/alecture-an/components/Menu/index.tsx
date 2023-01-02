import React, { CSSProperties, FC, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from '@components/Menu/styles';

// prop들에 대한 type 정의
interface Props {
  show : boolean;
  onCloseModal : (e :any) => void;
  style : CSSProperties;
  closeButton? : Boolean;
}
const Menu : FC<Props> = ({children, style, show, onCloseModal, closeButton}) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation(); //자신을 제외한 부모를 클릭시 닫
    // 부모태그로 이벤트가 버블링 되는것을 방지
  }, []);

  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  )
};
Menu.defaultProps = {
  closeButton : true,
};

export default Menu;