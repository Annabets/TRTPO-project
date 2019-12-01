import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainPage from './MainPage';

const MainNavigator = createSwitchNavigator(
  {
    Main: MainPage,
  },
  {
    initialRouteName: 'Main',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
