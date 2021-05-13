import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import TitleLogo from '../components/TitleLogo';
import SearchBar from '../components/SearchBar';
import MainContent from '../components/MainContent';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

// localhost:3000, 즉, 메인 페이지
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  });

  return (
    <>
      <Header />
      <TitleLogo />
      <SearchBar />
      <MainContent />
    </>
  );
};

export default Home;
