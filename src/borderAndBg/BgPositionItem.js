import { Fragment } from "react";
import { Row, Col, Tag } from "antd";
import CardContainer from "../components/CardContainer";

export default function () {
  return (
    <Fragment>
      <Tag color="#108ee9">2、背景定位</Tag>
      <hr />
      <Row gutter={20}>
        <Col>
          <CardContainer
            cover={<div className="bg-item position-bg" />}
            title="定位&&偏移量"
            description="backgound-position"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="bg-item origin-bg" />}
            title="偏移量与内边距一致"
            description="backgound-origin: contetn-box"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="bg-item calc-bg" />}
            title="calc"
            description="backgound-position: calc()"
          />
        </Col>
      </Row>
    </Fragment>
  );
}
