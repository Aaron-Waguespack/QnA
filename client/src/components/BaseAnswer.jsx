import React from 'react';
import BasePicture from './BasePicture';
import AnsUser from './AnsUser';

function BaseAnswer(props) {
  const {
    name, date, helpful, ans, qaReport, ansSelectForm, helpSubmit, ansid, selectModal, photos, answer,
  } = props;

  return (
    <div className="qa-test singleAnswer">
      <div
        className="ansA"
      >
        A:
      </div>
      <div
        className="aSpan"
      >
        { answer}
      </div>
      <div className="d-flex">
        {photos.map((photo, i) => (
          <BasePicture
            key={i}
            ansid={ansid}
            index={i}
            photo={photo}
            selectModal={selectModal}
          />
        ))}
      </div>
      <div className="qa-ansuser">
        <AnsUser
          name={name}
          date={date}
          helpful={helpful}
          helpSubmit={helpSubmit}
          qaReport={qaReport}
          ansSelectForm={ansSelectForm}
          ansid={ansid}
        />
      </div>
    </div>
  );
}

export default BaseAnswer;
