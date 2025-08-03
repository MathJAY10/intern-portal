// app/layout.js
export const metadata = {
  title: 'Intern Dashboard',
  description: 'Simple Intern Dashboard App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
