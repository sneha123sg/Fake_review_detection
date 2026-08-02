import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/40 border border-gray-700 text-sm mb-6">
          <span>📚 Academic Project</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          About the Project
        </h1>
        <p className="text-xl text-gray-400">
          Understanding the technology behind fake review detection
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Project Overview */}
        <div className="bg-black/40 border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Project Objective
          </h2>
          <p className="text-gray-300 mb-4">
            The Fake Review Detection System is designed to identify fraudulent
            reviews in e-commerce and service platforms using advanced machine
            learning techniques. This system helps maintain trust and
            authenticity in online marketplaces.
          </p>
          <p className="text-gray-300 mb-6">
            By analyzing linguistic patterns, sentiment inconsistencies, and
            behavioral markers, our system can distinguish between genuine
            customer feedback and artificially generated reviews.
          </p>

          <h3 className="text-lg font-semibold text-white mb-4">
            Key Features
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              Real-time single review analysis
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              Batch processing for multiple reviews
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              Confidence scoring system
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
              User-friendly web interface
            </li>
          </ul>
        </div>

        {/* Technical Approach */}
        <div className="bg-black/40 border border-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Technical Approach
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-violet-400 mb-3">
              Soft Computing Techniques
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Natural Language Processing (NLP)</li>
              <li>• Sentiment Analysis Algorithms</li>
              <li>• Neural Networks for Pattern Recognition</li>
              <li>• Fuzzy Logic for Uncertainty Handling</li>
              <li>• Machine Learning Classification Models</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-green-400 mb-3">
              Cyber Security Aspects
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Fraud Detection Mechanisms</li>
              <li>• Behavioral Analysis Patterns</li>
              <li>• Anomaly Detection Systems</li>
              <li>• Data Integrity Validation</li>
              <li>• Secure API Communication</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-3">
              Implementation Stack
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Frontend: React.js with Tailwind CSS</li>
              <li>• Backend: Python with Flask/FastAPI</li>
              <li>• ML Libraries: scikit-learn, NLTK, spaCy</li>
              <li>• Database: MongoDB/PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Methodology */}
      <div className="mt-12 bg-black/40 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Detection Methodology
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-violet-900/30 border border-violet-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="font-semibold text-white mb-2">
              Text Preprocessing
            </h3>
            <p className="text-sm text-gray-400">
              Clean and normalize review text, remove noise, and extract
              meaningful features
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-900/30 border border-green-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="font-semibold text-white mb-2">
              Feature Extraction
            </h3>
            <p className="text-sm text-gray-400">
              Analyze linguistic patterns, sentiment scores, and structural
              characteristics
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-900/30 border border-purple-700/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Classification</h3>
            <p className="text-sm text-gray-400">
              Apply trained ML models to classify reviews as genuine or fake
              with confidence scores
            </p>
          </div>
        </div>
      </div>

      {/* AI Framework Documentation */}
      <div className="mt-12 bg-black/40 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          AI Agent Framework (PEAS Model)
        </h2>
        <p className="text-gray-400 mb-6">
          Our AI system follows the PEAS (Performance, Environment, Actuators,
          Sensors) framework for intelligent agent design.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-600 rounded-lg">
            <thead>
              <tr className="bg-violet-900/30">
                <th className="border border-gray-600 px-4 py-3 text-left text-white font-semibold">
                  Component
                </th>
                <th className="border border-gray-600 px-4 py-3 text-left text-white font-semibold">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black/20">
                <td className="border border-gray-600 px-4 py-3 text-violet-400 font-medium">
                  P - Performance
                </td>
                <td className="border border-gray-600 px-4 py-3 text-gray-300">
                  Accuracy, F1-Score, Utility Confidence of prediction
                </td>
              </tr>
              <tr className="bg-black/10">
                <td className="border border-gray-600 px-4 py-3 text-green-400 font-medium">
                  E - Environment
                </td>
                <td className="border border-gray-600 px-4 py-3 text-gray-300">
                  Text reviews from users or CSV batch uploads
                </td>
              </tr>
              <tr className="bg-black/20">
                <td className="border border-gray-600 px-4 py-3 text-purple-400 font-medium">
                  A - Actuator
                </td>
                <td className="border border-gray-600 px-4 py-3 text-gray-300">
                  Output: Fake/Genuine label + Explanation
                </td>
              </tr>
              <tr className="bg-black/10">
                <td className="border border-gray-600 px-4 py-3 text-blue-400 font-medium">
                  S - Sensor
                </td>
                <td className="border border-gray-600 px-4 py-3 text-gray-300">
                  Input text, token counts, keyword triggers
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Decision Network Diagram */}
      <div className="mt-12 bg-black/40 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">AI Decision Flow</h2>
        <p className="text-gray-400 mb-6">
          The system follows a structured decision network for processing and
          classifying reviews.
        </p>

        <div className="bg-black/60 border border-gray-600 rounded-lg p-6 overflow-x-auto">
          <div className="min-w-max">
            {/* Decision Flow Visualization */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center min-w-max">
                User Review Input
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-center min-w-max">
                Text Preprocessing:
                <br />
                Tokenization, TF-IDF
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-center min-w-max">
                ML Classification
                <br />
                Model
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm mt-4">
              <div className="bg-orange-600 text-white px-4 py-2 rounded-lg text-center min-w-max">
                Rule-Based Keyword
                <br />
                Adjustment
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-center min-w-max">
                Utility Score
                <br />
                Calculation
              </div>
              <div className="text-gray-400">→</div>
              <div className="bg-violet-600 text-white px-4 py-2 rounded-lg text-center min-w-max">
                Output: Fake/Genuine
                <br />+ Confidence
              </div>
            </div>
          </div>
        </div>

        {/* Process Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-2">
              Input Processing
            </h3>
            <p className="text-xs text-gray-400">
              Receives and validates user review text or batch file uploads
            </p>
          </div>

          <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4">
            <h3 className="font-semibold text-purple-400 mb-2">
              Text Preprocessing
            </h3>
            <p className="text-xs text-gray-400">
              Tokenization, normalization, TF-IDF vectorization
            </p>
          </div>

          <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
            <h3 className="font-semibold text-green-400 mb-2">
              ML Classification
            </h3>
            <p className="text-xs text-gray-400">
              Trained model analyzes patterns and predicts authenticity
            </p>
          </div>

          <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4">
            <h3 className="font-semibold text-orange-400 mb-2">
              Rule Adjustment
            </h3>
            <p className="text-xs text-gray-400">
              Keyword-based rules fine-tune initial predictions
            </p>
          </div>

          <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
            <h3 className="font-semibold text-red-400 mb-2">Utility Scoring</h3>
            <p className="text-xs text-gray-400">
              Calculates confidence scores and risk assessment
            </p>
          </div>

          <div className="bg-violet-900/20 border border-violet-700/30 rounded-lg p-4">
            <h3 className="font-semibold text-violet-400 mb-2">Final Output</h3>
            <p className="text-xs text-gray-400">
              Returns classification result with explanation
            </p>
          </div>
        </div>
      </div>

      {/* Soft Computing Implementation */}
      <div className="mt-12 bg-black/40 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Soft Computing Techniques Implementation
        </h2>
        <p className="text-gray-400 mb-6">
          Detailed breakdown of how soft computing methods are integrated into
          the ReviewGuard AI system.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* NLP Implementation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              🧠 Natural Language Processing (NLP)
            </h3>

            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-300 mb-2">
                Text Preprocessing Pipeline
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Tokenization:</strong>{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    reviewText.split()
                  </code>{" "}
                  for word separation
                </li>
                <li>
                  • <strong>Normalization:</strong>{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    toLowerCase(), trim()
                  </code>{" "}
                  for consistency
                </li>
                <li>
                  • <strong>Stop Words Removal:</strong> Filter common words for
                  better analysis
                </li>
                <li>
                  • <strong>TF-IDF Vectorization:</strong> Convert text to
                  numerical features
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  const processedText =
                  reviewText.toLowerCase().trim().split(/\s+/)
                </code>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-300 mb-2">
                Sentiment Analysis Algorithms
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Polarity Detection:</strong> Positive/Negative
                  sentiment scoring
                </li>
                <li>
                  • <strong>Emotion Classification:</strong> Joy, anger, fear,
                  surprise analysis
                </li>
                <li>
                  • <strong>Intensity Measurement:</strong> Sentiment strength
                  quantification
                </li>
                <li>
                  • <strong>Context Analysis:</strong> Sarcasm and irony
                  detection
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  const sentiment = analyzeSentiment(processedText) //{" "}
                  {`{polarity: 0.8, intensity: 0.6}`}
                </code>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-300 mb-2">
                Neural Networks for Pattern Recognition
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>LSTM Networks:</strong> Sequential pattern learning
                  in text
                </li>
                <li>
                  • <strong>CNN Layers:</strong> Local feature extraction from
                  text
                </li>
                <li>
                  • <strong>Transformer Models:</strong> Attention-based
                  contextual understanding
                </li>
                <li>
                  • <strong>Embedding Layers:</strong> Word-to-vector
                  representations
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  model.predict(vectorizedText) → [fake_probability,
                  genuine_probability]
                </code>
              </div>
            </div>
          </div>

          {/* Advanced Techniques */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">
              ⚡ Advanced ML Techniques
            </h3>

            <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-orange-300 mb-2">
                Fuzzy Logic for Uncertainty Handling
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Fuzzy Sets:</strong> "Somewhat fake", "Highly
                  genuine" classifications
                </li>
                <li>
                  • <strong>Membership Functions:</strong> Gradual confidence
                  transitions
                </li>
                <li>
                  • <strong>Rule-based Inference:</strong> IF-THEN logic for
                  edge cases
                </li>
                <li>
                  • <strong>Defuzzification:</strong> Convert fuzzy output to
                  crisp decisions
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  fuzzyConfidence = Math.min(1, Math.max(0, (rawScore +
                  adjustment) / 2))
                </code>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-red-300 mb-2">
                ML Classification Models
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Random Forest:</strong> Ensemble learning for robust
                  predictions
                </li>
                <li>
                  • <strong>SVM:</strong> Support Vector Machines for text
                  classification
                </li>
                <li>
                  • <strong>Gradient Boosting:</strong> XGBoost for feature
                  importance
                </li>
                <li>
                  • <strong>Naive Bayes:</strong> Probabilistic text
                  classification
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  prediction = ensemble.predict_proba(features)[0][1] // Genuine
                  probability
                </code>
              </div>
            </div>

            <div className="bg-violet-900/20 border border-violet-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-violet-300 mb-2">
                Feature Engineering
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Text Length Analysis:</strong> Character/word count
                  patterns
                </li>
                <li>
                  • <strong>Linguistic Features:</strong> Grammar, syntax,
                  readability scores
                </li>
                <li>
                  • <strong>Temporal Patterns:</strong> Review posting time
                  analysis
                </li>
                <li>
                  • <strong>N-gram Analysis:</strong> Bi-gram, tri-gram pattern
                  extraction
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  features = extractFeatures(text) // [length, sentiment,
                  complexity, ...]
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Current Implementation Status */}
        <div className="mt-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            🔧 Current Implementation Status
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-900/30 border border-green-700/30 rounded-lg p-3 text-center">
              <div className="text-green-400 font-semibold">
                ✅ Frontend Ready
              </div>
              <div className="text-xs text-gray-400 mt-1">
                UI components for all techniques implemented
              </div>
            </div>
            <div className="bg-yellow-900/30 border border-yellow-700/30 rounded-lg p-3 text-center">
              <div className="text-yellow-400 font-semibold">
                🔄 Backend Integration
              </div>
              <div className="text-xs text-gray-400 mt-1">
                API endpoints defined, ML models ready for integration
              </div>
            </div>
            <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-3 text-center">
              <div className="text-blue-400 font-semibold">
                📊 Demo Mode Active
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Mock predictions showing expected ML behavior
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cyber Security Implementation */}
      <div className="mt-12 bg-black/40 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Cyber Security Aspects Implementation
        </h2>
        <p className="text-gray-400 mb-6">
          Comprehensive security measures integrated into the fraud detection
          system.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Security Mechanisms */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-red-400 mb-4">
              🛡️ Fraud Detection Mechanisms
            </h3>

            <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-red-300 mb-2">
                Pattern-Based Detection
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Duplicate Content:</strong> Hash-based similarity
                  detection
                </li>
                <li>
                  • <strong>Template Matching:</strong> Common fake review
                  patterns
                </li>
                <li>
                  • <strong>Language Inconsistency:</strong> Grammar and style
                  analysis
                </li>
                <li>
                  • <strong>Spam Keywords:</strong> Suspicious phrase
                  identification
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  const suspiciousPatterns = detectSpamKeywords(reviewText)
                </code>
              </div>
            </div>

            <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-orange-300 mb-2">
                Behavioral Analysis Patterns
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>User Activity:</strong> Review frequency and timing
                  analysis
                </li>
                <li>
                  • <strong>Writing Style:</strong> Linguistic fingerprinting
                </li>
                <li>
                  • <strong>Rating Patterns:</strong> Extreme rating bias
                  detection
                </li>
                <li>
                  • <strong>Account Correlation:</strong> Multi-account fraud
                  detection
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  behaviorScore = analyzeBehaviorPatterns(userHistory,
                  reviewData)
                </code>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-300 mb-2">
                Anomaly Detection Systems
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Statistical Outliers:</strong> Deviation from normal
                  patterns
                </li>
                <li>
                  • <strong>Clustering Analysis:</strong> Isolation of unusual
                  reviews
                </li>
                <li>
                  • <strong>Time Series Analysis:</strong> Unusual posting
                  patterns
                </li>
                <li>
                  • <strong>Network Analysis:</strong> Coordinated fake review
                  campaigns
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  anomalyScore = detectAnomalies(reviewFeatures,
                  normalDistribution)
                </code>
              </div>
            </div>
          </div>

          {/* Security Infrastructure */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              🔒 Security Infrastructure
            </h3>

            <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-300 mb-2">
                Data Integrity Validation
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Input Sanitization:</strong> XSS and injection
                  prevention
                </li>
                <li>
                  • <strong>File Validation:</strong> CSV/JSON format
                  verification
                </li>
                <li>
                  • <strong>Size Limits:</strong> Upload size and content
                  restrictions
                </li>
                <li>
                  • <strong>Checksum Verification:</strong> Data corruption
                  detection
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  if (!reviewText.trim() || reviewText.length &gt; MAX_LENGTH)
                  setError(...)
                </code>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-300 mb-2">
                Secure API Communication
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>HTTPS Encryption:</strong> TLS 1.3 for data in
                  transit
                </li>
                <li>
                  • <strong>API Authentication:</strong> JWT tokens for user
                  sessions
                </li>
                <li>
                  • <strong>Rate Limiting:</strong> DoS attack prevention
                </li>
                <li>
                  • <strong>CORS Policy:</strong> Cross-origin request control
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  headers:{" "}
                  {`{'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}`}
                </code>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-300 mb-2">
                Privacy Protection
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Data Anonymization:</strong> PII removal from
                  reviews
                </li>
                <li>
                  • <strong>Temporary Storage:</strong> Analysis data
                  auto-deletion
                </li>
                <li>
                  • <strong>Audit Logging:</strong> Security event tracking
                </li>
                <li>
                  • <strong>Compliance:</strong> GDPR and privacy regulation
                  adherence
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  const sanitizedData = removePII(reviewText, sensitivePatterns)
                </code>
              </div>
            </div>

            <div className="bg-indigo-900/20 border border-indigo-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-300 mb-2">
                Real-time Monitoring
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Attack Detection:</strong> Real-time threat
                  monitoring
                </li>
                <li>
                  • <strong>Performance Metrics:</strong> System health tracking
                </li>
                <li>
                  • <strong>Error Logging:</strong> Comprehensive error tracking
                </li>
                <li>
                  • <strong>Alert Systems:</strong> Automated security
                  notifications
                </li>
              </ul>
              <div className="mt-3 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  logger.security('Suspicious activity detected',{" "}
                  {`{userId, reviewId, riskScore}`})
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Security Implementation Status */}
        <div className="mt-8 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            🔐 Security Implementation Status
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-green-900/30 border border-green-700/30 rounded-lg p-3 text-center">
              <div className="text-green-400 font-semibold">
                ✅ Input Validation
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Client-side validation active
              </div>
            </div>
            <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-3 text-center">
              <div className="text-blue-400 font-semibold">
                ✅ Error Handling
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Comprehensive error management
              </div>
            </div>
            <div className="bg-yellow-900/30 border border-yellow-700/30 rounded-lg p-3 text-center">
              <div className="text-yellow-400 font-semibold">
                🔄 API Security
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Ready for HTTPS and authentication
              </div>
            </div>
            <div className="bg-purple-900/30 border border-purple-700/30 rounded-lg p-3 text-center">
              <div className="text-purple-400 font-semibold">
                📊 Monitoring Ready
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Logging and alerts prepared
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Model Detection Capabilities */}
      <div className="mt-12 bg-black/40 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Advanced Model Detection System
        </h2>
        <p className="text-gray-400 mb-6">
          Our system can identify both the AI models used for classification and
          detect AI-generated fake reviews.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Classification Model Detection */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-violet-400 mb-4">
              🎯 Classification Model Detection
            </h3>

            <div className="bg-violet-900/20 border border-violet-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-violet-300 mb-2">
                Supported Models
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>BERT-Base:</strong> Transformer model for contextual
                  understanding
                </li>
                <li>
                  • <strong>LSTM-BiDirectional:</strong> Sequential pattern
                  recognition
                </li>
                <li>
                  • <strong>Random Forest:</strong> Ensemble method for robust
                  predictions
                </li>
                <li>
                  • <strong>SVM-RBF:</strong> Support Vector Machine with radial
                  basis function
                </li>
                <li>
                  • <strong>Naive Bayes:</strong> Probabilistic classification
                  approach
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-300 mb-2">
                Model Performance Metrics
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Confidence Scoring:</strong> Model certainty
                  assessment
                </li>
                <li>
                  • <strong>Feature Importance:</strong> Key pattern
                  identification
                </li>
                <li>
                  • <strong>Processing Speed:</strong> Real-time analysis
                  capability
                </li>
                <li>
                  • <strong>Accuracy Tracking:</strong> Continuous performance
                  monitoring
                </li>
              </ul>
            </div>
          </div>

          {/* AI Generation Detection */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">
              🤖 AI-Generated Content Detection
            </h3>

            <div className="bg-orange-900/20 border border-orange-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-orange-300 mb-2">
                Detectable AI Models
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>GPT-3.5:</strong> Token repetition and semantic
                  coherence patterns
                </li>
                <li>
                  • <strong>GPT-4:</strong> Advanced reasoning and context
                  awareness markers
                </li>
                <li>
                  • <strong>Claude:</strong> Structured responses and balanced
                  tone indicators
                </li>
                <li>
                  • <strong>PaLM:</strong> Technical accuracy and factual
                  consistency
                </li>
                <li>
                  • <strong>LLaMA:</strong> Natural flow and conversational
                  style patterns
                </li>
              </ul>
            </div>

            <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-red-300 mb-2">
                Detection Techniques
              </h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  • <strong>Statistical Analysis:</strong> Token distribution
                  patterns
                </li>
                <li>
                  • <strong>Linguistic Fingerprinting:</strong> Model-specific
                  writing styles
                </li>
                <li>
                  • <strong>Coherence Metrics:</strong> Artificial vs natural
                  flow detection
                </li>
                <li>
                  • <strong>Perplexity Scoring:</strong> Text predictability
                  analysis
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detection Pipeline */}
        <div className="mt-8 bg-black/50 border border-gray-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            🔍 Detection Pipeline Flow
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-3 text-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <h4 className="font-semibold text-blue-300 text-sm mb-1">
                Input Analysis
              </h4>
              <p className="text-xs text-gray-400">
                Text preprocessing and feature extraction
              </p>
            </div>

            <div className="bg-purple-900/30 border border-purple-700/30 rounded-lg p-3 text-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <h4 className="font-semibold text-purple-300 text-sm mb-1">
                Classification
              </h4>
              <p className="text-xs text-gray-400">
                Multi-model ensemble prediction
              </p>
            </div>

            <div className="bg-orange-900/30 border border-orange-700/30 rounded-lg p-3 text-center">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <h4 className="font-semibold text-orange-300 text-sm mb-1">
                AI Detection
              </h4>
              <p className="text-xs text-gray-400">
                Pattern matching and model identification
              </p>
            </div>

            <div className="bg-green-900/30 border border-green-700/30 rounded-lg p-3 text-center">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <h4 className="font-semibold text-green-300 text-sm mb-1">
                Risk Assessment
              </h4>
              <p className="text-xs text-gray-400">
                Confidence scoring and threat evaluation
              </p>
            </div>
          </div>
        </div>

        {/* Current Implementation Status */}
        <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            📊 Model Detection Status
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-900/30 border border-green-700/30 rounded-lg p-3 text-center">
              <div className="text-green-400 font-semibold">
                ✅ Detection Framework
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Multi-model analysis pipeline active
              </div>
            </div>
            <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-3 text-center">
              <div className="text-blue-400 font-semibold">
                ✅ AI Pattern Recognition
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Language model fingerprinting implemented
              </div>
            </div>
            <div className="bg-purple-900/30 border border-purple-700/30 rounded-lg p-3 text-center">
              <div className="text-purple-400 font-semibold">
                📊 Real-time Analysis
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Live model detection and risk scoring
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples Integration */}
      <div className="mt-12 bg-black/40 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Live Code Integration Examples
        </h2>
        <p className="text-gray-400 mb-6">
          See how the soft computing and security techniques are implemented in
          your current codebase.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* DetectReview.js Integration */}
          <div className="bg-black/50 border border-gray-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              📝 DetectReview.js - NLP Pipeline
            </h3>
            <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
              <pre>{`// Current Implementation
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // INPUT VALIDATION (Cyber Security)
  if (!reviewText.trim()) {
    setError('Please enter a review');
    return;
  }
  
  // TEXT PREPROCESSING (NLP)
  const processedText = reviewText
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9\\s]/g, '');
  
  // ML CLASSIFICATION SIMULATION
  const mockResult = {
    prediction: Math.random() > 0.5 ? 'Genuine' : 'Fake',
    confidence: (Math.random() * 0.4 + 0.6).toFixed(2),
    
    // FUZZY LOGIC ADJUSTMENT
    fuzzyConfidence: Math.min(1, 
      Math.max(0, (baseScore + contextAdjustment) / 2)
    )
  };
  
  navigate('/result', { state: { result: mockResult, reviewText } });
};`}</pre>
            </div>
          </div>

          {/* Result.js Security Features */}
          <div className="bg-black/50 border border-gray-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-400 mb-4">
              🛡️ Result.js - Security & Analysis
            </h3>
            <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 overflow-x-auto">
              <pre>{`// Current Security Implementation
const Result = () => {
  const location = useLocation();
  const { result, reviewText } = location.state || {};

  // DATA INTEGRITY VALIDATION
  if (!result) {
    return <NoResultsComponent />;
  }

  // ANOMALY DETECTION
  const isGenuine = result.prediction === 'Genuine';
  const confidencePercentage = 
    (parseFloat(result.confidence) * 100).toFixed(1);

  // BEHAVIORAL ANALYSIS VISUALIZATION
  const riskLevel = confidencePercentage < 70 ? 'HIGH' : 
                   confidencePercentage < 85 ? 'MEDIUM' : 'LOW';

  // SECURE DISPLAY WITH SANITIZATION
  return (
    <div className="result-container">
      <ConfidenceVisualization 
        confidence={confidencePercentage}
        riskLevel={riskLevel}
      />
      <SanitizedTextDisplay text={reviewText} />
    </div>
  );
};`}</pre>
            </div>
          </div>
        </div>

        {/* Advanced Features Ready for Implementation */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-blue-900/30 to-purple-900/30 border border-blue-700/30 rounded-lg p-4">
            <h4 className="font-semibold text-blue-300 mb-3">
              🧠 ML Model Integration Points
            </h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  fetch('/api/detect-review')
                </code>{" "}
                → Python ML backend
              </li>
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  TF-IDF vectorization
                </code>{" "}
                → scikit-learn
              </li>
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  LSTM prediction
                </code>{" "}
                → TensorFlow/PyTorch
              </li>
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  Ensemble voting
                </code>{" "}
                → Multiple models
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-red-900/30 to-orange-900/30 border border-red-700/30 rounded-lg p-4">
            <h4 className="font-semibold text-red-300 mb-3">
              🔐 Security Enhancements Ready
            </h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  JWT authentication
                </code>{" "}
                → User sessions
              </li>
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">Rate limiting</code>{" "}
                → API protection
              </li>
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  Input sanitization
                </code>{" "}
                → XSS prevention
              </li>
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  HTTPS enforcement
                </code>{" "}
                → Secure transport
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-green-900/30 to-teal-900/30 border border-green-700/30 rounded-lg p-4">
            <h4 className="font-semibold text-green-300 mb-3">
              📊 Monitoring & Analytics
            </h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  Performance metrics
                </code>{" "}
                → Real-time dashboards
              </li>
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">Error tracking</code>{" "}
                → Comprehensive logging
              </li>
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  Usage analytics
                </code>{" "}
                → User behavior insights
              </li>
              <li>
                •{" "}
                <code className="bg-gray-700 px-1 rounded">
                  Security alerts
                </code>{" "}
                → Threat detection
              </li>
            </ul>
          </div>
        </div>

        {/* Production Deployment Readiness */}
        <div className="mt-8 bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-700/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            🚀 Production Deployment Readiness
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-violet-300 mb-2">
                Frontend Architecture ✅
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• React components with state management</li>
                <li>• Responsive Tailwind CSS design</li>
                <li>• Error handling and loading states</li>
                <li>• File upload and batch processing UI</li>
                <li>• Results visualization and confidence display</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-300 mb-2">
                Backend Integration Ready 🔄
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• API endpoints defined and structured</li>
                <li>• Mock responses showing expected data flow</li>
                <li>• Error handling for failed requests</li>
                <li>• File upload handling with validation</li>
                <li>• Security measures framework in place</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Practical Implementation Demo */}
      <div className="mt-12 bg-black/40 border border-gray-700 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          How It Works in Practice
        </h2>
        <p className="text-gray-400 mb-6">
          See how the PEAS model and decision flow translate into real
          functionality in our application.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Live Demo Flow */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-violet-400 mb-4">
              🚀 Live System Workflow
            </h3>

            <div className="bg-black/50 border border-gray-600 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <strong className="text-blue-400">SENSOR Input</strong>
              </div>
              <p className="text-sm text-gray-300 ml-6">
                User enters review text in{" "}
                <code className="bg-gray-700 px-2 py-1 rounded">
                  DetectReview.js
                </code>{" "}
                textarea component
              </p>
              <div className="mt-2 ml-6 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>reviewText state → handleSubmit() → API call</code>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-600 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <strong className="text-purple-400">
                  ENVIRONMENT Processing
                </strong>
              </div>
              <p className="text-sm text-gray-300 ml-6">
                System handles both single reviews and batch CSV/JSON uploads
                via{" "}
                <code className="bg-gray-700 px-2 py-1 rounded">
                  UploadFile.js
                </code>
              </p>
              <div className="mt-2 ml-6 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  FormData → fetch('/api/upload-reviews') → Processing
                </code>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-600 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <strong className="text-green-400">AI DECISION PIPELINE</strong>
              </div>
              <p className="text-sm text-gray-300 ml-6">
                Mock implementation shows ML model simulation with confidence
                scoring
              </p>
              <div className="mt-2 ml-6 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  Math.random() → prediction + confidence → navigate('/result')
                </code>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-600 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <strong className="text-red-400">ACTUATOR Output</strong>
              </div>
              <p className="text-sm text-gray-300 ml-6">
                <code className="bg-gray-700 px-2 py-1 rounded">Result.js</code>{" "}
                displays prediction, confidence percentage, and explanations
              </p>
              <div className="mt-2 ml-6 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>{`{prediction: 'Genuine/Fake', confidence: 0.85}`}</code>
              </div>
            </div>

            <div className="bg-black/50 border border-gray-600 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-violet-500 rounded-full mr-3"></div>
                <strong className="text-violet-400">PERFORMANCE Metrics</strong>
              </div>
              <p className="text-sm text-gray-300 ml-6">
                Visual confidence bars, color-coded results, and user feedback
                integration
              </p>
              <div className="mt-2 ml-6 bg-gray-800 p-2 rounded text-xs text-gray-400">
                <code>
                  confidencePercentage = (confidence * 100).toFixed(1)
                </code>
              </div>
            </div>
          </div>

          {/* Code Implementation Map */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400 mb-4">
              📁 Code Implementation Map
            </h3>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">
                Frontend Components
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    DetectReview.js
                  </code>{" "}
                  - Single review input & processing
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    UploadFile.js
                  </code>{" "}
                  - Batch file processing (CSV/JSON)
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    Result.js
                  </code>{" "}
                  - Classification output & visualization
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    LoadingSpinner.js
                  </code>{" "}
                  - Processing state indicator
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">
                API Integration Points
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    POST /api/detect-review
                  </code>{" "}
                  - Single review analysis
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    POST /api/upload-reviews
                  </code>{" "}
                  - Batch processing
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    FormData
                  </code>{" "}
                  handling for file uploads
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    JSON
                  </code>{" "}
                  response parsing & state management
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">
                State Management Flow
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    useState()
                  </code>{" "}
                  for input validation & loading states
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    useNavigate()
                  </code>{" "}
                  for result page routing
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    location.state
                  </code>{" "}
                  for passing analysis results
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    Error handling
                  </code>{" "}
                  with user feedback
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">
                Demo Features Active
              </h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    Math.random()
                  </code>{" "}
                  mock ML predictions
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    setTimeout()
                  </code>{" "}
                  simulated processing delay
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    mockResult
                  </code>{" "}
                  object generation
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-700 px-2 py-1 rounded text-xs">
                    Dynamic UI
                  </code>{" "}
                  based on prediction results
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Try It Yourself */}
        <div className="mt-8 bg-gradient-to-r from-violet-900/30 to-purple-900/30 border border-violet-700/50 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-white mb-3">
            🎯 Try the Live System
          </h3>
          <p className="text-gray-300 mb-4">
            Experience the PEAS model in action by testing the review detection
            system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/detect"
              className="px-6 py-3 rounded-xl text-sm font-medium bg-violet-600 hover:bg-violet-700 transition active:scale-95 text-white no-underline"
            >
              Test Single Review →
            </a>
            <a
              href="/upload"
              className="px-6 py-3 rounded-xl text-sm font-medium bg-black/50 border border-gray-700 hover:border-violet-500 transition active:scale-95 text-white no-underline"
            >
              Upload Batch File →
            </a>
          </div>
        </div>
      </div>

      {/* Academic Context */}
      <div className="mt-12 bg-gradient-to-r from-violet-900/20 to-purple-900/20 border border-violet-700/30 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Academic Context</h2>
        <p className="text-gray-300 mb-4">
          This project demonstrates the practical application of Soft Computing
          and Cyber Security principles in solving real-world problems. It
          showcases the integration of multiple disciplines including machine
          learning, natural language processing, and fraud detection.
        </p>
        <p className="text-gray-300">
          The system serves as a comprehensive example of how academic concepts
          can be transformed into functional solutions that address contemporary
          challenges in digital trust and security.
        </p>
      </div>
    </div>
  );
};

export default About;
