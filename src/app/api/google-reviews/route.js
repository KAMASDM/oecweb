import { NextResponse } from "next/server";

// Mock Google Reviews data - In production, this would fetch from Google Places API
const mockReviews = [
  {
    id: 1,
    author_name: "Priya Sharma",
    rating: 5,
    text: "Excellent guidance for studying abroad! The team at OEC India helped me secure admission to my dream university in Canada. Highly recommended!",
    time: Date.now() - 7 * 24 * 60 * 60 * 1000, // 7 days ago
    profile_photo_url: "",
  },
  {
    id: 2,
    author_name: "Rahul Patel",
    rating: 5,
    text: "Professional and dedicated service. They guided me through every step of my UK university application process.",
    time: Date.now() - 14 * 24 * 60 * 60 * 1000, // 14 days ago
    profile_photo_url: "",
  },
  {
    id: 3,
    author_name: "Ananya Desai",
    rating: 5,
    text: "Best overseas education consultants in Vadodara! Got my Australia student visa without any hassle.",
    time: Date.now() - 21 * 24 * 60 * 60 * 1000, // 21 days ago
    profile_photo_url: "",
  },
  {
    id: 4,
    author_name: "Karan Singh",
    rating: 4,
    text: "Very helpful team. They provided great support throughout my application to US universities.",
    time: Date.now() - 30 * 24 * 60 * 60 * 1000, // 30 days ago
    profile_photo_url: "",
  },
  {
    id: 5,
    author_name: "Neha Joshi",
    rating: 5,
    text: "Grateful to OEC India for helping me achieve my dream of studying in Germany. Excellent counseling!",
    time: Date.now() - 45 * 24 * 60 * 60 * 1000, // 45 days ago
    profile_photo_url: "",
  },
];

export async function GET(request) {
  try {
    // In production, you would:
    // 1. Use Google Places API with your place_id
    // 2. Fetch real reviews using GOOGLE_PLACES_API_KEY
    // 3. Cache the results
    
    // For now, return mock data
    return NextResponse.json({
      reviews: mockReviews,
      rating: 4.8,
      user_ratings_total: 156,
    });
  } catch (error) {
    console.error("Google Reviews API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch reviews",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
