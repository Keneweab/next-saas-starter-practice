import styled from 'styled-components';
import AutofitGrid from './../components/AutofitGrid';
import BasicCard from './../components/BasicCard';
import Page from './../components/Page';
import SectionTitle from './../components/SectionTitle';
import YoutubeVideo from './../components/YoutubeVideo';
import { media } from './../utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Fast knowledge lookup',
    description:
      'Instantly search and retrieve precise answers from massive datasets in seconds.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Always relevant sources',
    description:
      'Every answer includes real source links, so you know exactly where your information comes from.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Easy API integration',
    description:
      'Seamlessly connect our RAG AI to your apps, chatbots, or internal tools with a simple API.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Multilingual retrieval',
    description:
      'Retrieve and generate accurate answers in multiple languages for global teams.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Human-like summaries',
    description:
      'Get clear, concise summaries instead of raw data dumps — written in natural language.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Enterprise compliance',
    description:
      'Designed with robust security, privacy controls, and compliance for regulated industries.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Customizable knowledge base',
    description:
      'Tailor the AI to your industry by adding your own trusted documents and data sources.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Plug & play setup',
    description:
      'No complex setup needed — connect your documents and data, and start using AI right away.',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Real-time updates',
    description:
      'Your answers always reflect the latest information, keeping your team up to date.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Features" description="Instantly search and retrieve precise answers from massive datasets in seconds.">
      <Wrapper>
        <SectionTitle>What are you signing in for?</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=u47GtXwePms&t" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
