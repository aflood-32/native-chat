import React, { memo } from "react";
import { tabsRouteNames } from "../interfaces";
import FeedIcon from "../../../assets/navIcons/home.svg";
import FeedIconActive from "../../../assets/navIcons/home-active.svg";
import SavedVideosIcon from "../../../assets/navIcons/videos.svg";
import SavedVideosIconActive from "../../../assets/navIcons/videos-active.svg";
import Challenges from "../../../assets/navIcons/challenge.svg";
import ChallengesActive from "../../../assets/navIcons/challenge-active.svg";
import Chat from "../../../assets/navIcons/chat.svg";
import ChatActive from "../../../assets/navIcons/chat-active.svg";
import Profile from "../../../assets/navIcons/user.svg";
import ProfileActive from "../../../assets/navIcons/user-active.svg";

const IconNames = {
  [tabsRouteNames.Feed]: <FeedIcon />,
  [tabsRouteNames.SavedVideos]: <SavedVideosIcon />,
  [tabsRouteNames.Challenges]: <Challenges />,
  [tabsRouteNames.Chat]: <Chat />,
  [tabsRouteNames.Profile]: <Profile />,
};

const IconNamesActive = {
  [tabsRouteNames.Feed]: <FeedIconActive />,
  [tabsRouteNames.SavedVideos]: <SavedVideosIconActive />,
  [tabsRouteNames.Challenges]: <ChallengesActive />,
  [tabsRouteNames.Chat]: <ChatActive />,
  [tabsRouteNames.Profile]: <ProfileActive />,
};

interface ITabIcon {
  iconName: tabsRouteNames;
  active: boolean;
}

const TabIcon: React.FC<ITabIcon> = ({ iconName, active }) => {
  return active ? IconNamesActive[iconName] : IconNames[iconName];
};

export default memo(TabIcon);
