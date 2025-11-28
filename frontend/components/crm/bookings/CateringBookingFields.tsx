'use client'

import { CateringBookingData } from '@/lib/models/Booking'

interface CateringBookingFieldsProps {
  data: CateringBookingData
  onChange: (data: CateringBookingData) => void
}

export default function CateringBookingFields({ data, onChange }: CateringBookingFieldsProps) {
  const updateField = (field: keyof CateringBookingData, value: any) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* Service Type Section */}
      <div>
        <h3 className="text-lg font-bold text-purple-400 mb-4">🍴 Service Type & Cuisine</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Cuisine Type</label>
              <input
                type="text"
                value={data.cuisineType || ''}
                onChange={(e) => updateField('cuisineType', e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                placeholder="e.g., Pakistani, Indian, BBQ, Continental"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Service Type</label>
              <select
                value={data.serviceType || 'buffet'}
                onChange={(e) => updateField('serviceType', e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
              >
                <option value="buffet">Buffet Service</option>
                <option value="plated">Plated Service</option>
                <option value="family-style">Family-Style</option>
                <option value="cocktail">Cocktail Style</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Courses Included</label>
            <div className="grid grid-cols-4 gap-2">
              {['Starter', 'Main Course', 'Dessert', 'Beverages'].map((course) => (
                <label key={course} className="flex items-center gap-2 p-2 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={data.courses?.includes(course) || false}
                    onChange={(e) => {
                      const current = data.courses || []
                      if (e.target.checked) {
                        updateField('courses', [...current, course])
                      } else {
                        updateField('courses', current.filter(c => c !== course))
                      }
                    }}
                    className="rounded border-purple-500/30"
                  />
                  <span className="text-sm text-gray-300">{course}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Options Section */}
      <div>
        <h3 className="text-lg font-bold text-pink-400 mb-4">⚙️ Service Options & Staff</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <input
                type="checkbox"
                checked={data.chefOnSite || false}
                onChange={(e) => updateField('chefOnSite', e.target.checked)}
                className="rounded border-pink-500/30"
              />
              <span className="text-sm text-gray-300 font-medium">Chef On-Site</span>
            </label>
            <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <input
                type="checkbox"
                checked={data.setupService || false}
                onChange={(e) => updateField('setupService', e.target.checked)}
                className="rounded border-pink-500/30"
              />
              <span className="text-sm text-gray-300 font-medium">Setup Service</span>
            </label>
            <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <input
                type="checkbox"
                checked={data.cleanupService || false}
                onChange={(e) => updateField('cleanupService', e.target.checked)}
                className="rounded border-pink-500/30"
              />
              <span className="text-sm text-gray-300 font-medium">Cleanup Service</span>
            </label>
            <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <input
                type="checkbox"
                checked={data.beverageService || false}
                onChange={(e) => updateField('beverageService', e.target.checked)}
                className="rounded border-pink-500/30"
              />
              <span className="text-sm text-gray-300 font-medium">Beverage Service</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Number of Wait Staff</label>
            <input
              type="number"
              value={data.waitStaff || 0}
              onChange={(e) => updateField('waitStaff', parseInt(e.target.value))}
              className="w-full px-4 py-3 bg-gray-900 border border-pink-500/30 rounded-lg text-white focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 transition-all"
              placeholder="e.g., 4"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Serving Equipment Needed</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['Chafing Dishes', 'Plates & Cutlery', 'Serving Utensils', 'Tables', 'Tablecloths', 'Napkins'].map((item) => (
                <label key={item} className="flex items-center gap-2 p-2 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={data.servingEquipment?.includes(item) || false}
                    onChange={(e) => {
                      const current = data.servingEquipment || []
                      if (e.target.checked) {
                        updateField('servingEquipment', [...current, item])
                      } else {
                        updateField('servingEquipment', current.filter(d => d !== item))
                      }
                    }}
                    className="rounded border-pink-500/30"
                  />
                  <span className="text-sm text-gray-300">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Details Section */}
      <div>
        <h3 className="text-lg font-bold text-blue-400 mb-4">🚚 Delivery & Timing</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Delivery Location</label>
            <input
              type="text"
              value={data.deliveryLocation || ''}
              onChange={(e) => updateField('deliveryLocation', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
              placeholder="Full address..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Delivery Time</label>
              <input
                type="time"
                value={data.deliveryTime || ''}
                onChange={(e) => updateField('deliveryTime', e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Setup Time</label>
              <input
                type="time"
                value={data.setupTime || ''}
                onChange={(e) => updateField('setupTime', e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div>
        <h3 className="text-lg font-bold text-emerald-400 mb-4">💰 Pricing Breakdown</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Per Head Price (£)</label>
              <input
                type="number"
                step="0.01"
                value={data.perHeadPrice || 0}
                onChange={(e) => updateField('perHeadPrice', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Service Charge (£)</label>
              <input
                type="number"
                step="0.01"
                value={data.serviceCharge || 0}
                onChange={(e) => updateField('serviceCharge', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Equipment Charge (£)</label>
              <input
                type="number"
                step="0.01"
                value={data.equipmentCharge || 0}
                onChange={(e) => updateField('equipmentCharge', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Delivery Charge (£)</label>
              <input
                type="number"
                step="0.01"
                value={data.deliveryCharge || 0}
                onChange={(e) => updateField('deliveryCharge', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
