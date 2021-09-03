import { Fragment } from "react";
import { Row, Col, Tag } from "antd";
import CardContainer from "../components/CardContainer";

export default function () {
  return (
    <Fragment>
      <Tag color="#108ee9">1、边框</Tag>
      <hr />
      <Row gutter={20}>
        <Col>
          <CardContainer
            cover={<div className="opacity-border border-item" />}
            title="透明边框"
            description="backgound-clip"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="multi-border-shadow border-item" />}
            title="多重边框"
            description="box-shadow"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="multi-border-outline border-item" />}
            title="多重边框"
            description="outline"
          />
        </Col>
      </Row>
    </Fragment>
  );
}
