import { About, BackToTop, Contacts, Education, Experience, Landing, Navbar, Projects, Skills } from '@/components';
import ParticlesBackground from '@/components/particlesBackground/ParticlesBackground';
import React from 'react';

interface BlogData {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string;
  crossposted_at: null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: null;
    github_username: string;
    user_id: number;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
  };
}

interface HomePageProps {
  blogs: BlogData[];
}

const HomePage: React.FC<HomePageProps> = ({ blogs }) => {
  return (
    <div>
      <BackToTop/>
      <Navbar/>
      <Landing/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contacts/>
    </div>
  );
};

export async function getStaticProps(): Promise<{ props: HomePageProps }> {
  const res = await fetch('https://dev.to/api/articles?username=said7388');
  const data: BlogData[] = await res.json();
  const filteredBlogs = data.sort(() => Math.random() - 0.5);

  return {
    props: {
      blogs: filteredBlogs,
    },
  };
}

export default HomePage;