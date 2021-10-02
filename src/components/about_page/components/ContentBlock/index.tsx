import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import MidContentBlock from "./MidContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "mid") return <MidContentBlock {...props} />;
  return null;
};

export default ContentBlock;
