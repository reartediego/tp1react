import React from "react";
import { Grid, Paper, Box, Stack } from "@mui/material";
const Todo = () => {
	return (
		<>
			<Grid container spacing={3}>
				<Grid item md={12} xs={12}>
					<Paper sx={{ p: 2 }}>
						<Box>Todo</Box>
					</Paper>
				</Grid>
			</Grid>
			<Box sx={{ width: "100%", textAlign: "center", marginTop: 5 }}>
				<Stack spacing={2} mt={2}>
					<Box>Mensaje A</Box>
					<Box>Otro Mensaje</Box>
				</Stack>
			</Box>
		</>
	);
};
export default Todo;
