import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useState } from 'react'

import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizLogo from '../src/components/QuizLogo'


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
  const router = useRouter()
  const [name, setName] = useState('')

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo></QuizLogo>
        <Widget>
          <Widget.Header>
        	<h1>{ db.title }</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{ db.description }</p>
            <form onSubmit = { event => {

              event.preventDefault()
              router.push(`/quiz?name=${name}`)
              console.log('Fazendo submissão')
            
            }}>
              <input onChange = { infosDoEvento => {
                setName(infosDoEvento.target.value)
              }} 
              placeholder="Diga seu nome de bruxo" />
              <button type="submit" disabled={name.length === 0}>Accio Quiz!</button>
            </form>
          </Widget.Content>
        </Widget>
        
        <Widget>
          <Widget.Content>  
            <h1>Quizes da Galera</h1>
            <p>🚧Em Construção...🚧</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/casemiroj/wizardquiz" />
    </QuizBackground>
  )
}
