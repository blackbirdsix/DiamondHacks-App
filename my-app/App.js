import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from './components/button.component';
// Add this import
import HomeScreen from './screens/home.screen';
import DetailsScreen from './screens/details.screen';

//navigation stack
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    //navigation container part
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
