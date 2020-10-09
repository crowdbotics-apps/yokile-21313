import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings135066Navigator from '../features/Settings135066/navigator';
import Settings135051Navigator from '../features/Settings135051/navigator';
import NotificationList135050Navigator from '../features/NotificationList135050/navigator';
import Maps135049Navigator from '../features/Maps135049/navigator';
import UserProfile135039Navigator from '../features/UserProfile135039/navigator';
import Tutorial135038Navigator from '../features/Tutorial135038/navigator';
import NotificationList135010Navigator from '../features/NotificationList135010/navigator';
import Settings135009Navigator from '../features/Settings135009/navigator';
import Settings135001Navigator from '../features/Settings135001/navigator';
import UserProfile134999Navigator from '../features/UserProfile134999/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings135066: { screen: Settings135066Navigator },
Settings135051: { screen: Settings135051Navigator },
NotificationList135050: { screen: NotificationList135050Navigator },
Maps135049: { screen: Maps135049Navigator },
UserProfile135039: { screen: UserProfile135039Navigator },
Tutorial135038: { screen: Tutorial135038Navigator },
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
