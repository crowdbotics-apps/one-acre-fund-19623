import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps91472Navigator from '../features/Maps91472/navigator';
import Add-Item91471Navigator from '../features/Add-Item91471/navigator';
import Maps91467Navigator from '../features/Maps91467/navigator';
import UserProfile91463Navigator from '../features/UserProfile91463/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps91472: { screen: Maps91472Navigator },
Add-Item91471: { screen: Add-Item91471Navigator },
Maps91467: { screen: Maps91467Navigator },
UserProfile91463: { screen: UserProfile91463Navigator },

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
