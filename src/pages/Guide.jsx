import { useState } from 'react'

const Guide = () => {
  const [activeTab, setActiveTab] = useState('mecca')
  
  const locations = {
    mecca: [
      {
        id: 1,
        name: 'المسجد الحرام',
        description: "المسجد الحرام هو أكبر مسجد في العالم ويحيط بأقدس موقع في الإسلام، الكعبة.",
        importance: 'أقدس موقع في الإسلام، حيث يؤدي المسلمون الطواف كجزء من العمرة والحج.',
        tips: [
          'من الأفضل الزيارة للصلاة في أوقات أقل ازدحامًا',
          'الحفاظ على اللباس المناسب والاحترام',
          'اتباع توجيهات أفراد الأمن',
          'حافظ على أغراضك آمنة ومأمونة'
        ],
        image: '/masjedHaram.jpg'
      },
      {
        id: 2,
        name: 'جبل عرفة',
        description: 'هو تل جرانيتي شرق مكة، ويُعرف أيضًا باسم جبل الرحمة.',
        importance: 'المكان الذي ألقى فيه النبي محمد (صلى الله عليه وسلم) خطبته الأخيرة.',
        tips: [
          'قم بالزيارة خلال الساعات الأكثر برودة',
          'احمل الماء والمستلزمات الضرورية',
          'اتبع المسارات المخصصة'
        ],
        image: './arafah.jpg'
      }
    ],
    medina: [
      {
        id: 3,
        name: 'المسجد النبوي',
        description: "المسجد النبوي هو ثاني أقدس موقع في الإسلام.",
        importance: 'يحتوي على قبر النبي محمد (صلى الله عليه وسلم).',
        tips: [
          'قم بالزيارة في أوقات أقل ازدحامًا',
          'احترم قدسية المكان',
          'اتبع الآداب الصحيحة عند زيارة الروضة',
          'حافظ على الهدوء والتركيز'
        ],
        image: './madina.jpg'
      },
      {
        id: 4,
        name: 'مسجد قباء',
        description: 'هو أول مسجد بني في تاريخ الإسلام.',
        importance: 'بناه النبي محمد (صلى الله عليه وسلم) عند وصوله إلى المدينة.',
        tips: [
          'قم بالزيارة في الصباح الباكر أو المساء المتأخر',
          'أدِ ركعتين من الصلاة',
          'تعرف على أهميته التاريخية'
        ],
        image: './qepa.jpg'
      }
    ]
  };

  return (
<div className=' gradient-background ' >

    <div className="max-w-7xl pb-16 pt-14 mx-auto font-SST px-4">
      <h1 className="text-3xl font-bold text-white text_shadow1 mb-8">دليل الاماكن المقدسة</h1>

      {/* Tab Navigation */}
      <div className="mb-8 mr-5 ">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('mecca')}
              className={`py-4 px-1 ${
                activeTab === 'mecca'
                  ? 'border-b-2 border-third_dark text-third_dark'
                  : 'text-gray-300 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              مكة
            </button>
            <button
              onClick={() => setActiveTab('medina')}
              className={`py-4 px-1 ${
                activeTab === 'medina'
                  ? 'border-b-2 border-third_dark text-third_dark'
                  : 'text-gray-300 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              المدينة
            </button>
          </nav>
        </div>
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations[activeTab].map((location) => (
          <div key={location.id} className="bg-slate-300/30 backdrop-blur-md rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              {/* In a real app, add proper image handling */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-third text_shadow1 mb-2">{location.name}</h2>
              <p className="text-gray-100 text_shadow1 mb-4">{location.description}</p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-third text_shadow1 mb-2">الاهمية الدينية</h3>
                <p className="text-gray-100 text_shadow1">{location.importance}</p>
              </div>

              <div>
                <h3 className="font-semibold text-third text_shadow1 mb-2">نصائح للزوار</h3>
                <ul className="list-disc list-inside text-gray-100 text_shadow1 space-y-1">
                  {location.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-12 bg-primary/50  rounded-lg shadow-md p-6">
  <h2 className="text-2xl font-semibold text-third_dark text_shadow1 mb-4">الإرشادات العامة</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <h3 className="font-semibold text-third text_shadow1 mb-2">اللباس</h3>
      <ul className="text-gray-100 space-y-1">
        <li>ارتدِ ملابس محتشمة وفضفاضة</li>
        <li>يجب على الرجال ارتداء الإحرام الأبيض</li>
        <li>يجب على النساء تغطية شعرهن</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-third text_shadow1 mb-2">الآداب</h3>
      <ul className="text-gray-100 space-y-1">
        <li>حافظ على النظافة</li>
        <li>خفض الصوت</li>
        <li>التزم بأوقات الصلاة</li>
      </ul>
    </div>
    <div>
      <h3 className="font-semibold text-third text_shadow1 mb-2">ما يجب إحضاره</h3>
      <ul className="text-gray-100 space-y-1">
        <li>سجادة الصلاة</li>
        <li>زجاجة ماء</li>
        <li>أحذية مريحة</li>
      </ul>
    </div>
  </div>
</div>
    </div>
</div>
  )
}

export default Guide
