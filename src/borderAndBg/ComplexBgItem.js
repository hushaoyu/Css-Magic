import { Fragment } from "react";
import { Row, Col, Tag } from "antd";
import CardContainer from "../components/CardContainer";

export default function () {
  return (
    <Fragment>
      <Tag color="#108ee9">5、复杂的背景图案</Tag>
      <hr />
      <Row gutter={20}>
        <Col>
          <CardContainer
            cover={<div className="grid-bg border-item" />}
            title="格子背景"
            description="linear-gradient(white 1px, transparent 0)"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="guide-grid-bg border-item" />}
            title="辅助线网格背景"
            description="linear-gradient(white 1px, transparent 0)"
          />
        </Col>
      </Row>
    </Fragment>
  );
}
