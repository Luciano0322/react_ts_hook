import { ReactElement, ReactNode } from "react";

// 基本應用情境
export interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return (
    <h3>{title}</h3>
  );
}

export type ListComponent = <ListItem>({ 
  items, 
  render, 
} : {
  items: ListItem[]; 
  render: (item: ListItem) => ReactNode; 
}) => ReactElement;

export const List: ListComponent = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index.toString()}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

function TestComponent() {
  return (
    <div>
      <Heading title="Hello" />
      <List items={["a","b","c"]} render={(str) => <strong>{str}</strong>} />
    </div>
  );
}

export default TestComponent;