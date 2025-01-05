import { useState } from 'react'

const TripTracking = () => {
  const [bookingId, setBookingId] = useState('')
  const [tripDetails, setTripDetails] = useState(null)

  // Sample trip data - in a real app, this would come from an API
  const sampleTripDetails = {
    status: 'قيد التنفيذ',
    currentLocation: 'مكة',
    upcomingEvents: [
      {
        id: 1,
        title: 'تسجيل الوصول إلى الفندق',
        date: '2025-01-03',
        time: '14:00',
        location: 'فندق مكة هيلتون',
        status: 'قادم'
      },
      {
        id: 2,
        title: 'طواف جماعي',
        date: '2025-01-04',
        time: '05:00',
        location: 'المسجد الحرام',
        status: 'قادم'
      }
    ],
    completedEvents: [
      {
        id: 3,
        title: 'الوصول إلى المطار',
        date: '2025-01-02',
        time: '10:00',
        location: 'مطار جدة',
        status: 'مكتمل'
      }
    ]
  };
  const handleTrack = (e) => {
    e.preventDefault()
    // In a real app, this would make an API call
    setTripDetails(sampleTripDetails)
  }

  return (
<div className='w-full gradient-background' >

    <div 

    className="max-w-4xl mx-auto font-SST py-10 px-4 min-h-[80vh]">
      <h1 className="text-3xl font-bold text-primary mb-8">تتبع رحلتك</h1>

      {/* Tracking Form */}
      <div className="bg-white/50 p-6 rounded-lg shadow-md mb-8">
        <form onSubmit={handleTrack} className="flex gap-4 ">
          <input
            type="text"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            placeholder="أدخل معرف الحجز الخاص بك"
            className="flex-1 p-2 border rounded-md focus:ring-primary focus:border-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            تتبع
          </button>
        </form>
      </div>

      {/* Trip Details */}
      {tripDetails && (
        <div className="space-y-8">
          {/* Current Status */}
          <div className="bg-white/50  p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-4">الحاله </h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-third text_shadow1">الموقع</p>
                <p className="text-lg font-semibold">{tripDetails.currentLocation}</p>
              </div>
              <div>
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-800 font-semibold">
                  {tripDetails.status}
                </span>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white/50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-4">المهام التالية</h2>
            <div className="space-y-4">
              {tripDetails.upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-third text_shadow1">{event.location}</p>
                    <p className="text-sm text-third text_shadow1">
                      {event.date} في {event.time}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                    القادم
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Events */}
          <div className="bg-white/50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-primary mb-4">المهام المكتملة</h2>
            <div className="space-y-4">
              {tripDetails.completedEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-third text_shadow1">{event.location}</p>
                    <p className="text-sm text-third text_shadow1">
                      {event.date} في {event.time}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm">
                    مكتمل
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>

</div>
  )
}

export default TripTracking;
