import Navbar from "./app/components/Navbar.jsx";
import Hero from "./app/components/Hero.jsx"
import Products from "./app/components/Products.jsx"
import WhyChoose from "./app/components/WhyChoose.jsx"
import Subscription from "./app/components/Subscription.jsx";
import Footer from "./app/components/Footer.jsx"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
     <Navbar />
     <Hero />
     <Products />
     <WhyChoose />
     <Subscription />
     <Footer />
    </div>
  );
}

export default App;
