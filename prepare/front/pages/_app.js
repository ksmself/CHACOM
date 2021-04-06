import Head from 'next/head';
import PropTypes from 'prop-types';

// Component에 index.js, signup.js 등이 들어감
// _app.js는 쟤들의 부모. 모든 페이지에서 공통으로 적용하고 싶은 게 있을 때 사용
const April = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>2021-April</title>
      </Head>
      <Component />
    </>
  );
};

April.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default April;
