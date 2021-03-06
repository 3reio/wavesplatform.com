import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import { Row, Col } from 'src/common/components/Grid';

import injectSheet from 'react-jss';
import styles from './styles';
import cn from 'classnames';



const MainScreen = ({
    title,
    text,
    imageDesktop,
    imageMobile,
    classes,
    buttons,
}) => (
        <Row className={classes.root}>
            <Col xs={12} sm={7} lg={6}>
                <Typography type="display4" inverted>{title}</Typography>
                <Margin />
            </Col>

            <Col xs={12} sm={5} lg={6} className={cn(classes.imageCol, { [classes.imageColMargin]: imageMobile })}>
                {(imageDesktop || imageDesktop) && (
                    <div
                        className={cn(
                            classes.widthSetter,
                            {
                                [classes.xsOnly]: !imageDesktop && imageMobile,
                                [classes.xsHidden]: imageDesktop && !imageMobile,
                            }
                        )}
                    >
                        <div className={classes.imageWrapper}>
                            {!!imageMobile && (
                                <div className={cn(classes.image, classes.xsOnly)}>
                                    {imageMobile}
                                </div>
                            )}
                            {!!imageDesktop && (
                                <div className={cn(classes.image, classes.xsHidden)}>
                                    {imageDesktop}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Col>

            <Col xs={12} sm={7} lg={6}>
                <Typography type="body" inverted className={classes.textCut}>
                    {text}
                </Typography>

                {!!buttons.length && <Margin bottom={3} />}

                {buttons.map((button, index) => (
                    <div className={classes.buttonWrapper} key={`main_cta_wrapper${index}`}>
                        {button}
                    </div>
                ))}
            </Col>
        </Row >
    );


MainScreen.defaultProps = {
    buttons: []
}

MainScreen.PropTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.node),
    imageDesktop: PropTypes.node,
    imageMobile: PropTypes.node,
};

export default injectSheet(styles)(MainScreen);