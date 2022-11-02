import { LoadingTokenCont, LoadingTokenBox, LoadingCircle, LoadingLine1, LoadingLine2 } from './style'

const TokenBoxLoading = () => {
    return (
        <LoadingTokenCont>
            <LoadingTokenBox >
                <LoadingCircle className="animate" />
                <LoadingLine1 className="animate" />
                <LoadingLine2 className="animate" />
            </LoadingTokenBox>
        </LoadingTokenCont>
    );
};

export default TokenBoxLoading;