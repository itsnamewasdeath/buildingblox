import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components for the HTML structure
const Header = styled.header`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
`;

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const H2 = styled.h2`
  color: #333;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
`;

const P = styled.p`
  color: #666;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

function OpenAIComponent() {
  const [generatedContent, setGeneratedContent] = useState('');

  useEffect(() => {
    fetch('https://api.openai.com/v1/engines/davinci/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY' // Replace with your OpenAI API key
      },
      body: JSON.stringify({
        prompt: "Generate content based on your requirements...",
        max_tokens: 150
      })
    })
    .then(response => response.json())
    .then(data => {
      setGeneratedContent(data.choices[0].text);
    })
    .catch(error => console.error('Error fetching data from OpenAI:', error));
  }, []);

  return (
    <Section>
      <H2>Generated Content:</H2>
      <P>{generatedContent}</P>
    </Section>
  );
}

function ChatbotComponent() {
  // Placeholder for chatbot component, adjust as per your implementation
  return (
    <Section>
      <H2>Chatbot Interface:</H2>
      <P>Insert your Chatbot component here...</P>
    </Section>
  );
}

function Page() {
  return (
    <>
      <Header>
        <h1>Cents4Tents Initiative</h1>
        <p>A Novel Temporary Housing Solution for Homeless Individuals in the United States</p>
        <p>Created by Nick Susco II June 7th, 2024</p>
      </Header>

      <Main>
        <OpenAIComponent />
        <ChatbotComponent />
      </Main>

      <Footer>
        <P>© 2024 Cents4Tents Initiative. All rights reserved.</P>
      </Footer>
    </>
  );
}

export default Page;
