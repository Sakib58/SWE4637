import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import homeScreen from './src/Screens/HomeScreen';
import myProfile from './src/Screens/MyProfile';
import SemesterList from './src/Screens/SemesterList';
import CourseList from './src/Screens/CourseList';
import FacultyMemberList from './src/Screens/FacultyMembersList';


const stack=createStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={homeScreen}></stack.Screen>
        <stack.Screen name="MyProfile" component={myProfile}></stack.Screen>
        <stack.Screen name="SemesterList" component={SemesterList}></stack.Screen>
        <stack.Screen name="CourseList" component={CourseList}></stack.Screen>
        <stack.Screen name="FacultyMembersList" component ={FacultyMemberList}></stack.Screen>
      </stack.Navigator>
  </NavigationContainer>
  );
}
export default App;