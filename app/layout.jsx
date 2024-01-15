import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata = {
  title: "getLinked",
  description: "getLinked Tech Hackathon 1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
