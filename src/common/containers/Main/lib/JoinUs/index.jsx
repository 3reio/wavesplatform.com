import React from 'react';


import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Link from 'src/common/components/Link';
import Icon from 'src/common/components/Icon';
import Button from 'src/common/components/Button';
import IconProduct from 'src/common/components/IconProduct';
import { Row, Col } from 'src/common/components/Grid';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';
import flexCentered from 'src/common/styles/flexCentered';


import links from './links';
// import JoinIcon from './Icon'


const socialButtonStyles = theme => ({
    button: {
        ...flexCentered,
        float: 'left',
        width: 40,
        height: 40,
        padding: 0,
        marginRight: theme.spacing.unit * 2,
        borderRadius: '50%',
        '&:before, &:after': {
            borderRadius: '50%',
        }
    },
})

const SocialButton = injectSheet(socialButtonStyles)(
    ({ href, name, classes }) => (
        <Button href={href} target="_blank" className={classes.button}>
            <Icon name={name} size={18} color="gray-0" />
        </Button>
    )
)


const MainScreen = ({ classes }) => (
    <div>
        <Row>
            <Col xs={12} md={6} mdOffset={6}>
                <Typography type="display1">
                    <FormattedMessage
                        id="home.joinUs.title"
                        defaultMessage="Join the Waves Community"
                    />
                </Typography>
                <Margin />
            </Col>
        </Row>
        <Row className={classes.root}>
            <Col md={2} />
            <Col xs={12} md={4} mdOffset={1} className={classes.article}>
                <Typography type="body">
                    <FormattedMessage
                        id="home.joinUs.text"
                        defaultMessage="Waves brings together blockchain enthusiasts, project founders from many different sectors, traders, investors, and anyone who is interested in staying on the cutting edge of the crypto-world."
                    />
                </Typography>
                <Margin />
                <div>
                    {links.map(link => <SocialButton key={`social_${link.name}`} { ...link } />)}
                </div>
            </Col>
            <Col xs={12} md={4} mdOffset={1} className={classes.quoteWrapper}>
                <div className={classes.iconWrapper}>
                    <IconProduct name="application" size={40} />
                </div>
                <Typography type="quote">
                    <FormattedMessage
                        id="home.joinUs.quote"
                        defaultMessage="Keep up with the latest news and articles, and find out all about events happening on the Waves Platform, with our community at {link}"
                        values={{ link: <Link target="_blank" href="https://wavescommunity.com">wavescommunity.com</Link> }}
                    />
                </Typography>
            </Col>
        </Row>
    </div>

);


export default injectSheet(styles)(MainScreen);