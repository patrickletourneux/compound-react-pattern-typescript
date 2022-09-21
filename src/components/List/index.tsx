

import { useContext} from "react";
import { FlyOutContext } from "components/FlyOut";


interface ListProps {
    children ?: JSX.Element | JSX.Element[],
}


function List({ children } : ListProps) {
    const { open } = useContext(FlyOutContext);
    if (open){
        return <ul>List {children}</ul>
    }
    else return <></>;
}

export default List;
