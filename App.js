
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation, } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (

    <Tab.Navigator>
      <Tab.Screen
        name="Tab1"
        options={{ tabBarLabel: 'Go To search Ok' }}
      >
        {() =>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Hello')}>
              <Text>{"go to search"}</Text>
            </TouchableOpacity>
          </View>
        }
      </Tab.Screen>

      <Tab.Screen
        name="NewStories"
        options={{ tabBarLabel: 'Go To search Broken' }}
      >
        {() =>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Hello')}>
              <Text>{"go to search"}</Text>
            </TouchableOpacity>
          </View>
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const HelloWorldApp = () => {
  return (
    <View>
      <Text>Navigation Success!</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          animationEnabled: false,
        }}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Hello" component={HelloWorldApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
