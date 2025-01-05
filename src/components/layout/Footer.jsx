import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    // <footer className="bg-primary text-white mt-auto">
    //   <div className="max-w-7xl mx-auto px-4 py-6">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       <div>
    //         <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
    //         <p>Email: contact@umrahservices.com</p>
    //         <p>Phone: +1234567890</p>
    //       </div>
    //       <div>
    //         <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
    //         <ul className="space-y-2">
    //           <li><a href="/about" className="hover:text-accent">About Us</a></li>
    //           <li><a href="/faq" className="hover:text-accent">FAQ</a></li>
    //           <li><a href="/terms" className="hover:text-accent">Terms & Conditions</a></li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
    //         <div className="flex space-x-4">
    //           <a href="#" className="hover:text-accent">Facebook</a>
    //           <a href="#" className="hover:text-accent">Twitter</a>
    //           <a href="#" className="hover:text-accent">Instagram</a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-8 text-center border-t border-gray-700 pt-4">
    //       <p>&copy; {new Date().getFullYear()} Umrah Services. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>

<footer className="bg-gradient-to-b from-primary font-SST to-black/80 text-white mt-auto">
  <div className="max-w-7xl mx-auto px-4 py-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Contact Us Section */}
      <div className="flex-1  text-center" >
        <h3 className="text-lg font-semibold mb-4">اتصل بنا</h3>
        <p>البريد الإلكتروني: reevalco@gmail.com</p>
        <p>  الهاتف:00967777907999</p>
      </div>

      {/* Quick Links Section */}
      <div className="flex-1  text-center" >
        <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
        <ul className="space-y-2">
          <li>
            <a href="/about" className="hover:text-accent">
              عنا
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:text-accent">
              الأسئلة الشائعة
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-accent">
              الشروط والأحكام
            </a>
          </li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div className="flex-1    text-center" >
        <h3 className="text-lg font-semibold mb-4">تابعنا</h3>


        <div className="flex  gap-3 justify-center ">
         <a href="facebook.com" className="text-xl text-white hover:text-third" >
         <FaFacebook />
         </a>

          <a href="instagram.com" className="text-xl text-white hover:text-third" >
          <FaInstagram /> </a>

             <a href="twitter.com" className="text-xl text-white hover:text-third" >
          <FaTwitter />
          </a>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="mt-8 text-center border-t border-gray-700 pt-4">
      <p>&copy; {new Date().getFullYear()} خدمات العمرة. جميع الحقوق محفوظة.</p>
    </div>
  </div>
</footer>






  )
}

export default Footer
