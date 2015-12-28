import React from 'react';
import ReactDOM from 'react-dom';
import {IntroPopup, Intro} from "../";

function close() {
  console.log('close')
}

ReactDOM.render(
  <IntroPopup lastBtnName="上一步"
              nextBtnName="下一步"
              finishBtnName="完成"
              overlayClickClose={false}
              closeBtn={true}
              close={close}>
    <Intro>
        intro3
    </Intro>
    <Intro>
        intro4
    </Intro>
  </IntroPopup>, 
  document.getElementById('root'));
