
import { useContext} from "react";
import { FlyOutContext } from "components/FlyOut";

function Toggle() {
    const { open, toggle } = useContext(FlyOutContext);
  
    return (
      <div onClick={() => toggle(!open)}>
        Toggle
        <button>toggle</button>
      </div>
    );
  }

export default Toggle;