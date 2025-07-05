import { Insights, School, VideoLibrary } from '@mui/icons-material';
import { Box, Grid, Paper, Typography } from '@mui/material';

const features = [
  {
    title: 'Intelligent Recommendations',
    description: 'Get AI-powered video and topic suggestions based on your queries.',
    icon: <Insights fontSize="large" color="primary" />
  },
  {
    title: 'Interactive Dashboard',
    description: 'Track your progress and explore mapped DSA concepts easily.',
    icon: <VideoLibrary fontSize="large" color="primary" />
  },
  {
    title: 'Personalized Learning',
    description: 'Tailored resources by difficulty level to match your skill.',
    icon: <School fontSize="large" color="primary" />
  }
];

const Features = () => (
  <Box sx={{ py: 8, backgroundColor: '#f4f6f8' }}>
    <Typography variant="h4" align="center" gutterBottom>
      Why Use CPS Query Mapper?
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {features.map((f, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Paper
            sx={{
              p: 3,
              textAlign: 'center',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
              }
            }}
            elevation={3}
          >
            {f.icon}
            <Typography variant="h6" sx={{ mt: 2 }}>{f.title}</Typography>
            <Typography color="text.secondary">{f.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid> 
  </Box>
);

export default Features;