import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";


const styleObj = {
  fontSize: 20
}


interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  id: string;
  icon: string;
  t: any;
}


const MiddleBlock = ({ title, content, button, id, icon, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={10} md={10} sm={10} xs={10}>
              {/* <Content style={styleObj}> {t(title)}</Content> */}
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={icon} width="60%" height="60%" />
              </Col>
              <Content >{t(content)}</Content>

              {button && (
<<<<<<< HEAD
                <Button name="submit" onClick={() => scrollTo("mission")}>
=======
                <Button name="submit" onClick={() => scrollTo("intro")}>
>>>>>>> 2cf0bc1 (aboutus)
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
