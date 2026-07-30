'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface Service {
  title: string
  desc: string
  price: string
  duration: string
  popular: boolean
}

interface RiderData {
  firstName: string
  lastName: string
  dob: string
  email: string
  phone: string
}

const SERVICES: Service[] = [
  {
    title: 'Lead Ride',
    desc: 'Perfect for beginners and kids. A gentle, guided introduction to horseback riding.',
    price: '$35',
    duration: '30 minutes',
    popular: false,
  },
  {
    title: 'Trail Ride',
    desc: 'Scenic guided ride along Wheeler Lake trails. Great views, gentle pace, all skill levels.',
    price: '$60',
    duration: '1 hour',
    popular: true,
  },
  {
    title: 'Mentone Tour',
    desc: 'Extended guided tour through the beautiful Mentone, AL area. A true adventure.',
    price: '$60',
    duration: 'per person',
    popular: false,
  },
]

function BookingWizard() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get('service')

  // Steps: 0 = Service selection, 1 = Riders, 2 = Date & Time, 3 = Rider Info, 4 = Success
  const [step, setStep] = useState(0)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [ridersCount, setRidersCount] = useState(1)
  
  // Calendar state
  const [currentYear, setCurrentYear] = useState(2026)
  const [currentMonth, setCurrentMonth] = useState(6) // July (0-indexed 6 is July)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // Rider info state
  const [riders, setRiders] = useState<RiderData[]>([
    { firstName: '', lastName: '', dob: '', email: '', phone: '' }
  ])

  // Pre-select service from URL query parameter
  useEffect(() => {
    if (serviceParam) {
      const decodedService = decodeURIComponent(serviceParam)
      const service = SERVICES.find(s => s.title.toLowerCase() === decodedService.toLowerCase())
      if (service) {
        setSelectedService(service)
        setStep(1)
      }
    }
  }, [serviceParam])

  // Synchronize riders array length with ridersCount
  useEffect(() => {
    setRiders(prev => {
      const next = [...prev]
      if (next.length < ridersCount) {
        const diff = ridersCount - next.length
        for (let i = 0; i < diff; i++) {
          next.push({ firstName: '', lastName: '', dob: '', email: '', phone: '' })
        }
      } else if (next.length > ridersCount) {
        next.splice(ridersCount)
      }
      return next
    })
  }, [ridersCount])

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service)
    setStep(1)
  }

  const handleNextStep = () => {
    if (step < 3) {
      setStep(prev => prev + 1)
    }
  }

  const handleBackStep = () => {
    if (step > 0) {
      setStep(prev => prev - 1)
    }
  }

  const handleRiderChange = (index: number, field: keyof RiderData, value: string) => {
    setRiders(prev => {
      const next = [...prev]
      next[index] = { ...next[index], [field]: value }
      return next
    })
  }

  const autofillRiderInfo = (index: number) => {
    if (index === 0) return
    const primaryRider = riders[0]
    handleRiderChange(index, 'email', primaryRider.email)
    handleRiderChange(index, 'phone', primaryRider.phone)
  }

  // Parse price number
  const getPricePerRider = () => {
    if (!selectedService) return 0
    return parseInt(selectedService.price.replace('$', ''), 10) || 0
  }

  const getSubtotal = () => {
    return getPricePerRider() * ridersCount
  }

  // Calendar parameters
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)

  // Generate calendar grid
  const calendarCells = []
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarCells.push(i)
  }

  // Next/Prev Month
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(prev => prev - 1)
    } else {
      setCurrentMonth(prev => prev - 1)
    }
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(prev => prev + 1)
    } else {
      setCurrentMonth(prev => prev + 1)
    }
    setSelectedDate(null)
    setSelectedTime(null)
  }

  // Available days logic: match July 30 and July 31 2026.
  // For other months, weekends + last two days.
  const isDateAvailable = (day: number) => {
    if (currentYear === 2026 && currentMonth === 6) {
      return day === 30 || day === 31
    }
    const dateObj = new Date(currentYear, currentMonth, day)
    const dayOfWeek = dateObj.getDay()
    return dayOfWeek === 0 || dayOfWeek === 6 || day === daysInMonth || day === daysInMonth - 1
  }

  const formatDateString = () => {
    if (selectedDate === null) return ''
    const dateObj = new Date(currentYear, currentMonth, selectedDate)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dayStr = days[dateObj.getDay()]
    const monthStr = months[dateObj.getMonth()]
    
    let suffix = 'th'
    if (selectedDate === 1 || selectedDate === 21 || selectedDate === 31) suffix = 'st'
    else if (selectedDate === 2 || selectedDate === 22) suffix = 'nd'
    else if (selectedDate === 3 || selectedDate === 23) suffix = 'rd'

    return `${dayStr} ${monthStr} ${selectedDate}${suffix}, ${currentYear}`
  }

  const isRiderInfoComplete = () => {
    return riders.every(rider => 
      rider.firstName.trim() !== '' && 
      rider.lastName.trim() !== '' && 
      rider.dob.trim() !== '' && 
      rider.email.trim() !== '' && 
      rider.phone.trim() !== ''
    )
  }

  const handleConfirmBooking = () => {
    if (isRiderInfoComplete()) {
      setStep(4) // success step
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 md:py-12 flex-1 flex flex-col justify-center">
      <div className="bg-white rounded-3xl shadow-xl border border-stone-200/60 overflow-hidden flex flex-col min-h-[500px]">
        
        {/* Title Bar inside the container */}
        <div className="px-6 py-4 border-b border-stone-100 bg-stone-50/50 flex items-center justify-between">
          <span className="font-bold text-base text-stone-700 tracking-wide uppercase font-serif">
            {step === 0 ? 'Select a Service' : `${selectedService?.title} Booking`}
          </span>
          {step > 0 && step < 4 && (
            <button 
              onClick={() => {
                setStep(0)
                setSelectedService(null)
              }}
              className="text-xs font-semibold text-amber-700 hover:text-amber-800 transition"
            >
              Change Service
            </button>
          )}
        </div>

        <div className="flex-1 p-6 md:p-10 flex flex-col justify-between">
          <div>
            {/* STEPPER PROGRESS BAR (Show for Steps 1-3) */}
            {step > 0 && step < 4 && (
              <div className="max-w-md mx-auto mb-10">
                <div className="flex items-center justify-between relative">
                  {/* Connector lines */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-stone-200 -translate-y-1/2 z-0" />
                  <div 
                    className="absolute top-1/2 left-0 h-0.5 bg-[#2b5c43] -translate-y-1/2 z-0 transition-all duration-300"
                    style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}
                  />

                  {/* Step 1: Riders */}
                  <div className="flex flex-col items-center relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition duration-300 ${
                      step > 1 
                        ? 'bg-[#2b5c43] text-white' 
                        : step === 1 
                          ? 'border-2 border-[#2b5c43] bg-white text-[#2b5c43]' 
                          : 'border border-stone-300 bg-white text-stone-400'
                    }`}>
                      {step > 1 ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : '1'}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${step >= 1 ? 'text-stone-800' : 'text-stone-400'}`}>Riders</span>
                  </div>

                  {/* Step 2: Date & Time */}
                  <div className="flex flex-col items-center relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition duration-300 ${
                      step > 2 
                        ? 'bg-[#2b5c43] text-white' 
                        : step === 2 
                          ? 'border-2 border-[#2b5c43] bg-white text-[#2b5c43]' 
                          : 'border border-stone-300 bg-white text-stone-400'
                    }`}>
                      {step > 2 ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : '2'}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${step >= 2 ? 'text-stone-800' : 'text-stone-400'}`}>Date & time</span>
                  </div>

                  {/* Step 3: Rider Info */}
                  <div className="flex flex-col items-center relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition duration-300 ${
                      step === 3 
                        ? 'border-2 border-[#2b5c43] bg-white text-[#2b5c43]' 
                        : 'border border-stone-300 bg-white text-stone-400'
                    }`}>
                      3
                    </div>
                    <span className={`text-xs mt-2 font-medium ${step === 3 ? 'text-stone-800' : 'text-stone-400'}`}>Rider info</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 0: SERVICE SELECTION */}
            {step === 0 && (
              <div className="max-w-3xl mx-auto text-center py-4">
                <h2 className="text-stone-900 font-serif text-3xl md:text-4xl font-semibold mb-2">Ready to ride?</h2>
                <p className="text-stone-500 font-medium tracking-wide uppercase text-xs mb-10">Our Services</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {SERVICES.map((service, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-2xl p-6 shadow-md border border-stone-200 flex flex-col justify-between relative text-left group hover:shadow-lg transition duration-200"
                    >
                      {service.popular && (
                        <span className="absolute -top-3 right-4 bg-emerald-800 text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">
                          Popular
                        </span>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif">{service.title}</h3>
                        <p className="text-stone-500 text-xs leading-relaxed mb-6">{service.desc}</p>
                      </div>
                      <div>
                        <div className="border-t border-stone-100 pt-4 mb-4">
                          <span className="text-2xl font-bold text-[#5c3d35] font-serif">{service.price}</span>
                          <span className="text-stone-400 text-xs ml-2">/ {service.duration}</span>
                        </div>
                        <button 
                          onClick={() => handleServiceSelect(service)}
                          className="w-full bg-[#5c3d35] hover:bg-[#482e28] text-white text-sm font-semibold py-2.5 rounded-xl transition"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1: RIDERS COUNTER */}
            {step === 1 && (
              <div className="max-w-md mx-auto text-center py-6">
                <h2 className="text-stone-950 font-serif text-3xl font-bold mb-8">How many riders?</h2>
                
                <div className="flex items-center justify-center gap-8 mb-8">
                  <button 
                    onClick={() => setRidersCount(prev => Math.max(1, prev - 1))}
                    disabled={ridersCount === 1}
                    className="w-16 h-16 rounded-full border border-stone-300 bg-white text-stone-600 flex items-center justify-center text-3xl font-light hover:bg-stone-50 hover:border-stone-400 active:scale-95 transition disabled:opacity-50 disabled:pointer-events-none"
                  >
                    &minus;
                  </button>
                  <span className="text-6xl font-bold text-stone-900 w-24 select-none font-serif">{ridersCount}</span>
                  <button 
                    onClick={() => setRidersCount(prev => Math.min(10, prev + 1))}
                    disabled={ridersCount === 10}
                    className="w-16 h-16 rounded-full border border-stone-300 bg-white text-stone-600 flex items-center justify-center text-3xl font-light hover:bg-stone-50 hover:border-stone-400 active:scale-95 transition disabled:opacity-50 disabled:pointer-events-none"
                  >
                    &#43;
                  </button>
                </div>

                <p className="text-stone-400 text-xs leading-relaxed max-w-xs mx-auto">
                  Select between 1 to 10 riders. For larger groups, please contact the ranch directly to schedule a private tour.
                </p>
              </div>
            )}

            {/* STEP 2: DATE & TIME SELECTOR */}
            {step === 2 && (
              <div className="max-w-3xl mx-auto py-2">
                <div className="text-center mb-8">
                  <h2 className="text-stone-900 font-serif text-3xl font-semibold mb-3">When are you riding?</h2>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Showing days with room for {ridersCount} {ridersCount === 1 ? 'rider' : 'riders'}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  
                  {/* CALENDAR */}
                  <div className="bg-white p-6 rounded-2xl border border-stone-200">
                    <div className="text-center font-bold text-stone-800 text-base mb-4 font-serif">Select a Day and Time</div>
                    <div className="flex items-center justify-between mb-4">
                      <button 
                        onClick={handlePrevMonth}
                        className="p-2 border border-stone-200 rounded-lg hover:bg-stone-50 text-stone-600 transition"
                        aria-label="Previous month"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                      </button>
                      
                      <span className="font-bold text-stone-800 text-sm font-serif">
                        {monthNames[currentMonth]} {currentYear}
                      </span>

                      <button 
                        onClick={handleNextMonth}
                        className="p-2 border border-stone-200 rounded-lg hover:bg-stone-50 text-stone-600 transition"
                        aria-label="Next month"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                      {daysOfWeek.map(d => (
                        <span key={d} className="text-xs font-semibold text-stone-400 py-1">{d}</span>
                      ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center">
                      {calendarCells.map((day, idx) => {
                        if (day === null) {
                          return <div key={`empty-${idx}`} />
                        }

                        const available = isDateAvailable(day)
                        const isSelected = selectedDate === day

                        return (
                          <button
                            key={`day-${day}`}
                            disabled={!available}
                            onClick={() => {
                              setSelectedDate(day)
                              setSelectedTime(null) // Reset time selection on date change
                            }}
                            className={`aspect-square w-full rounded-full text-xs font-semibold flex items-center justify-center transition ${
                              isSelected 
                                ? 'bg-[#5c3d35] text-white font-bold' 
                                : available 
                                  ? 'text-[#5c3d35] hover:bg-[#5c3d35]/10 font-bold text-sm' 
                                  : 'text-stone-300 cursor-not-allowed font-normal'
                            }`}
                          >
                            {day}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* TIME SLOTS */}
                  <div className="min-h-[250px] bg-stone-50 md:bg-transparent rounded-2xl">
                    {selectedDate !== null ? (
                      <div>
                        <h3 className="font-bold text-stone-800 mb-4 text-sm tracking-wide uppercase font-serif">
                          {formatDateString()}
                        </h3>
                        
                        <div className="space-y-3">
                          <button
                            onClick={() => setSelectedTime('4:00 pm')}
                            className={`w-full p-5 rounded-xl border text-center transition ${
                              selectedTime === '4:00 pm'
                                ? 'bg-[#5c3d35] border-[#5c3d35] text-white shadow-md'
                                : 'bg-white border-stone-200 text-stone-800 hover:border-stone-300'
                            }`}
                          >
                            <div className="font-bold text-lg font-serif">4:00 pm</div>
                            <div className={`text-xs mt-1 ${selectedTime === '4:00 pm' ? 'text-stone-200' : 'text-stone-400'}`}>6 spots left</div>
                          </button>

                          <button
                            onClick={() => setSelectedTime('6:00 pm')}
                            className={`w-full p-5 rounded-xl border text-center transition ${
                              selectedTime === '6:00 pm'
                                ? 'bg-[#5c3d35] border-[#5c3d35] text-white shadow-md'
                                : 'bg-white border-stone-200 text-stone-800 hover:border-stone-300'
                            }`}
                          >
                            <div className="font-bold text-lg font-serif">6:00 pm</div>
                            <div className={`text-xs mt-1 ${selectedTime === '6:00 pm' ? 'text-stone-200' : 'text-stone-400'}`}>6 spots left</div>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center p-8 bg-white border border-stone-200 border-dashed rounded-2xl text-stone-400">
                        <svg className="w-10 h-10 mb-2 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <span className="text-sm font-medium">Select a day from the calendar to view available times</span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}

            {/* STEP 3: RIDER INFO FORM */}
            {step === 3 && (
              <div className="max-w-3xl mx-auto py-2">
                <div className="grid md:grid-cols-3 gap-8">
                  
                  {/* Instruction Left Column */}
                  <div className="md:col-span-1 text-stone-700">
                    <div className="sticky top-0">
                      <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Rider Info</h3>
                      <p className="text-stone-500 text-xs leading-relaxed mb-6">
                        Please provide the following information for the primary rider.
                      </p>
                      
                      {ridersCount > 1 && (
                        <>
                          <h4 className="font-bold text-stone-900 text-sm mt-8 mb-2 font-serif">Additional Riders</h4>
                          <p className="text-stone-500 text-xs leading-relaxed">
                            If you have additional riders, please provide their information below.
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Form Right Column */}
                  <div className="md:col-span-2 space-y-6">
                    {riders.map((rider, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl border border-stone-200 relative shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-2 border-b border-stone-100 gap-2">
                          <span className="font-bold text-stone-800 text-xs tracking-wide uppercase">
                            {index === 0 ? 'Primary Rider (Rider 1)' : `Rider ${index + 1}`}
                          </span>
                          
                          {index > 0 && (
                            <button
                              type="button"
                              onClick={() => autofillRiderInfo(index)}
                              className="text-[#5c3d35] hover:text-[#482e28] border border-[#5c3d35]/30 hover:border-[#5c3d35]/60 rounded px-2.5 py-1 text-xs font-semibold bg-[#5c3d35]/5 transition self-start sm:self-auto"
                            >
                              Use Rider 1's email & phone
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-1">
                            <label className="block text-xs font-semibold text-stone-500 mb-1.5">First Name</label>
                            <input
                              type="text"
                              required
                              value={rider.firstName}
                              onChange={e => handleRiderChange(index, 'firstName', e.target.value)}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:border-[#5c3d35] bg-stone-50"
                              placeholder="John"
                            />
                          </div>
                          <div className="col-span-1">
                            <label className="block text-xs font-semibold text-stone-500 mb-1.5">Last Name</label>
                            <input
                              type="text"
                              required
                              value={rider.lastName}
                              onChange={e => handleRiderChange(index, 'lastName', e.target.value)}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:border-[#5c3d35] bg-stone-50"
                              placeholder="Doe"
                            />
                          </div>
                          
                          <div className="col-span-1">
                            <label className="block text-xs font-semibold text-stone-500 mb-1.5">Date of Birth</label>
                            <input
                              type="date"
                              required
                              value={rider.dob}
                              onChange={e => handleRiderChange(index, 'dob', e.target.value)}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:border-[#5c3d35] bg-stone-50"
                            />
                          </div>

                          <div className="col-span-1">
                            <label className="block text-xs font-semibold text-stone-500 mb-1.5">Phone</label>
                            <input
                              type="tel"
                              required
                              value={rider.phone}
                              onChange={e => handleRiderChange(index, 'phone', e.target.value)}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:border-[#5c3d35] bg-stone-50"
                              placeholder="(256) 555-0199"
                            />
                          </div>

                          <div className="col-span-2">
                            <label className="block text-xs font-semibold text-stone-500 mb-1.5">Email</label>
                            <input
                              type="email"
                              required
                              value={rider.email}
                              onChange={e => handleRiderChange(index, 'email', e.target.value)}
                              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:border-[#5c3d35] bg-stone-50"
                              placeholder="john.doe@example.com"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}

            {/* STEP 4: SUCCESS VIEW */}
            {step === 4 && (
              <div className="max-w-md mx-auto text-center py-10 px-4">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h2 className="text-stone-900 font-serif text-3xl font-bold mb-3">Booking Confirmed!</h2>
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-stone-900">{riders[0]?.firstName}</span>! We look forward to seeing you at Paradise Ranch. A confirmation and directions email has been sent to <span className="font-semibold text-stone-900">{riders[0]?.email}</span>.
                </p>

                <div className="bg-stone-100 p-6 rounded-2xl text-left text-xs space-y-2.5 mb-8 border border-stone-200">
                  <div className="flex justify-between">
                    <span className="text-stone-400 font-medium">Service:</span>
                    <span className="font-bold text-stone-800">{selectedService?.title} ({selectedService?.duration})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400 font-medium">Riders:</span>
                    <span className="font-bold text-stone-800">{ridersCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-400 font-medium">Date & Time:</span>
                    <span className="font-bold text-stone-800">{formatDateString()} at {selectedTime}</span>
                  </div>
                  <div className="flex justify-between border-t border-stone-200 pt-2.5 mt-2.5">
                    <span className="text-stone-400 font-medium">Total Paid:</span>
                    <span className="font-bold text-stone-900 text-sm">${getSubtotal().toFixed(2)} + HST</span>
                  </div>
                </div>

                <Link 
                  href="/"
                  className="inline-block w-full bg-[#5c3d35] hover:bg-[#482e28] text-white font-semibold py-3 rounded-xl transition shadow-lg hover:shadow-xl font-serif text-center"
                >
                  Return to Homepage
                </Link>
              </div>
            )}
          </div>

          {/* FOOTER ACTION BAR (Only visible for steps 1-3) */}
          {step > 0 && step < 4 && (
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              
              {/* Selection Summary */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-500">
                <span className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  {ridersCount} {ridersCount === 1 ? 'rider' : 'riders'}
                </span>

                <span className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedTime ? `${formatDateString()} - ${selectedTime}` : <span className="text-stone-400 font-normal">No time selected</span>}
                </span>

                <span className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75-3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V14" />
                  </svg>
                  <span className="text-stone-900 font-bold text-sm font-serif">${getSubtotal().toFixed(2)} + HST</span>
                </span>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-3 ml-auto w-full sm:w-auto">
                <button 
                  onClick={handleBackStep}
                  className="flex-1 sm:flex-none border border-stone-300 hover:border-stone-400 hover:bg-stone-50 text-stone-700 px-6 py-2.5 rounded-xl font-bold text-sm transition"
                >
                  Back
                </button>
                
                {step === 3 ? (
                  <button 
                    onClick={handleConfirmBooking}
                    disabled={!isRiderInfoComplete()}
                    className="flex-1 sm:flex-none bg-[#5c3d35] hover:bg-[#482e28] text-white px-8 py-2.5 rounded-xl font-bold text-sm transition disabled:opacity-50 disabled:pointer-events-none shadow-md hover:shadow-lg"
                  >
                    Confirm Booking
                  </button>
                ) : (
                  <button 
                    onClick={handleNextStep}
                    disabled={step === 2 && !selectedTime}
                    className="flex-1 sm:flex-none bg-[#5c3d35] hover:bg-[#482e28] text-white px-8 py-2.5 rounded-xl font-bold text-sm transition disabled:opacity-50 disabled:pointer-events-none shadow-md hover:shadow-lg"
                  >
                    Continue
                  </button>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9] flex flex-col">
      {/* Header bar */}
      <header className="bg-white border-b border-stone-200/80 py-4 px-6 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold font-serif tracking-tight text-stone-850 hover:text-amber-700 transition">
            Paradise Ranch
          </Link>
          <Link href="/" className="text-xs font-semibold tracking-wide uppercase text-stone-500 hover:text-stone-800 transition flex items-center gap-1.5">
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Website
          </Link>
        </div>
      </header>

      {/* Booking component wrapped in Suspense for static exports */}
      <Suspense fallback={
        <div className="w-full max-w-4xl mx-auto py-12 px-4 flex-1 flex flex-col justify-center items-center text-stone-400">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-stone-500 mb-4" />
          <span>Loading Booking System...</span>
        </div>
      }>
        <BookingWizard />
      </Suspense>
    </main>
  )
}
