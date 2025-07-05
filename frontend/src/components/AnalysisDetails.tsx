import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LinkPreview } from './LinkPreview';
import { getYouTubeVideoId } from '../utils/linkUtils';

interface VideoData {
  title: string;
  url: string;
  description: string;
  channel?: string;
  duration?: string;
  views?: string;
}

interface Analysis {
  summary?: string;
  tone?: string;
  sentiment?: string;
  keywords?: string[];
  gaps?: string[];
  learning_path?: string[];
  next_step?: string;
  next_step_explanation?: string;
  next_step_videos?: VideoData[];
  known_topics?: string[];
  mentioned_topics?: string[];
  dynamic?: boolean;
  logged?: boolean;
  small_talk?: boolean;
  graph_based?: boolean;
  learning_session_active?: boolean;
  error?: string;
}

interface AnalysisDetailsProps {
  analysis: Analysis;
  onProgressAction?: (action: string) => void;
}

const AnalysisDetails: React.FC<AnalysisDetailsProps> = ({ analysis, onProgressAction }) => {
  if (!analysis) return null;
  
  return (
    <div className="bg-white border-l-4 border-blue-400 rounded-lg shadow-sm my-3 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 border-b border-blue-200">
        <h4 className="font-semibold text-blue-700 flex items-center">
          <span className="mr-2">🤖</span>
          AI Analysis
        </h4>
      </div>
      
      <div className="p-4">
        {/* Status indicators */}
        <div className="flex flex-wrap gap-2 mb-3">
          {analysis.small_talk && (
            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              💬 Casual conversation
            </div>
          )}
          
          {analysis.graph_based && (
            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              📊 Graph-based analysis
            </div>
          )}
          
          {analysis.dynamic && (
            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              🔍 Dynamic query
            </div>
          )}
          
          {analysis.error && (
            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              ❌ Error: {analysis.error}
            </div>
          )}
        </div>

        {/* Query information */}
        {analysis.mentioned_topics && analysis.mentioned_topics.length > 0 && (
          <div className="mb-3 p-3 bg-gray-50 rounded-md">
            <span className="font-medium text-gray-700">🎯 Query about:</span>
            <div className="mt-1">
              {analysis.mentioned_topics.map((topic, index) => (
                <span key={index} className="inline-block px-2 py-1 rounded-md text-sm bg-gray-200 text-gray-800 mr-2 mb-1">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Learning path */}
        {analysis.learning_path && analysis.learning_path.length > 0 && (
          <div className="mb-4">
            <div className="font-medium text-gray-700 mb-2 flex items-center">
              <span className="mr-2">🛤️</span>
              Suggested Learning Path:
            </div>
            <div className="flex flex-wrap gap-2">
              {analysis.learning_path.map((step, index) => (
                <div key={index} className="flex items-center">
                  <span className={`inline-block px-3 py-2 rounded-lg text-sm ${
                    step === analysis.next_step
                      ? 'bg-blue-500 text-white font-bold shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {step}
                    {step === analysis.next_step && ' ⭐'}
                  </span>
                  {index < (analysis.learning_path?.length || 0) - 1 && (
                    <span className="mx-2 text-gray-400">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning gaps */}
        {analysis.gaps && analysis.gaps.length > 0 && (
          <div className="mb-3 p-3 bg-orange-50 rounded-md">
            <span className="font-medium text-orange-700">📚 Learning gaps:</span>
            <div className="mt-1">
              {analysis.gaps.map((gap, index) => (
                <span key={index} className="inline-block px-2 py-1 rounded-md text-sm bg-orange-200 text-orange-800 mr-2 mb-1">
                  {gap}
                </span>
              ))}
            </div>
          </div>
        )}

      {analysis.next_step && (
        <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-bold text-lg">⭐</span>
            </div>
            <h3 className="font-bold text-blue-900 text-lg">Next Step: {analysis.next_step}</h3>
          </div>

          {analysis.next_step_explanation && (
            <div className="mb-6">
              <div className="flex items-center mb-3 bg-blue-25 p-2 rounded-md">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-700 font-bold text-sm">📖</span>
                </div>
                <h4 className="font-semibold text-blue-800 text-sm">
                  What you'll learn:
                </h4>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-md border border-blue-100 max-h-80 overflow-y-auto shadow-inner markdown-content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({children}) => <h1 className="text-lg font-bold text-blue-900 mb-3 pb-2 border-b border-blue-200">{children}</h1>,
                    h2: ({children}) => <h2 className="text-base font-semibold text-blue-800 mb-2 pb-1 border-b border-blue-100">{children}</h2>,
                    h3: ({children}) => <h3 className="text-sm font-semibold text-blue-700 mb-2">{children}</h3>,
                    h4: ({children}) => <h4 className="text-sm font-medium text-blue-600 mb-1">{children}</h4>,
                    p: ({children}) => <p className="mb-3 text-gray-700 leading-relaxed last:mb-0">{children}</p>,
                    ul: ({children}) => <ul className="list-disc pl-5 mb-3 space-y-1">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal pl-5 mb-3 space-y-1">{children}</ol>,
                    li: ({children}) => <li className="text-gray-700 leading-relaxed">{children}</li>,
                    code: ({children, className}) => {
                      const isInline = !className;
                      return isInline ? (
                        <code className="bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded text-xs font-mono border border-blue-200">
                          {children}
                        </code>
                      ) : (
                        <code className={className}>{children}</code>
                      );
                    },
                    pre: ({children}) => (
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded-md overflow-x-auto text-xs font-mono mb-3 border border-gray-700">
                        {children}
                      </pre>
                    ),
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-blue-300 pl-4 py-2 my-3 bg-blue-25 italic text-blue-800">
                        {children}
                      </blockquote>
                    ),
                    strong: ({children}) => <strong className="font-semibold text-blue-900">{children}</strong>,
                    em: ({children}) => <em className="italic text-blue-700">{children}</em>,
                    a: ({href, children}) => (
                      <a 
                        href={href} 
                        className="text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-600 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    table: ({children}) => (
                      <div className="overflow-x-auto mb-3">
                        <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({children}) => (
                      <th className="bg-blue-50 border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 text-xs">
                        {children}
                      </th>
                    ),
                    td: ({children}) => (
                      <td className="border border-gray-300 px-3 py-2 text-gray-700 text-xs">
                        {children}
                      </td>
                    ),
                  }}
                >
                  {analysis.next_step_explanation}
                </ReactMarkdown>
              </div>
            </div>
          )}

          {analysis.next_step_videos && analysis.next_step_videos.length > 0 && (
            <div>
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <span className="mr-2">🎬</span>
                Recommended Videos for {analysis.next_step}:
              </h4>
              <div className="bg-white p-3 rounded-md border border-blue-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {analysis.next_step_videos.slice(0, 4).map((video, index) => {
                    const videoId = getYouTubeVideoId(video.url);
                    const linkPreview = {
                      url: video.url,
                      domain: 'youtube.com',
                      title: video.title,
                      description: `${video.channel || 'Unknown Channel'}${video.duration ? ` • ${video.duration}` : ''}${video.views ? ` • ${video.views}` : ''}`,
                      image: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined,
                      favicon: '🎥',
                      badge: 'YouTube' as const,
                      loading: false,
                      error: false
                    };
                    return (
                      <div key={index} className="transform hover:scale-105 transition-transform duration-200">
                        <LinkPreview preview={linkPreview} />
                      </div>
                    );
                  })}
                </div>
                {analysis.next_step_videos.length > 4 && (
                  <div className="text-center mt-3 text-sm text-gray-600">
                    + {analysis.next_step_videos.length - 4} more videos available
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Learning progression buttons */}
          {analysis.learning_session_active && onProgressAction && (
            <div className="mt-4 pt-3 border-t border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">Ready to continue your learning journey?</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onProgressAction('understand')}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors flex items-center"
                >
                  <span className="mr-2">✅</span>
                  I understand this topic
                </button>
                <button
                  onClick={() => onProgressAction('next')}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center"
                >
                  <span className="mr-2">➡️</span>
                  Next topic
                </button>
                <button
                  onClick={() => onProgressAction('need_help')}
                  className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors flex items-center"
                >
                  <span className="mr-2">❓</span>
                  Need more explanation
                </button>
                <button
                  onClick={() => onProgressAction('satisfied')}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors flex items-center"
                >
                  <span className="mr-2">🎯</span>
                  I'm satisfied, add to profile
                </button>
              </div>
            </div>
          )}
        </div>
      )}

        {/* Knowledge status */}
        {analysis.known_topics && analysis.known_topics.length > 0 && (
          <div className="mb-3 p-3 bg-green-50 rounded-md">
            <span className="font-medium text-green-700">✅ You already know:</span>
            <div className="mt-1">
              {analysis.known_topics.map((topic, index) => (
                <span key={index} className="inline-block px-2 py-1 rounded-md text-sm bg-green-200 text-green-800 mr-2 mb-1">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {analysis.logged && (
          <div className="text-xs text-gray-500 mt-3 p-2 bg-gray-50 rounded-md">
            📝 This query was logged for future knowledge graph improvement.
          </div>
        )}

        {/* Legacy analysis fields */}
        {(analysis.summary || analysis.tone || analysis.sentiment || (analysis.keywords && analysis.keywords.length > 0)) && (
          <div className="mt-4 pt-3 border-t border-gray-200">
            {analysis.summary && (
              <div className="text-sm text-gray-800 mb-2">{analysis.summary}</div>
            )}
            <div className="text-sm text-gray-700 space-y-1">
              {analysis.tone && (
                <div>
                  <span className="font-medium">Tone:</span> {analysis.tone}
                </div>
              )}
              {analysis.sentiment && (
                <div>
                  <span className="font-medium">Sentiment:</span> {analysis.sentiment}
                </div>
              )}
              {analysis.keywords && analysis.keywords.length > 0 && (
                <div>
                  <span className="font-medium">Keywords:</span> {analysis.keywords.join(', ')}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisDetails;
