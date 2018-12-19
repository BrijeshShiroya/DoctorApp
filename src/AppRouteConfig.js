import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Setting from './screens/Setting';
import Menu from './screens/Menu';


const AppRouteConfig = createStackNavigator({
    Splash: { screen: Splash, navigationOptions: { gesturesEnabled: false } },

    DrawerMenu: {
        screen: createDrawerNavigator({
            Home: { screen: Home, navigationOptions: { gesturesEnabled: false } },
            Profile: { screen: Profile, navigationOptions: { gesturesEnabled: false } },
            Setting: { screen: Setting, navigationOptions: { gesturesEnabled: false } },
            Menu: { screen: Menu },
        }, {
                contentComponent: Menu,
                drawerWidth: 250
            }
        )
    },

},
    {
        headerMode: 'none'
    })
export default AppRouteConfig;

