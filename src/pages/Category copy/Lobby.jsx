import { useGameCtx } from '@contexts/GameContext';
import useCopyToClipboard from '@hooks/useCopyToClipboard';
import { Copy, CopySuccess } from 'iconsax-react';
import { useNavigate, useParams } from 'react-router-dom';
import { ContentWrapper, CopyGameIDButton, GameIDWrapper, Info, Or, StyledQRCodeSVG, Title, Wrapper } from './Lobby.styles';

const Lobby = () => {
    const { gameID } = useParams();
    const { selectedCategory } = useGameCtx();
    const navigate = useNavigate();
    const { copyUidToClipboard, copied } = useCopyToClipboard();

    return (
        <Wrapper>
            <ContentWrapper>
                <Title isVisibleOnMobile={true}>Scan QR code</Title>
                <span>Share this QR code with a friend to play together</span>
                <StyledQRCodeSVG value={`http://localhost:3000/game/${gameID}`} />
            </ContentWrapper>
            <Or>Or</Or>
            <ContentWrapper>
                <Title isVisibleOnMobile={false}>Share the game code</Title>
                <GameIDWrapper>
                    <p>{gameID}</p>
                    <CopyGameIDButton onClick={() => copyUidToClipboard(gameID)}>
                        {copied ? <CopySuccess color="#6A5AE0" size="16" variant="Outline" /> : <Copy color="#001833" size="16" variant="Outline" />}
                    </CopyGameIDButton>
                </GameIDWrapper>
            </ContentWrapper>
            <Info>
                the game will start automatically <br /> when a friend joins
            </Info>
        </Wrapper>
    );
};

export default Lobby;
