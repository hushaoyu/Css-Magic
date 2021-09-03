import { Fragment } from "react";
import { Row, Col, Tag } from "antd";
import CardContainer from "../components/CardContainer";

export default function () {
  return (
    <Fragment>
      <Tag color="#108ee9">3、边框内圆角</Tag>
      <hr />
      <Row gutter={20}>
        <Col>
          <CardContainer
            cover={
              <div className="multi-div border-item">
                <div />
              </div>
            }
            title="父子元素结合"
            description="border-radius"
          />
        </Col>
        <Col>
          <CardContainer
            cover={<div className="single-div border-item" />}
            title="单个元素：阴影跟随圆角"
            description="border-radius + box-shadow + outline"
          />
        </Col>
      </Row>
    </Fragment>
  );
}
