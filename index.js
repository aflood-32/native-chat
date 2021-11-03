import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import DecoratedApp from "./DecoratedApp";

AppRegistry.registerComponent(appName, () => DecoratedApp);
