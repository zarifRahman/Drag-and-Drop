import React from 'react';
import ReactFlow from 'react-flow-renderer';
import Board from "./Board";
import Card from "./Card";
import ButtonComponent from "./ButtonComponent";
import MessageCard from "./MessageCard";

const elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: {
      label: <div><Board id="board-1">
        <Card id="card-1">
          <ButtonComponent />
        </Card>
      </Board></div>
    },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: {
      label: <div><Board id="board-2" className="board">
        <Card id="card-2" className="card">
          <MessageCard />
        </Card>
      </Board></div>
    },
    position: { x: 450, y: 10 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
];

const Nodes = () => (
  <div style={{ height: 300 }}>
    {/* <main className="flexbox"> */}
    <ReactFlow elements={elements} />
    {/* </main> */}
  </div>
);

export default Nodes;
