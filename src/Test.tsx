import type { Null } from './utils/common.ts';
import { Undefined } from './utils/common.ts';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface TestProps {
  mockParameterBlablabla: string;
  mockParameterBlablablb: string;
  mockParameterBlablablc: string;
  onClick: (
    item: { a: string } | typeof Null | typeof Undefined,
    selected?: boolean,
  ) => void;

}

const Test: React.FC<TestProps> = (props) => {
  const {
    onClick,

    mockParameterBlablabla, mockParameterBlablablb, mockParameterBlablablc,
  } = props;

  const [showMore, setShowMore] = useState(false);

  return (

    <>
      <Button onClick={() => onClick(Undefined, true)} />
      {
        showMore && <Modal closable={true} okText="got it" title="title" />
      }
      <Button onClick={() => setShowMore(true)}>show more</Button>
      <div>{`${mockParameterBlablabla} ${mockParameterBlablablb} ${mockParameterBlablablc}`}</div>
    </>
  );
};

export default Test;
