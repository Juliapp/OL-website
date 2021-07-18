import { ReactChild, ReactChildren } from 'react';

export default interface ComponentProps {
  children?: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}
