import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from "next/head";


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <title>{db.title}</title>
      <meta property="og:description" content="WizardQuiz | Imersão React + Next Js"/>
      <meta property="og:url" content="https://wizardquiz.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={db.title} />
      <meta property="og:image" content={db.bg} />
            
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta property="article:author" content={db.author} />
      <link rel="icon" type="image/png" href={db.icon} />
    </Head>

    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
        	<h1>{ db.title }</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{ db.description }</p>
          </Widget.Content>
        </Widget>
        
        <Widget>
          <Widget.Content>  
            <h1>Quizes da Galera</h1>
            <p>lorem ipsum dolor sit amet, consectetur adipis</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/casemiroj/wizardquiz" />
    </QuizBackground>
  </>
  )
}
