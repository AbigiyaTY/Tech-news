import React from 'react';
import './DetailContain.css';

function DetailContain() {
  return (
    <div className="detailContain">
      <div className="container">
        <div className="row">
          <h6 className="col-12 row detailTile text-center py-3">
            Next US election may prove most
            dangerous time for Taiwan, warns veteran US diplomat Chas Freeman
          </h6>
          <div className="col-12 row detailVideo">
            <h5>Video</h5>
            {/* <iframe src={}></iframe> */}
          </div>
          <div className="col-12 row detailList py-5 my-2">
            <p className="col-12 detaiDescription">
              Description: Richard Nixon’s former interpreter says Beijing
              may view the election of a supporter of Taiwan’s
              independence as something it must respond to...
            </p>
            <h6 className="col-12">Site: scmp </h6>
            <h6 className="col-12">Published Date: 2022-06-20T05:20:39.000Z </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailContain;
