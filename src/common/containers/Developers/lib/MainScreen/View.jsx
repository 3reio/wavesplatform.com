import React from 'react';

import MainScreen from 'src/common/components/MainScreen';
import IconButton from 'src/common/components/Button/Icon';


import ImageMobile from '!svg-react-loader!./img/table_mob.svg';
import Image from '!svg-react-loader!./img/table.svg';


import { FormattedMessage } from 'react-intl';



const DevelopersMainScreen = ({ onDocumentationClick }) => (
    <MainScreen
        title={
            <FormattedMessage
                id="developers.title"
                defaultMessage="Build applications on the blockchain"
            />
        }
        text={
            <FormattedMessage
                id="developers.text"
                defaultMessage="Waves is a powerful blockchain platform that allows anyone to launch their own cryptographically-secured tokens — allowing businesses and other organisations to build versatile applications with all the advantages of peer-to-peer technology."
            />
        }
        imageDesktop={<Image />}
        imageMobile={<ImageMobile />}
        buttons={[
            (
                <IconButton
                    onClick={onDocumentationClick}
                    key="main_cta_button"
                    // className={classes.ctaButton}
                    href="https://github.com/wavesplatform/Waves/wiki/Waves-Node-REST-API"
                    target="_blank"
                    iconName="github"
                    secondary
                >
                    <FormattedMessage
                        id="developers.cta.documentation"
                        defaultMessage="Documentation"
                    />
                </IconButton>
            ),
            // (
            //    <IconButton
            //         key="main_cta_button2"
            //         // className={classes.secondCtaButton}
            //         href="https://github.com/wavesplatform/WavesGUI"
            //         target="_blank"
            //         iconName="github"
            //         bordered
            //     >
            //         Client
            //     </IconButton>
            // ),
        ]}
    />
);


export default DevelopersMainScreen;