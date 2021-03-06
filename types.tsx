import {IEpisode, IMovieCategory} from "./src/types/interfaces";

/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  Subscribe: undefined;
  ConfirmSignUp: undefined;
  MovieDetail: undefined;
  Profile: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  ComingSoon: undefined;
  Search: undefined;
  Downloads: undefined;
};

export type HomeParamList = {
  Home: undefined;
  MovieDetail: undefined;
};

export type ComingSoonParamList = {
  ComingSoonScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type DownloadParamList = {
  DownloadScreen: undefined;
};

export type ProfilePictureProps = {
  image: string;
  styles?: {
    profileButton: object;
    profileImage: object;
  };
  size: number;
  onPress?: (() => void)|null;
};

export type ProfileBottomTabParamList = {
  Profile: undefined;
};

export type PosterListDataType = IMovieCategory[]|IEpisode[]|null;

export type UserInputProps = {

};