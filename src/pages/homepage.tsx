import styled, {keyframes} from 'styled-components';

import {StyledArticle} from '../partials/article';
import {ArticleWrapper} from '../partials/articlewrapper';
import TrumpetBackground from '../assets/images/trumpet.jpg';
import Seal from '../assets/images/seal.png';

const HomepageWrapper = styled.div`
    font-size: 2.5rem;
    background: linear-gradient(to top, ${props => props.theme.colors.darkBlue2}, ${props => props.theme.colors.darkBlue});
`

const HomepageHeader = styled.header`
    text-align: center;
    display: grid;
    grid-template-columns: 100vw;
    grid-template-rows: 100vh;
    grid-template-areas: "header";
    text-transform: uppercase;
`

const fadeIn = keyframes`
  0% {opacity: 0;}100% {opacity: 1;}`

const fadeOut = keyframes`
 0% {opacity: 1;}100% {opacity: 0;}`

const lineDrawToRight = keyframes`
    0% {width: 0;}100% {width: 100%;}`

const lineDrawToLeft = keyframes`
    0% {left: 100%;width:0;}100% {left: 0;width:100%;}
`
//todo - take a look at timing of fadeOut animation
const IntroHeader = styled.div`
    grid-area: header;
    z-index: 1;
    background-color: ${props => props.theme.colors.darkBlue};
    animation: ${fadeOut} 3s 6s forwards;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IntroTitleBox = styled.div`
    position: relative;
    color: ${props => props.theme.colors.offWhite};
    line-height: 1.5;
    padding: 0 1.5rem 0 1.5rem;
    &:before, &:after {
        content: '';
        width: 100%;
        border-bottom: solid .5rem ${props => props.theme.colors.orange};
        position: absolute;
    };
    &:before {
        left: 0;
        top: -1rem;
        animation: ${lineDrawToRight} .8s ease-in 4s backwards;
    }
    &:after {
        left: 0;
        bottom: -1rem;
        animation: ${lineDrawToLeft} .8s ease-in 4.8s backwards;
    }
`

const IntroH1 = styled.h1`
    animation: ${fadeIn} 1.5s;
`
const IntroH2 = styled.h2`
    animation: ${fadeIn} 1.5s 2s backwards;
`

const MainHeader = styled.div`
    grid-area: header;
    background-image: linear-gradient(to right bottom, rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)),url(${TrumpetBackground});
    @media only screen and (min-width: 1025px){
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
    }
    background-size: cover;
    overflow: auto;
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

const MainHeaderTitleBox = styled.div`
    position: relative;
    color: ${props => props.theme.colors.offWhite};
    line-height: 1.5;
    padding: 0 1.5rem 0 1.5rem;
    &:before, &:after {
        content: '';
        width: 100%;
        border-bottom: solid .5rem ${props => props.theme.colors.orange};
        position: absolute;
    };
    &:before {
        left: 0;
        top: -1rem;
    };
    &:after {
        left: 0;
        bottom: -1rem;
    };
`

const PCWBSeal = styled.img`
    width: 100%;
    height: auto;
`

export default function Homepage() {
    
    return(
        <HomepageWrapper>
            <HomepageHeader>
                <IntroHeader>
                    <IntroTitleBox>
                        <IntroH1>Penn Central Wind Band</IntroH1>
                        <IntroH2>William Kenny, Conductor</IntroH2>
                    </IntroTitleBox>
                </IntroHeader> 
                <MainHeader>
                    <MainHeaderTitleBox>
                        <h1>Penn Central Wind Band</h1>
                        <h2>William Kenny, Conductor</h2>
                    </MainHeaderTitleBox>
                </MainHeader> 
            </HomepageHeader>
            <ArticleWrapper>
                <StyledArticle>
                <section>
                    <h2>ABOUT US</h2>
                    <div>
                    <p>
                        The Penn Central Wind Band is an all-volunteer organization sponsored by Bucknell University as a service to the region. Many members of the band live in central Pennsylvania, but some travel from far afield to rehearse and perform with the ensemble. Many of the band's members hold music degrees, and are music teachers and professional performers, although all are great players!
                    </p>
                    <p>
                        The PCWB, founded in 1994, is one of the few select ensembles to have been awarded the Silver Sudler Scroll, awarded by the John Philip Sousa Foundation "recognizing community and adult concert bands of outstanding musical excellence." Other honors include invitations to perform for the conference of the Pennsylvania Music Educators Association and the national convention of the Association of Concert Bands. William Kenny, the band's founder and conductor, is professor of music at Bucknell, where he has taught for the past 30 years.
                    </p>
                    </div>
                </section>
                <section>
                    <PCWBSeal src={Seal} alt='PCWB Seal' />
                </section>
            </StyledArticle>
            </ArticleWrapper>
        </HomepageWrapper>
    )
}