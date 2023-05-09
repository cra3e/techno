import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import MaterialTechno from "./MaterialTechno";
import Output from "./Output";

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div hidden={value !== index}>
            {value === index && (
                <Typography component="div">{children}</Typography>
            )}
        </div>
    );
}

export default function TabsOne() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Tabs value={value} onChange={handleChange} centered={true}>
                <Tab label="ВВОД ДАННЫХ" />
                <Tab label="ВЫВОД ДАННЫХ" />
                <Tab label="КОПИРАЙТ" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <MaterialTechno/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Output/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                (c) Eugene Christiani 2023
            </TabPanel>
        </div>
    );
}