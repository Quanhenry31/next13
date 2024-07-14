export const metadata = {
  title: "Blog",
  description: "Bla Bla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
