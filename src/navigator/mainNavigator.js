import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile135160Navigator from '../features/UserProfile135160/navigator';
import UserProfile135107Navigator from '../features/UserProfile135107/navigator';
import Maps135088Navigator from '../features/Maps135088/navigator';
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
UserProfile135160: { screen: UserProfile135160Navigator },
UserProfile135107: { screen: UserProfile135107Navigator },
Maps135088: { screen: Maps135088Navigator },
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
