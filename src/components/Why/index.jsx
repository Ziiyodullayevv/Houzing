import React from "react";
import { Cards, Container, Card, Content, Wrapper, Icons } from "./style";

const Why = () => {
  return (
    <Wrapper>
      <Container className="container">
        <Content>
          <h2 className="title">Why Chose Us</h2>
          <h4 className="info">
            Nulla quis curabitur velit volotput auctor bibendium consectitur
            sit.
          </h4>
        </Content>
        <Cards>
          <Card>
            <Icons.Map />
            <div style={{ marginBottom: "20px" }} className="subTitle">
              Trusted By Thousands
            </div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              consequuntur reiciendis facilis dolores delectus ad repellendus
              accusantium sint, accusamus velit soluta omnis distinctio eos,
              rem, nemo architecto? Fugit cupiditate voluptas blanditiis, porro,
              laborum hic, necessitatibus error ad quibusdam adipisci magni.
            </div>
          </Card>
          <Card>
            <Icons.House />
            <div style={{ marginBottom: "20px" }} className="subTitle">
              Trusted By Thousands
            </div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              consequuntur reiciendis facilis dolores delectus ad repellendus
              accusantium sint, accusamus velit soluta omnis distinctio eos,
              rem, nemo architecto? Fugit cupiditate voluptas blanditiis, porro,
              laborum hic, necessitatibus error ad quibusdam adipisci magni.
            </div>
          </Card>
          <Card>
            <Icons.Photo />
            <div style={{ marginBottom: "20px" }} className="subTitle">
              Trusted By Thousands
            </div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              consequuntur reiciendis facilis dolores delectus ad repellendus
              accusantium sint, accusamus velit soluta omnis distinctio eos,
              rem, nemo architecto? Fugit cupiditate voluptas blanditiis, porro,
              laborum hic, necessitatibus error ad quibusdam adipisci magni.
            </div>
          </Card>
          <Card>
            <Icons.Massage />
            <div style={{ marginBottom: "20px" }} className="subTitle">
              Trusted By Thousands
            </div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              consequuntur reiciendis facilis dolores delectus ad repellendus
              accusantium sint, accusamus velit soluta omnis distinctio eos,
              rem, nemo architecto? Fugit cupiditate voluptas blanditiis, porro,
              laborum hic, necessitatibus error ad quibusdam adipisci magni.
            </div>
          </Card>
        </Cards>
      </Container>
    </Wrapper>
  );
};
export default Why;
