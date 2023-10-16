import React from "react";
import { Button, Checkbox, Stack, TextField } from "@mui/material";

const ThemeTemplate = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
        <>
            <h2> ThemeTemplate </h2>
            <hr />
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                spacing={2}
                paddingTop={2}
                paddingBottom={2}>
                <Button>Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
            </Stack>

            <hr></hr>
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                spacing={2}
                paddingTop={2}
                paddingBottom={2}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Stack>
            <hr></hr>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="flex-start"
                spacing={2}
                paddingTop={2}
                paddingBottom={2}>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked />
            </Stack>
        </>
    );
};

export default ThemeTemplate;
