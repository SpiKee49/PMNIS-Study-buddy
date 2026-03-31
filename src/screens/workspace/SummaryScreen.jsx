import { useState, useEffect } from 'react'
import { ChevronLeft, FileText, BookOpen, Download, Lock } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={idx} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>
    }
    return part
  })
}

function MarkdownDocument({ content }) {
  const lines = content.split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-2xl font-bold text-gray-900 mt-2 mb-4 pb-3 border-b-2 border-gray-200">
          {renderInline(line.slice(2))}
        </h1>
      )
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-lg font-bold text-gray-800 mt-7 mb-2 pb-1 border-b border-gray-100">
          {renderInline(line.slice(3))}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-sm font-bold text-gray-700 mt-4 mb-1 uppercase tracking-wide">
          {renderInline(line.slice(4))}
        </h3>
      )
    } else if (line === '---') {
      elements.push(<hr key={i} className="my-6 border-gray-200" />)
    } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      elements.push(
        <p key={i} className="text-xs text-gray-400 italic mt-4">
          {line.slice(1, -1)}
        </p>
      )
    } else if (line.trim() === '') {
      // collect list groups before blank lines
    } else {
      // collect consecutive list items into a group
      const isUnordered = line.startsWith('- ')
      const isOrdered = /^\d+\. /.test(line)

      if (isUnordered || isOrdered) {
        const items = []
        let j = i
        while (j < lines.length && (isUnordered ? lines[j].startsWith('- ') : /^\d+\. /.test(lines[j]))) {
          items.push(lines[j])
          j++
        }
        const Tag = isOrdered ? 'ol' : 'ul'
        const listClass = isOrdered
          ? 'list-decimal list-inside space-y-1 my-2 ml-2'
          : 'list-disc list-inside space-y-1 my-2 ml-2'
        elements.push(
          <Tag key={i} className={listClass}>
            {items.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-700 leading-relaxed">
                {renderInline(isOrdered ? item.replace(/^\d+\. /, '') : item.slice(2))}
              </li>
            ))}
          </Tag>
        )
        i = j
        continue
      }

      elements.push(
        <p key={i} className="text-sm text-gray-700 leading-relaxed my-1">
          {renderInline(line)}
        </p>
      )
    }

    i++
  }

  return <div className="space-y-0.5">{elements}</div>
}

function FileIcon({ type }) {
  if (type === 'pdf') return <FileText size={18} className="text-rose-600" />
  return <FileText size={18} className="text-blue-600" />
}

function FileIconBg({ type }) {
  if (type === 'pdf') return 'bg-rose-100'
  return 'bg-blue-100'
}

function applyBold(text) {
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}

function convertToHTML(markdown) {
  const lines = markdown.split('\n')
  const result = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('# ')) {
      result.push(`<h1>${applyBold(line.slice(2))}</h1>`)
    } else if (line.startsWith('## ')) {
      result.push(`<h2>${applyBold(line.slice(3))}</h2>`)
    } else if (line.startsWith('### ')) {
      result.push(`<h3>${applyBold(line.slice(4))}</h3>`)
    } else if (line === '---') {
      result.push('<hr>')
    } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      result.push(`<p class="footer">${line.slice(1, -1)}</p>`)
    } else if (line.trim() === '') {
      // skip
    } else if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(`<li>${applyBold(lines[i].slice(2))}</li>`)
        i++
      }
      result.push(`<ul>${items.join('')}</ul>`)
      continue
    } else if (/^\d+\. /.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(`<li>${applyBold(lines[i].replace(/^\d+\. /, ''))}</li>`)
        i++
      }
      result.push(`<ol>${items.join('')}</ol>`)
      continue
    } else {
      result.push(`<p>${applyBold(line)}</p>`)
    }

    i++
  }

  return result.join('\n')
}

export default function SummaryScreen() {
  const { navigate, params, hasUnlocked } = useNav()
  const { subjectId, selectedMaterials = [] } = params

  const [summaryDocument, setSummaryDocument] = useState('')
  const [isGenerating, setIsGenerating] = useState(true)

  const canExport = hasUnlocked('export-notes')

  const handleDownloadPDF = () => {
    const win = window.open('', '_blank')
    win.document.write(`<!DOCTYPE html>
<html>
<head>
  <title>Study Guide</title>
  <style>
    body { font-family: Georgia, serif; max-width: 780px; margin: 48px auto; padding: 0 24px; color: #111; font-size: 13px; line-height: 1.7; }
    h1 { font-size: 22px; font-weight: bold; border-bottom: 2px solid #ccc; padding-bottom: 8px; margin: 0 0 20px; }
    h2 { font-size: 16px; font-weight: bold; border-bottom: 1px solid #e5e5e5; padding-bottom: 4px; margin: 28px 0 10px; }
    h3 { font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.06em; color: #555; margin: 18px 0 6px; }
    p { margin: 4px 0 8px; }
    ul, ol { margin: 6px 0 10px; padding-left: 22px; }
    li { margin: 2px 0; }
    hr { border: none; border-top: 1px solid #ddd; margin: 24px 0; }
    strong { font-weight: 600; }
    .footer { font-size: 11px; color: #999; font-style: italic; margin-top: 16px; }
  </style>
</head>
<body>
${convertToHTML(summaryDocument)}
</body>
</html>`)
    win.document.close()
    win.focus()
    win.print()
  }

  useEffect(() => {
    if (selectedMaterials.length > 0) {
      // Simulate summary generation
      setTimeout(() => {
        const comprehensiveDocument = generateSampleSummary(selectedMaterials)
        setSummaryDocument(comprehensiveDocument)
        setIsGenerating(false)
      }, 2500) // Slightly longer for a comprehensive document
    }
  }, [selectedMaterials])

  const generateSampleSummary = (selectedMaterials) => {
    // Generate a comprehensive study guide combining all selected materials
    const materialNames = selectedMaterials.map(m => m.name).join(', ')

    const comprehensiveNotes = `# Study Guide: Machine Learning Fundamentals

## Course Overview
This comprehensive study guide covers key concepts from ${selectedMaterials.length} selected materials: ${materialNames}. The guide synthesizes fundamental machine learning principles, algorithms, and practical applications.

## 1. Introduction to Machine Learning

### Core Concepts
Machine learning is a subset of artificial intelligence that enables systems to automatically learn and improve from experience without being explicitly programmed. The field encompasses three main types:

- **Supervised Learning**: Learning from labeled training data to make predictions
- **Unsupervised Learning**: Finding hidden patterns in unlabeled data
- **Reinforcement Learning**: Learning through interaction with an environment

### Key Terminology
- **Features/Variables**: Input attributes used for prediction
- **Target/Label**: Output variable we want to predict
- **Training Data**: Dataset used to train the model
- **Test Data**: Dataset used to evaluate model performance
- **Overfitting**: When a model performs well on training data but poorly on new data
- **Underfitting**: When a model is too simple to capture underlying patterns

## 2. Supervised Learning Algorithms

### Linear Regression
A fundamental algorithm for predicting continuous values.

**Cost Function:**
J(θ) = (1/2m) Σᵢ₌₁ᵐ (h_θ(x^(i)) - y^(i))²

**Gradient Descent Update:**
θ_j := θ_j - α ∂J/∂θ_j

**Key Applications:**
- House price prediction
- Sales forecasting
- Risk assessment

### Logistic Regression
Used for binary classification problems.

**Sigmoid Function:**
σ(z) = 1/(1 + e^(-z))

**Hypothesis:**
h_θ(x) = σ(θ^T x)

**Decision Boundary:**
- Class 1 if h_θ(x) ≥ 0.5
- Class 0 if h_θ(x) < 0.5

### Decision Trees
Non-parametric supervised learning method used for classification and regression.

**Advantages:**
- Easy to interpret and visualize
- Handles both numerical and categorical data
- Requires little data preprocessing

**Common Algorithms:**
- ID3 (Iterative Dichotomiser 3)
- C4.5 (successor to ID3)
- CART (Classification and Regression Trees)

## 3. Model Evaluation Metrics

### Classification Metrics
- **Accuracy**: (TP + TN) / (TP + TN + FP + FN)
- **Precision**: TP / (TP + FP)
- **Recall**: TP / (TP + FN)
- **F1-Score**: 2 × (Precision × Recall) / (Precision + Recall)
- **ROC-AUC**: Area under the Receiver Operating Characteristic curve

### Regression Metrics
- **Mean Absolute Error (MAE)**: Average absolute differences between predictions and actual values
- **Mean Squared Error (MSE)**: Average squared differences between predictions and actual values
- **Root Mean Squared Error (RMSE)**: Square root of MSE
- **R² Score**: Proportion of variance explained by the model

## 4. Neural Networks and Deep Learning

### Artificial Neural Networks
Inspired by biological neural networks in the human brain.

**Components:**
- **Input Layer**: Receives input features
- **Hidden Layers**: Process information through weighted connections
- **Output Layer**: Produces final predictions
- **Activation Functions**: Introduce non-linearity (ReLU, sigmoid, tanh)

### Backpropagation
Algorithm for training neural networks by computing gradients and updating weights.

**Chain Rule Application:**
∂L/∂w = ∂L/∂a × ∂a/∂z × ∂z/∂w

Where:
- L = Loss function
- a = Activation output
- z = Weighted sum input
- w = Weight parameter

### Convolutional Neural Networks (CNNs)
Specialized for image processing and computer vision tasks.

**Key Layers:**
- **Convolutional Layer**: Applies filters to detect features
- **Pooling Layer**: Reduces spatial dimensions
- **Fully Connected Layer**: Makes final classifications

**Common Architectures:**
- LeNet-5
- AlexNet
- VGGNet
- ResNet
- Inception

### Recurrent Neural Networks (RNNs)
Designed for sequential data processing.

**Applications:**
- Natural language processing
- Time series prediction
- Speech recognition

**Variants:**
- Long Short-Term Memory (LSTM)
- Gated Recurrent Unit (GRU)

## 5. Optimization Techniques

### Gradient Descent Variants
- **Batch Gradient Descent**: Uses entire dataset for each update
- **Stochastic Gradient Descent (SGD)**: Updates weights using single training example
- **Mini-batch Gradient Descent**: Compromise between batch and stochastic

### Advanced Optimizers
- **Momentum**: Accelerates convergence by adding fraction of previous update
- **RMSProp**: Adapts learning rate for each parameter
- **Adam**: Combines momentum and RMSProp with bias correction

## 6. Practical Considerations

### Data Preprocessing
- **Feature Scaling**: Normalization and standardization
- **Handling Missing Values**: Imputation techniques
- **Categorical Encoding**: One-hot encoding, label encoding
- **Feature Selection**: Removing irrelevant or redundant features

### Model Validation
- **Cross-Validation**: K-fold, stratified k-fold
- **Train/Validation/Test Split**: 60/20/20 or 70/15/15 ratios
- **Hyperparameter Tuning**: Grid search, random search, Bayesian optimization

### Common Challenges
- **Overfitting**: Use regularization, early stopping, dropout
- **Underfitting**: Increase model complexity, add features
- **Imbalanced Data**: SMOTE, class weighting, resampling
- **Computational Complexity**: Feature selection, dimensionality reduction

## 7. Applications and Case Studies

### Computer Vision
- Image classification (ImageNet)
- Object detection (YOLO, SSD)
- Facial recognition
- Medical image analysis

### Natural Language Processing
- Sentiment analysis
- Machine translation (Transformer models)
- Text summarization
- Chatbots and virtual assistants

### Recommendation Systems
- Collaborative filtering
- Content-based filtering
- Matrix factorization
- Deep learning approaches

## 8. Ethics and Best Practices

### Bias and Fairness
- **Algorithmic Bias**: Ensure training data represents diverse populations
- **Fairness Metrics**: Demographic parity, equal opportunity
- **Bias Detection**: Confusion matrix analysis, fairness-aware algorithms

### Model Interpretability
- **Feature Importance**: Understanding which features influence predictions
- **SHAP Values**: Shapley Additive Explanations
- **LIME**: Local Interpretable Model-agnostic Explanations

### Deployment Considerations
- **Model Monitoring**: Performance degradation detection
- **A/B Testing**: Comparing model versions
- **Continuous Learning**: Updating models with new data

## Key Formulas and Equations

### Statistics Fundamentals
- **Mean**: μ = Σxᵢ/n
- **Variance**: σ² = Σ(xᵢ - μ)²/n
- **Standard Deviation**: σ = √σ²
- **Covariance**: cov(X,Y) = Σ(xᵢ - μ_X)(yᵢ - μ_Y)/n

### Probability
- **Bayes' Theorem**: P(A|B) = P(B|A) × P(A)/P(B)
- **Conditional Probability**: P(A∩B) = P(A|B) × P(B)

### Information Theory
- **Entropy**: H(X) = -Σ P(x) log₂ P(x)
- **Cross-Entropy**: H(p,q) = -Σ p(x) log₂ q(x)

## Study Tips and Best Practices

1. **Start with Fundamentals**: Master basic concepts before advanced topics
2. **Practice Regularly**: Implement algorithms from scratch
3. **Work on Projects**: Apply concepts to real-world problems
4. **Stay Updated**: Follow latest research and developments
5. **Join Communities**: Participate in Kaggle, GitHub, research forums
6. **Focus on Mathematics**: Strong foundation in linear algebra, calculus, probability
7. **Experiment**: Try different algorithms and compare performance
8. **Document Learning**: Keep notes and code repositories organized

---

*This study guide was generated from ${selectedMaterials.length} selected materials. Review regularly and supplement with hands-on practice for best results.*`

    return comprehensiveNotes
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <button
            onClick={() => navigate('subject-detail', { subjectId })}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-gray-300 text-sm">/</span>
          <span className="text-sm font-semibold text-gray-900">Quick Summary</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
              <BookOpen size={24} className="text-violet-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Material Summaries</h1>
              <p className="text-sm text-gray-600">AI-generated summaries of your selected materials</p>
            </div>
          </div>

          {isGenerating ? (
            <div className="space-y-6">
              <div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="space-y-3">
                  {[...Array(8)].map((_, i) => (
                    <div key={i}>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center text-sm text-gray-500 mt-6">
                Generating comprehensive study guide...
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
                      <FileText size={24} className="text-violet-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Comprehensive Study Guide</h2>
                      <p className="text-sm text-gray-600">Generated from {selectedMaterials.length} selected materials</p>
                    </div>
                  </div>

                  {canExport ? (
                    <button
                      onClick={handleDownloadPDF}
                      className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors"
                    >
                      <Download size={15} />
                      Download PDF
                    </button>
                  ) : (
                    <div className="flex flex-col items-end gap-1">
                      <button
                        onClick={() => navigate('coins-store')}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-400 text-sm font-medium rounded-xl transition-colors"
                      >
                        <Lock size={15} />
                        Download PDF
                      </button>
                      <span className="text-xs text-gray-400">Unlock with <span className="text-amber-500 font-semibold">15 coins</span> in the Store</span>
                    </div>
                  )}
                </div>

                <div className="prose prose-sm max-w-none">
                  <MarkdownDocument content={summaryDocument} />
                </div>
              </div>

              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-violet-700 mb-2">
                  <BookOpen size={16} />
                  <span className="font-semibold text-sm">Study Guide Generated</span>
                </div>
                <p className="text-xs text-violet-600">
                  This comprehensive document synthesizes key concepts from all your selected materials.
                  Use it as a reference for studying, review, or as a quick refresher before exams.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedMaterials.map(material => (
                    <span key={material.id} className="inline-flex items-center gap-1 px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">
                      <FileText size={12} />
                      {material.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}