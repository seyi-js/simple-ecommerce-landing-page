'use client';
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '../components/HeroSection';
import RecentNewsSection from '../components/RecentNews';
import BestSellerSection from '../components/BestSeller';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <RecentNewsSection />
      <BestSellerSection />
    </React.Fragment>
  );
}
