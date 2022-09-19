import { Provider } from "react-redux";
import TeoriaRedux from "./components/TeoriaRedux";
import store from './store';
import Contador from "./components/Contador";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <Contador />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;