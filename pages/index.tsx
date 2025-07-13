import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from './../components/BasicSection';
import Link from './../components/Link';
import { EnvVars } from './../env';
import { getAllPosts } from './../utils/postsFetcher';
import Cta from './../views/HomePage/Cta';
import Features from './../views/HomePage/Features';
import FeaturesGallery from './../views/HomePage/FeaturesGallery';
import Hero from './../views/HomePage/Hero';
import Partners from './../views/HomePage/Partners';
import Testimonials from './../views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Amadeus System</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <DarkerBackgroundContainer>
          <Hero />
          <Partners />
          <section id="features">
          <BasicSection imageUrl="/undraw_feedback_ebmx.svg" title="Your Knowledge, Supercharged!" overTitle="Knowledge Retrieval">
            <p>
            Stop wasting time digging through endless documents. Our RAG AI searches your internal data, verified sources, and public knowledge all at once — giving you clear, accurate answers when you need them most. From complex research to everyday tasks, you’ll never look at information the same way again.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/undraw_idea_hz8b.svg" title="Search Less. Know More." overTitle="Search Retrieval" reversed>
            <p>
            Instead of hallucinating answers like basic AI, our RAG system always ties information back to real sources. That means you get context you can trust — every single time.
            </p>
            <ul>
              <li>Real-time knowledge retrieval</li>
              <li>Always up-to-date insights</li>
              <li>Built for scale and accuracy</li>
            </ul>
          </BasicSection>
          </section>
        </DarkerBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
