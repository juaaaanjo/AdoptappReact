import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import  DetailsScreen  from './screens/Details'
import  HomeScreen  from './screens/Home'
import  SettingsScreen  from './screens/Settings'
import  ProfileScreen  from './screens/Profile'
import  CategoriesScreen  from './screens/Categories'
import  addImagesScreen  from './screens/addImages'
import  LandingScreen  from './screens/Landing'
import  LandingPhoneScreen  from './screens/LandingPhone'
import  LandingPhoneConfirmationScreen  from './screens/LandingPhoneConfirmation'
import  LandingProfileScreen  from './screens/LandingProfile'

//TABS
const HomeTabs = createBottomTabNavigator();
function HomeTabsScreen() {
 return (
   <HomeTabs.Navigator
   screenOptions={({ route }) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;
  
      if (route.name === 'Home'){
        iconName = focused ? 'home':'home';
      } else if (route.name === 'Settings'){
        iconName = focused ? 'appstore1':'appstore1';
      } else if (route.name === 'Profile'){
        iconName = focused ? 'user':'user';
      }

      return <AntDesign name={iconName} size={size} color={color}/>

 },
})}
tabBarOptions={{
  activeTintColor: '#D1C900',
  inactiveTintColor: 'gray',
}}>
    <HomeTabs.Screen name="Home" component={HomeScreen}/>            
    <HomeTabs.Screen name="Settings" component={SettingsScreen} />
    <HomeTabs.Screen name="Profile" component={ProfileScreen} />
   </HomeTabs.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return ( //PANTALLAS
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
      <Stack.Screen name="LandingPhone" component={LandingPhoneScreen} options={{headerShown: false}}/>
      <Stack.Screen name="LandingPhoneConfirmation" component={LandingPhoneConfirmationScreen} options={{headerShown: false}}/>
      <Stack.Screen name="LandingProfile" component={LandingProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeTabsScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: false}} />
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{headerShown: false}} />
        <Stack.Screen name="addImages" component={addImagesScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}