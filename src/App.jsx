import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { Header, Footer } from "./components/index.js";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const location = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 scroll-smooth antialiased transition-colors duration-500">

      <Header />

      <main className="flex-grow bg-gray-50 dark:bg-neutral-800 transition-colors duration-500">


        {isLoading && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-white/80 dark:bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
               className="h-12 w-12 border-4 border-t-blue-600 border-b-blue-600 dark:border-t-pink-400 dark:border-b-pink-400 rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-y-16 text-balance leading-relaxed">
              <Outlet />
              <ScrollRestoration />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
