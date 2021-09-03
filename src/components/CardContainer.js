import { Card } from "antd";
import "./card.less";

export default function (props) {
  return (
    <Card cover={props.cover}>
      <Card.Meta title={props.title} description={props.description} />
    </Card>
  );
}
