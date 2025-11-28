'use client'

import { HireBookingData } from '@/lib/models/Booking'

interface HireBookingFieldsProps {
  data: HireBookingData
  onChange: (data: HireBookingData) => void
}

export default function HireBookingFields({ data, onChange }: HireBookingFieldsProps) {
  const updateField = (field: keyof HireBookingData, value: any) => {
    onChange({ ...data, [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* Space Type & Purpose Section */}
      <div>
        <h3 className="text-lg font-bold text-purple-400 mb-4">🏛️ Space Type & Purpose</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Space Type</label>
              <input
                type="text"
                value={data.spaceType || ''}
                onChange={(e) => updateField('spaceType', e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                placeholder="e.g., Studio, Hall, Room, Gallery"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Purpose</label>
              <input
                type="text"
                value={data.purpose || ''}
                onChange={(e) => updateField('purpose', e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                placeholder="e.g., Theatre, Dance, Yoga, Photography"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Duration (hours)</label>
              <input
                type="number"
                value={data.duration || 2}
                onChange={(e) => updateField('duration', parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors mt-6">
                <input
                  type="checkbox"
                  checked={data.recurringBooking || false}
                  onChange={(e) => updateField('recurringBooking', e.target.checked)}
                  className="rounded border-purple-500/30"
                />
                <span className="text-sm text-gray-300 font-medium">Recurring Booking</span>
              </label>
            </div>
            {data.recurringBooking && (
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Frequency</label>
                <select
                  value={data.frequency || 'weekly'}
                  onChange={(e) => updateField('frequency', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Equipment & Facilities Section */}
      <div>
        <h3 className="text-lg font-bold text-pink-400 mb-4">📦 Equipment & Facilities</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Required Equipment (select all needed)</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['Mirrors', 'Yoga Mats', 'Sound System', 'Lighting', 'Camera Equipment', 'Props', 'Storage Units', 'Whiteboard'].map((item) => (
                <label key={item} className="flex items-center gap-2 p-2 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={data.requiredEquipment?.includes(item) || false}
                    onChange={(e) => {
                      const current = data.requiredEquipment || []
                      if (e.target.checked) {
                        updateField('requiredEquipment', [...current, item])
                      } else {
                        updateField('requiredEquipment', current.filter(d => d !== item))
                      }
                    }}
                    className="rounded border-pink-500/30"
                  />
                  <span className="text-sm text-gray-300">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <input
                type="checkbox"
                checked={data.audioSystem || false}
                onChange={(e) => updateField('audioSystem', e.target.checked)}
                className="rounded border-pink-500/30"
              />
              <span className="text-sm text-gray-300 font-medium">Audio System</span>
            </label>
            <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <input
                type="checkbox"
                checked={data.heatingCooling || false}
                onChange={(e) => updateField('heatingCooling', e.target.checked)}
                className="rounded border-pink-500/30"
              />
              <span className="text-sm text-gray-300 font-medium">Heating/Cooling</span>
            </label>
            <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <input
                type="checkbox"
                checked={data.storageSpace || false}
                onChange={(e) => updateField('storageSpace', e.target.checked)}
                className="rounded border-pink-500/30"
              />
              <span className="text-sm text-gray-300 font-medium">Storage Space</span>
            </label>
            <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              <input
                type="checkbox"
                checked={data.keyAccess || false}
                onChange={(e) => updateField('keyAccess', e.target.checked)}
                className="rounded border-pink-500/30"
              />
              <span className="text-sm text-gray-300 font-medium">Key Access</span>
            </label>
          </div>
        </div>
      </div>

      {/* Setup Requirements Section */}
      <div>
        <h3 className="text-lg font-bold text-blue-400 mb-4">⚙️ Setup Requirements</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <label className="flex items-center gap-2 p-3 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
            <input
              type="checkbox"
              checked={data.setupNeeded || false}
              onChange={(e) => updateField('setupNeeded', e.target.checked)}
              className="rounded border-blue-500/30"
            />
            <span className="text-sm text-gray-300 font-medium">Setup Service Required</span>
          </label>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Specific Requirements</label>
            <textarea
              value={data.specificRequirements || ''}
              onChange={(e) => updateField('specificRequirements', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
              placeholder="Any special setup or requirements..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Security Deposit (£)</label>
            <input
              type="number"
              value={data.securityDeposit || 0}
              onChange={(e) => updateField('securityDeposit', parseFloat(e.target.value))}
              className="w-full px-4 py-3 bg-gray-900 border border-blue-500/30 rounded-lg text-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div>
        <h3 className="text-lg font-bold text-emerald-400 mb-4">💰 Pricing Breakdown</h3>
        <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Hourly Rate (£)</label>
              <input
                type="number"
                step="0.01"
                value={data.hourlyRate || 0}
                onChange={(e) => updateField('hourlyRate', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Additional Hours (£/hr)</label>
              <input
                type="number"
                step="0.01"
                value={data.additionalHours || 0}
                onChange={(e) => updateField('additionalHours', parseFloat(e.target.value))}
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
              <label className="block text-sm font-semibold text-gray-300 mb-2">Cleaning Fee (£)</label>
              <input
                type="number"
                step="0.01"
                value={data.cleaningFee || 0}
                onChange={(e) => updateField('cleaningFee', parseFloat(e.target.value))}
                className="w-full px-4 py-3 bg-gray-900 border border-emerald-500/30 rounded-lg text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
