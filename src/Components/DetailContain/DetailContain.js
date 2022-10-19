import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchNews } from '../../Redux/DetailNews/AllRed';
import HomeImg from '../../Image/News.jpg';
import '../Home/Home.css';
import './DetailContain.css';

const DetailContain = () => {
  const { news } = useSelector((state) => state.news);

  const { state } = useLocation();

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
              Details News Loading ...
            </li>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="detailContain">
      <div className="container">
        <div className="row">
          <h6
            className="col-12 row detailTile text-center py-3"
          >
            {state.title}
          </h6>
          <div className="col-12 row detailContent">
            <div className="col-12 col-md-6">
              <div className="col-12 row detailImg">
                <img src={state.imageUrl} alt="News" />
              </div>
            </div>
            <div className="col-12 col-md-6 detailListAll">
              <div className="col-12 row detailList py-5 my-2">
                <div className="col-12 row dayandTime row">
                  <h6 className="col-4 px-2 ">
                    Author: &nbsp;
                    {state.author}
                  </h6>
                  <h6 className="col-6 day px-2 mx-3">
                    Date: &nbsp;
                    {state.date}
                  </h6>
                  <h6 className="col-6 time py-2">
                    Time: &nbsp;
                    {state.time}
                  </h6>
                </div>
                <br />
                <br />
                <p className="col-12 detaiDescription">
                  Content: &nbsp;
                  {state.content}
                </p>
                <br />
                <br />
                <br />
                <br />
                <h6 className="col-12 Source">
                  Source: &nbsp;
                  {state.url}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContain;
