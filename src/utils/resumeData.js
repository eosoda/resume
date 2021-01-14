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
        },

        about: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

        experiences: [
            {
                title: 'work',
                date: '2018 - Present',
                desc: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
            },
            {
                title: 'work 2',
                date: '2018 - Present',
                desc: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
            },
            {
                title: 'work 3',
                date: '2018 - Present',
                desc: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
            },
        ]
}