import { Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      src="../assets/muddyGumboot.jpg"
      padding={tokens.space.medium}
    />
  );
}
