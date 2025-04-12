import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Hero, BluePrint, About , Projects, SkillShowcase, Startups, Testimonials, ProjectCTA, ContactUs, AboutPage, ProjectsPage, OffTheClockSection} from './components/index.js'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
          <Hero/>
          <About/>
          <BluePrint/>
          <Projects/>
          <SkillShowcase/>
          <Startups/>
          <Testimonials/>
          <ProjectCTA/>
          </>
        ) 
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/off-the-clock", 
        element: <OffTheClockSection />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router = {router}/> 
  </StrictMode>,
)
