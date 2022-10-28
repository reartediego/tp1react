/*
import React, {useEffect} from "react";
import {
Grid,
Paper,
Box
} from '@mui/material';
const Dashboard = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{p: 2}}>
                    <Box>
                        Dashboard
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};
export default Dashboard;
*/

import React from "react";
import { Grid, Paper, Box, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, CardActions, Checkbox, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
const Dashboard = () => {
	return (
		<Grid container spacing={3}>
			<Grid item md={12} xs={12}>
				<Paper sx={{ p: 2 }}>
					<Box>Dashboard</Box>

					<Box>

					</Box>
				</Paper>
			</Grid>
		</Grid>
	);
};
export default Dashboard;