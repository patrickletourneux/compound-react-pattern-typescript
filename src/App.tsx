import FlyOut from 'components/FlyOut';
import Text1 from 'components/Text1';

import 'App.css';

function App() {
  return (
    <div>
      <FlyOut>
        <FlyOut.Toggle />
        <FlyOut.List>
          <FlyOut.Item>Edit</FlyOut.Item>
          <FlyOut.Item>Delete</FlyOut.Item>
        </FlyOut.List>
      </FlyOut>
      <Text1 text='test text'/>
    </div>
  );
}

export default App;
