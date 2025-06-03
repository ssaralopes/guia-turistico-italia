import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/components/HomeScreen';
import HistoricPointsScreen from './src/components/HistoricPointsScreen';
import RestaurantsScreen from './src/components/RestaurantsScreen';
import OutdoorActivitiesScreen from './src/components/OutdoorActivitiesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#800000' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'No Coração da Itália' }} />
        <Stack.Screen name="HistoricPoints" component={HistoricPointsScreen} options={{ title: 'Pontos Históricos' }} />
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} options={{ title: 'Restaurantes' }} />
        <Stack.Screen name="OutdoorActivities" component={OutdoorActivitiesScreen} options={{ title: 'Atividades ao Ar Livre' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
