import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
export const ResultListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: #ffc533;
  border-radius: 15px 0px 0px 15px;
  padding: 15px;
  overflow: auto;
`
export const HeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffbf1f;
  padding: 30px;
`
export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: bold;
  color: #334155;
`
export const ResultCountContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  overflow-y: auto;
`
export const NoUserInputsView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageView = styled.img`
  width: 380px;
`
export const ResultCountList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-top: 45px;
  margin-left: 15px;
  padding: 0px;
`

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #0f172a;
  border-radius: 0px 15px 15px 0px;
  padding: 15px;
`
export const AddHeading = styled(Heading)`
  color: #ffc533;
  margin-top: 50px;
`
export const InputAndButtonContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  height: 50px;
  margin-top: 50px;
`
export const TextInput = styled.input`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #475569;
  width: 72%;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
`
export const AddButton = styled.button`
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  color: #475569;
  width: 25%;
  padding: 10px;
  border-radius: 8px;
  background-color: #ffc533;
`
