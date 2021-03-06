import CustomHookComponent from "./components/CustomHookComponent";
import TestComponent from "./components/EvenMoreReactComponent";
import UseContextComponent from "./components/UseContextComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";


function App() {
  return (
    <div className="app">
      <h1>Basic render</h1>
      <TestComponent/>
      <h1>Custom Hook</h1>
      <CustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent/>
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useState</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
