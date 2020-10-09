import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList135010Navigator from '../features/NotificationList135010/navigator';
import Settings135009Navigator from '../features/Settings135009/navigator';
import Settings135001Navigator from '../features/Settings135001/navigator';
import UserProfile134999Navigator from '../features/UserProfile134999/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList135010: { screen: NotificationList135010Navigator },
Settings135009: { screen: Settings135009Navigator },
Settings135001: { screen: Settings135001Navigator },
UserProfile134999: { screen: UserProfile134999Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
