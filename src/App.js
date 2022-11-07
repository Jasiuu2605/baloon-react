
import './App.css';
import Animated from './Animated';

function App() {
  return (
    <div className="balloon-animation">
      <Animated
        className="flying-cloud"
        src="/chmura.png"
        ratioX="0.25"
        ratioY="0.5"
      />
      <Animated
        className="flying-cloud"
        src="/chmura.png"
        ratioX="0.15"
        ratioY="0.23"
      />
      <Animated
        className="flying-cloud"
        src="/chmura.png"
        ratioX="0.4"
        ratioY="0.75"
      />
      <Animated
        className="flying-cloud"
        src="/chmura.png"
        ratioX="0.23"
        ratioY="0.09"
      />
      <Animated
        className="flying-cloud"
        src="/chmura.png"
        ratioX="0.56"
        ratioY="0.67"
      />
      <Animated
        className="flying-balloon"
        src="/balloon.png"
        ratioX="0.29"
        ratioY="0.29"
      />
    </div>
  );
}

export default App;
