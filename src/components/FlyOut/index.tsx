
import { createContext , useState} from "react";
import Toggle from 'components/Toggle';
import List from 'components/List';
import Item from 'components/Item';

interface FlyOutContextProps {
  open : boolean;
  toggle : React.Dispatch<React.SetStateAction<boolean>>
}

export const FlyOutContext = createContext<FlyOutContextProps>
  ({open : false, toggle :() => {}});

interface FlyOutProps {
  children ?: JSX.Element | JSX.Element[],
}

function FlyOut(props : FlyOutProps) {
  const [open, toggle] = useState(true);

  const providerValue = { open, toggle };

  return (
    <FlyOutContext.Provider value={providerValue}>
      <h1>
      {open ? 'open' : 'close'}
      </h1>
      {props.children}
    </FlyOutContext.Provider>
  );
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;

export default FlyOut;