import { Wrapper, Header, Title, Sbody } from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
    <Wrapper>
        <Header>
          <Title>{title}</Title>
          {extraHeaderContent}
        </Header>
        <Sbody>
          {body}
        </Sbody>
      </Wrapper>
    );

    export default Section;