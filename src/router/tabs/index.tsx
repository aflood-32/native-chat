import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";
import { tabsRouteNames } from "./interfaces";
import Feed from "../../features/Feed/Feed";
import Challenges from "../../features/Challenges";
import SavedVideos from "../../features/SavedVideos";
import Chat from "../../features/Chat";
import Profile from "../../features/Profile";
import TabIcon from "./TabIcon/TabIcon.component";

const Tab = createBottomTabNavigator();

const TabsStack: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <BlurView blurAmount={1} blurType="light">
          <BottomTabBar {...props} />
        </BlurView>
      )}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return (
            <TabIcon active={focused} iconName={route.name as tabsRouteNames} />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
      })}
    >
      <Tab.Screen name={tabsRouteNames.Feed} component={Feed} />
      <Tab.Screen name={tabsRouteNames.SavedVideos} component={SavedVideos} />
      <Tab.Screen name={tabsRouteNames.Challenges} component={Challenges} />
      <Tab.Screen name={tabsRouteNames.Chat} component={Chat} />
      <Tab.Screen name={tabsRouteNames.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabsStack;
