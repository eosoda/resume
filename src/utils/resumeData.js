import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/Facebook';


export default {
        name: 'sam is codingo',
        title: 'full stack developer',
        birthday: '20/03/1994',
        email: 'soda@sodaitachi.com',
        address: '13 test',
        phone: '123 456 789',
    
        socials: {
            facebook: {
                link: 'https://www.facebook.com/soda',
                text: 'Facebook',
                icon: <FacebookIcon />
            },
            twitter: {
                link: 'https://www.facebook.com/soda',
                text: 'Twitter',
                icon: <TwitterIcon />
            },
            linkedin: {
                link: 'https://www.facebook.com/soda',
                text: 'LinkedIn',
                icon: <LinkedInIcon />
            },
            github: {
                link: 'https://github.com/sodaitachi',
                text: 'GitHub',
                icon: <GitHubIcon />
            }
        }
}