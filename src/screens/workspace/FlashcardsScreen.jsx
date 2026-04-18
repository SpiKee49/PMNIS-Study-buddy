import { useState, useEffect } from 'react'
import { ChevronLeft, Trash2 } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { genericFlashcardSets } from '../../data/dummy'

export default function FlashcardsScreen() {
  const { navigate, mySubjects, subjectFlashcardDecks, params, addFlashcardDeck, updateFlashcardDeck, removeFlashcardDeck } = useNav()
  const subjectId = params?.subjectId || mySubjects[0]?.id
  const deckId = params?.deckId || null

  const subject = mySubjects.find(s => s.id === subjectId) || mySubjects[0]
  const decks = subjectFlashcardDecks[subjectId] || []

  const [isNewDeckDialogOpen, setIsNewDeckDialogOpen] = useState(false)
  const [newDeckName, setNewDeckName] = useState(`Auto Deck ${decks.length + 1}`)
  const [editingDeckId, setEditingDeckId] = useState(null)
  const [editingDeckName, setEditingDeckName] = useState('')

  const startRename = (deck, e) => {
    e.stopPropagation()
    setEditingDeckId(deck.id)
    setEditingDeckName(deck.name)
  }

  const commitRename = (deckId) => {
    const trimmed = editingDeckName.trim()
    if (trimmed) updateFlashcardDeck(subjectId, deckId, { name: trimmed })
    setEditingDeckId(null)
  }

  const decksWithCards = decks.map(deck => {
    const existingCards = Array.isArray(deck.cards) && deck.cards.length > 0 ? deck.cards : null
    const cardCount = deck.cardCount || (existingCards ? existingCards.length : 0)

    const cards = existingCards || Array.from({ length: cardCount || 10 }, (_, i) => ({
      id: `c${deck.id}_${i + 1}`,
      question: `Q${i + 1}: ${deck.name} flashcard`,
      answer: `A${i + 1}: Answer for ${deck.name}`,
    }))

    return {
      ...deck,
      cardCount: cards.length,
      cards,
    }
  })

  const initialDeck = deckId ? decksWithCards.find(d => d.id === deckId) : decksWithCards[0]

  const [selectedDeckId, setSelectedDeckId] = useState(initialDeck?.id || null)
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  const currentDeck = decksWithCards.find(d => d.id === selectedDeckId) || decksWithCards[0] || null
  const currentCard = currentDeck?.cards?.[selectedCardIndex] || null

  useEffect(() => {
    setNewDeckName(`Auto Deck ${decks.length + 1}`)
  }, [decks.length])

  const stripQA = (text) => text?.replace(/^Q\d+:\s*/i, '').replace(/^A\d+:\s*/i, '')
  const currentText = isCardFlipped ? stripQA(currentCard?.answer) : stripQA(currentCard?.question)

  const createNewDeck = () => {
    const deckName = newDeckName.trim() || `Auto Deck ${decks.length + 1}`
    const sets = genericFlashcardSets[subjectId] || genericFlashcardSets.sub1
    const rawCards = sets[decks.length % sets.length]
    const cards = rawCards.map((c, i) => ({ id: `c${Date.now()}_${i}`, question: c.question, answer: c.answer }))
    const newDeckId = addFlashcardDeck(subjectId, deckName, cards)
    if (newDeckId) {
      setSelectedDeckId(newDeckId)
      setIsNewDeckDialogOpen(false)
      navigate('flashcards', { subjectId, deckId: newDeckId })
    }
  }

  const deleteCurrentCard = () => {
    if (!currentDeck || !currentCard || currentDeck.cards.length <= 1) return

    const updatedCards = currentDeck.cards.filter(card => card.id !== currentCard.id)
    updateFlashcardDeck(subjectId, currentDeck.id, { cards: updatedCards, cardCount: updatedCards.length })

    // Adjust selectedCardIndex if necessary
    if (selectedCardIndex >= updatedCards.length) {
      setSelectedCardIndex(Math.max(0, updatedCards.length - 1))
    }
    setIsCardFlipped(false)
  }

  useEffect(() => {
    if (currentDeck) {
      if (selectedCardIndex >= currentDeck.cards.length) {
        setSelectedCardIndex(0)
      }
    }
  }, [currentDeck, selectedCardIndex])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-600">
          <button onClick={() => navigate('my-workspace')} className="hover:text-gray-800">My Workspace</button>
          <span>/</span>
          <button onClick={() => navigate('subject-detail', { subjectId })} className="hover:text-gray-800">{subject?.name || 'Subject'}</button>
          <span>/</span>
          <span className="font-semibold text-gray-900">Flashcards</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Flashcards • {subject?.name || 'Unknown'}</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setIsNewDeckDialogOpen(true)}
              className="bg-violet-600 text-white px-4 py-2 rounded-xl text-sm"
            >
              New Flashcards
            </button>
            <button
              onClick={() => navigate('subject-detail', { subjectId })}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm">
              Back to Subject
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1 bg-white rounded-2xl p-4 shadow-sm h-[70vh]">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Decks</h3>
            <div className="space-y-2 h-[calc(70vh-2.5rem)] overflow-y-auto pr-1">
              {decks.length === 0 && <p className="text-xs text-gray-400">No decks available.</p>}
              {decks.map(deck => (
                <div
                  key={deck.id}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl ${selectedDeckId === deck.id ? 'bg-violet-100 text-violet-800' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
                  <div
                    className="w-full text-left flex justify-between items-center"
                    onClick={() => { if (editingDeckId !== deck.id) { setSelectedDeckId(deck.id); setSelectedCardIndex(0); setIsCardFlipped(false) } }}
                    onDoubleClick={(e) => startRename(deck, e)}
                  >
                    {editingDeckId === deck.id ? (
                      <input
                        autoFocus
                        value={editingDeckName}
                        onChange={e => setEditingDeckName(e.target.value)}
                        onBlur={() => commitRename(deck.id)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') commitRename(deck.id)
                          if (e.key === 'Escape') setEditingDeckId(null)
                        }}
                        onClick={e => e.stopPropagation()}
                        className="flex-1 text-sm font-medium bg-white border border-violet-400 rounded px-1.5 py-0.5 focus:outline-none"
                      />
                    ) : (
                      <span className="font-medium text-sm">{deck.name}</span>
                    )}
                    <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{deck.cardCount ?? deck.cards?.length ?? 0}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFlashcardDeck(subjectId, deck.id)
                      if (selectedDeckId === deck.id) {
                        const remaining = decks.filter(d => d.id !== deck.id)
                        const next = remaining[0] || null
                        if (next) {
                          setSelectedDeckId(next.id)
                          setSelectedCardIndex(0)
                          setIsCardFlipped(false)
                        }
                      }
                    }}
                    className="ml-2 p-1 rounded-full text-red-500 hover:bg-red-100"
                    title="Delete deck"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-3xl shadow-sm p-6 min-h-[60vh] flex flex-col">
            {!currentDeck || !currentDeck.cards?.length ? (
              <div className="flex-1 flex flex-col justify-center items-center text-center">
                <p className="text-lg font-semibold text-gray-600">No cards in selected deck</p>
                <p className="text-sm text-gray-400">Create or select a deck from the left</p>
              </div>
            ) : (
              <>
                <div
                  onClick={() => setIsCardFlipped(prev => !prev)}
                  className={`flex-1 rounded-3xl border border-gray-200 p-8 flex flex-col justify-center items-center text-center cursor-pointer select-none transition hover:shadow-lg ${isCardFlipped ? 'bg-gray-100 text-gray-900' : 'bg-violet-900 text-white'}`}
                >
                  <p className="text-xs uppercase tracking-widest mb-2 font-semibold">{isCardFlipped ? 'Answer' : 'Question'}</p>
                  <h2 className="text-3xl font-bold leading-snug max-w-3xl">
                    {currentText || 'No card content'}
                  </h2>
                  <p className="mt-4 text-sm font-semibold">Card {selectedCardIndex + 1} of {currentDeck.cards.length}</p>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setSelectedCardIndex(i => Math.max(i - 1, 0))
                      setIsCardFlipped(false)
                    }}
                    disabled={selectedCardIndex === 0}
                    className="w-1/4 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold disabled:opacity-40"
                  >
                    Previous Card
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCardIndex(i => (i + 1) % currentDeck.cards.length)
                      setIsCardFlipped(false)
                    }}
                    className="w-1/4 py-3 rounded-xl bg-violet-600 text-white font-semibold"
                  >
                    Next Card
                  </button>
                  <button
                    onClick={() => setIsCardFlipped(prev => !prev)}
                    className="w-1/4 py-3 rounded-xl bg-gray-200 text-gray-700 font-semibold"
                  >
                    Flip Card
                  </button>
                  <button
                    onClick={deleteCurrentCard}
                    disabled={currentDeck?.cards?.length <= 1}
                    className="w-1/4 py-3 rounded-xl bg-red-100 text-red-700 font-semibold disabled:opacity-40 flex items-center justify-center gap-1"
                  >
                    <Trash2 size={16} />
                    Delete Card
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {isNewDeckDialogOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-5">
            <h3 className="text-lg font-bold mb-3">Create a new deck</h3>
            <input
              value={newDeckName}
              onChange={(e) => setNewDeckName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Deck name"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setIsNewDeckDialogOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={createNewDeck}
                className="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
