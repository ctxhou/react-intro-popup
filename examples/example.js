import React from 'react';
import { render } from 'react-dom';
import {IntroPopup, Intro} from "../index";

render(
  <IntroPopup>
    <Intro>
        intro1
    </Intro>
    <Intro>
        intro2
    </Intro>
    <Intro>
        intro3
    </Intro>
    <Intro>
        intro4
    </Intro>
  </IntroPopup>, 
  document.getElementById('root'));
