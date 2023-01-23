import "../styles/customStyle.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          <h1>Mk's Todo App</h1>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
