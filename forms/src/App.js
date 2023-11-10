import { useRef } from "react";
import './index.css';
import ControlledForm2Example from "./components/ControlledForm2Example";
import ControlledForm3useRef from "./components/ControlledForm3useRef";
import ControlledFormRowExample from "./components/ControlledFormRowExample";
import UncontrolledFormExample from "./components/UncontrolledFormExample";


function App() {

    const formRef = useRef();

  return (
    <div>
      {/* <UncontrolledFormExample/> */}
      {/* <ControlledFormRowExample/> */}
      {/* <ControlledForm2Example/> */}


      <ControlledForm3useRef formRef={formRef}/>
      <button type="button" onClick={() => formRef.current.requestSubmit()} className="refbtn">Submit Ref</button>

    </div>
  );
}

export default App;
