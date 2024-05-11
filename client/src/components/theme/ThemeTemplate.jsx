import React from "react";
import { Button, Checkbox, Paper, Stack, TextField, Tabs, Tab } from "@mui/material";

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
      <Paper style={{ background: "gray" }}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={2}
          paddingTop={2}
          paddingBottom={2}>
          <Checkbox {...label} defaultChecked color="primary" />
          <Checkbox {...label} defaultChecked color="secondary" />
          <Checkbox {...label} color="secondary" />
          <Checkbox {...label} disabled />
          <Checkbox {...label} disabled checked />
        </Stack>
      </Paper>
      <hr></hr>
      <Paper>
        <Tabs>
          <Tab value="one" label="Tab one" wrapped />
          <Tab value="two" label="Tab two" />
          <Tab value="three" label="Tab three" />
        </Tabs>
      </Paper>
    </>
  );
};

export default ThemeTemplate;
