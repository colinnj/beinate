import React from "react";
import { Row, Col } from "antd";
import pic01 from "web_modules/images/pic01.png";

export default class Picture extends React.Component {
  render() {
    return (
      <div className="whiteContent">
        <p className="title">案例集锦-图片</p>
        <Row>
          <Col span={6}>
            <ul className="casePicUl">
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
              <li className="casePicLi">
                <p className="casePicItem">Smart 洗地机系列 应用案例</p>
              </li>
            </ul>
          </Col>
          <Col span={18}>
            <div className="imgCon">
              <img src={pic01} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
