import Canvas from './Canvas';
import Controls from './Controls'
import { ContextProvider } from './context';

function App() {
  return (
    <ContextProvider>
      <div>
        <Controls />
        <Canvas />
      </div>
    </ContextProvider>
  );
}

export default App;
