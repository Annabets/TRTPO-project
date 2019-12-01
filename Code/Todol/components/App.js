import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainPage from './MainPage';
import LoadingPage from './LoadingPage';
import WelcomePage from './WelcomePage';
import SignInPage from './SignInPage';

const MainNavigator = createSwitchNavigator(
  {
    Main: MainPage,
    Loading: LoadingPage,
    Welcome: WelcomePage,
    SignIn: SignInPage,
  },
  {
    initialRouteName: 'Loading',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
