import {Component} from 'react'
import {v4} from 'uuid'
import CharacterCount from './components/CharacterCount'
import {
  AppContainer,
  ResponsiveContainer,
  ResultListContainer,
  HeadingContainer,
  Heading,
  ResultCountContainer,
  NoUserInputsView,
  ImageView,
  ResultCountList,
  AddContainer,
  AddHeading,
  InputAndButtonContainer,
  TextInput,
  AddButton,
} from './styledComponents'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    character: '',
    characterList: [],
  }

  onChangeCharacter = event => {
    this.setState({character: event.target.value})
  }

  onClickAdd = () => {
    const {character} = this.state
    const characterObject = {
      id: v4(),
      character,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, characterObject],
      character: '',
    }))
  }

  render() {
    const {character, characterList} = this.state
    const showResultList = characterList.length === 0
    return (
      <AppContainer>
        <ResponsiveContainer>
          <ResultListContainer>
            <HeadingContainer>
              <Heading>Count the characters like a Boss...</Heading>
            </HeadingContainer>
            <ResultCountContainer>
              {showResultList ? (
                <NoUserInputsView>
                  <ImageView
                    src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                    alt="no user inputs view"
                  />
                </NoUserInputsView>
              ) : (
                <ResultCountList>
                  {characterList.map(eachChar => (
                    <CharacterCount
                      key={eachChar.id}
                      eachCharDetails={eachChar}
                    />
                  ))}
                </ResultCountList>
              )}
            </ResultCountContainer>
          </ResultListContainer>
          <AddContainer>
            <AddHeading>Character Counter</AddHeading>
            <InputAndButtonContainer>
              <TextInput
                type="text"
                placeholder="Enter the Characters here"
                value={character}
                onChange={this.onChangeCharacter}
              />
              <AddButton type="button" onClick={this.onClickAdd}>
                Add
              </AddButton>
            </InputAndButtonContainer>
          </AddContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default App
