import React from 'react';
import {createStackNavigator}  from '@react-navigation/stack';


//========aqui importamos as paginas de navigation=========//

import { login } from '../pages/login';


const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => ( 

    <stackRoutes.Navigator    
    headerMode="none"
    screenOptions={{
        cardStyle: {
            backgroundColor: 'white',
        }
    }}
    >
         <stackRoutes.Screen
            name="Login"
            component={login}
            />



    </stackRoutes.Navigator>

)

export default AppRoutes;