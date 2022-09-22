
import { useContext} from "react";
import { FlyOutContext } from "components/FlyOut";

function Toggle() {
    const { open, toggle } = useContext(FlyOutContext);
  
    return (
      <div onClick={() => toggle(!open)}>
        <button>toggle</button>
      </div>
    );
  }

export default Toggle;