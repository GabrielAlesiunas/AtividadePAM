import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaHome from './Componentes/TelaHome';
import Triologia1 from './Componentes/Triologia1';
import Triologia2 from './Componentes/Triologia2';
import telaDescricao from './Componentes/TelaDescricao';
import Autores from './Componentes/Autores';


const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <BottomTab.Navigator>
          <BottomTab.Screen name='Home' component={TelaHome} />
          <BottomTab.Screen name='Filme 1' component={Triologia1} />
          <BottomTab.Screen name='Filme 2' component={Triologia2} />
          <BottomTab.Screen name='Descrição' component={telaDescricao} />
          <BottomTab.Screen name='Autores' component={Autores} />
        </BottomTab.Navigator>
      }
    </NavigationContainer>
  );
}
