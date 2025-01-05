import { useState } from 'react'

const Programs = () => {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const packages = [
    {
      id: 1,
      name: 'الباقة الاقتصادية',
      duration: '10 أيام',
      price: '$1,999',
      features: [
        'إقامة في فندق عادي',
        'نقل جماعي',
        'وجبات أساسية',
        'خدمات مرشد أساسية',
        'نقل من وإلى المطار'
      ]
    },
    {
      id: 2,
      name: 'الباقة المميزة',
      duration: '14 يومًا',
      price: '$2,999',
      features: [
        'إقامة في فندق 4 نجوم',
        'نقل شبه خاص',
        'وجبات كاملة',
        'مرشد ذو خبرة',
        'خدمات VIP في المطار',
        'جولات زيارة'
      ]
    },
    {
      id: 3,
      name: 'الباقة VIP',
      duration: '14 يومًا',
      price: '$4,999',
      features: [
        'إقامة في فندق 5 نجوم',
        'نقل خاص',
        'وجبات فاخرة',
        'مرشد شخصي مخصص',
        'خدمات VIP في المطار',
        'جولات زيارة ممتدة',
        'وسائل رفاهية فاخرة'
      ]
    }
  ];

  return (
  <div    style={{
    backgroundImage: `url(/makkah2.jpg)`, // Path to the image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment:"fixed"
  }}>
    <div
 
    
    className="max-w-7xl  min-h-[92vh] pt-7 mx-auto font-SST px-4">
    
      <h1 className="text-3xl font-bold text-white text_shadow1 mb-8">باقات العمرة</h1>
      
      <div className="grid grid-cols-1 backdrop-blur-lg md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-third_dark/60 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6  h-full flex flex-col">
              <h2 className="text-2xl font-semibold text-white text_shadow1 mb-2">{pkg.name}</h2>
              <p className="text-gray-600 mb-4">المدة: {pkg.duration}</p>
              <p className="text-3xl font-bold text-secondary mb-6">{pkg.price}</p>
              
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200 text_shadow1">
                    <svg className="w-4 h-4 text-green-500 mr-2 text_shadow1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => setSelectedPackage(pkg)}
                className="w-full bg-primary
                 text-white py-2 rounded-md 
                  hover:scale-x-105 mt-auto
                   transition-colors [box-shadow:3px_3px_7px_#333] "
              >
                اختر باقة
              </button>
            </div>
          </div>
        ))}
      </div>

{/* ----------------
---- popup --------------------
-----------------*/}

      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-primary rounded-lg p-6 max-w-md w-full">
            <h3 className="text-2xl font-semibold text-white text_shadow1 mb-4">
              تاكيد {selectedPackage.name}
            </h3>
            <p className="text-gray-100 text_shadow1 mb-4">
               لقد اخترت {selectedPackage.name} حجز {selectedPackage.price}.
              هل تريد متابعة الحجز؟
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.location.href = '/booking'}
                className="flex-1 bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Proceed to Booking
              </button>
              <button
                onClick={() => setSelectedPackage(null)}
                className="flex-1 bg-gray-200 text-gray-800
                 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default Programs
