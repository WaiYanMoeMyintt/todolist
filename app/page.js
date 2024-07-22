"use client";
import React, { useEffect, useState } from "react";
import TopicList from './components/TopicList'
const page = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const topicsFunc = async () => {
      try {
        const api = "http://localhost:3000/api/topics";
        const getAPI = await fetch(api);
        const resData = await getAPI.json();
        setTopics(resData.topics);
      } catch (err) {
        return err.message;
      }
    };
    topicsFunc();
  }, []);

  return (
    <div>
       {
         topics && topics.map((items,index)=>(
          <TopicList key = {index} title  = {items.title} description  = {items.description} />
         ))
       }
    </div>
  )
}

export default page