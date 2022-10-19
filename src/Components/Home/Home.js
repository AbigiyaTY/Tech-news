import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchNews } from '../../Redux/DetailNews/AllRed';
import HomeImg from '../../Image/News.jpg';
import './Home.css';

const Home = () => {
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    if (news.length === 0) {
      dispatch(fetchNews());
    }
  }, [dispatch, news.length]);

  if (news.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 row topHome">
            <li className="col-6"><img className="homeImg" src={HomeImg} alt="News" /></li>
            <li className="col-6 homeTitle">
              Latest technology news Loading ...
            </li>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-12 row topHome">
            <li className="col-6"><img className="homeImg" src={HomeImg} alt="News" /></li>
            <li className="col-6 homeTitle">
              Latest technology news
            </li>
          </div>
          <div className="col-12 row totalStatus">
            <h3 className="col-12 py-2">Total Status</h3>
          </div>
          <div className="col-12 containt">
            <ul className="col-12 row">
              {news.data.map((item) => (
                <li
                  className="col-6 titleNews"
                  key={`${item.id}`}
                >
                  <NavLink
                    state={item}
                    to={`/detail/${item.id}`}
                    key={item.id}
                  >
                    <i
                      className="fa fa-greater-than py-4"
                    />
                  </NavLink>
                  <h3 className="px-2">
                    {item.title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
