import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainPage from './MainPage';
import LoadingPage from './LoadingPage';
import WelcomePage from './WelcomePage';

const MainNavigator = createSwitchNavigator(
  {
    Main: MainPage,
    Loading: LoadingPage,
    Welcome: WelcomePage,
  },
  {
    initialRouteName: 'Loading',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
