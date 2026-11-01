'use client';

import { useState, useEffect, useCallback } from 'react';
import { Prompt } from '@/types';
import { INITIAL_PROMPTS } from './mockData';

const SAVED_STORAGE_KEY = 'h5games_saved_ids';
const LIKED_STORAGE_KEY = 'h5games_liked_ids';

export function useSavedPrompts() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedRaw = localStorage.getItem(SAVED_STORAGE_KEY) || localStorage.getItem('promptvault_saved_ids');
      if (savedRaw) setSavedIds(JSON.parse(savedRaw));

      const likedRaw = localStorage.getItem(LIKED_STORAGE_KEY) || localStorage.getItem('promptvault_liked_ids');
      if (likedRaw) setLikedIds(JSON.parse(likedRaw));
    } catch (e) {
      console.error('Failed to load saved prompts from storage', e);
    }
    setMounted(true);
  }, []);

  const toggleSave = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(next));
        window.dispatchEvent(new Event('savedPromptsUpdated'));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  }, []);

  const toggleLike = useCallback((id: string) => {
    setLikedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(LIKED_STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  }, []);

  const isSaved = useCallback((id: string) => savedIds.includes(id), [savedIds]);
  const isLiked = useCallback((id: string) => likedIds.includes(id), [likedIds]);

  // Listen to cross-component updates
  useEffect(() => {
    const handleUpdate = () => {
      try {
        const savedRaw = localStorage.getItem(SAVED_STORAGE_KEY);
        if (savedRaw) setSavedIds(JSON.parse(savedRaw));
      } catch {}
    };
    window.addEventListener('savedPromptsUpdated', handleUpdate);
    return () => window.removeEventListener('savedPromptsUpdated', handleUpdate);
  }, []);

  return {
    savedIds,
    likedIds,
    toggleSave,
    toggleLike,
    isSaved,
    isLiked,
    mounted,
  };
}
