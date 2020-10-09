import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps135364Navigator from '../features/Maps135364/navigator';
import Settings135342Navigator from '../features/Settings135342/navigator';
import Settings135327Navigator from '../features/Settings135327/navigator';
import NotificationList135326Navigator from '../features/NotificationList135326/navigator';
import Maps135325Navigator from '../features/Maps135325/navigator';
import ArticleList135261Navigator from '../features/ArticleList135261/navigator';
import ArticleList135260Navigator from '../features/ArticleList135260/navigator';
import ArticleList135259Navigator from '../features/ArticleList135259/navigator';
import Settings135257Navigator from '../features/Settings135257/navigator';
import UserProfile135250Navigator from '../features/UserProfile135250/navigator';
import Settings135249Navigator from '../features/Settings135249/navigator';
import Settings135247Navigator from '../features/Settings135247/navigator';
import SignIn2135245Navigator from '../features/SignIn2135245/navigator';
import UserProfile135200Navigator from '../features/UserProfile135200/navigator';
import Tutorial135199Navigator from '../features/Tutorial135199/navigator';
import NotificationList135171Navigator from '../features/NotificationList135171/navigator';
import Settings135170Navigator from '../features/Settings135170/navigator';
import Settings135162Navigator from '../features/Settings135162/navigator';
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
Maps135364: { screen: Maps135364Navigator },
Settings135342: { screen: Settings135342Navigator },
Settings135327: { screen: Settings135327Navigator },
NotificationList135326: { screen: NotificationList135326Navigator },
Maps135325: { screen: Maps135325Navigator },
ArticleList135261: { screen: ArticleList135261Navigator },
ArticleList135260: { screen: ArticleList135260Navigator },
ArticleList135259: { screen: ArticleList135259Navigator },
Settings135257: { screen: Settings135257Navigator },
UserProfile135250: { screen: UserProfile135250Navigator },
Settings135249: { screen: Settings135249Navigator },
Settings135247: { screen: Settings135247Navigator },
SignIn2135245: { screen: SignIn2135245Navigator },
UserProfile135200: { screen: UserProfile135200Navigator },
Tutorial135199: { screen: Tutorial135199Navigator },
NotificationList135171: { screen: NotificationList135171Navigator },
Settings135170: { screen: Settings135170Navigator },
Settings135162: { screen: Settings135162Navigator },
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
