import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./index";

export const useAppNavigation = () => useNavigation<RootStackParamList>();
