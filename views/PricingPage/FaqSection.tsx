import styled from 'styled-components';
import Accordion from './../../components/Accordion';
import SectionTitle from './../../components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="What is Retrieval-Augmented Generation (RAG) AI?">
      RAG combines powerful AI language models with real-time information retrieval. Instead of guessing, it searches trusted sources to generate fact-backed answers you can verify.
      </Accordion>
      <Accordion title="How is this better than a regular chatbot or LLM?">
      Unlike basic chatbots or generic AI, RAG AI doesn’t hallucinate. Every answer comes with citations from your connected data or external trusted sources — so you always know where the information comes from.
      </Accordion>
      <Accordion title="Is my data secure with your RAG AI?">
      Absolutely. We use enterprise-grade encryption, strict access controls, and never use your data to train public models. Your knowledge stays private and compliant.
      </Accordion>
      <Accordion title="How do I integrate it into my existing tools?">
      We offer a simple, well-documented API and plug-ins for popular platforms. You can connect your CRM, helpdesk, or internal knowledge base in just a few steps.
      </Accordion>
      <Accordion title="Can I customize the sources my AI retrieves from?">
      Yes! You can add, update, or remove data sources anytime. Upload documents, link live feeds, or create a private knowledge base that’s unique to your business.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
