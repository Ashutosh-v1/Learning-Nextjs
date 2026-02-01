export const metadata = {
  title: {
    template: "%s | Agency",
    default: "Agency",
  },
  description: "hey there",
}; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header style={{ background: "grey"}}>Hehehehehe</header>
      <body>
        {children}
      </body>
    </html>
  );
}
 