'use client';
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '../components/HeroSection';
import RecentNewsSection from '../components/RecentNews';
import BestSellerSection from '../components/BestSeller';
import ProductSection from '../components/Products';
import FooterSection from '../components/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <RecentNewsSection />
      <BestSellerSection />
      <ProductSection />
      <FooterSection />
    </React.Fragment>
  );
}
