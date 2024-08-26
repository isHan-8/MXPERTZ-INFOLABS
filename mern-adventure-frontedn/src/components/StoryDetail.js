









/// src/components/StoryDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import myImage from '../images/Page-1.png';
import './StoryDetail.css';

function StoryDetail() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    async function fetchStory() {
      try {
        const response = await axios.get(`http://localhost:5000/api/adventure/${id}`);
        console.log('Fetched story data:', response.data); // Add this line for debugging
        setStory(response.data);
      } catch (error) {
        console.error('Error fetching story:', error);
      }
    }
    fetchStory();
  }, [id]);

  if (!story) return <div>Loading...</div>;

  return (
    <div className="story-detail">
      <img
        src={`${myImage}`}
        alt={story.title}
        className="story-image"
        onError={(e) => e.target.src='https://via.placeholder.com/600'} // Fallback image
      />
      <h2>{story.title}</h2>
      <div className="tabs">
        <button onClick={() => setActiveTab('overview')} className={activeTab === 'overview' ? 'active' : ''}>Overview</button>
        <button onClick={() => setActiveTab('details')} className={activeTab === 'details' ? 'active' : ''}>Details</button>
        <button onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? 'active' : ''}>Reviews</button>
      </div>
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="tab-text" dangerouslySetInnerHTML={{ __html: story.overview || '<p><strong>John Doe:</strong> "My Hero Academia is a thrilling anime with an engaging storyline and well-developed characters. The mix of action and emotion keeps viewers on the edge of their seats."</p>' }} />
        )}
        {activeTab === 'details' && (
          <div className="tab-text" dangerouslySetInnerHTML={{ __html: story.details || '<p><strong>Jane Smith:</strong> "The unique concept of a world where people have superpowers adds a fresh twist to the genre. The character development, especially of the protagonist Izuku, is fantastic."</p>' }} />
        )}
        {activeTab === 'reviews' && (
          <div className="tab-text" dangerouslySetInnerHTML={{ __html: story.reviews || '<p><strong>Alex Brown:</strong> "While the action scenes are exhilarating, the series also explores deep themes of heroism and personal growth. Highly recommend for any anime fan!"</p>' }} />
        )}
      </div>
    </div>
  );
}

export default StoryDetail;
