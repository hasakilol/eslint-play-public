import { Null } from './utils/common.ts';
import { Undefined} from './utils/common.ts';
import React from 'react';
import { Button } from "antd";

interface TestProps {
  onClick: (
    item?: { a: string; } | typeof Null | typeof Undefined,
    selected?: boolean,
  ) => void;

}

const Test: React.FC<TestProps> = (props) => {
  const {
    onClick,
  } = props;

  return <Button onClick={() => onClick(Undefined, true)}></Button>
};

export default Test;