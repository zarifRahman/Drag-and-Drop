import { useState, useEffect } from 'react';
import Board from "./components/Board";
import Card from "./components/Card";
import ButtonComponent from "./components/ButtonComponent";
import InputField from "./components/inputField";
import MessageCard from "./components/MessageCard";
import Nodes from "./components/Nodes";

function App() {
  const [prevContent, setPrevContent] = useState('');
  const [value, setValue] = useState(true);
  useEffect(() => {
    setPrevContent(localStorage.getItem('prev_content'));
    console.log(prevContent);
  })

  return (
    <div className="App">
      <span style={{ fontSize: '26px', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
        Drag from Left to Right and scroll down to see the connected components</span>
      <main className="flexbox">
        <Board id="board-1" className="board">
          {
            value ? (
              <>
                <Card id="card-1" className="card" draggable="true">
                  <InputField />
                </Card>
                <Card id="card-2" draggable="true">
                  <ButtonComponent />
                </Card>
                <Card id="card-3" draggable="true">
                  <MessageCard />
                </Card>
              </>
            ) : null
          }
        </Board>
        <Board id="board-2" className="board">
          {
            prevContent !== null ? (
              <div dangerouslySetInnerHTML={{ __html: prevContent }} />
            ) : null
          }
        </Board>
      </main>
      <Nodes />
    </div>
  );
}

export default App;
