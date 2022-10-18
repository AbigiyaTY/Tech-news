import React from 'react';
import './DetailContain.css';
import Test1 from '../../Image/test.jpg';

function DetailContain() {
  return (
    <div className="detailContain">
      <div className="container">
        <div className="row">
          <h6 className="col-12 row detailTile text-center py-3">
            Kanye West to buy right-wing social media app Parler
          </h6>
          <div className="col-12 row detailContent">
            <div className="col-12 col-md-6">
              <div className="col-12 row detailImg">
                <img src={Test1} alt="News" />
              </div>
            </div>
            <div className="col-12 col-md-6 detailListAll">
              <div className="col-12 row detailList py-5 my-2">
                <div className="col-12 row dayandTime row">
                  <h6 className="col-5">Author: Ridham Gambhir </h6>
                  <h6 className="col-5 day">17 Oct 2022,Monday</h6>
                  <h6 className="col-2 time">04:29 pm</h6>
                </div>
                <br />
                <br />
                <p className="col-12 detaiDescription">
                  Content: Kanye West is buying the right-wing social media app Parler,
                  which has been banned by Apple and Google multiple times and
                  was used to coordinate the January 6 Capitol riot. The rapper,
                  known as Ye, said In a world where conservative opinions are
                  considered to be controversial we have to make sure we have the
                  right to freely express ourselves.\
                </p>
                <br />
                <br />
                <h6 className="col-12">Read More Url: https://www.inshorts.com/en/news/kanye-west-to-buy-rightwing-social-media-app-parler-1666004374757</h6>
                <br />
                <br />
                <h6 className="col-12">Source: https://www.reuters.com/technology/parler-be-acquired-by-kanye-west-2022-10-17/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailContain;
