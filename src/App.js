import Canvas from './Canvas';
import Controls from './Controls'
import { ContextProvider } from './context';

function App() {
  return (
    <ContextProvider>
      <div>
        <h1>Hey</h1>
        <Controls />
        <Canvas />
      </div>
    </ContextProvider>
  );
}

export default App;
