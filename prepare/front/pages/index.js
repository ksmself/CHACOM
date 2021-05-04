import Header from '../components/Header';
import TitleLogo from '../components/TitleLogo';
import SearchBar from '../components/SearchBar';

// localhost:3000, 즉, 메인 페이지
const Home = () => {
  return (
    <>
      <Header />
      <TitleLogo />
      <SearchBar />
    </>
  );
};

export default Home;
