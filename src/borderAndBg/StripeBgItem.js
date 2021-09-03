import { Fragment } from "react";
import { Row, Col, Tag } from "antd";
import CardContainer from "../components/CardContainer";

export default function () {
  return (
    <Fragment>
      <Tag color="#108ee9">4、条纹背景</Tag>
      <hr />
      <Row gutter={20}>
        <Col>
          <CardContainer
            cover={<div className="horizon-bg border-item" />}
            title="没有过渡的条纹背景"
            description="linear-gradient 50% 50%"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="horizon-bg multi-bg border-item" />}
            title="重复的条纹"
            description="background-size 100% 20px"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="verticle-bg multi-bg border-item" />}
            title="垂直条纹"
            description="linear-gradient(to right || 90deg, )"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="oblique-bg multi-bg border-item" />}
            title="斜向条纹"
            description="linear-gradient(45deg, )"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="any-oblique-bg multi-bg border-item" />}
            title="任意角度斜向条纹"
            description="repeating-linear-gradient"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="same-color-bg multi-bg border-item" />}
            title="同色系斜向条纹"
            description="background background-image hsla"
          />
        </Col>
      </Row>
    </Fragment>
  );
}
