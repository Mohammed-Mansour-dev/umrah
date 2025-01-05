

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingInquiry = () => {
  const [formData, setFormData] = useState({
    departureCity: '',
    arrivalCity: '',
    departureDate: '', // Store as a string in YYYY-MM-DD format
    returnDate: '', // Store as a string in YYYY-MM-DD format
    numberOfPilgrims: 1,
    accommodationType: 'standard',
    transportationType: 'group',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date, name) => {
    // Format the date as YYYY-MM-DD
    const formattedDate = date ? formatDate(date) : '';
    setFormData((prev) => ({
      ...prev,
      [name]: formattedDate,
    }));
  };

  // Helper function to format the date as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };

  return (
    <div
      className="min-h-[80vh] [background-image:url('/air.jpg')] bg-no-repeat bg-cover bg-fixed bg-center font-SST items-center justify-center"
   
    >
      <div className="max-w-4xl backdrop-blur-sm h-fit pt-14 flex flex-col mx-auto">
        <h1 className="text-3xl font-bold text-yellow-400 text_shadow1 mb-8">
          احجز رحلة العمرة الخاصة بك
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 pb-8 bg-third_dark/70 p-5 rounded-lg shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Departure City */}
            <div>
              <label className="block text-sm font-medium text-gray-100 text_shadow1 mb-2">
                مدينة المغادرة
              </label>
              <input
                type="text"
                name="departureCity"
                value={formData.departureCity}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>

            {/* Arrival City */}
            <div>
              <label className="block text-sm font-medium text-gray-100 text_shadow1 mb-2">
                مدينة الوصول
              </label>
              <select
                name="arrivalCity"
                value={formData.arrivalCity}
                onChange={handleChange}
                className="w-full p-2 text-center border rounded-md focus:ring-primary focus:border-primary"
                required
              >
                <option className="font-semibold bg-slate-500" value="">
                  اختر مدينة
                </option>
                <option className="font-semibold bg-slate-500" value="jeddah">
                  جدة
                </option>
                <option className="font-semibold bg-slate-500" value="medina">
                  المدينة المنورة
                </option>
                <option className="font-semibold bg-slate-500" value="makkah">
                  مكة
                </option>
              </select>
            </div>

            {/* Departure Date */}
            <div className='' >
              <label className="block text-sm font-medium text-gray-100 text_shadow1 mb-2">
                تاريخ المغادرة
              </label>
              <DatePicker
              
                selected={formData.departureDate ? new Date(formData.departureDate) : null}
                onChange={(date) => handleDateChange(date, 'departureDate')}
                className="!w-full  p-2 border rounded-md focus:ring-primary focus:border-primary"
                dateFormat="yyyy-MM-dd"
                placeholderText="اختر تاريخ المغادرة"
                required
              />
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-sm font-medium text-gray-100 text_shadow1 mb-2">
                تاريخ العودة
              </label>
              <DatePicker
                selected={formData.returnDate ? new Date(formData.returnDate) : null}
                onChange={(date) => handleDateChange(date, 'returnDate')}
                className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
                dateFormat="yyyy-MM-dd"
                placeholderText="اختر تاريخ العودة"
                required
              />
            </div>

            {/* Number of Pilgrims */}
            <div>
              <label className="block text-sm font-medium text-gray-100 text_shadow1 mb-2">
                عدد الحجاج
              </label>
              <input
                type="number"
                name="numberOfPilgrims"
                value={formData.numberOfPilgrims}
                onChange={handleChange}
                min="1"
                className="w-full p-2 border rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>

            {/* Accommodation Type */}
            <div>
              <label className="block text-sm font-medium text-gray-100 text_shadow1 mb-2">
                نوع الإقامة
              </label>
              <select
                name="accommodationType"
                value={formData.accommodationType}
                onChange={handleChange}
                className="w-full p-2 text-center border rounded-md focus:ring-primary focus:border-primary"
                required
              >
                <option value="standard">عادي</option>
                <option value="deluxe">فاخر</option>
                <option value="premium">ممتاز</option>
              </select>
            </div>
          </div>

          {/* Transportation Type */}
          <div>
            <label className="block text-sm font-medium text-gray-100 text_shadow1 mb-2">
              نوع النقل
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="transportationType"
                  value="group"
                  checked={formData.transportationType === 'group'}
                  onChange={handleChange}
                  className="mr-2"
                />
                نقل جماعي
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="transportationType"
                  value="private"
                  checked={formData.transportationType === 'private'}
                  onChange={handleChange}
                  className="mr-2"
                />
                نقل خاص
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-600 text_shadow1 text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors"
          >
            احصل على عرض السعر
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingInquiry;
























