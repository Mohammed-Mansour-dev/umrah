
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleScrolling = () => {
    const header = document.querySelector("header");
    if (window.scrollY >= 150) {
      header.classList.add("beSticky");
    } else {
      header.classList.remove("beSticky");
    }

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <header>
      <nav className="bg-primary z-[1000] relative bg-gradient-to-tl from-black/70 via-primary/80 to-black/80 text-white font-SST shadow-lg py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex  justify-between items-center">
            {/* logo */}

            <div className="relative group flex items-center">
  <Link to="/" className="flex items-center">
    <img
      src="./cropped_reeval.png"
      alt="Umrah Services Logo"
      className="h-16"
    />
  </Link>
{/* dropdown */}
 <div className="absolute top-full right-0 hidden group-hover:block z-50 " >
  <div className=" mt-2 w-48 bg-primary rounded-md shadow-lg overflow-hidden border border-third">
    <Link
      to="/pilgrims"
      className="block px-4 py-2 text-right text-third hover:bg-third_dark hover:text-white transition-colors"
    >
      ادارة المعتمرين
    </Link>
    <Link
      to="/admin"
      className="block px-4 py-2 text-right text-third hover:bg-third_dark hover:text-white transition-colors"
    >
      الادارة
    </Link>
  </div>
 </div>
</div>


            {/* nav links */}
            <div className="flex items-center gap-4">
              <Link to="/booking" className="hover:text-accent transition-colors">
                احجز الان
              </Link>
              <Link to="/programs" className="hover:text-accent transition-colors">
                الباقات
              </Link>
              <Link to="/guide" className="hover:text-accent transition-colors">
                دليلك
              </Link>
              <Link to="/tracking" className="hover:text-accent transition-colors">
                تتبع الرحلة
              </Link>
            </div>

            {/* contact us */}
            <div>
              <Link to="/contact" className="hover:text-accent transition-colors">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;






