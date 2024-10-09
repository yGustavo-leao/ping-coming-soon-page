import { Container, CopyrightMessage, DashboardContainer, DashboardImg, Description, Footer, Header, InputContainer, InputEmail, Logo, NotifyButton, SocialMediaContainer, Icon, Title, TitleHighlight, IconContainer } from "./Ping.styled"

import facebookIcon from '../../../src/assets/images/icons/facebook.svg'
import twitterIcon from '../../../src/assets/images/icons/twitter.svg'
import instagram from '../../../src/assets/images/icons/instagram.svg'
export const Ping = () => {
    return (
        <Container>
            <Header>
                <Logo src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="Ping Logo" />
                <Title>We are launching <TitleHighlight>soon!</TitleHighlight></Title>
                <Description>Subscribe and get notified</Description>
                <InputContainer>
                    <InputEmail type="text" placeholder="Your email address..." />
                    <NotifyButton>Notify Me</NotifyButton>
                </InputContainer>
            </Header>

            <DashboardContainer>
                <DashboardImg src={`${process.env.PUBLIC_URL}/assets/images/illustration-dashboard.png`} alt="Dashboard image"/>
            </DashboardContainer>

            <Footer>
                <SocialMediaContainer>
                    <IconContainer>
                        <Icon src={facebookIcon} alt="Facebook icon" />
                    </IconContainer>
                    <IconContainer>
                        <Icon src={twitterIcon} alt="Twitter icon" />
                    </IconContainer>
                    <IconContainer>
                        <Icon src={instagram} alt="Instagram icon" />
                    </IconContainer>
                </SocialMediaContainer>

                <CopyrightMessage>© Copyright Ping. All rights reserved.</CopyrightMessage>
            </Footer>
        </Container>
    )
}