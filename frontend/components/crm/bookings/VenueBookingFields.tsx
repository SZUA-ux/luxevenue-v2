'use client'

import { VenueBookingData } from '@/lib/models/Booking'

interface VenueBookingFieldsProps {
  data: VenueBookingData
  onChange: (data: VenueBookingData) => void
}

export default function VenueBookingFields({ data, onChange }: VenueBookingFieldsProps) {
  const updateField = (field: keyof VenueBookingData, value: any) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* Food Options Section */}
      <div>
        <h3 className="text-lg font-bold text-purple-400 mb-4">🍽️ Food & Catering Options</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Food Package</label>
            <select
              value={data.foodPackage || 'standard'}
              onChange={(e) => updateField('foodPackage', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
            >
              <option value="basic">Basic Package (£15/head)</option>
              <option value="standard">Standard Package (£25/head)</option>
              <option value="premium">Premium Package (£40/head)</option>
              <option value="custom">Custom Package</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Dietary Requirements (select all that apply)</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['Vegetarian', 'Vegan', 'Halal', 'Gluten-Free', 'Nut Allergy', 'Dairy-Free'].map((diet) => (
                <label key={diet} className="flex items-center gap-2 p-2 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={data.dietaryRequirements?.includes(diet) || false}
                    onChange={(e) => {
                      const current = data.dietaryRequirements || []
                      if (e.target.checked) {
                        updateField('dietaryRequirements', [...current, diet])
                      } else {
                        updateField('dietaryRequirements', current.filter(d => d !== diet))
                      }
                    }}
                    className="rounded border-purple-500/30"
                  />
                  <span className="text-sm text-gray-300">{diet}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Catering Notes</label>
            <textarea
              value={data.cateringNotes || ''}
              onChange={(e) => updateField('cateringNotes', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
              placeholder="Any special menu requests or notes..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Catering Fee (£)</label>
            <input
              type="number"
              value={data.cateringFee || 0}
              onChange={(e) => updateField('cateringFee', parseFloat(e.target.value))}
              className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Decor Options Section */}
      <div>
        <h3 className="text-lg font-bold text-pink-400 mb-4">🎨 Decor & Styling Options</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Decor Package</label>
            <select
              value={data.decorPackage || 'basic'}
              onChange={(e) => updateField('decorPackage', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-pink-500/30 rounded-lg text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 transition-all"
            >
              <option value="basic">Basic Decor (£200)</option>
              <option value="premium">Premium Decor (£500)</option>
              <option value="luxury">Luxury Decor (£1000)</option>
              <option value="custom">Custom Package</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Decor Theme</label>
            <input
              type="text"
              value={data.decorTheme || ''}
              onChange={(e) => updateField('decorTheme', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-pink-500/30 rounded-lg text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 transition-all"
              placeholder="e.g., Modern, Traditional, Rustic, Elegant..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Decor Items (select all needed)</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['Stage Decoration', 'Backdrop', 'Table Centerpieces', 'Chair Covers', 'Floral Arrangements', 'Lighting', 'Balloons', 'Draping'].map((item) => (
                <label key={item} className="flex items-center gap-2 p-2 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={data.decorItems?.includes(item) || false}
                    onChange={(e) => {
                      const current = data.decorItems || []
                      if (e.target.checked) {
                        updateField('decorItems', [...current, item])
                      } else {
                        updateField('decorItems', current.filter(d => d !== item))
                      }
                    }}
                    className="rounded border-pink-500/30"
                  />
                  <span className="text-sm text-gray-300">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Decor Fee (£)</label>
            <input
              type="number"
              value={data.decorFee || 0}
              onChange={(e) => updateField('decorFee', parseFloat(e.target.value))}
              className="w-full px-4 py-3 bg-gray-900 border border-pink-500/30 rounded-lg text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Venue Setup Section */}
      <div>
        <h3 className="text-lg font-bold text-blue-400 mb-4">🏛️ Venue Setup & Equipment</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Room Setup Style</label>
            <select
              value={data.roomSetup || 'banquet'}
              onChange={(e) => updateField('roomSetup', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
            >
              <option value="theater">Theater Style</option>
              <option value="banquet">Banquet Style</option>
              <option value="cocktail">Cocktail Reception</option>
              <option value="classroom">Classroom Style</option>
              <option value="reception">Standing Reception</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Audio Visual Equipment (select all needed)</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['Projector & Screen', 'Microphones', 'Sound System', 'Stage Lighting', 'Wireless Mics', 'Laptop/HDMI'].map((item) => (
                <label key={item} className="flex items-center gap-2 p-2 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={data.audioVisual?.includes(item) || false}
                    onChange={(e) => {
                      const current = data.audioVisual || []
                      if (e.target.checked) {
                        updateField('audioVisual', [...current, item])
                      } else {
                        updateField('audioVisual', current.filter(d => d !== item))
                      }
                    }}
                    className="rounded border-blue-500/30"
                  />
                  <span className="text-sm text-gray-300">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Venue Hire Fee (£)</label>
              <input
                type="number"
                value={data.venueHireFee || 0}
                onChange={(e) => updateField('venueHireFee', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Equipment Fee (£)</label>
              <input
                type="number"
                value={data.equipmentFee || 0}
                onChange={(e) => updateField('equipmentFee', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
