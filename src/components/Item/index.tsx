
interface ItemProps {
    children: string,
  }

function Item({ children } : ItemProps) {
    return <li className='item'>{children}</li>;
}

export default Item;