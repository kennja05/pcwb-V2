import styled from 'styled-components'

import {ArticleWrapper} from '../partials/articlewrapper'
import {StyledArticle} from '../partials/article'

import BillKennyTimeline from '../assets/images/BillKennyTimeline.jpg'
import BillKenny from '../assets/images/BillKenny.jpg'
import Bk2 from '../assets/images/BillKennyConducting.jpg'
import Bk2Cropped from '../assets/images/BillKennyConductingCropped.jpg'
import BillKennySmiling from '../assets/images/BillKennySmiling.jpg'

const DirectorHeader = styled.header`
    position: sticky;
    bottom: 3rem;
    background-image: linear-gradient(to right bottom, rgba(4, 4, 4, 0.5), rgba(4, 4, 4, 0.5)),url(${BillKennyTimeline});
    min-height: 75vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StyledH1 = styled.h1`
    color: ${props => props.offWhite};
    border-top: .5rem solid ${props => props.orange};
    border-bottom: .5rem solid ${props => props.orange};
    font-size: 4rem;
`

const DirectorArticle = styled(StyledArticle)`
    background-color: ${props => props.offWhite};
    color: ${props => props.darkBlue2};
`

const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 75vh;
    width: 100%;
    grid-gap: 1rem;
    & div {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    };
    &:first-child{
        grid-area: 1 / 1 / 3 / 2;
        background-image: url(${BillKenny});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    & div:nth-child(2){
        grid-area: 1 / 2 / 2 / 3;
        background-image: url(${BillKennySmiling});
    }

    & div:nth-child(3){
        grid-area: 2 / 2 / 3 / 3;
        background-image: url(${Bk2});
    }
`

export default function Director(props){
    return(
        <div>
            <DirectorHeader>
                <StyledH1 {...props}>Dr. William Kenny</StyledH1>
            </DirectorHeader>
            <ArticleWrapper {...props} light={true}>
            <DirectorArticle {...props}>
                <section>
                    <p>
                        William Kenny is Professor of Music at Bucknell University where for the past thirty years he has conducted the university Symphonic Band and taught such courses as Conducting, Instrumental Methods, Music Theory, Jazz History, Brass and Percussion Methods, and Orchestration. He also teaches French horn, and, for many years, led the University Jazz Band having moved the band from a club activity to an integral part of the music department's curricular ensemble offerings. More recently, he accepted the leadership role of the university's Bison Band, and after a 25 year absence from working with athletic bands—and much to his surprise—has enjoyed that a great deal.
                    </p>
                    <p>
                        While at Bucknell, he has served as Associate Dean of Faculty in the College of Arts and Sciences, ten years as Chair of the Department of Music, and for the past fours years, as chair of the 400-member Bucknell University faculty.
                    </p>               
                </section>
                <section>
                    <PhotoGrid>
                        <div></div>
                        <div></div>
                        <div></div>
                    </PhotoGrid>   
                </section>
                <section>
                    <p>
                        In addition to conducting regional high school county and district band festivals, ensembles under Kenny’s direction have been selected to perform for the Pennsylvania Music Educators Association Conference, the Eastern Conference of the College Band Directors National Association, and for the national convention of the Association of Concert Bands. Articles he has written have appeared in prominent music publications including the Music Educators Journal and The Instrumentalist.
                    </p>
                    <p>
                        In addition to his university work, Kenny is founder and conductor of the Penn Central Wind Band, an ensemble comprising professional musicians and music teachers from central Pennsylvania and beyond. The PCWB is a recipient of the Sudler Silver Scroll—an award administered by the John Philip Sousa Foundation “recognizing community and adult concert bands of outstanding musical excellence.” It was just the 30th ensemble to receive this international award since its inception in 1987. Since the band's founding over twenty-five years ago, its Sousa-style concerts and its performances of contemporary band music have been enjoyed by many throughout the region.
                    </p>
                    <p>
                        As a performer, Kenny serves as principal horn with the Williamsport Symphony Orchestra and the Orchestra of the Susquehanna Valley Chorale, and as hornist with the Commonwealth Brass Quintet. He also performs regularly with touring artists, most recently this past winter with Mannheim Steamroller as part of the group's northeast regional Christmas tour.
                    </p>
                    <p>
                        A graduate of Oregon State University, Kenny received both his master's degree and doctorate in music education from the University of Illinois. He lives in Lewisburg with his wife, Amy—his Bison Band co conspirator and one of the fine flutists in the PCWB.
                    </p>
                </section>
            </DirectorArticle>
            </ArticleWrapper>
        </div>
    )
}