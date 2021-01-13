import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
        name: 'Giancarlo Junior',
        title: 'full stack developer',
        birthday: '20/03/1994',
        email: 'soda@sodaitachi.com',
        address: '13 test',
        phone: '123 456 789',
    
        socials: {
            twitter: {
                link: 'https://twitter.com/sodaitachi',
                text: 'Twitter',
                icon: <TwitterIcon />
            },
            linkedin: {
                link: 'https://linkedin.com/sodaitachi',
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