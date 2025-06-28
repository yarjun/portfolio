import React from 'react';
import './Technologies.css';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { 
    FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, 
    FaNodeJs, FaAws, FaJava, FaPython, FaPhp, FaDatabase, FaGitAlt, FaNpm ,FaCode
} from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiMongodb, SiTypescript, SiDotnet } from 'react-icons/si';

const technologyCategories = [
    {
        category: 'Frontend',
        items: [
            { name: 'React.js', icon: <FaReact color="#61DBFB" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E44D26" /> },
            { name: 'CSS3', icon: <FaCss3Alt color="#264DE4" /> },
            { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" /> },
            { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
        ],
    },
    {
        category: 'Backend',
        items: [
            { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
            { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
            { name: 'SQL', icon: <FaDatabase color="#336791" /> },
        ],
    },
    {
        category: 'Tools',
        items: [
            { name: 'Tableau', icon: <FaCode color="#00599C" /> },
            { name: 'PowerPoint', icon: <FaCode color="#00599C" /> },
            { name: 'Excel', icon: <FaCode color="#00599C" /> },
            { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
            { name: 'Jira', icon: <FaCode color="#0052CC" /> },
            { name: 'VS Code', icon: <FaCode color="#007ACC" /> },
            { name: 'Confluence', icon: <FaCode color="#172B4D" /> },
        ],
    },
    {
        category: 'Coding Languages',
        items: [
            { name: 'Java', icon: <FaJava color="#007396" /> },
            { name: 'Python', icon: <FaPython color="#3776AB" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#007ACC" /> },
            { name: 'C++', icon: <FaCode color="#00599C" /> },
            { name: 'C', icon: <FaCode color="#00599C" /> },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Technologies() {
    return (
        <section id="technologies" className="technologies-section">
            <motion.div
                className="technologies-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Typography align="center" gutterBottom className="section-title">
                    Technologies
                </Typography>
                <Grid container spacing={3}>
                    {technologyCategories.map((category, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <motion.div variants={itemVariants}>
                                <Card elevation={3} className="technology-card">
                                    <CardContent>
                                        <Typography variant="h6" color="primary" gutterBottom>
                                            {category.category}
                                        </Typography>
                                        <div className="technology-list">
                                            {category.items.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="technology-item"
                                                    whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '10px',
                                                        borderRadius: '8px',
                                                        marginBottom: '10px',
                                                    }}
                                                >
                                                    <div style={{ marginRight: '10px', fontSize: '24px' }}>
                                                        {item.icon}
                                                    </div>
                                                    <span>{item.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </section>
    );
}

export default Technologies;
