import styled from "styled-components"
import Text from "../../../../components/Text/Text"

const Questions = () => {
  const QuesAns1 = [
    [
      "What is Webflow and why is it the best website builder?",
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    ],
    ["What is your favorite template from BRIX Templates?", ""],
    ["How do you clone a template from the Showcase?", ""],
    ["Why is BRIX Templates the best Webflow agency?", ""],
    ["When was Webflow officially launched?", ""],
    ["How do you integrate Jetboost with Webflow?", ""],
  ]
  const QuesAns2 = [
    ["What is your favorite template from BRIX Templates?", ""],
    ["How do you clone a template from the Showcase?", ""],
    [
      "What is Webflow and why is it the best website builder?",
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    ],
    ["Why is BRIX Templates the best Webflow agency?", ""],
    ["When was Webflow officially launched?", ""],
    ["How do you integrate Jetboost with Webflow?", ""],
  ]

  const QuestionsContainer = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    gap: 50px;
    text-align: center;
    margin-top: 50px;
    top: 300px;
    color: white;
    display: flex;
    justify-content: center;
  `
  const QuestionDiv = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Question = styled.summary`
    display: flex;
    flex-direction: column;
  `
  const Answer = styled.details`
    width: 35vw;
  `
  const Qcontainer1 = QuesAns1.map((line) => {
    console.log(line)
    return (
      <Answer>
        <Question>{line[0]}</Question>
        {line[1]}
      </Answer>
    )
  })
  const Qcontainer2 = QuesAns2.map((line) => {
    console.log(line)
    return (
      <Answer>
        <Question>{line[0]}</Question>
        {line[1]}
      </Answer>
    )
  })
  return (
    <QuestionsContainer>
      <QuestionDiv>{Qcontainer1}</QuestionDiv>
      <QuestionDiv>{Qcontainer2}</QuestionDiv>
    </QuestionsContainer>
  )
}

export default Questions
