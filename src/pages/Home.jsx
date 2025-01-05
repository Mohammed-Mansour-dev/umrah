import { Link } from 'react-router-dom'

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';



//! counter
// eslint-disable-next-line react/prop-types
const AnimatedNumber = ({ end, duration = 3 ,suffix="" ,prefix="" }) => {
  const [ref, inView] = useInView({ triggerOnce: true }); // Trigger animation only once

  return (
    <div ref={ref}>
      {inView && (
        <CountUp
          start={0}
          end={end}
          duration={duration}
         suffix={suffix}
         prefix={prefix}
        />
      )}
    </div>
  );
};











const Home = () => {


const ourServicesCards =[
  {title:'برامج متكاملة',description:'عروض العمرة الشاملة مع الطيران والإقامة والمواصلات',link:'/programs',linkTitle:"عرض البرامج"},
  {title:'جولات إرشادية',description:'أدلة الخبراء لمساعدتك خلال رحلتك الروحية',link:'/guide',linkTitle:"اعرف اكثر"},
  {title:'تتبع الرحلة',description:'تحديثات وتتبع في الوقت الفعلي لرحلة العمرة الخاصة بك',link:'/tracking',linkTitle:"تتبع الان"},
  {title:'نقل داخلي وخارجي',description:'معنا يمكنك الحجز مع افضل شركات النقل من والى السعودية.',link:'/tracking',linkTitle:"احجز الان"},

]



  return (
    <div className=" font-SST ">
      {/* Hero Section */}
      <div className="relative   h-[500px] min-h-[80vh]
       text-third ">
       {/* bg video */}
        <div className="absolute z-10 inset-0 bg-black ">
          <video 
          src='./makkah.mp4'
          autoPlay
          muted
          loop
className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 z-20 bg-black/50' />
        </div>
        {/* overlay */}
        <div className="z-30 max-w-7xl relative pr-14 mx-auto px-4 h-full flex items-center">
          <div className="space-y-6">
            <h1 className="text-5xl text_shadow1 font-bold font-arabic">
              رحلة العمرة
              <span className="block text-4xl font-sans mt-2">
              رحلتك المقدسة والفريدة تبدأ هنا
               </span>
            </h1>
            <p className="text-xl text_shadow1 max-w-2xl ">
            استمتع برحلة سلسة وروحانية إلى المدن المقدسة مع خدمات العمرة الشاملة لدينا
            </p>
            <Link
              to="/booking"
              className="inline-block hover:opacity-80 duration-200 ease-in-out transition-all text_shadow1 bg-gradient-to-l to-third from-primary text-white px-8 py-3 rounded-md "
            >
             احجز عمرتك الان
            </Link>
          </div>
        </div>


      </div>


<div className='  py-20  bg-gradient-to-br to-third_dark from-black' >
      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text_shadow1 text-center mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

   


      {
        ourServicesCards.map((service, index) => (
          <div key={index} className="bg-slate-100/20 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-third mb-4">{service.title}</h3>
            <p className="text-gray-100 mb-4">{service.description}</p>
            <Link to={service.link} className="text-secondary flex  justify-end
            hover:text-third  ">{service.linkTitle} ←</Link> 
            
                      </div>
        ))}


        
          {
            // Add more services here if needed.
      }
          
        </div>
      </div>

      {/* Why Choose Us Section */}
    <div className="py-12  mt-20  bg-third/10 shadow-lg rounded-md mx-4">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text_shadow1 text-center mb-12">
          لماذا نحن
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-100 text_shadow1 mb-2">
              <AnimatedNumber end={24} suffix="/7" />
            </div>
            <p className="text-gray-300">خدمة عملاء</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-100 text_shadow1 mb-2">
              <AnimatedNumber end={15} suffix="+" />
            </div>
            <p className="text-gray-300">سنوات خبرة</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-100 text_shadow1 mb-2">
              <AnimatedNumber end={1000} suffix="+" />
            </div>
            <p className="text-gray-300">معتمرين سعداء</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-100 text_shadow1 mb-2">
              <AnimatedNumber end={100} suffix="%" />
            </div>
            <p className="text-gray-300">معدل رضا العملاء</p>
          </div>
        </div>
      </div>
    </div>

</div>

    </div>
  )
}

export default Home
