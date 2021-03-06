/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Row, Col } from 'antd';
import Link from 'next/link';

export const titleLogo = css`
  margin-bottom: 6px;
  font-size: 36px;
  font-weight: 700;
  color: #3a18ff;

  @media (min-width: 768px) {
    margin-bottom: 15px;
    font-size: 48px;
  }

  @media (min-width: 1024px) {
    font-size: 60px;
  }

  a:hover {
    color: #3a18ff;
  }
`;

const TitleLogo = () => {
  return (
    <Row justify="center">
      <Col css={titleLogo}>
        <Link href="/">
          <a>CHACOM</a>
        </Link>
      </Col>
    </Row>
  );
};

export default TitleLogo;
