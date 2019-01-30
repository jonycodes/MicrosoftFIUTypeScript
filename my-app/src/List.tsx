import React, { ComponentProps } from 'react';

const List = (props: ComponentProps<any>) => (
  <ul>
    {
      props.items.map((item: string, index: number) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default List;