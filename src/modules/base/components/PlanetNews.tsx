import { CardButton } from 'shared/styles/styled'
import { CardTitle, CardSubText } from 'shared/styles/globalText'
import { NewsWrapper, NewsContainer, NewsDataCard, NewsContent, NewsTitle } from './style'
import AQUAIcon from 'assets/icons/blue-icon.svg'

const PlanetNews = () => {
    return (
        <NewsWrapper>
            <CardTitle>News & Updates</CardTitle>
            <NewsContainer>
                <NewsDataCard>
                    <NewsContent>
                        <div>
                            <NewsTitle>Infinity Vaults are live!</NewsTitle>
                            <CardSubText className='news-info'>Learn about how infinity vaults are rewarding long term holders by …</CardSubText>
                            <CardButton>Read Article</CardButton>
                        </div>
                        <img src={AQUAIcon} alt="" />
                    </NewsContent>
                </NewsDataCard>
                <NewsDataCard>
                    <NewsContent>
                        <div>
                            <NewsTitle>The Best CAKE Yields</NewsTitle>
                            <CardSubText className='news-info'>Planet is the best place to earn on your cake in the entire ecosystem…</CardSubText>
                            <CardButton>Read Article</CardButton>
                        </div>
                        <img src={AQUAIcon} alt="" />
                    </NewsContent>

                </NewsDataCard>
            </NewsContainer>
        </NewsWrapper>
    );
};

export default PlanetNews;