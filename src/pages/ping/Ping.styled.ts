import styled from "styled-components";

export const Container = styled.main`
    max-width: 800px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 1rem;
`

export const Logo = styled.img`
    width: 100px;
    align-self: center;
    margin: 3rem 0 1rem 0;
`

export const Title = styled.h1`
    font-weight: 400;
    font-size: 1.7rem;
    color: ${({theme}) => theme.colors.gray};
`

export const TitleHighlight = styled.span`
    color: ${({theme}) => theme.colors.black};
    font-weight: bold;
`

export const Description = styled.p`

`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin: 2rem 0;

    @media (min-width: 800px) {
        flex-direction: row;
        column-gap: 1rem;
    }
`

export const InputEmail = styled.input`
    padding: 1rem;
    padding-left: 2rem;
    border-radius: 30px;
    flex-grow: 1;
    border: 1px solid ${({theme}) => theme.colors.gray};
`

export const NotifyButton = styled.button`
    padding: 1rem;
    border: none;
    font-weight: 700;
    border-radius: 30px;
    flex-grow: 1;
    cursor: pointer;
    background: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.white};

    @media (min-width: 800px) {
        max-width: 200px;
    }
`

export const DashboardContainer = styled.div`
    margin: auto;
    margin-top: 0;
`

export const DashboardImg = styled.img`
    width: 100%;
`

export const Footer = styled.footer`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
`

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 1rem;
`

export const IconContainer = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    padding: .5rem;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid ${({theme}) => theme.colors.blue};
`

export const Icon = styled.img`
    width: 25px;
    height: 25px;
`

export const CopyrightMessage = styled.p`
    text-align: center;
    font-size: .8rem;
    color: ${({theme}) => theme.colors.gray}
`