import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, FileText } from 'lucide-react';


const DetectReview = () => {
  const [reviewText, setReviewText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   if (!reviewText.trim()) {
  //     setError('Please enter a review to analyze');
  //     return;
  //   }

  //   setIsLoading(true);
  //   setError('');

  //   try {
  //     // Simulate API call - replace with actual endpoint
  //     const response = await fetch('/api/detect-review', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ review: reviewText }),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       navigate('/result', { state: { result, reviewText } });
  //     } else {
  //       // Enhanced simulation with model detection
  //       setTimeout(() => {
  //         const mockResult = generateMockAnalysis(reviewText);
  //         navigate('/result', { state: { result: mockResult, reviewText } });
  //       }, 2000);
  //     }
  //   } catch (error) {
  //     // Enhanced simulation with model detection
  //     setTimeout(() => {
  //       const mockResult = generateMockAnalysis(reviewText);
  //       navigate('/result', { state: { result: mockResult, reviewText } });
  //     }, 2000);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!reviewText.trim()) {
    setError('Please enter a review to analyze');
    return;
  }

  setIsLoading(true);
  setError('');

  try {
    const response = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ review: reviewText }),
    });

    const data = await response.json();

    navigate('/result', {
      state: {
        result: data,
        reviewText: reviewText
      }
    });

  } catch (error) {
    setError("Backend not running or connection error");
  } finally {
    setIsLoading(false);
  }
};

  // Enhanced mock analysis with model detection
  const generateMockAnalysis = (text) => {
    const isGenuine = Math.random() > 0.5;
    const confidence = (Math.random() * 0.4 + 0.6).toFixed(2);
    
    // Model detection logic simulation
    const models = [
      { name: 'BERT-Base', type: 'Transformer', confidence: 0.92 },
      { name: 'LSTM-BiDirectional', type: 'Neural Network', confidence: 0.87 },
      { name: 'Random Forest', type: 'Ensemble', confidence: 0.84 },
      { name: 'SVM-RBF', type: 'Support Vector', confidence: 0.89 },
      { name: 'Naive Bayes', type: 'Probabilistic', confidence: 0.81 }
    ];
    
    const detectedModel = models[Math.floor(Math.random() * models.length)];
    
    // Fake generation patterns detection
    const fakePatterns = [
      { pattern: 'Template-based', likelihood: 0.75, description: 'Repetitive sentence structures detected' },
      { pattern: 'AI-Generated (GPT-style)', likelihood: 0.68, description: 'Consistent token patterns and artificial coherence' },
      { pattern: 'Sentiment Manipulation', likelihood: 0.82, description: 'Extreme positive/negative sentiment bias' },
      { pattern: 'Keyword Stuffing', likelihood: 0.71, description: 'Unusual keyword density and placement' },
      { pattern: 'Human Fake', likelihood: 0.63, description: 'Deliberate deception with human writing patterns' }
    ];
    
    const suspiciousPatterns = isGenuine ? [] : 
      fakePatterns.filter(() => Math.random() > 0.6).slice(0, 2);
    
    // Language model detection (for AI-generated content)
    const aiModels = [
      { name: 'GPT-3.5', probability: 0.23, indicators: ['Token repetition', 'Semantic coherence'] },
      { name: 'GPT-4', probability: 0.18, indicators: ['Advanced reasoning', 'Context awareness'] },
      { name: 'Claude', probability: 0.15, indicators: ['Structured responses', 'Balanced tone'] },
      { name: 'PaLM', probability: 0.12, indicators: ['Technical accuracy', 'Factual consistency'] },
      { name: 'LLaMA', probability: 0.19, indicators: ['Natural flow', 'Conversational style'] }
    ];
    
    const potentialAiModel = aiModels[Math.floor(Math.random() * aiModels.length)];
    
    return {
      prediction: isGenuine ? 'Genuine' : 'Fake',
      confidence: confidence,
      modelDetection: {
        classificationModel: detectedModel,
        suspiciousPatterns: suspiciousPatterns,
        aiGenerationAnalysis: !isGenuine && Math.random() > 0.4 ? {
          isAiGenerated: true,
          mostLikelyModel: potentialAiModel,
          confidence: (Math.random() * 0.3 + 0.6).toFixed(2)
        } : {
          isAiGenerated: false,
          confidence: (Math.random() * 0.4 + 0.1).toFixed(2)
        },
        technicalMetrics: {
          textLength: text.length,
          wordCount: text.split(' ').length,
          sentenceCount: text.split(/[.!?]+/).length - 1,
          averageWordsPerSentence: (text.split(' ').length / (text.split(/[.!?]+/).length - 1)).toFixed(1),
          complexityScore: (Math.random() * 0.5 + 0.3).toFixed(2),
          sentimentPolarity: (Math.random() * 2 - 1).toFixed(2) // -1 to 1
        }
      }
    };
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/40 border border-gray-700 text-sm mb-6">
          <FileText className="w-4 h-4" />
          <span>Single Review Analysis</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Review Analysis</h1>
        <p className="text-gray-400">Enter a review below to check if it's genuine or fake</p>
      </div>

      <div className="bg-black/40 border border-gray-700 rounded-xl p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="review" className="block text-sm font-medium text-gray-300 mb-2">
              Review Text
            </label>
            <textarea
              id="review"
              rows={6}
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none text-white placeholder-gray-400"
              placeholder="Paste or type the review you want to analyze..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/30 border border-red-700 text-red-400 rounded-xl">
              {error}
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-3 rounded-xl text-sm font-medium bg-violet-600 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition active:scale-95"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="animate-spin w-4 h-4" />
                  <span>Processing...</span>
                </div>
              ) : (
                'Analyze Review'
              )}
            </button>
          </div>
        </form>

        {/* <div className="mt-8 p-4 bg-violet-900/20 border border-violet-700/30 rounded-xl">
          <h3 className="font-semibold text-white mb-2">Tips for better analysis:</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Ensure the review text is complete and readable</li>
            <li>• Longer reviews generally provide more accurate results</li>
            <li>• The system analyzes language patterns, sentiment, and structure</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default DetectReview;