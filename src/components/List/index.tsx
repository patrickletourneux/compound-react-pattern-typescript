

import { useContext} from "react";
import { FlyOutContext } from "components/FlyOut";

import './style.css';
interface ListProps {
    children ?: JSX.Element | JSX.Element[],
}


function List({ children } : ListProps) {
    const { open } = useContext(FlyOutContext);
    if (open){
        return <ul className="List">List {children}</ul>
    }
    else return <></>;
}

export default List;
