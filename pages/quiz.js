import styled from 'styled-components'

import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget'
import GitHubCorner from '../src/components/GitHubCorner'

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


export default function QuizPage() {
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        <h1>Titulo</h1>
                    </Widget.Header>

                    <Widget.Content>
                        <p>Descrição</p>
                    </Widget.Content>
                </Widget>
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/casemiroj/wizardquiz" />
        </QuizBackground>
    )
}