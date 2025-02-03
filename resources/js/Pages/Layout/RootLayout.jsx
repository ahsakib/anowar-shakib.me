import "../../../css/globals.css" // Adjusted path for your styles
import { Helmet } from "react-helmet"

export const metadata = {
  title: "Anowar Shakib - Full Stack Developer",
  description:
    "Professional portfolio of Anowar Shakib, a Full Stack Developer specializing in web development and software engineering.",
}

const RootLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
      </Helmet>
      <div className="dark" style={{ fontFamily: "Inter, sans-serif" }}>
        {children}
      </div>
    </>
  )
}

export default RootLayout;
