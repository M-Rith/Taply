import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Satoshi-Regular",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Satoshi-Medium",
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "Satoshi-Bold",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Satoshi-Bold",
  },
  link: {
    fontSize: 16,
    lineHeight: 30,
    fontFamily: "Satoshi-Regular",
    color: "#0a7ea4",
  },
});
