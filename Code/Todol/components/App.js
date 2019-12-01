import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainPage from './MainPage';
import LoadingPage from './LoadingPage';

const MainNavigator = createSwitchNavigator(
  {
    Main: MainPage,
    Loading: LoadingPage,
  },
  {
    initialRouteName: 'Main',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
