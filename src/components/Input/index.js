import styled from 'styled-components'

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid #fff;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;
`

export default function Input({ onChange, placeholder, ...props }) {
    return (
        <div>
            <InputBase onChange = { onChange }  placeholder = { placeholder } { ...props }/>
        </div>
    )
}