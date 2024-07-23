'use client';
import React, { useState, useRef } from 'react';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AddTopics = () => {
  const router = useRouter();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (!title || !description) {
      setError('Title and description are required');
      return;
    }

    try {
      const response = await fetch('/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        const result = await response.json();
        setError(result.message || 'Failed to create topic');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div className="flex gap-1 text-sm items-center mt-4">
        <MoveLeft size={15} />
        <Link className="text-sm underline" href="/">
          Back to home
        </Link>
      </div>

      <div className="mt-4 flex items-center w-full justify-center">
        <form onSubmit={handleSubmit} className="flex w-96 flex-col gap-4 bg-slate-600 py-4 px-4 shadow-md rounded-lg">
          <input ref={titleRef} className="h-10 px-1 rounded-lg" type="text" placeholder="Create your work title" />
          <input ref={descriptionRef} className="h-10 px-1 rounded-lg" type="text" placeholder="Create a todo work" />
          <button type="submit" className="bg-slate-700 py-2 px-4 w-full rounded-xl">Create Task</button>
          {error && <div className="w-full bg-red-500 text-center text-white">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default AddTopics;
