export enum tabsRouteNames {
  Feed = "Feed",
  SavedVideos = "SavedVideos",
  Challenges = "Challenges",
  Chat = "Chat",
  Profile = "Profile",
}

export type TabsStackParamList = {
  [tabsRouteNames.Feed]: undefined;
  [tabsRouteNames.SavedVideos]: undefined;
  [tabsRouteNames.Challenges]: undefined;
  [tabsRouteNames.Chat]: undefined;
  [tabsRouteNames.Profile]: undefined;
};
