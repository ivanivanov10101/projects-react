import './App.css';
import Calculator from "./components/Calculator";
import {LightModeProvider} from "./components/lightModeContext";

function App() {
    return (
        <div>
            <LightModeProvider>
                <Calculator/>
            </LightModeProvider>
        </div>
    );
}

export default App;
