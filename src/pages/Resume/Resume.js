import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import resumeData from '../../utils/resumeData';
import CustomTimeline, { CustomTimelineSeparator } from "../../components/Timeline/Timeline";
import WorkIcon from '@material-ui/icons/Work';

import './Resume.css';

const Resume = () => {
    return (
        <>
            
            {/* about me */}
            <Grid container className='section'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
                </Grid>
            </Grid>

            {/* experiences */}
            <Grid container className='section'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>
            <Grid item xs={12}>
                <Grid container>
                    {/* experiences */}
                    <Grid item sm={12} md={6}>
                        <CustomTimeline title='Work Experience' icon={<WorkIcon />}>
                            {resumeData.experiences.map(experience => (
                                
                            ))}

                        </CustomTimeline>
                    </Grid>
                    {/* education */}
                    <Grid item sm={12} md={6}>

                    </Grid>
                </Grid>
            </Grid>
            </Grid>

            {/* services */}
            <Grid container className='section'></Grid>

            {/* skills */}
            <Grid container className='section'></Grid>

            {/* contact */}
            <Grid container className='section'></Grid>

        </>
    )

}

export default Resume
