import { useState } from 'react'

const PilgrimManagement = () => {
  
  
  // eslint-disable-next-line no-unused-vars
  const [pilgrims, setPilgrims] = useState([
    {
      id: 1,
      name:'أحمد محمد',
      passportNo: 'A123456789',
      nationality:'المملكة العربية السعودية',
      status:'مؤكد',
      package:'الباقة المميزة',
      paymentStatus:'مدفوع'
    }
  ])

  const [activeTab, setActiveTab] = useState('list')
  const [formData, setFormData] = useState({
    name: '',
    passportNo: '',
    nationality: '',
    dateOfBirth: '',
    gender: '',
    package: '',
    specialRequirements: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className={`max-w-7xl mx-auto px-4 py-10 min-h-[80vh] `}>
      <h1 className="text-3xl font-bold text-primary mb-8">
        إدارة المعتمرين
      </h1>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('list')}
              className={`py-4 px-1 ${
                activeTab === 'list'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
             قائمة المعتمرين
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className={`py-4 px-1 ${
                activeTab === 'add'
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
             إضافة معتمر
            </button>
          </nav>
        </div>
      </div>


{activeTab === 'list' ? (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            الاسم
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            رقم الجواز
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            الجنسية
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            الحالة
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            الباقة
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            حالة الدفع
          </th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            الإجراءات
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {pilgrims.map((pilgrim) => (
          <tr key={pilgrim.id}>
            <td className="px-6 py-4 whitespace-nowrap">{pilgrim.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pilgrim.passportNo}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pilgrim.nationality}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {pilgrim.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{pilgrim.package}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {pilgrim.paymentStatus}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button className="text-primary hover:text-primary-dark ml-4">
                تعديل
              </button>
              <button className="text-red-600 hover:text-red-900">
                حذف
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
) : (
  <div className="bg-white shadow-md py- rounded-lg p-6">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الاسم الكامل
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
            required
            placeholder="أدخل الاسم الكامل"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            رقم الجواز
          </label>
          <input
            type="text"
            name="passportNo"
            value={formData.passportNo}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
            required
            placeholder="أدخل رقم الجواز"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الجنسية
          </label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
            required
            placeholder="أدخل الجنسية"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            تاريخ الميلاد
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الجنس
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
            required
          >
            <option value="">اختر الجنس</option>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            الباقة
          </label>
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
            required
          >
            <option value="">اختر الباقة</option>
            <option value="economy">الباقة الاقتصادية</option>
            <option value="premium">الباقة المميزة</option>
            <option value="vip">الباقة الفاخرة</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          متطلبات خاصة
        </label>
        <textarea
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
          placeholder="أدخل أي متطلبات خاصة"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors"
      >
        إضافة معتمر
      </button>
    </form>
  </div>
)}






    </div>
  )
}

export default PilgrimManagement
