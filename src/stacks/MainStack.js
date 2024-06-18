import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EditNoteScreen from "../pages/EditNoteScreen";
import ListScreen from "../pages/ListScreen";



const MainStack = createStackNavigator();

export default () => {
     return (
        <MainStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: "#222"
            },
            headerTintColor: "#FFF",
        }}>
        <MainStack.Screen name="List" component={ListScreen}/>
        <MainStack.Screen name="EditNote" component={EditNoteScreen}/>
    </MainStack.Navigator>
     );
}