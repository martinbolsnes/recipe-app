export const metadata = {
  title: 'MunchMate Studio',
  description: 'Manage your recipes and ingredients',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
