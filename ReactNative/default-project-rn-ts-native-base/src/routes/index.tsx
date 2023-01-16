const { Navigator, Screen } = createNativeStackNavigator();
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';


export function Routes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  )
}