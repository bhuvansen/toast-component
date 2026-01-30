import './App.css'
import { toast } from './Toast/toast';
import './Toast/toast.css'

function App() {
  const successB = () => {
    toast.success("Saved successfully");
  };
  const failB = () => {
    toast.error("Something went wrong", { duration: 6000, persist: true });
  };
  return (
    <div className="App">
      <button onClick={successB}> success</button>
      <button onClick={failB}> fail</button>
    </div>
  )
}

export default App
