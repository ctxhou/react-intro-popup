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
              style={{padding: "20px"}}
              close={close}>
    <Intro style={{marginBottom: "20px"}}>
        <h2>Intro1</h2>
        <p>Description</p>
        <img src="http://fakeimg.pl/300" alt=""/>
    </Intro>
    <Intro>
        <h2>Intro2</h2>
        <p>Description</p>
        <img src="http://fakeimg.pl/300" alt=""/>
    </Intro>
  </IntroPopup>, 
  document.getElementById('root'));
