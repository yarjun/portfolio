import React from 'react';
import './Technologies.css';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaTag, FaPhp, FaDatabase, FaMicrosoft, FaJava, FaPython, FaCode } from 'react-icons/fa';

const technologyCategories = [
    // ... (your technologyCategories data - same as before)
    {
        category: 'Frontend',
        items: [
            { name: 'React Js', icon: <FaReact /> },
            { name: 'Angular', icon: <FaAngular /> },
            { name: 'HTML 5', icon: <FaHtml5 /> },
            { name: 'Bootstrap 4', icon: <FaCss3Alt /> },
            { name: 'CSS 3', icon: <FaCss3Alt /> },
            { name: 'JavaScript', icon: <FaJsSquare /> },
            { name: 'Sass', icon: <FaSass /> },
            { name: 'Web Analytics', icon: <FaTag /> },
            { name: 'Tag Manager', icon: <FaTag /> },
        ],
    },
    {
        category: 'Middleware',
        items: [
            { name: 'Express.js', icon: <FaCode /> },
            { name: '.Net Core', icon: <FaCode /> },
            { name: 'PHP', icon: <FaPhp /> },
        ],
    },
    {
        category: 'Database',
        items: [
            { name: 'Apache Cassandra', icon: <FaDatabase /> },
            { name: 'Cosmos DB', icon: <FaDatabase /> },
            { name: 'SQL Server', icon: <FaDatabase /> },
            { name: 'Mongo DB', icon: <FaDatabase /> },
            { name: 'Firebase', icon: <FaDatabase /> },
        ],
    },
    {
        category: 'Microsoft',
        items: [
            { name: 'Dynamics 365', icon: <FaMicrosoft /> },
            { name: 'ADO', icon: <FaMicrosoft /> },
            { name: 'Azure', icon: <FaMicrosoft /> },
            { name: 'PowerPoint', icon: <FaMicrosoft /> },
            { name: 'Word', icon: <FaMicrosoft /> },
            { name: 'Excel', icon: <FaMicrosoft /> },
        ],
    },
    {
        category: 'Coding Languages',
        items: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'TypeScript', icon: <FaCode /> },
            { name: 'C#', icon: <FaCode /> },
            { name: 'Python 3', icon: <FaPython /> },
            { name: 'C', icon: <FaCode /> },
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
                <Typography variant="h4" align="center" gutterBottom className="section-title">
                    Technologies
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}> {/* Frontend */}
                        <motion.div variants={itemVariants}>
                            <Card elevation={3} className="technology-card">
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        {technologyCategories[0].category}
                                    </Typography>
                                    <div className="technology-list">
                                        {technologyCategories[0].items.map((item, idx) => (
                                            <motion.div key={idx} className="technology-item" whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                                                <div style={{ marginRight: '10px' }}>{item.icon}</div>
                                                <span>{item.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}> {/* Middleware & Microsoft (Combined) */}
                        <motion.div variants={itemVariants}>
                            <Card elevation={3} className="technology-card">
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        {technologyCategories[1].category} {/* Middleware */}
                                    </Typography>
                                    <div className="technology-list">
                                        {technologyCategories[1].items.map((item, idx) => (
                                            <motion.div key={idx} className="technology-item" whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                                                <div style={{ marginRight: '10px' }}>{item.icon}</div>
                                                <span>{item.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}> {/* Microsoft Card */}
                            <Card elevation={3} className="technology-card">
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        {technologyCategories[3].category} {/* Microsoft */}
                                    </Typography>
                                    <div className="technology-list">
                                        {technologyCategories[3].items.map((item, idx) => (
                                            <motion.div key={idx} className="technology-item" whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                                                <div style={{ marginRight: '10px' }}>{item.icon}</div>
                                                <span>{item.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}> {/* Coding Languages */}
                        {/* ... (rest of the cards - Database and Coding Languages) */}
                        <motion.div variants={itemVariants}>
                            <Card elevation={3} className="technology-card">
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        {technologyCategories[4].category}
                                    </Typography>
                                    <div className="technology-list">
                                        {technologyCategories[4].items.map((item, idx) => (
                                            <motion.div key={idx} className="technology-item" whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                                                <div style={{ marginRight: '10px' }}>{item.icon}</div>
                                                <span>{item.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}> {/* Database */}
                        <motion.div variants={itemVariants}>
                            <Card elevation={3} className="technology-card">
                                <CardContent>
                                    <Typography variant="h6" color="primary" gutterBottom>
                                        {technologyCategories[2].category}
                                    </Typography>
                                    <div className="technology-list">
                                        {technologyCategories[2].items.map((item, idx) => (
                                            <motion.div key={idx} className="technology-item" whileHover={{ scale: 1.1, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }} style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                                                <div style={{ marginRight: '10px' }}>{item.icon}</div>
                                                <span>{item.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                </Grid>
            </motion.div>
        </section>
    );
}

export default Technologies;