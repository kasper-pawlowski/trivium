import { useUserAuth } from '@contexts/AuthContext';
import { useGameCtx } from '@contexts/GameContext';
import { useMultiplayerCtx } from '@contexts/MultiplayerGameContext';
import formatCategoryName from '@helpers/formatCategoryName';
import getCategoryIcon from '@helpers/getCategoryIcon';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Icon, IconWrapper, ProgressDot, ProgressWrapper, Title, Wrapper } from './RoundInfo.styles';
import swordsIcon from '@assets/swords.svg';
import crossIcon from '@assets/cross.svg';
import tickIcon from '@assets/tick.svg';
import { useEffect } from 'react';
import { ref, set } from 'firebase/database';
import { database } from '@services/firebase';

const RoundInfo = () => {
    const { gameData } = useMultiplayerCtx();
    const { gameID } = useParams();
    const { user } = useUserAuth();

    useEffect(() => {
        const screenRef = ref(database, `${gameID}/info/screen`);
        setTimeout(() => {
            set(screenRef, 'round').catch((error) => console.log(error));
        }, 1000);
    }, []);

    return (
        <Wrapper as={motion.div} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} tranform={{ duration: 0.6 }}>
            <IconWrapper>
                <Icon src={getCategoryIcon(formatCategoryName(gameData.info.category.name))} alt="" draggable={false} />
            </IconWrapper>
            <Title>Round {gameData.game.currentRound}</Title>
            <ProgressWrapper>
                {gameData.quizData?.map((e, i) => (
                    // <ProgressDot
                    //     key={i}
                    //     {...(i + 1 === gameData.game.currentRound && { variant: 'current' })}
                    //     {...(gameData.game.userAnswers[i] === 'correct' && { variant: 'correct' })}
                    //     {...(gameData.game.userAnswers[i] === 'incorrect' && { variant: 'incorrect' })}>
                    //     {i + 1 === gameData.game.currentRound && <img src={swordsIcon} alt="" />}
                    //     {gameData.game.userAnswers[i] === 'correct' && <img src={tickIcon} alt="" />}
                    //     {gameData.game.userAnswers[i] === 'incorrect' && <img src={crossIcon} alt="" />}
                    // </ProgressDot>
                    <ProgressDot key={i} {...(i + 1 === gameData.game.currentRound && { variant: 'current' })}>
                        {i + 1 === gameData.game.currentRound && <img src={swordsIcon} alt="" />}
                    </ProgressDot>
                ))}
            </ProgressWrapper>
        </Wrapper>
    );
};

export default RoundInfo;
