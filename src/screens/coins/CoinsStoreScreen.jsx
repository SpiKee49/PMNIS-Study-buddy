import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, Coins, Check } from 'lucide-react'
import { studyCoinsStore } from '../../data/dummy'

export default function CoinsStoreScreen() {
  const { navigate, goBack, studyCoins, spendCoins, hasUnlocked, coinsPurchased } = useNav()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showPurchaseAlert, setShowPurchaseAlert] = useState(null)

  const filtered = selectedCategory === 'all' ? studyCoinsStore : studyCoinsStore.filter(item => item.category === selectedCategory)

  const handlePurchase = (item) => {
    if (spendCoins(item.cost, item.id)) {
      setShowPurchaseAlert({ success: true, item })
      setTimeout(() => setShowPurchaseAlert(null), 2000)
    } else {
      setShowPurchaseAlert({ success: false, needed: item.cost })
      setTimeout(() => setShowPurchaseAlert(null), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-6 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button onClick={goBack} className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 transition-colors text-sm font-medium">
                <ChevronLeft size={18} /> Back
              </button>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 px-4 py-2 rounded-full">
              <Coins size={18} className="text-amber-600" />
              <span className="text-lg font-bold text-amber-700">{studyCoins}</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Coins Store</h1>
          <p className="text-gray-600">Unlock premium features with coins earned from feedback</p>
        </div>
      </div>

      {/* Purchase Alert */}
      {showPurchaseAlert && (
        <div className={`fixed top-4 right-4 p-4 rounded-xl shadow-lg z-40 ${
          showPurchaseAlert.success 
            ? 'bg-emerald-100 border border-emerald-300' 
            : 'bg-rose-100 border border-rose-300'
        }`}>
          {showPurchaseAlert.success ? (
            <p className="text-emerald-800 font-semibold flex items-center gap-2">
              <Check size={16} /> Purchase successful! Feature unlocked
            </p>
          ) : (
            <p className="text-rose-800 font-semibold">
              Need {showPurchaseAlert.needed} coins (you have {studyCoins})
            </p>
          )}
        </div>
      )}

      {/* Category Tabs */}
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div className="flex gap-3 mb-8">
          {['all', 'matching', 'tools'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all capitalize ${
                selectedCategory === cat
                  ? 'bg-violet-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-violet-300'
              }`}
            >
              {cat === 'all' ? 'All Items' : cat}
            </button>
          ))}
        </div>

        {/* Store Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filtered.map(item => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 border-2 transition-all ${
                hasUnlocked(item.id)
                  ? 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-300'
                  : 'bg-white border-gray-200 hover:border-violet-300'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-4xl">{item.icon}</span>
                {hasUnlocked(item.id) && (
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Check size={12} /> Unlocked
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Coins size={16} className="text-amber-600" />
                  <span className="font-bold text-gray-900">{item.cost}</span>
                </div>

                {!hasUnlocked(item.id) ? (
                  <button
                    onClick={() => handlePurchase(item)}
                    disabled={studyCoins < item.cost}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      studyCoins >= item.cost
                        ? 'bg-violet-600 text-white hover:bg-violet-700'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Purchase
                  </button>
                ) : (
                  <button disabled className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold">
                    Use
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
