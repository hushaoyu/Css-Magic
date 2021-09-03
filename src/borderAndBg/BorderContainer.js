import "./border.less";
import BorderItem from "./BorderItem";
import BgPositionItem from "./BgPositionItem";
import BorderInsetRadiusItem from "./BorderInsetRadiusItem";
import StripBgItem from "./StripeBgItem";
import ComplexBgItem from "./ComplexBgItem";

export default function () {
  return (
    <div className="border-container">
      <BorderItem />
      <BgPositionItem />
      <BorderInsetRadiusItem />
      <StripBgItem />
      <ComplexBgItem />
    </div>
  );
}
