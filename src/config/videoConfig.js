// Video configuration
// For local development, use the public video file
// For production on Vercel, use an external CDN URL

export const getVideoUrl = () => {
  // Use environment variable if available, otherwise fall back to local path
  // Set VITE_VIDEO_URL in your .env file for production
  if (import.meta.env.VITE_VIDEO_URL) {
    return import.meta.env.VITE_VIDEO_URL;
  }
  
  // Local development fallback
  return '/videos/hero.mp4';
};
