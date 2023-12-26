import "./globals.css";
export const metadata = {
  title: "Garson App",
  description: "Garson motivasyon",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width,height=device-height, initial-scale=0.70"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://icon-library.com/images/icon-favicon/icon-favicon-4.jpg"
        ></link>
      </head>


      <body className="root">{children}</body>

    </html>
  );
}
