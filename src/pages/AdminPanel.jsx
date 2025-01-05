/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';







const StatusDropdown = ({ currentStatus, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const statusOptions = ['قيد التنفيذ', 'قيد التحقق', 'قيد الانتظار', 'تم التأكيد'];

  const handleStatusChange = (status) => {
    onStatusChange(status); // Update the status
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="relative  ">
      <span
        className={`
          ${currentStatus === 'قيد التنفيذ' ? 'bg-blue-100 text-blue-800' : currentStatus === "تم التأكيد" ? 'bg-green-100 text-green-800' : currentStatus === "قيد التحقق" ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}
          
          px-2 inline-flex text-xs leading-5 items-center gap-2 cursor-pointer hover:text-red-500 font-semibold rounded-full  `}
        title="غير الحاله"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
      >
        {currentStatus}
        <span>
          <FiEdit />
        </span>
      </span>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-32 bg-white rounded-lg shadow-lg">
          <ul className="py-1">
            {statusOptions.map((status) => (
              <li
                key={status}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleStatusChange(status)}
              >
                {status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};






















const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sample data - in a real app, this would come from an API
  const stats = {
    totalBookings: 150,
    activeTrips: 45,
    pendingPayments: 12,
    revenue: '$245,000',
  };

  const recentBookings = [
    {
      id: 1,
      pilgrimName: 'جون دو',
      package: 'الباقة المميزة',
      date: '2025-01-01',
      status: 'تم التأكيد',
      amount: '$2,999',
    },
    // Add more sample bookings
  ];

  const activeTrips = [
    {
      id: 1,
      groupName: 'المجموعة أ',
      location: 'مكة',
      pilgrims: 25,
      startDate: '2025-01-01',
      endDate: '2025-01-14',
      status: 'قيد التنفيذ',
    },
    {
      id: 1,
      groupName: 'المجموعة أ',
      location: 'مكة',
      pilgrims: 25,
      startDate: '2025-01-01',
      endDate: '2025-01-14',
      status: 'قيد التنفيذ',
    },
    {
      id: 1,
      groupName: 'المجموعة أ',
      location: 'مكة',
      pilgrims: 25,
      startDate: '2025-01-01',
      endDate: '2025-01-14',
      status: 'قيد التنفيذ',
    },
    {
      id: 1,
      groupName: 'المجموعة أ',
      location: 'مكة',
      pilgrims: 25,
      startDate: '2025-01-01',
      endDate: '2025-01-14',
      status: 'قيد التنفيذ',
    },
    // Add more sample trips
  ];

  return (
    <div className="max-w-7xl mx-auto py-14 font-SST px-4">
      <h1 className="text-3xl font-bold text-primary mb-8">لوحة التحكم الإدارية</h1>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex gap-7">
            {['dashboard', 'bookings', 'trips', 'payments', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 ${
                  activeTab === tab
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab === 'dashboard' && 'لوحة التحكم'}
                {tab === 'bookings' && 'الحجوزات'}
                {tab === 'trips' && 'الرحلات'}
                {tab === 'payments' && 'المدفوعات'}
                {tab === 'settings' && 'الإعدادات'}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Dashboard Content */}
      {activeTab === 'dashboard' && (
        <div className="space-y-6">

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-500 text-sm font-medium">إجمالي الحجوزات</h3>
              <p className="text-3xl font-bold text-primary mt-2">{stats.totalBookings}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-500 text-sm font-medium">الرحلات النشطة</h3>
              <p className="text-3xl font-bold text-primary mt-2">{stats.activeTrips}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-500 text-sm font-medium">المدفوعات المعلقة</h3>
              <p className="text-3xl font-bold text-primary mt-2">{stats.pendingPayments}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-500 text-sm font-medium">إجمالي الإيرادات</h3>
              <p className="text-3xl font-bold text-primary mt-2">{stats.revenue}</p>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-primary">الحجوزات الأخيرة</h2>
            </div>
            <div className="overflow-x-auto min-h-40 ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase">اسم الحاج</th>
                    <th className="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase">الباقة</th>
                    <th className="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase">التاريخ</th>
                    <th className="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase">الحالة</th>
                    <th className="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase">المبلغ</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-6 py-4  text-center whitespace-nowrap">{booking.pilgrimName}</td>
                      <td className="px-6 py-4  text-center whitespace-nowrap">{booking.package}</td>
                      <td className="px-6 py-4  text-center whitespace-nowrap">{booking.date}</td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">
  <StatusDropdown
    currentStatus={booking.status}
    onStatusChange={(newStatus) => {
      // Update the trip status in your state or API
      console.log('New Status:', newStatus);
    }}
  />
</td>
                      <td className="px-6 py-4 whitespace-nowrap">{booking.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Active Trips */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-primary">الرحلات النشطة</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-center  text-xs font-medium text-gray-500 uppercase">المجموعة</th>
                    <th className="px-6 py-3 text-center  text-xs font-medium text-gray-500 uppercase">الموقع</th>
                    <th className="px-6 py-3 text-center  text-xs font-medium text-gray-500 uppercase">الحجاج</th>
                    <th className="px-6 py-3 text-center  text-xs font-medium text-gray-500 uppercase">تاريخ البدء</th>
                    <th className="px-6 py-3 text-center  text-xs font-medium text-gray-500 uppercase">تاريخ الانتهاء</th>
                    <th className="px-6 py-3 text-center  text-xs font-medium text-gray-500 uppercase">الحالة</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activeTrips.map((trip) => (
                    <tr key={trip.id}>
                      <td className="px-6 py-4 text-center whitespace-nowrap">{trip.groupName}</td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">{trip.location}</td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">{trip.pilgrims}</td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">{trip.startDate}</td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">{trip.endDate}</td>
                      {/* <td className="px-6 py-4 text-center whitespace-nowrap">
                        <span className="px-2 inline-flex 
                        text-xs leading-5 items-center gap-2
                        cursor-pointer hover:text-red-500
                         font-semibold rounded-full
                          bg-blue-100 text-blue-800" title='غير الحاله' >
                          {trip.status}
                       
                        <span><FiEdit /></span>
                         </span>
                      </td> */}

<td className="px-6 py-4 text-center whitespace-nowrap">
  <StatusDropdown
    currentStatus={trip.status}
    onStatusChange={(newStatus) => {
      // Update the trip status in your state or API
      console.log('New Status:', newStatus);
    }}
  />
</td>





                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>



        </div>
      )}

      {/* Other tabs content would go here */}
    </div>
  );
};

export default AdminPanel;