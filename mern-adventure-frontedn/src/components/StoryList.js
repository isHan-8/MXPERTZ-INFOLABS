// src/components/StoryList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myImage from '../images/Page-1.png';
import axios from 'axios';
import './StoryList.css';

function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        const response = await axios.get('http://localhost:5000/api/adventure');
        setStories(response.data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    }
    fetchStories();
  }, []);

  return (
    <div className="story-list">
      {stories.map(story => (
        <div className="story-card" key={story._id}>
          <img src={`${myImage}`} alt={story.title} />
          <h3>{story.title}</h3>
          <p>{story.description}</p>
          <Link to={`/story/${story._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default StoryList;
