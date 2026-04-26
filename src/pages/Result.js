// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { CheckCircle, XCircle, Brain, Shield, AlertTriangle, BarChart3 } from 'lucide-react';

// const Result = () => {
//   const location = useLocation();
//   const { result, reviewText } = location.state || {};

//   if (!result) {
//     return (
//       <div className="max-w-4xl mx-auto px-6 py-12 text-center">
//         <h1 className="text-2xl font-bold text-white mb-4">No Results Found</h1>
//         <p className="text-gray-400 mb-8">Please analyze a review first.</p>
//         <Link
//           to="/detect"
//           className="px-6 py-3 rounded-xl text-sm font-medium bg-violet-600 hover:bg-violet-700 transition active:scale-95"
//         >
//           Analyze Review
//         </Link>
//       </div>
//     );
//   }

//   const isGenuine = result.prediction === 'Genuine';
//   const confidencePercentage = (parseFloat(result.confidence) * 100).toFixed(1);

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-12">
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-white mb-4">Analysis Result</h1>
//         {/* <p className="text-gray-400">Here's what our AI model found</p> */}
//       </div>

//       <div className="space-y-8">
//         {/* Result Card */}
//         <div className={`bg-black/40 border rounded-xl p-8 border-l-4 ${
//           isGenuine ? 'border-green-500 border-l-green-500' : 'border-red-500 border-l-red-500'
//         }`}>
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center">
//               <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
//                 isGenuine ? 'bg-green-900/30' : 'bg-red-900/30'
//               }`}>
//                 {isGenuine ? (
//                   <CheckCircle className="w-6 h-6 text-green-400" />
//                 ) : (
//                   <XCircle className="w-6 h-6 text-red-400" />
//                 )}
//               </div>
//               <div className="ml-4">
//                 <h2 className={`text-2xl font-bold ${
//                   isGenuine ? 'text-green-400' : 'text-red-400'
//                 }`}>
//                   {result.prediction} Review
//                 </h2>
//                 <p className="text-gray-400">
//                   Confidence: {confidencePercentage}%
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Confidence Bar */}
//           <div className="mb-6">
//             <div className="flex justify-between text-sm text-gray-400 mb-2">
//               <span>Confidence Level</span>
//               <span>{confidencePercentage}%</span>
//             </div>
//             <div className="w-full bg-gray-700 rounded-full h-3">
//               <div
//                 className={`h-3 rounded-full ${
//                   isGenuine ? 'bg-green-500' : 'bg-red-500'
//                 }`}
//                 style={{ width: `${confidencePercentage}%` }}
//               ></div>
//             </div>
//           </div>

//           {/* Explanation */}
//           <div className={`p-4 rounded-xl border ${
//             isGenuine ? 'bg-green-900/20 border-green-700/30' : 'bg-red-900/20 border-red-700/30'
//           }`}>
//             <h3 className="font-semibold text-white mb-2">Analysis Summary</h3>
//             <p className="text-gray-300 text-sm">
//               {/* {isGenuine */}
//                 {/* // ? 'This review appears to be genuine based on natural language patterns, sentiment consistency, and writing style analysis.'
//                 // : 'This review shows characteristics commonly associated with fake reviews, including unusual language patterns or suspicious sentiment markers.' */}
//               {/* } */}
//             </p>
//           </div>
//         </div>

//         {/* Model Detection Results */}
//         {result.modelDetection && (
//           <div className="bg-black/40 border border-gray-700 rounded-xl p-6">
//             <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
//               <Brain className="w-5 h-5 mr-2 text-violet-400" />
//               Model Detection Analysis
//             </h3>
            
//             <div className="grid lg:grid-cols-2 gap-6">
//               {/* Classification Model Used */}
//               <div className="bg-violet-900/20 border border-violet-700/30 rounded-lg p-4">
//                 <h4 className="font-semibold text-violet-300 mb-3 flex items-center">
//                   <BarChart3 className="w-4 h-4 mr-2" />
//                   Classification Model
//                 </h4>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-gray-300">Model:</span>
//                     <span className="text-white font-medium">{result.modelDetection.classificationModel.name}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-300">Type:</span>
//                     <span className="text-gray-400">{result.modelDetection.classificationModel.type}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-300">Model Confidence:</span>
//                     <span className="text-green-400">{(result.modelDetection.classificationModel.confidence * 100).toFixed(1)}%</span>
//                   </div>
//                 </div>
//               </div>

//               {/* AI Generation Detection */}
//               <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
//                 <h4 className="font-semibold text-blue-300 mb-3 flex items-center">
//                   <Shield className="w-4 h-4 mr-2" />
//                   AI Generation Analysis
//                 </h4>
//                 <div className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="text-gray-300">AI Generated:</span>
//                     <span className={`font-medium ${result.modelDetection.aiGenerationAnalysis.isAiGenerated ? 'text-red-400' : 'text-green-400'}`}>
//                       {result.modelDetection.aiGenerationAnalysis.isAiGenerated ? 'Likely' : 'Unlikely'}
//                     </span>
//                   </div>
//                   {result.modelDetection.aiGenerationAnalysis.isAiGenerated && (
//                     <>
//                       <div className="flex justify-between">
//                         <span className="text-gray-300">Detected Model:</span>
//                         <span className="text-white font-medium">{result.modelDetection.aiGenerationAnalysis.mostLikelyModel.name}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-300">AI Confidence:</span>
//                         <span className="text-orange-400">{(result.modelDetection.aiGenerationAnalysis.confidence * 100).toFixed(1)}%</span>
//                       </div>
//                     </>
//                   )}
//                   {!result.modelDetection.aiGenerationAnalysis.isAiGenerated && (
//                     <div className="flex justify-between">
//                       <span className="text-gray-300">Human Confidence:</span>
//                       <span className="text-green-400">{(result.modelDetection.aiGenerationAnalysis.confidence * 100).toFixed(1)}%</span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Suspicious Patterns */}
//             {result.modelDetection.suspiciousPatterns.length > 0 && (
//               <div className="mt-6 bg-red-900/20 border border-red-700/30 rounded-lg p-4">
//                 <h4 className="font-semibold text-red-300 mb-3 flex items-center">
//                   <AlertTriangle className="w-4 h-4 mr-2" />
//                   Detected Suspicious Patterns
//                 </h4>
//                 <div className="space-y-3">
//                   {result.modelDetection.suspiciousPatterns.map((pattern, index) => (
//                     <div key={index} className="bg-black/30 border border-red-700/20 rounded-lg p-3">
//                       <div className="flex justify-between items-start mb-2">
//                         <span className="font-medium text-red-400">{pattern.pattern}</span>
//                         <span className="text-xs text-red-300 bg-red-900/30 px-2 py-1 rounded">
//                           {(pattern.likelihood * 100).toFixed(0)}% likely
//                         </span>
//                       </div>
//                       <p className="text-sm text-gray-400">{pattern.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* AI Model Indicators */}
//             {result.modelDetection.aiGenerationAnalysis.isAiGenerated && (
//               <div className="mt-6 bg-orange-900/20 border border-orange-700/30 rounded-lg p-4">
//                 <h4 className="font-semibold text-orange-300 mb-3">AI Generation Indicators</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {result.modelDetection.aiGenerationAnalysis.mostLikelyModel.indicators.map((indicator, index) => (
//                     <span key={index} className="bg-orange-900/30 border border-orange-700/30 px-3 py-1 rounded-full text-xs text-orange-200">
//                       {indicator}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Technical Metrics */}
//             <div className="mt-6 bg-gray-900/30 border border-gray-600/30 rounded-lg p-4">
//               <h4 className="font-semibold text-gray-300 mb-3">Technical Analysis Metrics</h4>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="text-center">
//                   <div className="text-lg font-bold text-white">{result.modelDetection.technicalMetrics.wordCount}</div>
//                   <div className="text-xs text-gray-400">Words</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-lg font-bold text-white">{result.modelDetection.technicalMetrics.sentenceCount}</div>
//                   <div className="text-xs text-gray-400">Sentences</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-lg font-bold text-white">{result.modelDetection.technicalMetrics.averageWordsPerSentence}</div>
//                   <div className="text-xs text-gray-400">Avg Words/Sentence</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-lg font-bold text-white">{result.modelDetection.technicalMetrics.complexityScore}</div>
//                   <div className="text-xs text-gray-400">Complexity Score</div>
//                 </div>
//               </div>
              
//               {/* Sentiment Polarity Bar */}
//               <div className="mt-4">
//                 <div className="flex justify-between text-sm text-gray-400 mb-2">
//                   <span>Sentiment Polarity</span>
//                   <span>{result.modelDetection.technicalMetrics.sentimentPolarity}</span>
//                 </div>
//                 <div className="relative w-full bg-gray-700 rounded-full h-2">
//                   <div 
//                     className="absolute top-0 left-1/2 w-1 h-2 bg-gray-400 transform -translate-x-1/2"
//                   ></div>
//                   <div
//                     className={`absolute top-0 h-2 rounded-full ${
//                       parseFloat(result.modelDetection.technicalMetrics.sentimentPolarity) >= 0 
//                         ? 'bg-green-500 left-1/2' 
//                         : 'bg-red-500 right-1/2'
//                     }`}
//                     style={{ 
//                       width: `${Math.abs(parseFloat(result.modelDetection.technicalMetrics.sentimentPolarity)) * 50}%` 
//                     }}
//                   ></div>
//                 </div>
//                 <div className="flex justify-between text-xs text-gray-500 mt-1">
//                   <span>Negative</span>
//                   <span>Neutral</span>
//                   <span>Positive</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Original Review */}
//         <div className="bg-black/40 border border-gray-700 rounded-xl p-6">
//           <h3 className="text-lg font-semibold text-white mb-4">Analyzed Review</h3>
//           <div className="bg-black/50 border border-gray-700 p-4 rounded-xl">
//             <p className="text-gray-300 leading-relaxed">{reviewText}</p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link
//             to="/detect"
//             className="px-6 py-3 rounded-xl text-sm font-medium bg-violet-600 hover:bg-violet-700 transition active:scale-95 text-center"
//           >
//             Analyze Another Review
//           </Link>
//           <Link
//             to="/upload"
//             className="px-6 py-3 rounded-xl text-sm font-medium bg-black/50 border border-gray-700 hover:border-violet-500 transition active:scale-95 text-center"
//           >
//             Upload Batch File
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Result;


import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { result, reviewText } = location.state || {};

  // If user refreshes page and data is lost
  if (!result) {
    return (
      <div className="text-center mt-10 text-white">
        <p>No result found. Please analyze a review first.</p>
        <button
          onClick={() => navigate("/detect")}
          className="mt-4 px-4 py-2 bg-violet-600 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Analysis Result</h1>

      {/* Review Text */}
      <div className="mb-6 p-4 bg-black/40 border border-gray-700 rounded-xl">
        <h3 className="font-semibold mb-2">Review:</h3>
        <p className="text-gray-300">{reviewText}</p>
      </div>

      {/* Prediction */}
      <div className="mb-6 p-4 bg-black/40 border border-gray-700 rounded-xl text-center">
        <h2 className="text-xl font-semibold mb-2">Prediction</h2>

        <p
          className={`text-2xl font-bold ${
            result.prediction === "Fake"
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {result.prediction}
        </p>

        <p className="text-gray-400 mt-2">
          Confidence: {(result.confidence * 100).toFixed(2)}%
        </p>
      </div>

      {/* Back Button */}
      <div className="text-center">
        <button
          onClick={() => navigate("/detect")}
          className="px-6 py-2 bg-violet-600 rounded hover:bg-violet-700"
        >
          Analyze Another Review
        </button>
      </div>
    </div>
  );
};

export default Result;