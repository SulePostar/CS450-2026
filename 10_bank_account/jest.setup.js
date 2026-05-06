import "@testing-library/jest-native/extend-expect";

jest.mock("expo-status-bar", () => ({
  StatusBar: () => null,
}));

jest.mock(
  "react-native/Libraries/Animated/NativeAnimatedHelper",
  () => ({}),
  { virtual: true }
);

