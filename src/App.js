import Board from "./components/Board";
import Card from "./components/Card";
import ButtonComponent from "./components/ButtonComponent";
import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div className="App">
      <span style={{ fontSize: '26px', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>Drag from Left to Right</span>
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <ButtonComponent />
          </Card>
        </Board>
        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <MessageCard />
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
