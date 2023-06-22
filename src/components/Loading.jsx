import React, { Component } from 'react'
import "./Loading.css";
export class Loading extends Component {
  render() {
    return (<div class="loading">
    <svg width="64px" height="48px">
        <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
      <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
    </svg>
  </div>
    )
  }
}

export default Loading


{/* <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" stroke="black" stroke-width="3" fill="none" />
<polyline points="0.157 23.954, 14 23.954, 21.843 48, 32 12, 36 18, 40 12, 44 18, 43 0, 50 24, 64 24" stroke="black" stroke-width="3" fill="none" />
</svg> */}
