import React from "react";
import { 
  ROOM_OPTIONS, 
  ACTIVITY_OPTIONS, 
  KASHRUT_TIERS, 
  FAMILY_SERVICES 
} from "../data";
import OptimizedImage from "./OptimizedImage";
import { Inquiry } from "../types";
import { 
  Calendar, 
  Users, 
  Check, 
  Sparkles, 
  HeartHandshake, 
  ChefHat, 
  Palmtree, 
  Baby, 
  FileText, 
  ArrowRight,
  Info
} from "lucide-react";

interface RetreatBuilderProps {
  onInquirySubmitted: (inquiry: Inquiry) => void;
  preSelectedRoomId?: string | null;
  clearPreSelectedRoom: () => void;
}

export default function RetreatBuilder({ onInquirySubmitted, preSelectedRoomId, clearPreSelectedRoom }: RetreatBuilderProps) {
  // Form State
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [dates, setDates] = React.useState("Winter 2026 / Season");
  const [nights, setNights] = React.useState(7);
  const [partySize, setPartySize] = React.useState(2);
  const [kidsCount, setKidsCount] = React.useState(0);

  // Selections
  const [selectedRoomId, setSelectedRoomId] = React.useState(ROOM_OPTIONS[0].id);
  const [selectedKashrut, setSelectedKashrut] = React.useState(KASHRUT_TIERS[0].id);
  const [selectedActivities, setSelectedActivities] = React.useState<string[]>([]);
  const [selectedFamilyServices, setSelectedFamilyServices] = React.useState<string[]>([]);
  
  // Shabbat Configurations
  const [reserveMinyanSeats, setReserveMinyanSeats] = React.useState(true);
  const [communalMealsCount, setCommunalMealsCount] = React.useState(2); // adults
  const [specialRequests, setSpecialRequests] = React.useState("");

  // Room selections based on click triggers from DiscoverView
  React.useEffect(() => {
    if (preSelectedRoomId) {
      const exists = ROOM_OPTIONS.some(r => r.id === preSelectedRoomId);
      if (exists) {
        setSelectedRoomId(preSelectedRoomId);
        clearPreSelectedRoom();
      }
    }
  }, [preSelectedRoomId]);

  // Calculations
  const selectedRoom = ROOM_OPTIONS.find(r => r.id === selectedRoomId) || ROOM_OPTIONS[0];

  const accommodationCost = selectedRoom.pricePerNight * nights;

  const activitiesCost = selectedActivities.reduce((acc, actId) => {
    const activity = ACTIVITY_OPTIONS.find(a => a.id === actId);
    if (activity) {
      // Excursions priced per person
      return acc + (activity.price * partySize);
    }
    return acc;
  }, 0);

  const familyCost = selectedFamilyServices.reduce((acc, svcId) => {
    const service = FAMILY_SERVICES.find(s => s.id === svcId);
    if (service) {
      // Family services are priced per day. Let's multiply by kidsCount if greater than 0, otherwise standard flat
      const count = kidsCount > 0 ? kidsCount : 1;
      return acc + (service.pricePerDay * nights * count);
    }
    return acc;
  }, 0);

  // Dietary level adds a premium for custom hashgacha sourcing
  const kashrutPremium = selectedKashrut === "chassidish" ? 150 * nights : selectedKashrut === "beit-yosef" ? 80 * nights : 0;

  const totalEstimatedPrice = accommodationCost + activitiesCost + familyCost + kashrutPremium;

  const handleActivityToggle = (id: string) => {
    if (selectedActivities.includes(id)) {
      setSelectedActivities(prev => prev.filter(a => a !== id));
    } else {
      setSelectedActivities(prev => [...prev, id]);
    }
  };

  const handleFamilyServiceToggle = (id: string) => {
    if (selectedFamilyServices.includes(id)) {
      setSelectedFamilyServices(prev => prev.filter(s => s !== id));
    } else {
      setSelectedFamilyServices(prev => [...prev, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !phone) {
      alert("Please fill in your name, email, and phone number to request availability.");
      return;
    }

    const newInquiry: Inquiry = {
      id: "SAN-" + Math.floor(100000 + Math.random() * 900000),
      fullName,
      email,
      phone,
      dates,
      partySize: Number(partySize),
      roomType: selectedRoom.name,
      activities: selectedActivities.map(id => ACTIVITY_OPTIONS.find(a => a.id === id)?.name || id),
      kashrutTier: KASHRUT_TIERS.find(k => k.id === selectedKashrut)?.name || selectedKashrut,
      specialRequests: `${specialRequests}. Reserve Minyan seats: ${reserveMinyanSeats ? 'Yes' : 'No'}. Communal Shabbat meals for ${communalMealsCount} adults. Kids count: ${kidsCount}.`,
      totalEstimatedPrice,
      status: 'Pending',
      dateSubmitted: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    onInquirySubmitted(newInquiry);
    
    // Clear inputs
    setFullName("");
    setEmail("");
    setPhone("");
    setSpecialRequests("");
    setSelectedActivities([]);
    setSelectedFamilyServices([]);
  };

  return (
    <div className="py-24 max-w-container-max mx-auto px-4 md:px-margin-desktop bg-surface select-text">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="font-label-caps text-label-caps text-secondary mb-3 block uppercase tracking-widest font-semibold">Sanctuary Planner</span>
        <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Personalize your luxury retreat.</h1>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Configure dates, kosher parameters, excursions, and family programs to generate a real-time price quotation and submit your inquiry to our boutique advisory desk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form Column (8cols) */}
        <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-12">
          
          {/* Step 1: Contact Details */}
          <div className="bg-surface-container p-8 md:p-10 rounded shadow-sm border border-surface-container-high">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-3">
              <span className="text-secondary">01</span> Guest Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-b border-outline focus-within:border-secondary transition-colors py-2">
                <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block mb-1">FULL NAME</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="E.g., Johnathan Goldstein" 
                  className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-base font-body-md text-primary"
                  required
                />
              </div>
              
              <div className="border-b border-outline focus-within:border-secondary transition-colors py-2">
                <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block mb-1">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="goldstein@example.com" 
                  className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-base font-body-md text-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="border-b border-outline focus-within:border-secondary transition-colors py-2 md:col-span-1">
                <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block mb-1">PHONE NUMBER</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 300-4000" 
                  className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-base font-body-md text-primary"
                  required
                />
              </div>

              <div className="border-b border-outline focus-within:border-secondary transition-colors py-2 md:col-span-1">
                <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block mb-1">PREFERRED SEASON / MONTH</label>
                <input 
                  type="text" 
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="December 2026 / Chanukah" 
                  className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-base font-body-md text-primary"
                  required
                />
              </div>

              <div className="border-b border-outline focus-within:border-secondary transition-colors py-2 md:col-span-1">
                <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block mb-1">NUMBER OF NIGHTS</label>
                <input 
                  type="number" 
                  value={nights}
                  min={2}
                  max={30}
                  onChange={(e) => setNights(Math.max(2, Number(e.target.value)))}
                  className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-base font-body-md text-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="border-b border-outline focus-within:border-secondary transition-colors py-2">
                <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block mb-1">ADULT GUESTS (13+)</label>
                <select 
                  value={partySize} 
                  onChange={(e) => setPartySize(Number(e.target.value))}
                  className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-base font-body-md text-primary"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => (
                    <option key={v} value={v} className="bg-surface text-primary">{v} Adults</option>
                  ))}
                </select>
              </div>

              <div className="border-b border-outline focus-within:border-secondary transition-colors py-2">
                <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block mb-1">CHILDREN (0-12)</label>
                <select 
                  value={kidsCount} 
                  onChange={(e) => setKidsCount(Number(e.target.value))}
                  className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-base font-body-md text-primary"
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(v => (
                    <option key={v} value={v} className="bg-surface text-primary">{v} Children</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Step 2: Accommodation Selection */}
          <div className="bg-surface-container p-8 md:p-10 rounded shadow-sm border border-surface-container-high">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2 flex items-center gap-3">
              <span className="text-secondary">02</span> Select Accommodation
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
              Choose the architectural space that best fits your group. Dual sinks, separate bedroom layouts, and Sabbath-compliant parameters are fully integrated.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ROOM_OPTIONS.map((room) => {
                const isSelected = selectedRoomId === room.id;
                return (
                  <div 
                    key={room.id}
                    onClick={() => setSelectedRoomId(room.id)}
                    className={`cursor-pointer border rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                      isSelected 
                        ? "border-secondary bg-surface ring-2 ring-secondary/20 shadow-lg" 
                        : "border-surface-container-high hover:border-secondary/40 bg-surface/50"
                    }`}
                  >
                    <div>
                      <div className="h-44 overflow-hidden relative">
                        <OptimizedImage src={room.imageUrl} alt={room.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        {isSelected && (
                          <div className="absolute top-3 right-3 bg-secondary text-on-secondary w-7 h-7 flex items-center justify-center rounded-full shadow">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <span className="font-label-caps text-[10px] text-secondary tracking-widest block mb-1">{room.category}</span>
                        <h4 className="font-headline-sm text-lg text-primary mb-2">{room.name}</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed h-16 overflow-hidden">
                          {room.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 border-t border-surface-container-high flex justify-between items-center bg-surface-container-low">
                      <span className="font-label-caps text-xs text-secondary uppercase font-semibold">RATE</span>
                      <span className="font-headline-sm text-base text-primary">${room.pricePerNight} / Night</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Kashrut & Jewish Life */}
          <div className="bg-surface-container p-8 md:p-10 rounded shadow-sm border border-surface-container-high">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2 flex items-center gap-3">
              <span className="text-secondary">03</span> Kashrut & Jewish Life
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
              Our culinary program is 100% strict Glatt Kosher, Pas Yisrael, and Chalav Yisrael. You may choose specialized kashrut parameters below.
            </p>

            <div className="space-y-4 mb-8">
              <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block">SUPERVISION STANDARDS</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {KASHRUT_TIERS.map((tier) => {
                  const isSelected = selectedKashrut === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedKashrut(tier.id)}
                      className={`cursor-pointer p-5 border rounded-sm text-center transition-all ${
                        isSelected
                          ? "border-secondary bg-surface ring-2 ring-secondary/10 shadow-sm"
                          : "border-surface-container-high hover:border-secondary/40 bg-surface/50"
                      }`}
                    >
                      <ChefHat className={`w-6 h-6 mx-auto mb-3 ${isSelected ? "text-secondary" : "text-on-surface-variant"}`} />
                      <h5 className="font-headline-sm text-sm text-primary mb-1.5">{tier.name}</h5>
                      <p className="text-[10px] text-on-surface-variant leading-relaxed">{tier.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-surface-container-high pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Daily Minyan checkbox */}
              <div className="space-y-3">
                <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block">DAILY SERVICES</label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={reserveMinyanSeats} 
                    onChange={(e) => setReserveMinyanSeats(e.target.checked)}
                    className="mt-1 border-surface-container-high text-secondary rounded focus:ring-secondary cursor-pointer"
                  />
                  <div className="-mt-0.5">
                    <span className="text-sm font-body-md text-primary font-semibold block group-hover:text-secondary transition-colors">
                      Reserve seats in Synagogue
                    </span>
                    <span className="text-xs text-on-surface-variant leading-relaxed block">
                      Secure seat spacing in the Shul for Shacharit, Mincha, and Maariv services. Includes Siddurim & Chumashim availability.
                    </span>
                  </div>
                </label>
              </div>

              {/* Communal Shabbat meals selection */}
              <div className="space-y-3">
                <label className="font-label-caps text-label-caps text-xs text-secondary tracking-widest block">COMMUNAL SHABBAT DINING</label>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-body-md text-primary font-semibold">Communal seat allocations:</span>
                  <select
                    value={communalMealsCount}
                    onChange={(e) => setCommunalMealsCount(Number(e.target.value))}
                    className="border border-surface-container-high bg-surface rounded-sm px-3 py-1 text-sm font-body-md text-primary"
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => (
                      <option key={v} value={v}>{v} Guests</option>
                    ))}
                  </select>
                </div>
                <span className="text-xs text-on-surface-variant leading-relaxed block">
                  Reserve a private table at our spectacular Shabbat communal feast with silver kiddush cups and warm braided challah.
                </span>
              </div>
            </div>
          </div>

          {/* Step 4: Excursions & Adventures */}
          <div className="bg-surface-container p-8 md:p-10 rounded shadow-sm border border-surface-container-high">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2 flex items-center gap-3">
              <span className="text-secondary">04</span> Excursions & Adventures
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
              Customize your escape with private nature treks or adrenaline zipline runs. Every excursion is timed around minyan constraints and kashrut limits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ACTIVITY_OPTIONS.map((act) => {
                const isSelected = selectedActivities.includes(act.id);
                return (
                  <div
                    key={act.id}
                    onClick={() => handleActivityToggle(act.id)}
                    className={`cursor-pointer border rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                      isSelected
                        ? "border-secondary bg-surface ring-2 ring-secondary/10 shadow-md"
                        : "border-surface-container-high hover:border-secondary/40 bg-surface/50"
                    }`}
                  >
                    <div>
                      <div className="h-32 relative">
                        <OptimizedImage src={act.imageUrl} alt={act.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <span className="absolute top-2 left-2 bg-secondary text-on-secondary font-label-caps text-[9px] px-2 py-0.5 uppercase tracking-wider rounded-sm">
                          {act.category}
                        </span>
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-secondary text-on-secondary w-6 h-6 flex items-center justify-center rounded-full shadow">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                      
                      <div className="p-5">
                        <h4 className="font-headline-sm text-base text-primary mb-2">{act.name}</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {act.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 py-3 border-t border-surface-container-high flex justify-between items-center bg-surface-container-low text-xs font-semibold">
                      <span className="text-on-surface-variant font-label-caps text-[10px]">{act.isPrivate ? "PRIVATE TOUR" : "COMMUNAL"}</span>
                      <span className="text-primary font-headline-sm text-sm">${act.price} / Person</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 5: Family Programs */}
          <div className="bg-surface-container p-8 md:p-10 rounded shadow-sm border border-surface-container-high">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2 flex items-center gap-3">
              <span className="text-secondary">05</span> Family Programs
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
              Supervised luxury rainforest camps, teen lounges, and childcare services so you can unwind with total peace of mind.
            </p>

            <div className="space-y-4">
              {FAMILY_SERVICES.map((svc) => {
                const isSelected = selectedFamilyServices.includes(svc.id);
                return (
                  <div
                    key={svc.id}
                    onClick={() => handleFamilyServiceToggle(svc.id)}
                    className={`cursor-pointer p-5 border rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all ${
                      isSelected
                        ? "border-secondary bg-surface ring-2 ring-secondary/10 shadow-sm"
                        : "border-surface-container-high hover:border-secondary/40 bg-surface/50"
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className={`p-3 rounded-full ${isSelected ? "bg-secondary text-on-secondary" : "bg-surface-container text-secondary"}`}>
                        <Baby className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-base text-primary mb-1">{svc.name}</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed max-w-lg">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end self-end md:self-auto border-t md:border-t-0 border-surface-container-high pt-2 md:pt-0 w-full md:w-auto">
                      <span className="font-headline-sm text-sm text-primary">${svc.pricePerDay} / Day</span>
                      <span className="text-[10px] text-on-surface-variant font-label-caps">PER NIGHT / CHILD</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 6: Special Requests */}
          <div className="bg-surface-container p-8 md:p-10 rounded shadow-sm border border-surface-container-high">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-center gap-3">
              <span className="text-secondary">06</span> Special Requests & Dietary Preferences
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mb-4 leading-relaxed">
              Please let our boutique travel advisory desk know of any physical accessibility needs, custom kashrut supervisions, allergy requests, or specific milestone celebrations (anniversaries, bar mitzvahs, family reunions).
            </p>
            <div className="border-b border-outline focus-within:border-secondary transition-colors py-2">
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="E.g., We are celebrating our silver anniversary. We require Cholav Yisrael strictly and would love assistance arranging a private torah study for our son on Monday morning..."
                className="w-full bg-transparent border-none outline-none focus:ring-0 p-0 text-base font-body-md text-primary h-28 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-ocean text-white hover:bg-teal-dark-hover py-5 font-label-caps text-label-caps uppercase tracking-widest transition-all rounded shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex justify-center items-center gap-2"
          >
            Submit Inquiry & Reserve Spot <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Right Invoice & Summary Column (4cols) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <div className="bg-surface-container-low p-8 border border-surface-container-high rounded shadow-md relative overflow-hidden">
            
            {/* Watermark/stamp */}
            <div className="absolute -right-8 -top-8 w-24 h-24 border-4 border-secondary/10 rounded-full flex items-center justify-center select-none pointer-events-none transform rotate-12">
              <Sparkles className="w-10 h-10 text-secondary/15" />
            </div>

            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-surface-container-high">
              <FileText className="text-secondary w-5 h-5" />
              <h4 className="font-headline-sm text-lg text-primary tracking-wide uppercase">Bespoke Estimate</h4>
            </div>

            <div className="space-y-4 text-sm font-body-md text-on-surface-variant">
              
              {/* Accommodation line */}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-primary font-semibold block">{selectedRoom.name}</span>
                  <span className="text-xs">{nights} nights × {partySize} adults ({kidsCount} kids)</span>
                </div>
                <span className="text-primary font-mono text-xs">${accommodationCost.toLocaleString()}</span>
              </div>

              {/* Kashrut tier premium */}
              {kashrutPremium > 0 && (
                <div className="flex justify-between items-start gap-4 pt-2">
                  <div>
                    <span className="text-primary font-semibold block">Supervision Surcharge</span>
                    <span className="text-xs">{KASHRUT_TIERS.find(k => k.id === selectedKashrut)?.name}</span>
                  </div>
                  <span className="text-primary font-mono text-xs">${kashrutPremium.toLocaleString()}</span>
                </div>
              )}

              {/* Excursions */}
              {selectedActivities.length > 0 && (
                <div className="border-t border-surface-container-high pt-4 space-y-2.5">
                  <span className="font-label-caps text-[10px] text-secondary tracking-wider block font-semibold">CURATED EXCURSIONS</span>
                  {selectedActivities.map((actId) => {
                    const act = ACTIVITY_OPTIONS.find(a => a.id === actId);
                    if (!act) return null;
                    return (
                      <div key={actId} className="flex justify-between text-xs">
                        <span className="truncate max-w-[180px]">{act.name}</span>
                        <span className="font-mono">${(act.price * partySize).toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Family Programs */}
              {selectedFamilyServices.length > 0 && (
                <div className="border-t border-surface-container-high pt-4 space-y-2.5">
                  <span className="font-label-caps text-[10px] text-secondary tracking-wider block font-semibold">FAMILY PROGRAMMING</span>
                  {selectedFamilyServices.map((svcId) => {
                    const svc = FAMILY_SERVICES.find(s => s.id === svcId);
                    if (!svc) return null;
                    const count = kidsCount > 0 ? kidsCount : 1;
                    return (
                      <div key={svcId} className="flex justify-between text-xs">
                        <span className="truncate max-w-[180px]">{svc.name}</span>
                        <span className="font-mono">${(svc.pricePerDay * nights * count).toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Invoice Total */}
              <div className="border-t-2 border-dashed border-surface-container-high pt-6 mt-6 flex justify-between items-baseline">
                <span className="font-label-caps text-xs text-primary font-bold">ESTIMATED TOTAL</span>
                <div className="text-right">
                  <span className="font-headline-sm text-2xl text-secondary font-bold block">${totalEstimatedPrice.toLocaleString()}</span>
                  <span className="text-[10px] text-on-surface-variant italic">Subject to advisor review</span>
                </div>
              </div>
            </div>

            {/* Inclusions info banner */}
            <div className="mt-8 bg-surface p-4 rounded-sm border border-surface-container flex gap-3 text-xs">
              <Info className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <p className="text-on-surface-variant leading-relaxed">
                <strong>Standard Inclusions:</strong> 3 Gourmet Glatt Kosher meals daily, airport transfer, full Shul/Synagogue access, on-site leisure amenities (Infinity Pool, Yoga Deck, Catamaran exclusions if selected).
              </p>
            </div>
          </div>

          <div className="bg-surface-container p-6 rounded border border-surface-container-high flex items-start gap-4">
            <HeartHandshake className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
            <div>
              <h5 className="font-label-caps text-xs text-primary font-bold mb-1">Our Booking Pledge</h5>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Submitting this inquiry holds your priority spot in our retreat. A luxury concierge will contact you via email or phone within 24 hours to review your schedule, fine-tune special requests, and finalize the reservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
