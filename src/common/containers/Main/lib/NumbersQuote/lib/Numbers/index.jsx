import React from 'react';

import { Row, Col } from 'src/common/components/Grid';
import Typography from 'src/common/components/Typography';

import formatNumber from 'src/common/utils/formatNumber';
import { FormattedMessage } from 'react-intl';


import injectSheet from 'react-jss';


const styles = theme => ({
    numberWrapper: {
        marginBottom: theme.spacing.unit * 4
    }
})


const ColNumber = injectSheet(styles)(({ classes, children }) =>
    <Col className={classes.numberWrapper} xs={6}>{children}</Col>)



const NumbersMain = ({
    wavesBtcRate,
    dexVolume,
    dexWallets,
    dexAssets,
}) => wavesBtcRate && dexVolume && dexWallets && dexAssets ? (
        <Row>
            <ColNumber >
                <Typography type="numeral">
                    <span dangerouslySetInnerHTML={{ __html: `฿&nbsp;${formatNumber(wavesBtcRate)}` }} />
                </Typography>
                <Typography type="body">
                    <FormattedMessage
                        id='home.numbers.wavesPrice'
                        defaultMessage="waves price"
                    />
                </Typography>
            </ColNumber>
            <ColNumber xs={12} md={6}>
                <Typography type="numeral">
                    <span dangerouslySetInnerHTML={{ __html: `$&nbsp;${formatNumber(dexVolume)}` }} />
                </Typography>
                <Typography type="body">
                    <FormattedMessage
                        id='home.numbers.dexVolume'
                        defaultMessage="24h DEX volume"
                    />
                </Typography>
            </ColNumber>
            <ColNumber xs={12} md={6}>
                <Typography type="numeral">
                    <span dangerouslySetInnerHTML={{ __html: formatNumber(dexWallets) }} />
                </Typography>
                <Typography type="body">
                    <FormattedMessage
                        id='home.numbers.wallets'
                        defaultMessage="wallets created"
                    />
                </Typography>
            </ColNumber>
            <ColNumber xs={12} md={6}>
                <Typography type="numeral">
                    <span dangerouslySetInnerHTML={{ __html: formatNumber(dexAssets) }} />
                </Typography>
                <Typography type="body">
                    <FormattedMessage
                        id='home.numbers.tokens'
                        defaultMessage="tokens issued"
                    />
                </Typography>
            </ColNumber>
        </Row>
    ) : null;



export default NumbersMain;