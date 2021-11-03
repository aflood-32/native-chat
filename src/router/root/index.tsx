import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, rootRouteNames } from "./interfaces";
import TabsStack from "../tabs";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={rootRouteNames.Tabs}
      >
        <RootStack.Screen name={rootRouteNames.Tabs} component={TabsStack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
